interface GameManager {
  activeGames: { [key: number]: GameSession };
  gameIdIncrementer: number;
  createGame: () => GameSession;
  endGame: (gid) => void; // delete a game
  getGame: (number) => GameSession;
}

interface createGameConfig {
  gid: number;
  maxPoints: number;
  maxPlayers: number;
}

enum overallGameState {
  waiting = 0,
  active,
  end
}

enum roundState {
  not_active = 1,
  waiting_for_responses,
  voting
}

interface GameSession {
  gid: number;
  users: { [key: string]: IUsers };
  player1response: { response: ''; votes: number };
  player2response: { response: ''; votes: number };
  player1username: string;
  player2username: string;
  prompt: string;
  overallGameState: overallGameState;
  maxPlayers: number;
  maxPoints: number; // default 5
  roundState: roundState;
  prompts: string[];
  // functions
  addUser: (string) => void;
  canStartGame: () => boolean;
  getPrompt: () => string;
  addResponse: (username: string, response: string) => void;
  didBothPlayerSubmitResponses: () => boolean;
  submitVote: (player: number) => void;
  didAllObserversVote: () => boolean;
  determineRoundWinner: () => string | boolean;
  didSomeoneWin: () => string | boolean;
  getGameState: () => { [key: string]: any };
}

interface IUsers {
  username: string;
  score: number;
}

enum socketMessages {
  ADD_USER,
  ADD_RESPONSE,
  SUBMIT_VOTE
}

interface ADD_USER_MSG_STRUCT {
  gid: number;
  username: string;
}

interface ADD_RESPONSE_MSG_STRUCT {
  gid: number;
  username: string;
  response: string;
}

interface SUBMIT_VOTE_MSG_STRUCT {
  gid: number;
  player: number;
}
