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
      GameManager.getGame(gid).randomlySelectPlayer();
      GameManager.getGame(gid).getPrompt();
    }

    GameManager.getGame(gid).sendStateToPlayers(io);
  },

  addResponse: (socket, req, io) => {
    const { gid, playerNumber, response } = req;
    const game = GameManager.getGame(gid);
    game.addResponse(playerNumber, response);

    game.didBothPlayerSubmitResponse();

    game.sendStateToPlayers(socket);
  },

  submitVote: (socket, req, io) => {
    const { gid, playerNumber } = req;
    const game = GameManager.getGame(gid);
    game.submitVote(playerNumber);
    if (game.didAllObserversVote()) {
      const results = game.determineRoundWinner();

      const gameState = game.getGameState();
      game.sendMessageToPlayers(socket, { results, gameState });
    }
  }
};
