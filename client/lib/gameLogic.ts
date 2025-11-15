import {
  POSITIONS,
  POS_ABB,
  FIFA_ATTRIBUTES,
  LEAGUES,
  CLUBS,
  FIRST_NAMES,
  LAST_NAMES,
  NATIONALITIES,
  EUROPEAN_COMP,
  NATIONAL_COMP,
} from "./gameData";
import { Player, Club, PlayerStats, CareerHistory } from "./types";

// Utility functions for random selection
export function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Position helpers to handle both EN and RO labels
function getPositionCategory(position: string): "GK" | "DEF" | "MID" | "ATT" {
  const p = position.toLowerCase();
  if (/(gk|goalkeeper|portar)/.test(p)) return "GK";
  if (/(cb|rb|lb|back|defender|fundas|fundaș)/.test(p)) return "DEF";
  if (/(mid|mijloc|cdm|cm|cam|rm|lm)/.test(p)) return "MID";
  if (/(st|striker|winger|rw|lw|atacant|forward)/.test(p)) return "ATT";
  // Fallback: infer by common names
  if (p.includes("wing") || p.includes("striker") || p.includes("atac"))
    return "ATT";
  if (p.includes("mid")) return "MID";
  if (p.includes("back") || p.includes("def")) return "DEF";
  return "MID";
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
      first: [
        "Andrei",
        "Mihai",
        "Alexandru",
        "Vlad",
        "Florin",
        "Radu",
        "Ștefan",
        "Cosmin",
        "Ionuț",
        "Gabriel",
      ],
      last: [
        "Popescu",
        "Ionescu",
        "Stan",
        "Dumitrescu",
        "Petrescu",
        "Stoica",
        "Diaconescu",
        "Ilie",
        "Enache",
        "Nistor",
      ],
    },
    England: {
      first: [
        "Harry",
        "Jack",
        "Oliver",
        "George",
        "James",
        "William",
        "Charlie",
        "Jacob",
        "Thomas",
        "Alfie",
      ],
      last: [
        "Smith",
        "Brown",
        "Taylor",
        "Wilson",
        "Johnson",
        "Jackson",
        "White",
        "Harris",
        "Martin",
        "Thompson",
      ],
    },
    Spain: {
      first: [
        "Sergio",
        "Carlos",
        "Juan",
        "Miguel",
        "Pedro",
        "Rafael",
        "Javier",
        "Andrés",
        "Ángel",
        "Fernando",
      ],
      last: [
        "García",
        "Martínez",
        "Rodríguez",
        "Hernández",
        "López",
        "González",
        "Sánchez",
        "Ramírez",
        "Cruz",
        "Torres",
      ],
    },
    Italy: {
      first: [
        "Marco",
        "Lorenzo",
        "Matteo",
        "Francesco",
        "Giuseppe",
        "Alessandro",
        "Davide",
        "Federico",
        "Simone",
        "Antonio",
      ],
      last: [
        "Rossi",
        "Bianchi",
        "Romano",
        "Greco",
        "Esposito",
        "Conti",
        "Ferrari",
        "Colombo",
        "Ricci",
        "Galli",
      ],
    },
    Germany: {
      first: [
        "Thomas",
        "Michael",
        "Lars",
        "Jens",
        "Sebastian",
        "Andreas",
        "Tobias",
        "Florian",
        "Patrick",
        "Daniel",
      ],
      last: [
        "Schmidt",
        "Müller",
        "Weber",
        "Wagner",
        "Becker",
        "Hoffmann",
        "Richter",
        "Klein",
        "Wolf",
        "Neumann",
      ],
    },
    France: {
      first: [
        "Kylian",
        "Antoine",
        "Hugo",
        "Louis",
        "Théo",
        "Maxime",
        "Alexandre",
        "Nicolas",
        "Julien",
        "Romain",
      ],
      last: [
        "Mbappé",
        "Giroud",
        "Dupont",
        "Martin",
        "Bernard",
        "Petit",
        "Robert",
        "Durand",
        "Leroy",
        "Moreau",
      ],
    },
    Netherlands: {
      first: [
        "Daan",
        "Sem",
        "Luuk",
        "Jens",
        "Thijs",
        "Timo",
        "Finn",
        "Milan",
        "Bram",
        "Lars",
      ],
      last: [
        "De Jong",
        "Van Dijk",
        "Van der Berg",
        "De Vries",
        "Janssen",
        "Bakker",
        "Visser",
        "Smit",
        "De Boer",
        "Van der Meer",
      ],
    },
    Portugal: {
      first: [
        "Diogo",
        "Bernardo",
        "Gonçalo",
        "João",
        "André",
        "Rui",
        "Ricardo",
        "Tiago",
        "Miguel",
        "Nuno",
      ],
      last: [
        "Silva",
        "Santos",
        "Ferreira",
        "Oliveira",
        "Pereira",
        "Costa",
        "Carvalho",
        "Sousa",
        "Rodrigues",
        "Barbosa",
      ],
    },
    Turkey: {
      first: [
        "Hakan",
        "Cenk",
        "Burak",
        "Emre",
        "Yusuf",
        "Kerem",
        "Orkun",
        "Cengiz",
        "Enes",
        "Ozan",
      ],
      last: [
        "Yılmaz",
        "Şahin",
        "Demiral",
        "Tosun",
        "Aktürkoğlu",
        "Ünder",
        "Yazıcı",
        "Kabak",
        "Ayhan",
        "Çelik",
      ],
    },
    Scotland: {
      first: [
        "Liam",
        "Callum",
        "Finlay",
        "Euan",
        "Harris",
        "Archie",
        "Rory",
        "Connor",
        "Calum",
        "Fraser",
      ],
      last: [
        "McDonald",
        "McGregor",
        "Campbell",
        "Murray",
        "Stewart",
        "Robertson",
        "Graham",
        "Allan",
        "Clark",
        "Henderson",
      ],
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
export function generateInitialAttributes(
  position: string,
  rating: number,
): Record<string, number> {
  const attributes: Record<string, number> = {};

  const cat = getPositionCategory(position);
  let relevantAttributes: string[];
  if (cat === "GK") {
    relevantAttributes = [
      "Diving",
      "Reflexes",
      "Handling",
      "Positioning",
      "Kicking",
      "Speed",
    ];
  } else if (cat === "DEF") {
    relevantAttributes = ["Defending", "Physical", "Passing", "Pace"];
  } else if (cat === "MID") {
    relevantAttributes = ["Passing", "Dribbling", "Physical", "Pace"];
  } else {
    // ATT
    relevantAttributes = ["Shooting", "Pace", "Dribbling", "Physical"];
  }

  for (const attr of FIFA_ATTRIBUTES) {
    const bonus = relevantAttributes.includes(attr) ? 3 : 0;
    const baseValue = Math.max(
      40,
      Math.min(99, randomInt(rating - 12, rating + 6) + bonus),
    );
    attributes[attr] = baseValue;
  }

  return attributes;
}

// Get league by position (0 = top league, 1 = second league, etc.)
export function getLeague(position: number, country: string): string {
  const leagues = LEAGUES[country] || [
    { name: "Top League", size: 10, budget: 50000000 },
    { name: "Lower League", size: 10, budget: 10000000 },
  ];
  const index = Math.min(Math.max(position, 0), leagues.length - 1);
  return leagues[index].name;
}

// Get clubs for a specific league
export function getLeagueClubs(country: string, league: string): Club[] {
  const clubs = CLUBS[country] || [];
  return clubs
    .filter((club) => club.league === league)
    .map((club) => ({
      name: club.club,
      country,
      league: club.league,
      strength: club.strength,
      budget: club.budget,
      europeanComp: "",
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
export function calculateMarketValue(
  player: Player,
  club: Club,
  stats: PlayerStats,
): number {
  // Transfermarkt-like scale (rebalanced):
  // rating 60 -> ~1–3M, 70 -> ~3–7M, 80 -> ~20–60M, 90 -> 80–180M
  const perf = stats.goals + (stats.assists || 0) * 0.8;
  const perfBonus = perf * 350000; // modest influence
  const base = Math.max(0, player.rating - 50);
  let value = base ** 3 * 300 + 1000000; // softer curve
  const clubFactor = 0.7 + (club.strength / 100) * 0.7; // 0.7..1.4
  const ageFactor = player.age < 22 ? 1.25 : player.age <= 28 ? 1 : 0.85;
  value = value * clubFactor * ageFactor + perfBonus;
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
  evolution: number,
): PlayerStats {
  const stats: PlayerStats = { goals: 0, assists: 0 };

  const baseMatches = isStarter ? 35 : 18;
  const ratingFactor = player.rating / 100;
  const teamFactor = club.strength / 100;
  const evolutionBonus = (evolution / 10) * 2.0;

  const cat = getPositionCategory(player.position);

  if (cat === "ATT") {
    stats.goals = Math.floor(
      baseMatches *
        ratingFactor *
        teamFactor *
        (0.5 + Math.random() * 0.35) *
        evolutionBonus,
    );
    stats.assists = Math.floor(
      baseMatches * 0.15 * ratingFactor * (0.8 + Math.random() * 0.6),
    );
  } else if (cat === "MID") {
    stats.goals = Math.floor(
      baseMatches *
        ratingFactor *
        teamFactor *
        (0.15 + Math.random() * 0.25) *
        evolutionBonus,
    );
    stats.assists = Math.floor(
      baseMatches * 0.25 * ratingFactor * (0.8 + Math.random() * 0.6),
    );
  } else if (cat === "DEF") {
    stats.goals = Math.floor(
      baseMatches *
        ratingFactor *
        teamFactor *
        (0.04 + Math.random() * 0.09) *
        evolutionBonus,
    );
    stats.assists = Math.floor(
      baseMatches * 0.06 * ratingFactor * (0.7 + Math.random() * 0.5),
    );
  } else {
    // GK
    stats.cleanSheets = Math.floor(
      baseMatches *
        ratingFactor *
        teamFactor *
        (0.4 + Math.random() * 0.35) *
        evolutionBonus,
    );
  }

  // Bonus for high-rated players
  if (player.rating > 85 && cat !== "GK") {
    stats.goals += randomInt(5, 12);
    stats.assists += randomInt(4, 10);
  }

  if (player.rating > 90 && evolution >= 9 && cat === "ATT") {
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
  favoriteClub?: string,
): Club | null {
  const clubs = getLeagueClubs(country, league);
  let availableClubs = clubs.filter((c) => c.name !== excludeClub);

  if (!availableClubs.length) return null;

  // Check for favorite club
  if (favoriteClub && Math.random() < 0.5) {
    const favorite = availableClubs.find((c) => c.name === favoriteClub);
    if (favorite && rating >= favorite.strength - 5) {
      return favorite;
    }
  }

  // Weight clubs by how well they match the player's rating
  const weights = availableClubs.map((club) => {
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
  favoriteClub: string,
): Player {
  return {
    name,
    position,
    country,
    age,
    rating,
    season: 1,
    club: "",
    league: "",
    contractYears: 2,
    salary: 1000,
    marketValue: 500000,
    attributes: generateInitialAttributes(position, rating),
    career: [],
    isOnLoan: false,
    retireAt: randomInt(35, 40),
    favoriteClub,
    stats: { goals: 0, assists: 0 },
    playedU21ThisSeason: false,
  };
}

export function getCountryClubsAllLeagues(
  country: string,
  maxLeagues: number = 3,
): Club[] {
  const leagues = LEAGUES[country] || [];
  const clubs: Club[] = [];
  leagues.slice(0, maxLeagues).forEach((l) => {
    clubs.push(...getLeagueClubs(country, l.name));
  });
  return clubs;
}

function phaseNameByRound(remaining: number): string {
  if (remaining >= 128) return "128-imi";
  if (remaining >= 64) return "64-imi";
  if (remaining >= 32) return "32-imi";
  if (remaining >= 16) return "16-imi";
  if (remaining >= 8) return "Optimi";
  if (remaining >= 4) return "Sferturi";
  if (remaining >= 2) return "Semifinale";
  if (remaining === 1) return "Finală";
  return "Câștigător";
}

// Simulate cup competition with all clubs from first 3 leagues participating
export function simulateCup(
  club: Club,
  country: string,
): { phase: string; details: string[] } {
  const participants = getCountryClubsAllLeagues(country, 3);
  const details: string[] = [];
  if (participants.length <= 1) return { phase: "Câștigător", details };

  // Round size = next lower power of two or nearest appropriate bracket
  let size = 1;
  while (size * 2 <= participants.length) size *= 2; // largest power of two <= n
  if (size < 16) size = Math.min(16, participants.length);

  // Seed by strength
  const seeds = participants
    .slice()
    .sort((a, b) => b.strength - a.strength)
    .slice(0, size);

  // Knockout rounds
  let remaining = seeds;
  let currentClubAlive = remaining.some((c) => c.name === club.name);
  while (remaining.length > 1) {
    const roundSize = remaining.length;
    const roundName = phaseNameByRound(roundSize);

    // Pair teams: 1 vs last, 2 vs last-1, etc.
    const nextRound: Club[] = [];
    for (let i = 0; i < Math.floor(remaining.length / 2); i++) {
      const a = remaining[i];
      const b = remaining[remaining.length - 1 - i];
      const aWeight = Math.max(1, a.strength - 40);
      const bWeight = Math.max(1, b.strength - 40);
      const total = aWeight + bWeight;
      const aWins = Math.random() * total < aWeight;
      const score = `${randomInt(0, 4)}-${randomInt(0, 4)}`;

      const winner = aWins ? a : b;
      const loser = aWins ? b : a;
      nextRound.push(winner);

      if (a.name === club.name || b.name === club.name) {
        details.push(
          `${roundName}: ${(aWins && a.name === club.name) || (!aWins && b.name === club.name) ? "Victorie" : "Eliminat"} vs ${loser.name} (${score})`,
        );
        currentClubAlive = aWins ? a.name === club.name : b.name === club.name;
      }
    }
    remaining = nextRound;
  }

  const finalPhase = currentClubAlive
    ? "Câștigător"
    : details.length
      ? details[details.length - 1].split(":")[0]
      : "Eliminat";
  return { phase: finalPhase, details };
}

// Simulate European competition
export function simulateEuropean(
  club: Club,
  competition: string,
): { phase: string; details: string[]; prize: number } {
  const phases = [
    "Preliminarii",
    "Grupă",
    "Optimi",
    "Sferturi",
    "Semifinale",
    "Finală",
    "Câștigător",
  ];
  const details: string[] = [];
  let currentPhase = 0;
  let prize = 0;

  for (let i = 0; i < phases.length; i++) {
    const phase = phases[i];
    const base =
      competition === "Champions League"
        ? 6
        : competition === "Europa League"
          ? 5
          : 4;
    const successProbability = Math.max(1, base - i + (club.strength - 70) / 8);
    const totalProbability = 10;

    if (Math.random() * totalProbability < successProbability) {
      const score = `${randomInt(0, 4)}-${randomInt(0, 4)}`;
      details.push(`${phase}: Victorie (${score})`);
      currentPhase = i;
      prize +=
        competition === "Champions League"
          ? 7000000
          : competition === "Europa League"
            ? 3500000
            : 1500000;
    } else {
      const score = `${randomInt(0, 4)}-${randomInt(0, 4)}`;
      details.push(`${phase}: Eliminat (${score})`);
      break;
    }
  }

  if (phases[currentPhase] === "Câștigător") {
    prize +=
      competition === "Champions League"
        ? 35000000
        : competition === "Europa League"
          ? 15000000
          : 7000000;
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
export function simulateLeagueStandings(
  country: string,
  league: string,
): Club[] {
  const clubs = getLeagueClubs(country, league);
  const scored = clubs.map((c) => ({
    club: c,
    score: c.strength * (0.95 + Math.random() * 0.15) + randomInt(-3, 6),
  }));
  scored.sort((a, b) => b.score - a.score);
  return scored.map((s) => s.club);
}

export function getAllCountries(): string[] {
  return Object.keys(LEAGUES);
}

export function getLeagueIndex(country: string, league: string): number {
  const list = LEAGUES[country] || [];
  return list.findIndex((l) => l.name === league);
}

export function getClubByName(country: string, name: string): Club | null {
  const clubs = CLUBS[country] || [];
  const found = clubs.find((c) => c.club === name);
  return found
    ? {
        name: found.club,
        country,
        league: found.league,
        strength: found.strength,
        budget: found.budget,
        europeanComp: "",
      }
    : null;
}

export function getPromotionRelegationCounts(totalTeams: number): {
  promote: number;
  relegate: number;
} {
  if (totalTeams >= 20) return { promote: 3, relegate: 3 };
  if (totalTeams >= 18) return { promote: 3, relegate: 3 };
  if (totalTeams >= 16) return { promote: 2, relegate: 2 };
  return { promote: 1, relegate: 1 };
}

export function gaussianWeight(distance: number, sigma: number): number {
  const w = Math.exp(-(distance * distance) / (2 * sigma * sigma));
  // Scale to integer weights 1..100
  return Math.max(1, Math.round(100 * w));
}

// --- UEFA coefficients (simplified) ---
export const COUNTRY_COEFFICIENTS: Record<string, number> = (() => {
  const base: Record<string, number> = {
    England: 106,
    Spain: 100,
    Italy: 98,
    Germany: 96,
    France: 84,
    Netherlands: 79,
    Portugal: 78,
    Belgium: 62,
    Scotland: 56,
    Turkey: 55,
    Austria: 52,
    Switzerland: 50,
    "Czech Republic": 48,
    Greece: 47,
    Denmark: 45,
    Croatia: 44,
    Poland: 43,
    Romania: 40,
    Norway: 39,
    Sweden: 38,
    Serbia: 37,
    Ukraine: 44,
    Russia: 0,
    "Bosnia and Herzegovina": 31,
    Bulgaria: 32,
    Hungary: 36,
    Slovenia: 30,
    Slovakia: 33,
    Ireland: 28,
    Finland: 34,
    Iceland: 24,
    "North Macedonia": 23,
    Albania: 25,
    Armenia: 22,
    Azerbaijan: 26,
    Georgia: 27,
    Belarus: 0,
    Cyprus: 35,
    Israel: 41,
  };
  return base;
})();

// Track season results for promotion/relegation and budget allocation
export interface SeasonResults {
  season: number;
  leagueStandings: Record<string, { club: string; position: number; points: number }[]>;
  europeanParticipants: {
    season: number;
    UCL: string[];
    UEL: string[];
    UECL: string[];
  };
  ballonDorWinner: string | null;
}

// Global season tracker (persisted via localStorage by CareerManager)
let globalSeasonResults: Record<number, SeasonResults> = {};

export function setGlobalSeasonResults(season: number, results: SeasonResults) {
  globalSeasonResults[season] = results;
}

export function getGlobalSeasonResults(season: number): SeasonResults | null {
  return globalSeasonResults[season] || null;
}

export function getAllGlobalSeasonResults(): Record<number, SeasonResults> {
  return globalSeasonResults;
}

export function getPreviousSeasonEuropeanParticipants(season: number): { UCL: string[]; UEL: string[]; UECL: string[] } {
  const prev = globalSeasonResults[season - 1];
  if (prev) return prev.europeanParticipants;
  return { UCL: [], UEL: [], UECL: [] };
}

export function getCountryRank(country: string): number {
  const sorted = Object.entries(COUNTRY_COEFFICIENTS)
    .sort((a, b) => b[1] - a[1])
    .map(([c]) => c);
  const idx = sorted.indexOf(country);
  return idx === -1 ? sorted.length : idx + 1;
}

export function getEuropeanSlots(country: string): {
  ucl: number;
  uel: number;
  uecl: number;
} {
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
    "Champions League": 10,
    "Europa League": 7,
    "Conference League": 5,
  };
  for (const [comp, clubName] of Object.entries(winners)) {
    if (!(comp in weights)) continue;
    const country = findClubCountry(clubName);
    if (country)
      COUNTRY_COEFFICIENTS[country] =
        (COUNTRY_COEFFICIENTS[country] || 35) + weights[comp];
  }
}

export function getQualifiedEuropeanTeams(): { UCL: Club[]; UEL: Club[]; UECL: Club[] } {
  const UCL: Club[] = [];
  const UEL: Club[] = [];
  const UECL: Club[] = [];
  for (const country of getAllCountries()) {
    const slots = getEuropeanSlots(country);
    const topLeague = getLeague(0, country);
    const clubs = getLeagueClubs(country, topLeague).slice().sort((a,b)=> b.strength - a.strength);
    UCL.push(...clubs.slice(0, Math.min(slots.ucl, clubs.length)));
    const restStart = Math.min(slots.ucl, clubs.length);
    UEL.push(...clubs.slice(restStart, Math.min(restStart + slots.uel, clubs.length)));
    const rest2Start = Math.min(restStart + slots.uel, clubs.length);
    UECL.push(...clubs.slice(rest2Start, Math.min(rest2Start + slots.uecl, clubs.length)));
  }
  return { UCL, UEL, UECL };
}

function knockoutSim(participants: Club[], seedByStrength: boolean, subject: Club): { phase: string; details: string[]; prize: number } {
  const phasesOrder = ["Preliminarii","Grupă","Optimi","Sferturi","Semifinale","Finală","Câștigător"];
  const details: string[] = [];
  if (participants.length <= 1) return { phase: 'Câștigător', details, prize: 0 };

  // Seed by strength strongest vs weakest
  let remaining = participants.slice().sort((a,b)=> b.strength - a.strength);
  // Ensure subject is in participants; if not, add it in by replacing weakest
  if (!remaining.some(c => c.name === subject.name)) {
    remaining[remaining.length - 1] = subject;
    remaining.sort((a,b)=> b.strength - a.strength);
  }
  let subjectAlive = true;
  let roundIndex = 0;
  while (remaining.length > 1) {
    const next: Club[] = [];
    for (let i=0;i<Math.floor(remaining.length/2);i++) {
      const a = remaining[i];
      const b = remaining[remaining.length-1-i];
      const aW = Math.max(1, a.strength - 40);
      const bW = Math.max(1, b.strength - 40);
      const total = aW + bW;
      const aWins = Math.random() * total < aW;
      const winner = aWins ? a : b;
      const loser = aWins ? b : a;
      next.push(winner);
      if (a.name === subject.name || b.name === subject.name) {
        const rn = phasesOrder[Math.min(roundIndex+1, phasesOrder.length-2)];
        const res = winner.name === subject.name ? 'Victorie' : 'Eliminat';
        const score = `${randomInt(0,3)}-${randomInt(0,3)}`;
        details.push(`${rn}: ${res} vs ${loser.name} (${score})`);
        subjectAlive = winner.name === subject.name;
      }
    }
    remaining = next;
    roundIndex++;
  }
  const prizePerRound = [2_000_000, 15_000_000, 9_000_000, 12_000_000, 15_000_000, 20_000_000, 30_000_000];
  const lastPhase = subjectAlive ? 'Câștigător' : (details[details.length-1]?.split(':')[0] || 'Preliminarii');
  const prize = prizePerRound[Math.min(phasesOrder.indexOf(lastPhase), prizePerRound.length-1)] || 0;
  return { phase: lastPhase, details, prize };
}

export function simulateEuropeanCompetition(subject: Club, competition: 'Champions League'|'Europa League'|'Conference League') {
  const { UCL, UEL, UECL } = getQualifiedEuropeanTeams();
  const pool = competition==='Champions League'?UCL: competition==='Europa League'?UEL:UECL;
  return knockoutSim(pool, true, subject);
}

export function simulateEuropeanCompetitionFromNames(subject: Club, participantNames: string[], competition: 'Champions League'|'Europa League'|'Conference League') {
  const participants: Club[] = [];
  const countries = getAllCountries();
  const findClub = (name: string): Club | null => {
    for (const ct of countries) {
      const topLeague = getLeague(0, ct);
      const secondLeague = getLeague(1, ct);
      const clubs = getLeagueClubs(ct, topLeague).concat(
        secondLeague ? getLeagueClubs(ct, secondLeague) : [],
      );
      const found = clubs.find(c => c.name === name);
      if (found) return found;
    }
    return null;
  };
  participantNames.forEach(n => {
    const c = findClub(n);
    if (c) participants.push(c);
  });

  // Ensure subject is in participants
  if (!participants.some(c => c.name === subject.name)) {
    participants.push(subject);
  }

  if (participants.length < 2) return { phase: 'Preliminarii', details: [], prize: 0 };
  return knockoutSim(participants, true, subject);
}

// Simulate European competition using previous season's qualified teams
export function simulateEuropeanCompetitionPreviousSeason(
  subject: Club,
  season: number,
  competition: 'Champions League' | 'Europa League' | 'Conference League',
) {
  const previousSeason = season - 1;
  const prevQualifiers = getPreviousSeasonEuropeanParticipants(previousSeason);

  let qualifiedTeams: string[] = [];
  if (competition === 'Champions League') {
    qualifiedTeams = prevQualifiers.UCL;
  } else if (competition === 'Europa League') {
    qualifiedTeams = prevQualifiers.UEL;
  } else {
    qualifiedTeams = prevQualifiers.UECL;
  }

  return simulateEuropeanCompetitionFromNames(subject, qualifiedTeams, competition);
}

export function simulateGlobalWinners(): Record<string, string> {
  const winners: Record<string, string> = {};
  const topClubs: Club[] = [];
  for (const country of getAllCountries()) {
    const topLeague = getLeague(0, country);
    const clubs = getLeagueClubs(country, topLeague);
    if (clubs.length)
      topClubs.push(clubs.reduce((a, b) => (b.strength > a.strength ? b : a)));
  }
  if (topClubs.length) {
    const best = topClubs.reduce((a, b) => (b.strength > a.strength ? b : a));
    winners["Champions League"] = best.name;
    const rest = topClubs.filter((c) => c.name !== best.name);
    if (rest.length)
      winners["Europa League"] =
        rest[Math.floor(Math.random() * rest.length)].name;
    if (rest.length)
      winners["Conference League"] =
        rest[Math.floor(Math.random() * rest.length)].name;
  }
  registerEuropeanWinners(winners);
  return winners;
}

export function simulateNationalTeamSeason(player: Player): { selected: boolean; tournament: { phase: string; details: string[] } } {
  const country = player.country;

  // Get real players from the game for this country
  const countryPlayers = playersInGame.filter((p) => p.country === country);
  const topPlayers = countryPlayers.sort((a, b) => b.rating - a.rating).slice(0, 23);

  // Check if our player is selected
  const selected = topPlayers.some((p) => p.name === player.name);

  // Calculate average strength of national team
  const avg = topPlayers.length > 0
    ? Math.round(topPlayers.reduce((s, p) => s + p.rating, 0) / topPlayers.length)
    : 75;

  // Simulate a simple tournament based on national strength
  const phases = ["Grupă","Optimi","Sferturi","Semifinale","Finală","Câștigător"];
  const details: string[] = [];
  let reached = 0;

  for (let i = 0; i < phases.length; i++) {
    // Random opponent team strength
    const opp = Math.round(avg + randomInt(-10, 10));
    const our = Math.round(avg + (selected ? 2 : -2));
    const w = Math.max(1, our - 30);
    const ow = Math.max(1, opp - 30);
    const total = w + ow;
    const wins = Math.random() * total < w;
    const score = `${randomInt(0, 3)}-${randomInt(0, 3)}`;
    details.push(`${phases[i]}: ${wins ? 'Victorie' : 'Eliminat'} (${score})`);
    if (!wins) break;
    else reached = i;
  }

  return { selected, tournament: { phase: phases[reached], details } };
}

export function generateLeagueTopXI(
  country: string,
  league: string,
): { position: string; club: string }[] {
  const order = [
    "GK",
    "RB",
    "CB",
    "CB",
    "LB",
    "CDM",
    "CM",
    "CAM",
    "RW",
    "LW",
    "ST",
  ];
  const clubs = simulateLeagueStandings(country, league);
  const picks: { position: string; club: string }[] = [];
  let idx = 0;
  for (const pos of order) {
    const club = clubs[idx % Math.max(1, clubs.length)];
    picks.push({ position: pos, club: club?.name || "Unknown" });
    idx++;
  }
  return picks;
}

export function generateGlobalTopXI(): {
  position: string;
  club: string;
  country: string;
}[] {
  const order = [
    "GK",
    "RB",
    "CB",
    "CB",
    "LB",
    "CDM",
    "CM",
    "CAM",
    "RW",
    "LW",
    "ST",
  ];
  const bestClubs: Club[] = [];
  for (const country of getAllCountries()) {
    const topLeague = getLeague(0, country);
    const clubs = getLeagueClubs(country, topLeague);
    if (clubs.length)
      bestClubs.push(clubs.reduce((a, b) => (b.strength > a.strength ? b : a)));
  }
  bestClubs.sort((a, b) => b.strength - a.strength);
  const picks: { position: string; club: string; country: string }[] = [];
  for (let i = 0; i < order.length; i++) {
    const club = bestClubs[i % Math.max(1, bestClubs.length)];
    picks.push({
      position: order[i],
      club: club?.name || "Unknown",
      country: club?.country || "-",
    });
  }
  return picks;
}

// Budget allocation based on league position, European results, and transfers
export function calculateSeasonBudgetAdjustment(
  position: number,
  totalTeams: number,
  europeanPhase: string | null,
  europeanCompetition: string | null,
): number {
  let budgetAdjustment = 0;

  // Prize money based on league position (top teams earn more)
  const topFraction = position / totalTeams;
  if (topFraction <= 0.1) budgetAdjustment += 25_000_000; // 1st place tier
  else if (topFraction <= 0.2) budgetAdjustment += 18_000_000; // 2nd-3rd place tier
  else if (topFraction <= 0.3) budgetAdjustment += 12_000_000; // 4th-6th place tier
  else if (topFraction <= 0.5) budgetAdjustment += 6_000_000; // Mid-table
  else if (topFraction <= 0.7) budgetAdjustment += 2_000_000; // Lower mid-table
  else budgetAdjustment += 1_000_000; // Bottom half

  // European competition prize money
  if (europeanPhase && europeanCompetition) {
    const phaseToMoney: Record<string, Record<string, number>> = {
      "Champions League": {
        "Preliminarii": 2_000_000,
        "Grupă": 15_000_000,
        "Optimi": 9_000_000,
        "Sferturi": 12_000_000,
        "Semifinale": 15_000_000,
        "Finală": 20_000_000,
        "Câștigător": 30_000_000,
      },
      "Europa League": {
        "Preliminarii": 1_000_000,
        "Grupă": 8_000_000,
        "Optimi": 5_000_000,
        "Sferturi": 7_000_000,
        "Semifinale": 9_000_000,
        "Finală": 12_000_000,
        "Câștigător": 18_000_000,
      },
      "Conference League": {
        "Preliminarii": 500_000,
        "Grupă": 4_000_000,
        "Optimi": 2_500_000,
        "Sferturi": 3_500_000,
        "Semifinale": 4_500_000,
        "Finală": 6_000_000,
        "Câștigător": 9_000_000,
      },
    };
    const compMoney = phaseToMoney[europeanCompetition];
    if (compMoney) {
      budgetAdjustment += compMoney[europeanPhase] || 0;
    }
  }

  return budgetAdjustment;
}

// Calculate transfer market activity impact on budget
export function calculateTransferBudgetImpact(
  transfers: Array<{
    player: string;
    from: string;
    to: string;
    fee: number;
    type: "domestic" | "external";
  }>,
  clubName: string,
): number {
  let impact = 0;
  transfers.forEach((t) => {
    if (t.to === clubName) {
      impact -= t.fee; // Money spent on incoming transfers
    } else if (t.from === clubName) {
      impact += t.fee; // Money earned from outgoing transfers
    }
  });
  return impact;
}

// Build national team from real players in the game
export interface PlayerInGame {
  name: string;
  country: string;
  rating: number;
  position: string;
  club: string;
}

// Track all players currently in game
export let playersInGame: PlayerInGame[] = [];

export function registerPlayerInGame(player: Player) {
  const idx = playersInGame.findIndex((p) => p.name === player.name);
  if (idx >= 0) {
    playersInGame[idx] = {
      name: player.name,
      country: player.country,
      rating: player.rating,
      position: player.position,
      club: player.club,
    };
  } else {
    playersInGame.push({
      name: player.name,
      country: player.country,
      rating: player.rating,
      position: player.position,
      club: player.club,
    });
  }
}

export function buildNationalTeamFromPlayers(country: string): Player["name"][] {
  const countryPlayers = playersInGame.filter((p) => p.country === country);
  const sorted = countryPlayers.sort((a, b) => b.rating - a.rating);
  return sorted.slice(0, 23).map((p) => p.name);
}

// Ballon d'Or tracking
export interface BallonDorCandidate {
  name: string;
  club: string;
  country: string;
  rating: number;
  goals: number;
  assists: number;
  score: number; // Weighted score for ranking
}

export function calculateBallonDorScore(
  goals: number,
  assists: number,
  rating: number,
  trophies: string[],
): number {
  let score = 0;
  score += goals * 2; // 2 points per goal
  score += assists * 1.5; // 1.5 points per assist
  score += rating * 0.5; // 0.5 points per rating point
  score += trophies.length * 10; // 10 points per trophy
  return score;
}

export function awardBallonDor(season: number): string | null {
  const seasonResults = getGlobalSeasonResults(season);
  if (!seasonResults) return null;
  return seasonResults.ballonDorWinner;
}
