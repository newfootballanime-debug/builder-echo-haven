import { 
  POSITIONS, POS_ABB, FIFA_ATTRIBUTES, LEAGUES, CLUBS, 
  FIRST_NAMES, LAST_NAMES, NATIONALITIES, EUROPEAN_COMP, NATIONAL_COMP 
} from './gameData';
import { Player, Club, PlayerStats, CareerHistory } from './types';

// Utility functions for random selection
export function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Position helpers to handle both EN and RO labels
function getPositionCategory(position: string): 'GK' | 'DEF' | 'MID' | 'ATT' {
  const p = position.toLowerCase();
  if (/(gk|goalkeeper|portar)/.test(p)) return 'GK';
  if (/(cb|rb|lb|back|defender|fundas|fundaș)/.test(p)) return 'DEF';
  if (/(mid|mijloc|cdm|cm|cam|rm|lm)/.test(p)) return 'MID';
  if (/(st|striker|winger|rw|lw|atacant|forward)/.test(p)) return 'ATT';
  // Fallback: infer by common names
  if (p.includes('wing') || p.includes('striker') || p.includes('atac')) return 'ATT';
  if (p.includes('mid')) return 'MID';
  if (p.includes('back') || p.includes('def')) return 'DEF';
  return 'MID';
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

// More realistic name generation by country
export function generatePlayerName(country?: string): string {
  const dict: Record<string, { first: string[]; last: string[] }> = {
    Romania: {
      first: ["Andrei","Mihai","Alexandru","Vlad","Florin","Radu","Ștefan","Cosmin","Ionuț","Gabriel"],
      last: ["Popescu","Ionescu","Stan","Dumitrescu","Petrescu","Stoica","Diaconescu","Ilie","Enache","Nistor"],
    },
    England: {
      first: ["Harry","Jack","Oliver","George","James","William","Charlie","Jacob","Thomas","Alfie"],
      last: ["Smith","Brown","Taylor","Wilson","Johnson","Jackson","White","Harris","Martin","Thompson"],
    },
    Spain: {
      first: ["Sergio","Carlos","Juan","Miguel","Pedro","Rafael","Javier","Andrés","Ángel","Fernando"],
      last: ["García","Martínez","Rodríguez","Hernández","López","González","Sánchez","Ramírez","Cruz","Torres"],
    },
    Italy: {
      first: ["Marco","Lorenzo","Matteo","Francesco","Giuseppe","Alessandro","Davide","Federico","Simone","Antonio"],
      last: ["Rossi","Bianchi","Romano","Greco","Esposito","Conti","Ferrari","Colombo","Ricci","Galli"],
    },
    Germany: {
      first: ["Thomas","Michael","Lars","Jens","Sebastian","Andreas","Tobias","Florian","Patrick","Daniel"],
      last: ["Schmidt","Müller","Weber","Wagner","Becker","Hoffmann","Richter","Klein","Wolf","Neumann"],
    },
    France: {
      first: ["Kylian","Antoine","Hugo","Louis","Théo","Maxime","Alexandre","Nicolas","Julien","Romain"],
      last: ["Mbappé","Giroud","Dupont","Martin","Bernard","Petit","Robert","Durand","Leroy","Moreau"],
    },
    Netherlands: {
      first: ["Daan","Sem","Luuk","Jens","Thijs","Timo","Finn","Milan","Bram","Lars"],
      last: ["De Jong","Van Dijk","Van der Berg","De Vries","Janssen","Bakker","Visser","Smit","De Boer","Van der Meer"],
    },
    Portugal: {
      first: ["Diogo","Bernardo","Gonçalo","João","André","Rui","Ricardo","Tiago","Miguel","Nuno"],
      last: ["Silva","Santos","Ferreira","Oliveira","Pereira","Costa","Carvalho","Sousa","Rodrigues","Barbosa"],
    },
    Turkey: {
      first: ["Hakan","Cenk","Burak","Emre","Yusuf","Kerem","Orkun","Cengiz","Enes","Ozan"],
      last: ["Yılmaz","Şahin","Demiral","Tosun","Aktürkoğlu","Ünder","Yazıcı","Kabak","Ayhan","Çelik"],
    },
    Scotland: {
      first: ["Liam","Callum","Finlay","Euan","Harris","Archie","Rory","Connor","Calum","Fraser"],
      last: ["McDonald","McGregor","Campbell","Murray","Stewart","Robertson","Graham","Allan","Clark","Henderson"],
    },
  };
  const cfg = country && dict[country] ? dict[country] : null;
  if (cfg) {
    return `${randomChoice(cfg.first)} ${randomChoice(cfg.last)}`;
  }
  // Fallback generic
  return `${randomChoice(FIRST_NAMES)} ${randomChoice(LAST_NAMES)}`;
}

// Initial player attributes based on position and rating
export function generateInitialAttributes(position: string, rating: number): Record<string, number> {
  const attributes: Record<string, number> = {};

  const cat = getPositionCategory(position);
  let relevantAttributes: string[];
  if (cat === 'GK') {
    relevantAttributes = ["Diving", "Reflexes", "Handling", "Positioning", "Kicking", "Speed"];
  } else if (cat === 'DEF') {
    relevantAttributes = ['Defending', 'Physical', 'Passing', 'Pace'];
  } else if (cat === 'MID') {
    relevantAttributes = ['Passing', 'Dribbling', 'Physical', 'Pace'];
  } else {
    // ATT
    relevantAttributes = ['Shooting', 'Pace', 'Dribbling', 'Physical'];
  }

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
  // Yearly salary approximation (in €), rebalanced to Transfermarkt-like scales
  // Example: 60 -> ~150–350k, 70 -> ~300–900k, 80 -> ~1–4.5M, 90 -> up to ~12–15M
  const base = Math.max(0, player.rating - 40) ** 2 * 400; // halved vs before
  const clubFactor = 0.6 + (club.strength / 100) * 0.8; // 0.6..1.4
  const ageFactor = player.age < 22 ? 0.9 : player.age <= 28 ? 1 : 0.95;
  let salary = base * clubFactor * ageFactor;
  salary = randomInt(Math.floor(salary * 0.9), Math.floor(salary * 1.1));
  return Math.min(15000000, Math.max(80000, Math.floor(salary)));
}

// Market value calculation
export function calculateMarketValue(player: Player, club: Club, stats: PlayerStats): number {
  // Transfermarkt-like scale (rebalanced):
  // rating 60 -> ~1–3M, 70 -> ~3–7M, 80 -> ~20–60M, 90 -> 80–180M
  const perf = (stats.goals + (stats.assists || 0) * 0.8);
  const perfBonus = perf * 350000; // modest influence
  const base = Math.max(0, player.rating - 50);
  let value = base ** 3 * 300 + 1000000; // softer curve
  const clubFactor = 0.7 + (club.strength / 100) * 0.7; // 0.7..1.4
  const ageFactor = player.age < 22 ? 1.25 : player.age <= 28 ? 1 : 0.85;
  value = (value * clubFactor * ageFactor) + perfBonus;
  if (player.rating >= 88 && club.strength >= 85) value *= 1.6; // elite premium
  return Math.min(200000000, Math.max(700000, Math.floor(value)));
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

  const cat = getPositionCategory(player.position);

  if (cat === 'ATT') {
    stats.goals = Math.floor(baseMatches * ratingFactor * teamFactor * (0.5 + Math.random() * 0.35) * evolutionBonus);
    stats.assists = Math.floor(baseMatches * 0.15 * ratingFactor * (0.8 + Math.random() * 0.6));
  } else if (cat === 'MID') {
    stats.goals = Math.floor(baseMatches * ratingFactor * teamFactor * (0.15 + Math.random() * 0.25) * evolutionBonus);
    stats.assists = Math.floor(baseMatches * 0.25 * ratingFactor * (0.8 + Math.random() * 0.6));
  } else if (cat === 'DEF') {
    stats.goals = Math.floor(baseMatches * ratingFactor * teamFactor * (0.04 + Math.random() * 0.09) * evolutionBonus);
    stats.assists = Math.floor(baseMatches * 0.06 * ratingFactor * (0.7 + Math.random() * 0.5));
  } else {
    // GK
    stats.cleanSheets = Math.floor(baseMatches * ratingFactor * teamFactor * (0.4 + Math.random() * 0.35) * evolutionBonus);
  }

  // Bonus for high-rated players
  if (player.rating > 85 && cat !== 'GK') {
    stats.goals += randomInt(5, 12);
    stats.assists += randomInt(4, 10);
  }

  if (player.rating > 90 && evolution >= 9 && cat === 'ATT') {
    stats.goals += randomInt(6, 12);
    stats.assists += randomInt(4, 8);
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
    const base = competition === 'Champions League' ? 6 : competition === 'Europa League' ? 5 : 4;
    const successProbability = Math.max(1, base - i + (club.strength - 70) / 8);
    const totalProbability = 10;

    if (Math.random() * totalProbability < successProbability) {
      const score = `${randomInt(0, 4)}-${randomInt(0, 4)}`;
      details.push(`${phase}: Victorie (${score})`);
      currentPhase = i;
      prize += competition === 'Champions League' ? 7000000 : competition === 'Europa League' ? 3500000 : 1500000;
    } else {
      const score = `${randomInt(0, 4)}-${randomInt(0, 4)}`;
      details.push(`${phase}: Eliminat (${score})`);
      break;
    }
  }

  if (phases[currentPhase] === "Câștigător") {
    prize += competition === 'Champions League' ? 35000000 : competition === 'Europa League' ? 15000000 : 7000000;
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

// Standings simulation utilities
export function simulateLeagueStandings(country: string, league: string): Club[] {
  const clubs = getLeagueClubs(country, league);
  const scored = clubs.map(c => ({
    club: c,
    score: c.strength * (0.95 + Math.random() * 0.15) + randomInt(-3, 6)
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.map(s => s.club);
}

export function getAllCountries(): string[] {
  return Object.keys(LEAGUES);
}

export function getLeagueIndex(country: string, league: string): number {
  const list = LEAGUES[country] || [];
  return list.findIndex(l => l.name === league);
}

export function getClubByName(country: string, name: string): Club | null {
  const clubs = CLUBS[country] || [];
  const found = clubs.find(c => c.club === name);
  return found ? { name: found.club, country, league: found.league, strength: found.strength, budget: found.budget, europeanComp: '' } : null;
}

export function getPromotionRelegationCounts(totalTeams: number): { promote: number; relegate: number } {
  if (totalTeams >= 20) return { promote: 3, relegate: 3 };
  if (totalTeams >= 18) return { promote: 3, relegate: 3 };
  if (totalTeams >= 16) return { promote: 2, relegate: 2 };
  return { promote: 1, relegate: 1 };
}

export function gaussianWeight(distance: number, sigma: number): number {
  const w = Math.exp(- (distance * distance) / (2 * sigma * sigma));
  // Scale to integer weights 1..100
  return Math.max(1, Math.round(100 * w));
}

// --- UEFA coefficients (simplified) ---
export const COUNTRY_COEFFICIENTS: Record<string, number> = (() => {
  const base: Record<string, number> = {};
  [
    ['England', 100], ['Spain', 98], ['Germany', 95], ['Italy', 93], ['France', 85],
    ['Netherlands', 78], ['Portugal', 76], ['Belgium', 62], ['Scotland', 58], ['Turkey', 52],
    ['Austria', 50], ['Switzerland', 48], ['Czech Republic', 46], ['Greece', 45], ['Denmark', 44],
    ['Croatia', 43], ['Poland', 42], ['Romania', 40], ['Norway', 38], ['Sweden', 37]
  ].forEach(([c, v]) => (base[c as string] = v as number));
  return base;
})();

export function getCountryRank(country: string): number {
  const sorted = Object.entries(COUNTRY_COEFFICIENTS).sort((a, b) => b[1] - a[1]).map(([c]) => c);
  const idx = sorted.indexOf(country);
  return idx === -1 ? sorted.length : idx + 1;
}

export function getEuropeanSlots(country: string): { ucl: number; uel: number; uecl: number } {
  const rank = getCountryRank(country);
  if (rank <= 4) return { ucl: 4, uel: 2, uecl: 1 };
  if (rank <= 6) return { ucl: 3, uel: 2, uecl: 1 };
  if (rank <= 15) return { ucl: 2, uel: 1, uecl: 2 };
  return { ucl: 1, uel: 0, uecl: 2 };
}

function findClubCountry(name: string): string | null {
  for (const country of Object.keys(CLUBS)) {
    for (const c of CLUBS[country] || []) {
      if (c.club === name || c.club === name) return country;
    }
  }
  return null;
}

export function registerEuropeanWinners(winners: Record<string, string>) {
  const weights: Record<string, number> = {
    'Champions League': 10,
    'Europa League': 7,
    'Conference League': 5,
  };
  for (const [comp, clubName] of Object.entries(winners)) {
    if (!(comp in weights)) continue;
    const country = findClubCountry(clubName);
    if (country) COUNTRY_COEFFICIENTS[country] = (COUNTRY_COEFFICIENTS[country] || 35) + weights[comp];
  }
}

export function simulateGlobalWinners(): Record<string, string> {
  const winners: Record<string, string> = {};
  const topClubs: Club[] = [];
  for (const country of getAllCountries()) {
    const topLeague = getLeague(0, country);
    const clubs = getLeagueClubs(country, topLeague);
    if (clubs.length) topClubs.push(clubs.reduce((a, b) => (b.strength > a.strength ? b : a)));
  }
  if (topClubs.length) {
    const best = topClubs.reduce((a, b) => (b.strength > a.strength ? b : a));
    winners['Champions League'] = best.name;
    const rest = topClubs.filter(c => c.name !== best.name);
    if (rest.length) winners['Europa League'] = rest[Math.floor(Math.random() * rest.length)].name;
    if (rest.length) winners['Conference League'] = rest[Math.floor(Math.random() * rest.length)].name;
  }
  registerEuropeanWinners(winners);
  return winners;
}

export function generateLeagueTopXI(country: string, league: string): { position: string, club: string }[] {
  const order = ['GK','RB','CB','CB','LB','CDM','CM','CAM','RW','LW','ST'];
  const clubs = simulateLeagueStandings(country, league);
  const picks: { position: string, club: string }[] = [];
  let idx = 0;
  for (const pos of order) {
    const club = clubs[idx % Math.max(1, clubs.length)];
    picks.push({ position: pos, club: club?.name || 'Unknown' });
    idx++;
  }
  return picks;
}

export function generateGlobalTopXI(): { position: string, club: string, country: string }[] {
  const order = ['GK','RB','CB','CB','LB','CDM','CM','CAM','RW','LW','ST'];
  const bestClubs: Club[] = [];
  for (const country of getAllCountries()) {
    const topLeague = getLeague(0, country);
    const clubs = getLeagueClubs(country, topLeague);
    if (clubs.length) bestClubs.push(clubs.reduce((a,b)=> (b.strength>a.strength?b:a)));
  }
  bestClubs.sort((a,b)=> b.strength - a.strength);
  const picks: { position: string, club: string, country: string }[] = [];
  for (let i = 0; i < order.length; i++) {
    const club = bestClubs[i % Math.max(1, bestClubs.length)];
    picks.push({ position: order[i], club: club?.name || 'Unknown', country: club?.country || '-' });
  }
  return picks;
}
