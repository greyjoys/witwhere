const { UserModel } = require('./UserModel');
const prompts = require('./prompts/prompts.js');

class GameSession {
  constructor(config) {
    this.gid = config.gid;
    this.users = {};
    this.player1response = {};
    this.player2response = {};
    this.player1username = '';
    this.player2username = '';
    this.prompt = '';
    this.overallGameState = 0; // 0 for waiting, 1 for active, 2 for end
    this.maxPlayers = config.maxPlayers;
    this.maxPoints = config.maxPoints;
    this.roundState = undefined; // 1 when not active, 2 for waiting for p1 and p2 responses, 3 for voting
    this.prompts = [...prompts];
    this.winner = undefined;
  }

  sendStateToPlayers(io) {
    this.sendMessageToPlayers(io, this.getGameState());
  }

  sendMessageToPlayers(io, message) {
    Object.values(this.users).forEach(user => {
      io.to(user.socket).emit('newState', JSON.stringify(message));
    });
  }

  addUser(username, socket) {
    this.users[username] = new UserModel(username, socket);
  }

  canStartGame() {
    // this will fail
    if (Object.keys(this.users).length >= this.maxPlayers) {
      this.overallGameState = 1;
      this.roundState = 1;
      return true;
    }
    return false;
  }

  randomlySelectPlayers() {
    let player1 = Object.keys(this.users)[
      Math.floor(Math.random() * Object.keys(this.users).length)
    ];

    let player2 = Object.keys(this.users)[
      Math.floor(Math.random() * Object.keys(this.users).length)
    ];

    while (player2 === player1) {
      player2 = Object.keys(this.users)[
        Math.floor(Math.random() * Object.keys(this.users).length)
      ];
    }

    this.player1username = player1;
    this.player2username = player2;
  }

  getPrompt() {
    this.roundState = 2;
    // writing a test helped me figure out [0] needed to be added in order
    // for the typeof to be string, not object. typescript would have caught this.
    this.prompt = this.prompts.splice(
      Math.random() * this.prompts.length,
      1
    )[0];
    return this.prompt;
  }

  addResponse(playerNumber, response) {
    if (playerNumber === 1) {
      this.player1response.response = response;
      this.player1response.votes = 0;
    } else {
      this.player2response.response = response;
      this.player2response.votes = 0;
    }
  }

  didBothPlayersSubmitResponses() {
    if (this.player1response.response && this.player2response.response) {
      this.roundState = 3;
      return true;
    }
    return false;
  }

  addVote(player) {
    if (player === '1') {
      this.player1response.votes += 1;
    } else {
      this.player2response.votes += 1;
    }
    console.log(
      'votes after incrementing',
      this.player1response.votes,
      this.player2response.votes
    );
  }

  didAllObserversVote() {
    if (
      this.player1response.votes + this.player2response.votes ===
      Object.keys(this.users).length - 2
    ) {
      return true;
    }
    return false;
  }

  determineRoundWinner() {
    this.roundState = 2;
    if (this.player1response.votes > this.player2response.votes) {
      this.users[this.player1username].score += 1;
    } else {
      this.users[this.player2username].score += 1;
    }
    return {
      player1response: this.player1response,
      player2response: this.player2response
    };
  }
  didSomeoneWinTheGame() {
    for (const [k, u] in Object.entries(this.users)) {
      if (u.scores >= this.maxPoints) {
        this.overallGameState = 2;
        this.winner = k;
        return true;
      }
    }
    return false;
  }

  getGameState() {
    return {
      gid: this.gid,
      users: this.users,
      player1response: this.player1response,
      player2response: this.player2response,
      player1username: this.player1username,
      player2username: this.player2username,
      prompt: this.prompt,
      overallGameState: this.overallGameState,
      maxPlayers: this.maxPlayers,
      maxPoints: this.maxPoints,
      roundState: this.roundState
    };
  }
}

module.exports = { GameSession };
