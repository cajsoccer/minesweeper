export interface MineSquareType {
  x: number;
  y: number;
  adjacentBombs: number;
  flipped: boolean;
  flagged: boolean;
  bomb: boolean;
  hovered: boolean;
}

export interface SnakeSquareType {
  x: number;
  y: number;
  bodyPos: number;
  head: boolean;
  fruit: boolean;
}

export enum Direction {
  Left,
  Up,
  Right,
  Down,
}

export interface ScoreListItem {
  user: string;
  score: number;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface RegisterValues {
  email: string;
  password1: string;
  password2: string;
}
