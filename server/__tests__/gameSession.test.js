const gameManager = require('../controllers/lib/GameManagerModel.js');
const { GameSession } = require('../controllers/lib/SessionModel.js');
const { UserModel } = require('../controllers/lib/UserModel');
const prompts = require('../controllers/lib/prompts/prompts.js');

describe('game session unit tests', () => {
  const game_id = gameManager.createGame();
  const gameInstance = gameManager.getGame(game_id);

  const config = {
    gid: game_id,
    maxPoints: 10,
    maxPlayers: 5
  };

  it('should initialize with proper state', () => {
    expect(gameInstance.getGameState()).toEqual({
      gid: config.gid,
      users: {},
      player1response: {},
      player2response: {},
      player1username: '',
      player2username: '',
      prompt: '',
      overallGameState: 0,
      maxPlayers: config.maxPlayers,
      maxPoints: config.maxPoints,
      roundState: undefined
      // prompts: [...prompts]
    });
  });

  it('should add a user', () => {
    gameInstance.addUser('username1');
    expect(gameInstance.users['username1'] instanceof UserModel).toBe(true);
    gameInstance.addUser('username2');
    expect(Object.keys(gameInstance.users).length).toBe(2);
  });

  it('should not be able to start game because number of users is not satisfied', () => {
    expect(gameInstance.canStartGame()).toBe(false);
  });

  it('should be able to start game after the amount of users is satisfied', () => {
    gameInstance.addUser('username3');
    gameInstance.addUser('username4');
    gameInstance.addUser('username5');
    expect(Object.keys(gameInstance.users).length).toBe(5);
    expect(gameInstance.canStartGame()).toBe(true);
  });

  it('should be in a overallGameState and roundState of 1', () => {
    expect(gameInstance.overallGameState).toBe(1);
    expect(gameInstance.roundState).toBe(1);
  });

  it('should get a prompt', () => {
    const before = gameInstance.prompts.length;
    const prompt = gameInstance.getPrompt();
    const after = gameInstance.prompts.length;
    expect(typeof prompt).toBe('string');
    expect(after).toBe(before - 1);
    expect(gameInstance.roundState).toBe(2);
  });
});
