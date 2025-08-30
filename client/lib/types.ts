export interface Player {
  name: string;
  position: string;
  country: string;
  age: number;
  rating: number;
  season: number;
  club: string;
  league: string;
  contractYears: number;
  salary: number;
  marketValue: number;
  attributes: Record<string, number>;
  career: CareerHistory[];
  isOnLoan: boolean;
  retireAt: number;
  favoriteClub: string;
  stats: PlayerStats;
  playedU21ThisSeason: boolean;
}

export interface CareerHistory {
  season: number;
  club: string;
  league: string;
  rating: number;
  salary: number;
  marketValue: number;
  attributes: Record<string, number>;
  stats: PlayerStats;
  trophies: string[];
}

export interface PlayerStats {
  goals: number;
  assists: number;
  cleanSheets?: number;
}

export interface Club {
  name: string;
  country: string;
  league: string;
  strength: number;
  budget: number;
  europeanComp: string;
}

export interface DrawResult {
  value: string;
  balls: Record<string, number>;
}

export interface GameState {
  player: Player | null;
  currentSeason: number;
  isDrawing: boolean;
  drawResults: DrawResult[];
  gamePhase: 'creation' | 'career' | 'retired';
}

export interface BallDrawConfig {
  balls: Record<string, number>;
  title: string;
  onComplete: (result: string) => void;
  isVisible: boolean;
}
