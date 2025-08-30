// Game positions and abbreviations
export const POSITIONS = [
  "Portar", "Fundaș Dreapta", "Fundaș Central", "Fundaș Stânga",
  "Mijlocaș Defensiv", "Mijlocaș Central", "Mijlocaș Ofensiv",
  "Mijlocaș Dreapta", "Mijlocaș Stânga",
  "Atacant Dreapta", "Atacant Central", "Atacant Stânga"
];

export const POS_ABB: Record<string, string> = {
  "Portar": "GK",
  "Fundaș Dreapta": "RB",
  "Fundaș Central": "CB",
  "Fundaș Stânga": "LB",
  "Mijlocaș Defensiv": "CDM",
  "Mijlocaș Central": "CM",
  "Mijlocaș Ofensiv": "CAM",
  "Mijlocaș Dreapta": "RM",
  "Mijlocaș Stânga": "LM",
  "Atacant Dreapta": "RW",
  "Atacant Central": "ST",
  "Atacant Stânga": "LW"
};

export const FIFA_ATTRIBUTES = ['Pace', 'Shooting', 'Passing', 'Dribbling', 'Defending', 'Physical'];

// Leagues by country
export const LEAGUES: Record<string, Array<{name: string, size: number, budget: number}>> = {
  'România': [
    {'name': 'Liga 1', 'size': 16, 'budget': 30_000_000},
    {'name': 'Liga 2', 'size': 20, 'budget': 5_000_000},
  ],
  'Anglia': [
    {'name': 'Premier League', 'size': 20, 'budget': 150_000_000},
    {'name': 'Championship', 'size': 24, 'budget': 25_000_000},
    {'name': 'League One', 'size': 24, 'budget': 10_000_000},
  ],
  'Spania': [
    {'name': 'La Liga', 'size': 20, 'budget': 120_000_000},
    {'name': 'Segunda División', 'size': 22, 'budget': 20_000_000},
  ],
  'Italia': [
    {'name': 'Serie A', 'size': 20, 'budget': 100_000_000},
    {'name': 'Serie B', 'size': 20, 'budget': 15_000_000},
  ],
  'Germania': [
    {'name': 'Bundesliga', 'size': 18, 'budget': 90_000_000},
    {'name': '2. Bundesliga', 'size': 18, 'budget': 18_000_000},
  ],
  'Franța': [
    {'name': 'Ligue 1', 'size': 18, 'budget': 80_000_000},
    {'name': 'Ligue 2', 'size': 20, 'budget': 12_000_000},
  ],
  'Portugalia': [
    {'name': 'Primeira Liga', 'size': 18, 'budget': 40_000_000},
  ],
  'Olanda': [
    {'name': 'Eredivisie', 'size': 18, 'budget': 35_000_000},
  ]
};

// Clubs by country with strength and budget
export const CLUBS: Record<string, Array<{club: string, strength: number, league: string, budget: number}>> = {
  'România': [
    {'club': 'FCSB', 'strength': 80, 'league': 'Liga 1', 'budget': 15_000_000},
    {'club': 'CFR Cluj', 'strength': 79, 'league': 'Liga 1', 'budget': 14_500_000},
    {'club': 'Farul Constanța', 'strength': 79, 'league': 'Liga 1', 'budget': 12_500_000},
    {'club': 'Rapid București', 'strength': 80, 'league': 'Liga 1', 'budget': 15_000_000},
    {'club': 'Universitatea Craiova', 'strength': 80, 'league': 'Liga 1', 'budget': 11_000_000},
    {'club': 'Petrolul Ploiești', 'strength': 72, 'league': 'Liga 1', 'budget': 6_500_000},
    {'club': 'Sepsi OSK', 'strength': 74, 'league': 'Liga 1', 'budget': 7_000_000},
    {'club': 'FC Voluntari', 'strength': 70, 'league': 'Liga 1', 'budget': 5_500_000},
    {'club': 'FC Botoșani', 'strength': 69, 'league': 'Liga 1', 'budget': 5_000_000},
    {'club': 'Universitatea Cluj', 'strength': 71, 'league': 'Liga 1', 'budget': 6_000_000},
    {'club': 'Hermannstadt', 'strength': 68, 'league': 'Liga 1', 'budget': 4_800_000},
    {'club': 'UTA Arad', 'strength': 67, 'league': 'Liga 1', 'budget': 4_500_000},
    {'club': 'Oțelul Galați', 'strength': 66, 'league': 'Liga 1', 'budget': 4_200_000},
    {'club': 'Poli Iași', 'strength': 65, 'league': 'Liga 1', 'budget': 4_000_000},
    {'club': 'Gloria Buzău', 'strength': 64, 'league': 'Liga 1', 'budget': 3_800_000},
    {'club': 'Dinamo București', 'strength': 73, 'league': 'Liga 1', 'budget': 5_200_000},
  ],
  'Anglia': [
    {'club': 'Manchester City', 'strength': 95, 'league': 'Premier League', 'budget': 610_000_000},
    {'club': 'Liverpool', 'strength': 93, 'league': 'Premier League', 'budget': 480_000_000},
    {'club': 'Chelsea', 'strength': 91, 'league': 'Premier League', 'budget': 470_000_000},
    {'club': 'Arsenal', 'strength': 90, 'league': 'Premier League', 'budget': 420_000_000},
    {'club': 'Manchester United', 'strength': 88, 'league': 'Premier League', 'budget': 410_000_000},
    {'club': 'Tottenham Hotspur', 'strength': 86, 'league': 'Premier League', 'budget': 380_000_000},
    {'club': 'Newcastle United', 'strength': 85, 'league': 'Premier League', 'budget': 350_000_000},
    {'club': 'Aston Villa', 'strength': 83, 'league': 'Premier League', 'budget': 300_000_000},
    {'club': 'West Ham United', 'strength': 81, 'league': 'Premier League', 'budget': 250_000_000},
    {'club': 'Brighton & Hove Albion', 'strength': 80, 'league': 'Premier League', 'budget': 220_000_000},
  ],
  'Spania': [
    {'club': 'Real Madrid', 'strength': 96, 'league': 'La Liga', 'budget': 800_000_000},
    {'club': 'Barcelona', 'strength': 94, 'league': 'La Liga', 'budget': 700_000_000},
    {'club': 'Atlético Madrid', 'strength': 92, 'league': 'La Liga', 'budget': 600_000_000},
    {'club': 'Sevilla', 'strength': 86, 'league': 'La Liga', 'budget': 290_000_000},
    {'club': 'Valencia', 'strength': 82, 'league': 'La Liga', 'budget': 210_000_000},
    {'club': 'Real Betis', 'strength': 83, 'league': 'La Liga', 'budget': 188_000_000},
    {'club': 'Villarreal', 'strength': 85, 'league': 'La Liga', 'budget': 250_000_000},
    {'club': 'Real Sociedad', 'strength': 84, 'league': 'La Liga', 'budget': 230_000_000},
  ],
  'Italia': [
    {'club': 'Juventus', 'strength': 92, 'league': 'Serie A', 'budget': 500_000_000},
    {'club': 'Inter Milan', 'strength': 93, 'league': 'Serie A', 'budget': 480_000_000},
    {'club': 'AC Milan', 'strength': 91, 'league': 'Serie A', 'budget': 450_000_000},
    {'club': 'Napoli', 'strength': 90, 'league': 'Serie A', 'budget': 400_000_000},
    {'club': 'Roma', 'strength': 86, 'league': 'Serie A', 'budget': 300_000_000},
    {'club': 'Lazio', 'strength': 85, 'league': 'Serie A', 'budget': 280_000_000},
    {'club': 'Atalanta', 'strength': 84, 'league': 'Serie A', 'budget': 250_000_000},
    {'club': 'Fiorentina', 'strength': 82, 'league': 'Serie A', 'budget': 200_000_000},
  ],
  'Germania': [
    {'club': 'Bayern München', 'strength': 95, 'league': 'Bundesliga', 'budget': 600_000_000},
    {'club': 'Borussia Dortmund', 'strength': 90, 'league': 'Bundesliga', 'budget': 400_000_000},
    {'club': 'RB Leipzig', 'strength': 88, 'league': 'Bundesliga', 'budget': 350_000_000},
    {'club': 'Bayer Leverkusen', 'strength': 87, 'league': 'Bundesliga', 'budget': 320_000_000},
    {'club': 'Eintracht Frankfurt', 'strength': 83, 'league': 'Bundesliga', 'budget': 250_000_000},
    {'club': 'VfL Wolfsburg', 'strength': 81, 'league': 'Bundesliga', 'budget': 220_000_000},
  ],
  'Franța': [
    {'club': 'Paris Saint-Germain', 'strength': 94, 'league': 'Ligue 1', 'budget': 700_000_000},
    {'club': 'Olympique de Marseille', 'strength': 85, 'league': 'Ligue 1', 'budget': 250_000_000},
    {'club': 'AS Monaco', 'strength': 86, 'league': 'Ligue 1', 'budget': 280_000_000},
    {'club': 'Olympique Lyonnais', 'strength': 84, 'league': 'Ligue 1', 'budget': 230_000_000},
    {'club': 'Lille OSC', 'strength': 82, 'league': 'Ligue 1', 'budget': 200_000_000},
    {'club': 'Stade Rennais', 'strength': 81, 'league': 'Ligue 1', 'budget': 180_000_000},
  ]
};

// European competitions
export const EUROPEAN_COMP = [
  {'name': "Champions League", 'prestige': 99},
  {'name': "Europa League", 'prestige': 90},
  {'name': "Conference League", 'prestige': 80}
];

// National competitions
export const NATIONAL_COMP = [
  {'name': "Cupa Mondială", 'prestige': 100},
  {'name': "EURO", 'prestige': 95}
];

// Random names for players
export const FIRST_NAMES = [
  "Alex", "John", "Mario", "Luca", "Pierre", "Hans", "Diego", "Sergio", "Andrei", "Florin",
  "Mohamed", "Ahmed", "Youssef", "Ali", "Ibrahim", "Carlos", "Juan", "Miguel", "Pedro", "Rafael",
  "Gabriel", "Lucas", "Bruno", "Felipe", "Thiago", "Matteo", "Giovanni", "Lorenzo", "Marco", "Alessandro",
  "Thomas", "James", "William", "Oliver", "Harry", "Lars", "Jens", "Sven", "Niels", "Erik",
  "Kylian", "Antoine", "Hugo", "Louis", "Baptiste", "Rui", "João", "Diogo", "André", "Bernardo"
];

export const LAST_NAMES = [
  "Popescu", "Smith", "Rossi", "Müller", "Gómez", "Blanc", "Torres", "Ionescu", "Doe", "Silva",
  "Johnson", "Brown", "Taylor", "Wilson", "Davis", "Rodríguez", "Martínez", "Hernández", "López", "Pérez",
  "Santos", "Ferreira", "Oliveira", "Costa", "Pereira", "Schmidt", "Weber", "Meyer", "Wagner", "Becker",
  "Rizzo", "Conti", "Bianchi", "Romano", "Greco", "Mbappé", "Giroud", "Pogba", "Kanté", "Deschamps"
];

export const NATIONALITIES = [
  "ROM", "ENG", "FRA", "GER", "ESP", "ITA", "BRA", "NED", "POR", "ARG",
  "MEX", "COL", "CHI", "PER", "URU", "PAR", "VEN", "BOL", "ECU", "USA",
  "CAN", "JPN", "KOR", "CHN", "AUS", "IND", "EGY", "MAR", "ALG", "TUN",
  "NGA", "GHA", "CMR", "SEN", "CIV", "RSA", "KEN", "UGA", "RUS", "UKR",
  "POL", "CZE", "SVK", "HUN", "BUL", "GRE", "TUR", "SWE", "NOR", "DEN"
];
