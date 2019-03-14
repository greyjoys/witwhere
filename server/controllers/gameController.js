const GameManager = require('./lib/GameManagerModel');
const { io } = require('../index');
module.exports = {
  createGame: socket => {
    // const reqSocketId = socket.id;
    const newGid = GameManager.createGame();
    console.log('Created new game with game id of: ', newGid);
    socket.emit('CREATE_RES', newGid);
  },

  joinGame: (socket, req, io) => {
    const reqSocketId = socket.id;
    // verify that gid is correct
    const { gid, username } = req;

    const game = GameManager.getGame(gid);
    if (!game) {
      socket.to(reqSocketId).emit('JOIN', false);
    } else {
      game.addUser(username, reqSocketId);
    }
    // run a check if the game can start
    if (GameManager.getGame(gid).canStartGame()) {
      GameManager.getGame(gid).randomlySelectPlayers();
      GameManager.getGame(gid).getPrompt();
    }

    GameManager.getGame(gid).sendStateToPlayers(io);
  },

  addResponse: (socket, req, io) => {
    const { gid, playerNumber, response } = JSON.parse(req);
    const game = GameManager.getGame(gid);
    game.addResponse(playerNumber, response);

    game.didBothPlayersSubmitResponses();

    game.sendStateToPlayers(io);
  },

  submitVote: (socket, req, io) => {
    console.log('inside submit vote inside game controller');
    const { gid, player } = req;
    const game = GameManager.getGame(gid);
    game.addVote(player);
    if (game.didAllObserversVote()) {
      console.log('all observers voted');
      const results = game.determineRoundWinner();

      // const gameState = game.getGameState();
      // game.sendMessageToPlayers(socket, { results, gameState });
      game.sendStateToPlayers(io);
    }
  }
};
