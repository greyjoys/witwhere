const gameManager = require('../controllers/lib/GameManagerModel.js');
const { GameSession } = require('../controllers/lib/SessionModel.js');
const { UserModel } = require('../controllers/lib/UserModel');
const prompts = require('../controllers/lib/prompts/prompts.js');

describe('game manager unit tests', () => {
  let game_id;

  it('should create a game', () => {
    game_id = gameManager.createGame();
    expect(typeof game_id).toEqual('number');
    expect(Object.keys(gameManager.activeGames).length).toBe(1);
  });
  it('should get a game', () => {
    const game_instance = gameManager.getGame(game_id);
    expect(game_instance instanceof GameSession).toBe(true);
  });
  it('should delete a game', () => {
    gameManager.endGame(game_id);
    expect(Object.keys(gameManager.activeGames).length).toBe(0);
  });
});
