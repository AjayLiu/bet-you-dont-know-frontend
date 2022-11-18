import dayjs from "dayjs";

export interface User {
  username: string;
  displayName: string;
  socketID: string;
  lobbyID: string;
  usernameConflictIndex: number;
  hasSetName: boolean;
  isReady: boolean;
  isLeader: boolean;
  isSpectator: boolean;
  money: number;
  bet: number;
  guessIndex: number;
  wantsToSkip: boolean;
  amKicked: boolean;
}

export interface ChatMessage {
  isServer?: boolean;
  user?: User;
  message: JSX.Element;
  timestamp: dayjs.Dayjs;
}

export interface Lobby {
  name: string;
  id: string;
  users: Array<User>;
  players: Array<User>; // players are any user that isnt a spectator
  chatMessages: Array<ChatMessage>;
  isPublic: boolean;
  isInGame: boolean;
  game: Game;
}

export type GameStage =
  | "Countdown"
  | "Answering"
  | "Betting"
  | "Reveal"
  | "GameOver";
export interface Game {
  timeLeft: number;
  fullTimeDuration: number;
  currentQuestion: TriviaQuestion;
  currentAnswerer: User;
  gameStage: GameStage;
  roundsCompleted: number;
  totalRoundsUntilGameover: number;
  revealResults: Array<RevealResult>;
}

export interface RevealResult {
  who: User;
  netGain: number;
}

export interface TriviaQuestion {
  question: string;
  wrongChoices: Array<string>;
  answer: string;
  allChoicesRandomized: Array<string>;
  correctAnswerIndex: number;
}
