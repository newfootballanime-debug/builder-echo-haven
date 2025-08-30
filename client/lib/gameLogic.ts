import { 
  POSITIONS, POS_ABB, FIFA_ATTRIBUTES, LEAGUES, CLUBS, 
  FIRST_NAMES, LAST_NAMES, NATIONALITIES, EUROPEAN_COMP, NATIONAL_COMP 
} from './gameData';
import { Player, Club, PlayerStats, CareerHistory } from './types';

// Utility functions for random selection
export function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function weightedChoice<T>(items: T[], weights: number[]): T {
  const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
  let random = Math.random() * totalWeight;
  
  for (let i = 0; i < items.length; i++) {
    random -= weights[i];
    if (random <= 0) {
      return items[i];
    }
  }
  
  return items[items.length - 1];
}

// Player name generation
export function generateRandomName(nationality?: string): string {
  const first = randomChoice(FIRST_NAMES);
  const last = randomChoice(LAST_NAMES);
  const nat = nationality || randomChoice(NATIONALITIES);
  return `${first} ${last} (${nat})`;
}

// Initial player attributes based on position and rating
export function generateInitialAttributes(position: string, rating: number): Record<string, number> {
  const attributes: Record<string, number> = {};
  
  // Position-specific attribute bonuses
  const positionBonuses: Record<string, string[]> = {
    "Portar": ["Diving", "Reflexes", "Handling", "Positioning", "Kicking", "Speed"],
    "Fundaș Dreapta": ['Pace', 'Passing', 'Dribbling', 'Defending', 'Physical'],
    "Fundaș Central": ['Defending', 'Physical', 'Passing', 'Pace'],
    "Fundaș Stânga": ['Pace', 'Passing', 'Dribbling', 'Defending', 'Physical'],
    "Mijlocaș Defensiv": ['Passing', 'Defending', 'Physical'],
    "Mijlocaș Central": ['Passing', 'Dribbling', 'Defending', 'Physical'],
    "Mijlocaș Ofensiv": ['Passing', 'Dribbling', 'Shooting', 'Pace'],
    "Mijlocaș Dreapta": ['Pace', 'Passing', 'Dribbling', 'Shooting'],
    "Mijlocaș Stânga": ['Pace', 'Passing', 'Dribbling', 'Shooting'],
    "Atacant Dreapta": ['Pace', 'Dribbling', 'Shooting', 'Physical'],
    "Atacant Central": ['Shooting', 'Pace', 'Dribbling', 'Physical'],
    "Atacant Stânga": ['Pace', 'Dribbling', 'Shooting', 'Physical'],
  };

  const relevantAttributes = positionBonuses[position] || FIFA_ATTRIBUTES;
  
  for (const attr of FIFA_ATTRIBUTES) {
    const bonus = relevantAttributes.includes(attr) ? 3 : 0;
    const baseValue = Math.max(40, Math.min(99, randomInt(rating - 12, rating + 6) + bonus));
    attributes[attr] = baseValue;
  }

  return attributes;
}

// Get league by position (0 = top league, 1 = second league, etc.)
export function getLeague(position: number, country: string): string {
  const leagues = LEAGUES[country] || [
    { name: 'Top League', size: 10, budget: 50000000 },
    { name: 'Lower League', size: 10, budget: 10000000 }
  ];
  const index = Math.min(Math.max(position, 0), leagues.length - 1);
  return leagues[index].name;
}

// Get clubs for a specific league
export function getLeagueClubs(country: string, league: string): Club[] {
  const clubs = CLUBS[country] || [];
  return clubs
    .filter(club => club.league === league)
    .map(club => ({
      name: club.club,
      country,
      league: club.league,
      strength: club.strength,
      budget: club.budget,
      europeanComp: ''
    }));
}

// Salary calculation
export function calculateSalary(player: Player, club: Club): number {
  const base = (player.rating ** 1.3) * 65 + club.strength * 120;
  let salary = base;
  
  if (club.strength >= 80) {
    salary *= player.rating >= 88 ? 1.6 : 1.2;
  }
  
  if (salary > 700000) {
    salary = randomInt(Math.floor(salary * 0.8), Math.floor(salary * 1.13));
  } else {
    salary += randomInt(-2000, 12000);
  }
  
  return Math.max(63000, Math.floor(salary));
}

// Market value calculation
export function calculateMarketValue(player: Player, club: Club, stats: PlayerStats): number {
  const ageFactor = Math.max(0.5, 1 - (player.age - 25) * 0.05);
  const statsBonus = (stats.goals + stats.assists) * 100000;
  
  let value = (player.rating ** 2) * 10000 + club.strength * 50000 + 1000000 + statsBonus;
  value *= ageFactor * (player.rating > 90 ? 1.5 : player.rating > 80 ? 1.2 : 1);
  
  return Math.min(200000000, Math.max(1000000, Math.floor(value)));
}

// Check if player is in first 11
export function isInFirstEleven(player: Player, club: Club): boolean {
  // Simplified: if player rating is good enough for the club
  const threshold = Math.max(67, club.strength - 6);
  return player.rating + randomInt(-4, 3) >= threshold;
}

// Generate season stats
export function generateSeasonStats(
  player: Player, 
  club: Club, 
  isStarter: boolean, 
  evolution: number
): PlayerStats {
  const stats: PlayerStats = { goals: 0, assists: 0 };
  
  const baseMatches = isStarter ? 35 : 18;
  const ratingFactor = player.rating / 100;
  const teamFactor = club.strength / 100;
  const evolutionBonus = (evolution / 10) * 2.0;
  
  const positionType = player.position;
  
  if (positionType.includes("Atacant")) {
    stats.goals = Math.floor(baseMatches * ratingFactor * teamFactor * Math.random() * 0.5 * evolutionBonus);
    stats.assists = Math.floor(stats.goals * (0.4 + Math.random() * 0.2));
  } else if (positionType.includes("Mijlocaș")) {
    stats.goals = Math.floor(baseMatches * ratingFactor * teamFactor * (0.3 + Math.random() * 0.3) * evolutionBonus);
    stats.assists = Math.floor(stats.goals * (0.7 + Math.random() * 0.3));
  } else if (positionType.includes("Fundaș")) {
    stats.goals = Math.floor(baseMatches * ratingFactor * teamFactor * (0.1 + Math.random() * 0.1) * evolutionBonus);
    stats.assists = Math.floor(stats.goals * (0.5 + Math.random() * 0.2));
  } else if (player.position === "Portar") {
    stats.cleanSheets = Math.floor(baseMatches * ratingFactor * teamFactor * (0.5 + Math.random() * 0.3) * evolutionBonus);
  }

  // Bonus for high-rated players
  if (player.rating > 85) {
    stats.goals += randomInt(8, 18);
    stats.assists += randomInt(5, 12);
  }
  
  if (player.rating > 90 && evolution >= 9) {
    stats.goals += randomInt(8, 15);
    stats.assists += randomInt(5, 10);
  }

  return stats;
}

// Draft club for player
export function draftClub(
  country: string, 
  rating: number, 
  league: string, 
  excludeClub?: string,
  favoriteClub?: string
): Club | null {
  const clubs = getLeagueClubs(country, league);
  let availableClubs = clubs.filter(c => c.name !== excludeClub);
  
  if (!availableClubs.length) return null;
  
  // Check for favorite club
  if (favoriteClub && Math.random() < 0.5) {
    const favorite = availableClubs.find(c => c.name === favoriteClub);
    if (favorite && rating >= favorite.strength - 5) {
      return favorite;
    }
  }
  
  // Weight clubs by how well they match the player's rating
  const weights = availableClubs.map(club => {
    const delta = Math.max(0, Math.min(20, Math.abs(club.strength - rating)));
    return Math.max(1, 26 - delta);
  });
  
  return weightedChoice(availableClubs, weights);
}

// Create initial player
export function createPlayer(
  name: string,
  position: string,
  country: string,
  age: number,
  rating: number,
  favoriteClub: string
): Player {
  return {
    name,
    position,
    country,
    age,
    rating,
    season: 1,
    club: '',
    league: '',
    contractYears: 2,
    salary: 1000,
    marketValue: 500000,
    attributes: generateInitialAttributes(position, rating),
    career: [],
    isOnLoan: false,
    retireAt: randomInt(35, 40),
    favoriteClub,
    stats: { goals: 0, assists: 0 },
    playedU21ThisSeason: false
  };
}

// Simulate cup competition
export function simulateCup(club: Club, country: string): { phase: string, details: string[] } {
  const phases = ["16-imi", "Optimi", "Sferturi", "Semifinale", "Finală", "Câștigător"];
  const details: string[] = [];
  let currentPhase = 0;
  
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const successProbability = Math.max(1, 8 - i * 2 + (club.strength - 70) / 10);
    const totalProbability = 12;
    
    if (Math.random() * totalProbability < successProbability) {
      const score = `${randomInt(0, 4)}-${randomInt(0, 4)}`;
      details.push(`${phase}: Victorie (${score})`);
      currentPhase = i;
    } else {
      const score = `${randomInt(0, 4)}-${randomInt(0, 4)}`;
      details.push(`${phase}: Eliminat (${score})`);
      break;
    }
  }
  
  return { phase: phases[currentPhase], details };
}

// Simulate European competition
export function simulateEuropean(club: Club, competition: string): { phase: string, details: string[], prize: number } {
  const phases = ["Preliminarii", "Grupă", "Optimi", "Sferturi", "Semifinale", "Finală", "Câștigător"];
  const details: string[] = [];
  let currentPhase = 0;
  let prize = 0;
  
  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const successProbability = Math.max(1, 6 - i + (club.strength - 70) / 8);
    const totalProbability = 10;
    
    if (Math.random() * totalProbability < successProbability) {
      const score = `${randomInt(0, 4)}-${randomInt(0, 4)}`;
      details.push(`${phase}: Victorie (${score})`);
      currentPhase = i;
      prize += 5000000; // Progress prize
    } else {
      const score = `${randomInt(0, 4)}-${randomInt(0, 4)}`;
      details.push(`${phase}: Eliminat (${score})`);
      break;
    }
  }
  
  if (phases[currentPhase] === "Câștigător") {
    prize += 25000000; // Win bonus
  }
  
  return { phase: phases[currentPhase], details, prize };
}

// Format currency
export function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `€${(amount / 1000000).toFixed(1)}M`;
  } else if (amount >= 1000) {
    return `€${(amount / 1000).toFixed(0)}K`;
  }
  return `€${amount}`;
}

// Format large numbers
export function formatNumber(num: number): string {
  return num.toLocaleString();
}
