const { GameSession } = require('./SessionModel');
const { defaultGameConfig } = require('./config');

class GameManager {
  constructor() {
    this.activeGames = {};
    this.gameIdIncrementer = 0;
  }

  createGame() {
    const gid = this.gameIdIncrementer;
    defaultGameConfig.gid = gid;
    const newGameSession = new GameSession(defaultGameConfig);
    this.activeGames[gid] = newGameSession;
    this.gameIdIncrementer += 1;
  }

  endGame(gid) {
    delete this.activeGames[gid];
  }

  getGame(gid) {
    return this.activeGames[gid];
  }
}

module.exports = GameManager();
