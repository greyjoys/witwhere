interface GameManager {
  activeGames: GameSession[];
  createGame: () => GameSession;
  endGame: () => void; // delete a game
  getGame: (number) => GameSession;
}

enum sessionState {
  waiting,
  active,
  end
}

interface GameSession {
  users: IUsers[];
  player1response: string;
  player2response: string;
  player1username: string;
  player2username: string;
  prompt: string;
  state: sessionState;
  maxPoints: number; // default 5
  // functions
}

interface IUsers {
  username: string;
  score: number;
}
