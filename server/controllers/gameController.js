const GameManager = require('./controllers/lib/GameManagerModel');

module.exports = {
  createGame: socket => {
    const reqSocketId = socket.id;
    const newGid = GameManager.createGame();
    socket.to(reqSocketId).emit('CREATE', newGid);
  },

  joinGame: (socket, req) => {
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
      GameManager.getGame(gid).getPrompt();
    }

    GameManager.getGame(gid).sendStateToPlayers(socket);
  },

  addResponse: (socket, req) => {
    const { gid, playerNumber, response } = req;
    const game = GameManager.getGame(gid);
    game.addResponse(playerNumber, response);

    game.didBothPlayerSubmitResponse();

    game.sendStateToPlayers(socket);
  },

  submitVote: (socket, req) => {
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
