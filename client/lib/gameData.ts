// Game positions and abbreviations
export const POSITIONS = [
  "Goalkeeper", "Right Back", "Centre Back", "Left Back",
  "Defensive Midfielder", "Central Midfielder", "Attacking Midfielder",
  "Right Midfielder", "Left Midfielder",
  "Right Winger", "Striker", "Left Winger"
];

export const POS_ABB: Record<string, string> = {
  "Goalkeeper": "GK",
  "Right Back": "RB",
  "Centre Back": "CB",
  "Left Back": "LB",
  "Defensive Midfielder": "CDM",
  "Central Midfielder": "CM",
  "Attacking Midfielder": "CAM",
  "Right Midfielder": "RM",
  "Left Midfielder": "LM",
  "Right Winger": "RW",
  "Striker": "ST",
  "Left Winger": "LW"
};

export const FIFA_ATTRIBUTES = ['Pace', 'Shooting', 'Passing', 'Dribbling', 'Defending', 'Physical'];

// Comprehensive leagues by country
export const LEAGUES: Record<string, Array<{name: string, size: number, budget: number}>> = {
  'Romania': [
    {'name': 'Liga 1', 'size': 16, 'budget': 30_000_000},
    {'name': 'Liga 2', 'size': 20, 'budget': 5_000_000},
  ],
  'England': [
    {'name': 'Premier League', 'size': 20, 'budget': 150_000_000},
    {'name': 'Championship', 'size': 24, 'budget': 25_000_000},
    {'name': 'League One', 'size': 24, 'budget': 10_000_000},
  ],
  'Spain': [
    {'name': 'La Liga', 'size': 20, 'budget': 120_000_000},
    {'name': 'Segunda División', 'size': 22, 'budget': 20_000_000},
  ],
  'Italy': [
    {'name': 'Serie A', 'size': 20, 'budget': 100_000_000},
    {'name': 'Serie B', 'size': 20, 'budget': 15_000_000},
  ],
  'Germany': [
    {'name': 'Bundesliga', 'size': 18, 'budget': 90_000_000},
    {'name': '2. Bundesliga', 'size': 18, 'budget': 18_000_000},
  ],
  'France': [
    {'name': 'Ligue 1', 'size': 18, 'budget': 80_000_000},
    {'name': 'Ligue 2', 'size': 20, 'budget': 12_000_000},
  ],
  'Portugal': [
    {'name': 'Primeira Liga', 'size': 18, 'budget': 40_000_000},
  ],
  'Netherlands': [
    {'name': 'Eredivisie', 'size': 18, 'budget': 35_000_000},
  ],
  'Turkey': [
    {'name': 'Süper Lig', 'size': 20, 'budget': 45_000_000},
    {'name': '1. Lig', 'size': 20, 'budget': 8_000_000},
  ],
  'Greece': [
    {'name': 'Super League Greece', 'size': 14, 'budget': 25_000_000},
    {'name': 'Super League 2', 'size': 16, 'budget': 5_000_000},
  ],
  'Switzerland': [
    {'name': 'Swiss Super League', 'size': 12, 'budget': 20_000_000},
    {'name': 'Swiss Challenge League', 'size': 10, 'budget': 4_000_000},
  ],
  'Croatia': [
    {'name': 'HNL', 'size': 10, 'budget': 15_000_000},
    {'name': 'First NL', 'size': 12, 'budget': 3_000_000},
  ],
  'Belgium': [
    {'name': 'Pro League', 'size': 18, 'budget': 35_000_000},
  ],
  'Austria': [
    {'name': 'Austrian Bundesliga', 'size': 12, 'budget': 15_000_000},
  ],
  'Scotland': [
    {'name': 'Scottish Premiership', 'size': 12, 'budget': 20_000_000},
  ],
  'Norway': [
    {'name': 'Eliteserien', 'size': 16, 'budget': 10_000_000},
  ],
  'Sweden': [
    {'name': 'Allsvenskan', 'size': 16, 'budget': 12_000_000},
  ],
  'Denmark': [
    {'name': 'Danish Superliga', 'size': 12, 'budget': 15_000_000},
  ],
  'Poland': [
    {'name': 'Ekstraklasa', 'size': 18, 'budget': 20_000_000},
  ],
  'Czech Republic': [
    {'name': 'Czech First League', 'size': 16, 'budget': 12_000_000},
  ],
  'Ukraine': [
    {'name': 'Ukrainian Premier League', 'size': 16, 'budget': 18_000_000},
  ],
  'Russia': [
    {'name': 'Russian Premier League', 'size': 16, 'budget': 30_000_000},
  ],
  'Brazil': [
    {'name': 'Campeonato Brasileiro Série A', 'size': 20, 'budget': 50_000_000},
  ],
  'Argentina': [
    {'name': 'Liga Profesional', 'size': 28, 'budget': 25_000_000},
  ],
  'Mexico': [
    {'name': 'Liga MX', 'size': 18, 'budget': 30_000_000},
  ],
  'USA': [
    {'name': 'Major League Soccer', 'size': 30, 'budget': 40_000_000},
  ],
  'Japan': [
    {'name': 'J1 League', 'size': 18, 'budget': 25_000_000},
  ],
  'South Korea': [
    {'name': 'K League 1', 'size': 12, 'budget': 15_000_000},
  ],
  'Australia': [
    {'name': 'A-League', 'size': 12, 'budget': 10_000_000},
  ]
};

// Comprehensive clubs by country with strength and budget
export const CLUBS: Record<string, Array<{club: string, strength: number, league: string, budget: number}>> = {
  'Romania': [
    {'club': 'FCSB', 'strength': 80, 'league': 'Liga 1', 'budget': 15_000_000},
    {'club': 'CFR Cluj', 'strength': 79, 'league': 'Liga 1', 'budget': 14_500_000},
    {'club': 'Farul Constanta', 'strength': 79, 'league': 'Liga 1', 'budget': 12_500_000},
    {'club': 'Rapid Bucuresti', 'strength': 80, 'league': 'Liga 1', 'budget': 15_000_000},
    {'club': 'Universitatea Craiova', 'strength': 80, 'league': 'Liga 1', 'budget': 11_000_000},
    {'club': 'Petrolul Ploiesti', 'strength': 72, 'league': 'Liga 1', 'budget': 6_500_000},
    {'club': 'Sepsi OSK', 'strength': 74, 'league': 'Liga 1', 'budget': 7_000_000},
    {'club': 'FC Voluntari', 'strength': 70, 'league': 'Liga 1', 'budget': 5_500_000},
    {'club': 'FC Botosani', 'strength': 69, 'league': 'Liga 1', 'budget': 5_000_000},
    {'club': 'Universitatea Cluj', 'strength': 71, 'league': 'Liga 1', 'budget': 6_000_000},
    {'club': 'Hermannstadt', 'strength': 68, 'league': 'Liga 1', 'budget': 4_800_000},
    {'club': 'UTA Arad', 'strength': 67, 'league': 'Liga 1', 'budget': 4_500_000},
    {'club': 'Otelul Galati', 'strength': 66, 'league': 'Liga 1', 'budget': 4_200_000},
    {'club': 'Poli Iasi', 'strength': 65, 'league': 'Liga 1', 'budget': 4_000_000},
    {'club': 'Gloria Buzau', 'strength': 64, 'league': 'Liga 1', 'budget': 3_800_000},
    {'club': 'Dinamo Bucuresti', 'strength': 73, 'league': 'Liga 1', 'budget': 5_200_000},
  ],
  'England': [
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
    {'club': 'Wolverhampton Wanderers', 'strength': 78, 'league': 'Premier League', 'budget': 200_000_000},
    {'club': 'Everton', 'strength': 77, 'league': 'Premier League', 'budget': 190_000_000},
    {'club': 'Nottingham Forest', 'strength': 76, 'league': 'Premier League', 'budget': 180_000_000},
    {'club': 'Fulham', 'strength': 75, 'league': 'Premier League', 'budget': 170_000_000},
    {'club': 'Brentford', 'strength': 74, 'league': 'Premier League', 'budget': 160_000_000},
    {'club': 'Crystal Palace', 'strength': 73, 'league': 'Premier League', 'budget': 150_000_000},
    {'club': 'Bournemouth', 'strength': 72, 'league': 'Premier League', 'budget': 140_000_000},
    {'club': 'Southampton', 'strength': 71, 'league': 'Premier League', 'budget': 130_000_000},
    {'club': 'Ipswich Town', 'strength': 70, 'league': 'Premier League', 'budget': 120_000_000},
    {'club': 'Leicester City', 'strength': 79, 'league': 'Premier League', 'budget': 200_000_000},
    {'club': 'Leeds United', 'strength': 78, 'league': 'Championship', 'budget': 48_000_000},
    {'club': 'Norwich City', 'strength': 74, 'league': 'Championship', 'budget': 34_000_000},
    {'club': 'Watford', 'strength': 73, 'league': 'Championship', 'budget': 29_000_000},
    {'club': 'Swansea City', 'strength': 71, 'league': 'Championship', 'budget': 27_000_000},
    {'club': 'Stoke City', 'strength': 70, 'league': 'Championship', 'budget': 21_000_000},
  ],
  'Spain': [
    {'club': 'Real Madrid', 'strength': 96, 'league': 'La Liga', 'budget': 800_000_000},
    {'club': 'Barcelona', 'strength': 94, 'league': 'La Liga', 'budget': 700_000_000},
    {'club': 'Atletico Madrid', 'strength': 92, 'league': 'La Liga', 'budget': 600_000_000},
    {'club': 'Sevilla', 'strength': 86, 'league': 'La Liga', 'budget': 290_000_000},
    {'club': 'Valencia', 'strength': 82, 'league': 'La Liga', 'budget': 210_000_000},
    {'club': 'Real Betis', 'strength': 83, 'league': 'La Liga', 'budget': 188_000_000},
    {'club': 'Villarreal', 'strength': 85, 'league': 'La Liga', 'budget': 250_000_000},
    {'club': 'Real Sociedad', 'strength': 84, 'league': 'La Liga', 'budget': 230_000_000},
    {'club': 'Athletic Bilbao', 'strength': 81, 'league': 'La Liga', 'budget': 200_000_000},
    {'club': 'Girona', 'strength': 80, 'league': 'La Liga', 'budget': 180_000_000},
    {'club': 'Osasuna', 'strength': 77, 'league': 'La Liga', 'budget': 150_000_000},
    {'club': 'Celta Vigo', 'strength': 76, 'league': 'La Liga', 'budget': 140_000_000},
    {'club': 'Rayo Vallecano', 'strength': 74, 'league': 'La Liga', 'budget': 120_000_000},
    {'club': 'Getafe', 'strength': 73, 'league': 'La Liga', 'budget': 110_000_000},
    {'club': 'Alaves', 'strength': 72, 'league': 'La Liga', 'budget': 100_000_000},
    {'club': 'Mallorca', 'strength': 71, 'league': 'La Liga', 'budget': 90_000_000},
    {'club': 'Espanyol', 'strength': 78, 'league': 'La Liga', 'budget': 130_000_000},
    {'club': 'Leganes', 'strength': 70, 'league': 'La Liga', 'budget': 85_000_000},
    {'club': 'Valladolid', 'strength': 69, 'league': 'La Liga', 'budget': 80_000_000},
    {'club': 'Las Palmas', 'strength': 68, 'league': 'La Liga', 'budget': 75_000_000},
  ],
  'Italy': [
    {'club': 'Juventus', 'strength': 92, 'league': 'Serie A', 'budget': 500_000_000},
    {'club': 'Inter Milan', 'strength': 93, 'league': 'Serie A', 'budget': 480_000_000},
    {'club': 'AC Milan', 'strength': 91, 'league': 'Serie A', 'budget': 450_000_000},
    {'club': 'Napoli', 'strength': 90, 'league': 'Serie A', 'budget': 400_000_000},
    {'club': 'Roma', 'strength': 86, 'league': 'Serie A', 'budget': 300_000_000},
    {'club': 'Lazio', 'strength': 85, 'league': 'Serie A', 'budget': 280_000_000},
    {'club': 'Atalanta', 'strength': 84, 'league': 'Serie A', 'budget': 250_000_000},
    {'club': 'Fiorentina', 'strength': 82, 'league': 'Serie A', 'budget': 200_000_000},
    {'club': 'Torino', 'strength': 78, 'league': 'Serie A', 'budget': 150_000_000},
    {'club': 'Bologna', 'strength': 79, 'league': 'Serie A', 'budget': 160_000_000},
    {'club': 'Udinese', 'strength': 77, 'league': 'Serie A', 'budget': 140_000_000},
    {'club': 'Sassuolo', 'strength': 76, 'league': 'Serie A', 'budget': 130_000_000},
    {'club': 'Empoli', 'strength': 73, 'league': 'Serie A', 'budget': 110_000_000},
    {'club': 'Monza', 'strength': 74, 'league': 'Serie A', 'budget': 120_000_000},
    {'club': 'Genoa', 'strength': 75, 'league': 'Serie A', 'budget': 125_000_000},
    {'club': 'Cagliari', 'strength': 73, 'league': 'Serie A', 'budget': 115_000_000},
    {'club': 'Lecce', 'strength': 72, 'league': 'Serie A', 'budget': 105_000_000},
    {'club': 'Verona', 'strength': 71, 'league': 'Serie A', 'budget': 100_000_000},
    {'club': 'Parma', 'strength': 76, 'league': 'Serie A', 'budget': 135_000_000},
    {'club': 'Como', 'strength': 70, 'league': 'Serie A', 'budget': 95_000_000},
  ],
  'Germany': [
    {'club': 'Bayern Munich', 'strength': 95, 'league': 'Bundesliga', 'budget': 600_000_000},
    {'club': 'Borussia Dortmund', 'strength': 90, 'league': 'Bundesliga', 'budget': 400_000_000},
    {'club': 'RB Leipzig', 'strength': 88, 'league': 'Bundesliga', 'budget': 350_000_000},
    {'club': 'Bayer Leverkusen', 'strength': 87, 'league': 'Bundesliga', 'budget': 320_000_000},
    {'club': 'Eintracht Frankfurt', 'strength': 83, 'league': 'Bundesliga', 'budget': 250_000_000},
    {'club': 'VfL Wolfsburg', 'strength': 81, 'league': 'Bundesliga', 'budget': 220_000_000},
    {'club': 'Borussia Monchengladbach', 'strength': 80, 'league': 'Bundesliga', 'budget': 200_000_000},
    {'club': 'VfB Stuttgart', 'strength': 79, 'league': 'Bundesliga', 'budget': 180_000_000},
    {'club': 'SC Freiburg', 'strength': 78, 'league': 'Bundesliga', 'budget': 170_000_000},
    {'club': 'TSG Hoffenheim', 'strength': 77, 'league': 'Bundesliga', 'budget': 160_000_000},
    {'club': '1. FSV Mainz 05', 'strength': 76, 'league': 'Bundesliga', 'budget': 150_000_000},
    {'club': 'FC Augsburg', 'strength': 75, 'league': 'Bundesliga', 'budget': 140_000_000},
    {'club': 'Werder Bremen', 'strength': 77, 'league': 'Bundesliga', 'budget': 155_000_000},
    {'club': 'Union Berlin', 'strength': 78, 'league': 'Bundesliga', 'budget': 165_000_000},
    {'club': 'VfL Bochum', 'strength': 73, 'league': 'Bundesliga', 'budget': 120_000_000},
    {'club': '1. FC Koln', 'strength': 76, 'league': 'Bundesliga', 'budget': 145_000_000},
    {'club': 'Heidenheim', 'strength': 72, 'league': 'Bundesliga', 'budget': 110_000_000},
    {'club': 'Holstein Kiel', 'strength': 71, 'league': 'Bundesliga', 'budget': 105_000_000},
  ],
  'France': [
    {'club': 'Paris Saint-Germain', 'strength': 94, 'league': 'Ligue 1', 'budget': 700_000_000},
    {'club': 'Olympique de Marseille', 'strength': 85, 'league': 'Ligue 1', 'budget': 250_000_000},
    {'club': 'AS Monaco', 'strength': 86, 'league': 'Ligue 1', 'budget': 280_000_000},
    {'club': 'Olympique Lyonnais', 'strength': 84, 'league': 'Ligue 1', 'budget': 230_000_000},
    {'club': 'Lille OSC', 'strength': 82, 'league': 'Ligue 1', 'budget': 200_000_000},
    {'club': 'Stade Rennais', 'strength': 81, 'league': 'Ligue 1', 'budget': 180_000_000},
    {'club': 'OGC Nice', 'strength': 80, 'league': 'Ligue 1', 'budget': 170_000_000},
    {'club': 'RC Lens', 'strength': 79, 'league': 'Ligue 1', 'budget': 160_000_000},
    {'club': 'Montpellier HSC', 'strength': 77, 'league': 'Ligue 1', 'budget': 140_000_000},
    {'club': 'Strasbourg', 'strength': 76, 'league': 'Ligue 1', 'budget': 130_000_000},
    {'club': 'Nantes', 'strength': 75, 'league': 'Ligue 1', 'budget': 120_000_000},
    {'club': 'Toulouse', 'strength': 74, 'league': 'Ligue 1', 'budget': 110_000_000},
    {'club': 'Brest', 'strength': 73, 'league': 'Ligue 1', 'budget': 100_000_000},
    {'club': 'Reims', 'strength': 72, 'league': 'Ligue 1', 'budget': 95_000_000},
    {'club': 'Lorient', 'strength': 71, 'league': 'Ligue 1', 'budget': 90_000_000},
    {'club': 'Clermont Foot', 'strength': 70, 'league': 'Ligue 1', 'budget': 85_000_000},
    {'club': 'Saint-Etienne', 'strength': 76, 'league': 'Ligue 1', 'budget': 125_000_000},
    {'club': 'Angers SCO', 'strength': 71, 'league': 'Ligue 1', 'budget': 88_000_000},
  ],
  'Portugal': [
    {'club': 'SL Benfica', 'strength': 88, 'league': 'Primeira Liga', 'budget': 200_000_000},
    {'club': 'FC Porto', 'strength': 89, 'league': 'Primeira Liga', 'budget': 220_000_000},
    {'club': 'Sporting CP', 'strength': 87, 'league': 'Primeira Liga', 'budget': 190_000_000},
    {'club': 'SC Braga', 'strength': 82, 'league': 'Primeira Liga', 'budget': 120_000_000},
    {'club': 'Vitoria Guimaraes', 'strength': 79, 'league': 'Primeira Liga', 'budget': 90_000_000},
    {'club': 'Famalicao', 'strength': 76, 'league': 'Primeira Liga', 'budget': 70_000_000},
    {'club': 'Moreirense', 'strength': 74, 'league': 'Primeira Liga', 'budget': 60_000_000},
    {'club': 'Boavista', 'strength': 73, 'league': 'Primeira Liga', 'budget': 55_000_000},
    {'club': 'Gil Vicente', 'strength': 72, 'league': 'Primeira Liga', 'budget': 50_000_000},
    {'club': 'Estoril', 'strength': 71, 'league': 'Primeira Liga', 'budget': 48_000_000},
    {'club': 'Rio Ave', 'strength': 70, 'league': 'Primeira Liga', 'budget': 45_000_000},
    {'club': 'Portimonense', 'strength': 69, 'league': 'Primeira Liga', 'budget': 42_000_000},
    {'club': 'Casa Pia', 'strength': 68, 'league': 'Primeira Liga', 'budget': 40_000_000},
    {'club': 'Arouca', 'strength': 70, 'league': 'Primeira Liga', 'budget': 43_000_000},
    {'club': 'Santa Clara', 'strength': 71, 'league': 'Primeira Liga', 'budget': 46_000_000},
    {'club': 'Nacional', 'strength': 69, 'league': 'Primeira Liga', 'budget': 41_000_000},
    {'club': 'Estrela Amadora', 'strength': 67, 'league': 'Primeira Liga', 'budget': 38_000_000},
    {'club': 'AVS', 'strength': 66, 'league': 'Primeira Liga', 'budget': 35_000_000},
  ],
  'Netherlands': [
    {'club': 'Ajax', 'strength': 89, 'league': 'Eredivisie', 'budget': 200_000_000},
    {'club': 'PSV Eindhoven', 'strength': 88, 'league': 'Eredivisie', 'budget': 180_000_000},
    {'club': 'Feyenoord', 'strength': 86, 'league': 'Eredivisie', 'budget': 150_000_000},
    {'club': 'AZ Alkmaar', 'strength': 80, 'league': 'Eredivisie', 'budget': 100_000_000},
    {'club': 'FC Twente', 'strength': 79, 'league': 'Eredivisie', 'budget': 90_000_000},
    {'club': 'FC Utrecht', 'strength': 77, 'league': 'Eredivisie', 'budget': 80_000_000},
    {'club': 'Sparta Rotterdam', 'strength': 75, 'league': 'Eredivisie', 'budget': 70_000_000},
    {'club': 'Heerenveen', 'strength': 74, 'league': 'Eredivisie', 'budget': 65_000_000},
    {'club': 'Go Ahead Eagles', 'strength': 72, 'league': 'Eredivisie', 'budget': 55_000_000},
    {'club': 'Fortuna Sittard', 'strength': 71, 'league': 'Eredivisie', 'budget': 50_000_000},
    {'club': 'NEC Nijmegen', 'strength': 70, 'league': 'Eredivisie', 'budget': 48_000_000},
    {'club': 'Heracles Almelo', 'strength': 69, 'league': 'Eredivisie', 'budget': 45_000_000},
    {'club': 'PEC Zwolle', 'strength': 68, 'league': 'Eredivisie', 'budget': 42_000_000},
    {'club': 'Almere City', 'strength': 67, 'league': 'Eredivisie', 'budget': 40_000_000},
    {'club': 'RKC Waalwijk', 'strength': 66, 'league': 'Eredivisie', 'budget': 38_000_000},
    {'club': 'Willem II', 'strength': 70, 'league': 'Eredivisie', 'budget': 46_000_000},
    {'club': 'NAC Breda', 'strength': 69, 'league': 'Eredivisie', 'budget': 43_000_000},
    {'club': 'Groningen', 'strength': 71, 'league': 'Eredivisie', 'budget': 47_000_000},
  ],
  'Turkey': [
    {'club': 'Galatasaray', 'strength': 86, 'league': 'Süper Lig', 'budget': 120_000_000},
    {'club': 'Fenerbahce', 'strength': 87, 'league': 'Süper Lig', 'budget': 130_000_000},
    {'club': 'Besiktas', 'strength': 85, 'league': 'Süper Lig', 'budget': 110_000_000},
    {'club': 'Trabzonspor', 'strength': 82, 'league': 'Süper Lig', 'budget': 90_000_000},
    {'club': 'Basaksehir', 'strength': 79, 'league': 'Süper Lig', 'budget': 70_000_000},
    {'club': 'Bursaspor', 'strength': 76, 'league': 'Süper Lig', 'budget': 55_000_000},
    {'club': 'Adana Demirspor', 'strength': 77, 'league': 'Süper Lig', 'budget': 60_000_000},
    {'club': 'Konyaspor', 'strength': 75, 'league': 'Süper Lig', 'budget': 50_000_000},
    {'club': 'Antalyaspor', 'strength': 74, 'league': 'Süper Lig', 'budget': 48_000_000},
    {'club': 'Gaziantep FK', 'strength': 72, 'league': 'Süper Lig', 'budget': 45_000_000},
    {'club': 'Alanyaspor', 'strength': 73, 'league': 'Süper Lig', 'budget': 47_000_000},
    {'club': 'Kayserispor', 'strength': 71, 'league': 'Süper Lig', 'budget': 43_000_000},
    {'club': 'Hatayspor', 'strength': 70, 'league': 'Süper Lig', 'budget': 40_000_000},
    {'club': 'Rizespor', 'strength': 71, 'league': 'Süper Lig', 'budget': 42_000_000},
    {'club': 'Samsunspor', 'strength': 72, 'league': 'Süper Lig', 'budget': 44_000_000},
    {'club': 'Pendikspor', 'strength': 69, 'league': 'Süper Lig', 'budget': 38_000_000},
    {'club': 'Karagumruk', 'strength': 70, 'league': 'Süper Lig', 'budget': 41_000_000},
    {'club': 'Ankaragucu', 'strength': 71, 'league': 'Süper Lig', 'budget': 43_000_000},
    {'club': 'Sivasspor', 'strength': 73, 'league': 'Süper Lig', 'budget': 46_000_000},
    {'club': 'Eyupspor', 'strength': 70, 'league': 'Süper Lig', 'budget': 40_000_000},
  ],
  'Greece': [
    {'club': 'Olympiacos', 'strength': 84, 'league': 'Super League Greece', 'budget': 80_000_000},
    {'club': 'Panathinaikos', 'strength': 83, 'league': 'Super League Greece', 'budget': 75_000_000},
    {'club': 'AEK Athens', 'strength': 82, 'league': 'Super League Greece', 'budget': 70_000_000},
    {'club': 'PAOK', 'strength': 81, 'league': 'Super League Greece', 'budget': 65_000_000},
    {'club': 'Aris Thessaloniki', 'strength': 77, 'league': 'Super League Greece', 'budget': 40_000_000},
    {'club': 'Panetolikos', 'strength': 71, 'league': 'Super League Greece', 'budget': 25_000_000},
    {'club': 'Asteras Tripolis', 'strength': 70, 'league': 'Super League Greece', 'budget': 22_000_000},
    {'club': 'OFI Crete', 'strength': 72, 'league': 'Super League Greece', 'budget': 28_000_000},
    {'club': 'Atromitos', 'strength': 71, 'league': 'Super League Greece', 'budget': 26_000_000},
    {'club': 'Volos NFC', 'strength': 69, 'league': 'Super League Greece', 'budget': 20_000_000},
    {'club': 'Panserraikos', 'strength': 68, 'league': 'Super League Greece', 'budget': 18_000_000},
    {'club': 'Lamia', 'strength': 67, 'league': 'Super League Greece', 'budget': 16_000_000},
    {'club': 'Kallithea', 'strength': 66, 'league': 'Super League Greece', 'budget': 15_000_000},
    {'club': 'Levadiakos', 'strength': 67, 'league': 'Super League Greece', 'budget': 17_000_000},
  ],
  'Belgium': [
    {'club': 'Club Brugge', 'strength': 82, 'league': 'Pro League', 'budget': 80_000_000},
    {'club': 'Royal Antwerp', 'strength': 78, 'league': 'Pro League', 'budget': 60_000_000},
    {'club': 'Genk', 'strength': 80, 'league': 'Pro League', 'budget': 70_000_000},
    {'club': 'Anderlecht', 'strength': 81, 'league': 'Pro League', 'budget': 75_000_000},
    {'club': 'Standard Liege', 'strength': 76, 'league': 'Pro League', 'budget': 50_000_000},
    {'club': 'Gent', 'strength': 77, 'league': 'Pro League', 'budget': 55_000_000},
    {'club': 'Union Saint-Gilloise', 'strength': 79, 'league': 'Pro League', 'budget': 65_000_000},
    {'club': 'Cercle Brugge', 'strength': 73, 'league': 'Pro League', 'budget': 40_000_000},
    {'club': 'Mechelen', 'strength': 72, 'league': 'Pro League', 'budget': 35_000_000},
    {'club': 'Charleroi', 'strength': 71, 'league': 'Pro League', 'budget': 30_000_000},
    {'club': 'Sint-Truiden', 'strength': 68, 'league': 'Pro League', 'budget': 25_000_000},
    {'club': 'Kortrijk', 'strength': 67, 'league': 'Pro League', 'budget': 22_000_000},
    {'club': 'Westerlo', 'strength': 69, 'league': 'Pro League', 'budget': 28_000_000},
    {'club': 'Eupen', 'strength': 66, 'league': 'Pro League', 'budget': 20_000_000},
    {'club': 'Oostende', 'strength': 65, 'league': 'Pro League', 'budget': 18_000_000},
    {'club': 'Seraing', 'strength': 64, 'league': 'Pro League', 'budget': 15_000_000},
    {'club': 'Beerschot', 'strength': 70, 'league': 'Pro League', 'budget': 32_000_000},
    {'club': 'Dender', 'strength': 63, 'league': 'Pro League', 'budget': 12_000_000},
  ],
  'Brazil': [
    {'club': 'Flamengo', 'strength': 85, 'league': 'Campeonato Brasileiro Série A', 'budget': 120_000_000},
    {'club': 'Palmeiras', 'strength': 84, 'league': 'Campeonato Brasileiro Série A', 'budget': 110_000_000},
    {'club': 'Corinthians', 'strength': 82, 'league': 'Campeonato Brasileiro Série A', 'budget': 100_000_000},
    {'club': 'Sao Paulo', 'strength': 81, 'league': 'Campeonato Brasileiro Série A', 'budget': 95_000_000},
    {'club': 'Atletico Mineiro', 'strength': 80, 'league': 'Campeonato Brasileiro Série A', 'budget': 90_000_000},
    {'club': 'Internacional', 'strength': 78, 'league': 'Campeonato Brasileiro Série A', 'budget': 80_000_000},
    {'club': 'Gremio', 'strength': 77, 'league': 'Campeonato Brasileiro Série A', 'budget': 75_000_000},
    {'club': 'Fluminense', 'strength': 79, 'league': 'Campeonato Brasileiro Série A', 'budget': 85_000_000},
    {'club': 'Botafogo', 'strength': 76, 'league': 'Campeonato Brasileiro Série A', 'budget': 70_000_000},
    {'club': 'Santos', 'strength': 75, 'league': 'Campeonato Brasileiro Série A', 'budget': 65_000_000},
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
  {'name': "World Cup", 'prestige': 100},
  {'name': "European Championship", 'prestige': 95},
  {'name': "Copa America", 'prestige': 93},
  {'name': "African Cup of Nations", 'prestige': 88},
  {'name': "Asian Cup", 'prestige': 85}
];

// Comprehensive names for players
export const FIRST_NAMES = [
  // English/American names
  "Alex", "John", "James", "William", "Oliver", "Harry", "George", "Charlie", "Jack", "Jacob",
  "Thomas", "Oscar", "Lucas", "Henry", "Samuel", "Daniel", "Michael", "David", "Andrew", "Benjamin",
  "Christopher", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Joshua", "Kenneth", "Kevin",
  
  // Spanish/Latin names
  "Mario", "Diego", "Sergio", "Carlos", "Juan", "Miguel", "Pedro", "Rafael", "Gabriel", "Lucas",
  "Bruno", "Felipe", "Thiago", "Alejandro", "Santiago", "Nicolás", "Sebastián", "Mateo", "Adrián", "Ángel",
  "Javier", "Francisco", "Fernando", "Ricardo", "Roberto", "Eduardo", "Andrés", "Gonzalo", "Emilio", "Raúl",
  
  // Italian names
  "Matteo", "Giovanni", "Lorenzo", "Marco", "Alessandro", "Andrea", "Stefano", "Francesco", "Giuseppe", "Antonio",
  "Luca", "Davide", "Simone", "Federico", "Riccardo", "Tommaso", "Gabriele", "Filippo", "Jacopo", "Edoardo",
  
  // French names
  "Pierre", "Kylian", "Antoine", "Hugo", "Louis", "Baptiste", "Théo", "Maxime", "Alexandre", "Nicolas",
  "Julien", "Romain", "Florian", "Adrien", "Mathieu", "Benjamin", "Sébastien", "Vincent", "Olivier", "Pascal",
  
  // German names
  "Hans", "Lars", "Jens", "Sven", "Niels", "Erik", "Thomas", "Michael", "Stefan", "Christian",
  "Sebastian", "Matthias", "Andreas", "Markus", "Martin", "Patrick", "Daniel", "Alexander", "Tobias", "Florian",
  
  // Portuguese names
  "Rui", "João", "Diogo", "André", "Bernardo", "Gonçalo", "Tiago", "Ricardo", "Pedro", "Miguel",
  "Nuno", "Paulo", "Carlos", "Luís", "António", "José", "Francisco", "Bruno", "Vítor", "Hélder",
  
  // Romanian names
  "Andrei", "Florin", "Alexandru", "Mihai", "Adrian", "Cristian", "Daniel", "Ionuț", "Marius", "George",
  "Bogdan", "Vlad", "Radu", "Ștefan", "Cătălin", "Gabriel", "Cosmin", "Silviu", "Laurențiu", "Ciprian",
  
  // Arabic names
  "Mohamed", "Ahmed", "Youssef", "Ali", "Ibrahim", "Omar", "Hassan", "Khalid", "Faisal", "Amir",
  "Mustafa", "Mahmoud", "Rashid", "Tariq", "Samir", "Karim", "Nasser", "Walid", "Marwan", "Adel",
  
  // African names
  "Emmanuel", "Chukwuemeka", "Tunde", "Adebayo", "Olumide", "Kwame", "Kofi", "Mamadou", "Ousmane", "Bakary",
  "Seydou", "Ibrahim", "Moussa", "Abdoulaye", "Amadou", "Souleymane", "Boubacar", "Cheikh", "Lamine", "Saliou",
  
  // Scandinavian names
  "Magnus", "Björn", "Anders", "Nils", "Gustav", "Henrik", "Johan", "Mikael", "Oskar", "Viktor",
  "Rasmus", "Emil", "Simon", "Adam", "Filip", "Anton", "Elias", "Noah", "William", "Hugo",
  
  // Eastern European names
  "Dimitri", "Ivan", "Nikolai", "Sergei", "Alexei", "Pavel", "Andrej", "Marko", "Petar", "Stefan",
  "Nemanja", "Miloš", "Dušan", "Bojan", "Zoran", "Dragan", "Milan", "Dejan", "Goran", "Saša",
  
  // Asian names
  "Kenji", "Hiroshi", "Takashi", "Yuto", "Daichi", "Haruto", "Sota", "Ren", "Kai", "Riku",
  "Min-jun", "Seo-jun", "Do-yoon", "Eun-woo", "Si-woo", "Ye-jun", "Yu-jin", "Ha-jun", "Woo-jin", "Jun-seo"
];

export const LAST_NAMES = [
  // English/British surnames
  "Smith", "Brown", "Taylor", "Wilson", "Davis", "Johnson", "Williams", "Jones", "Miller", "Moore",
  "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
  "Clark", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "King", "Wright", "Lopez",
  
  // Spanish surnames
  "Popescu", "Rossi", "Müller", "Gómez", "Blanc", "Torres", "Ionescu", "Doe", "Silva", "Rodríguez",
  "Martínez", "Hernández", "López", "Pérez", "González", "Sánchez", "Ramírez", "Cruz", "Flores", "Gutierrez",
  "Morales", "Ortiz", "Jiménez", "Ruiz", "Vargas", "Castillo", "Romero", "Herrera", "Medina", "Guerrero",
  
  // Italian surnames
  "Santos", "Ferreira", "Oliveira", "Costa", "Pereira", "Rizzo", "Conti", "Bianchi", "Romano", "Greco",
  "Esposito", "Fontana", "Santoro", "Mariani", "Rinaldi", "Colombo", "Benedetti", "Pellegrini", "Vitale", "Donati",
  
  // French surnames
  "Mbappé", "Giroud", "Pogba", "Kanté", "Deschamps", "Dupont", "Martin", "Bernard", "Petit", "Robert",
  "Richard", "Durand", "Leroy", "Moreau", "Simon", "Laurent", "Lefebvre", "Michel", "Garcia", "David",
  
  // German surnames
  "Schmidt", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Koch", "Richter", "Klein",
  "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun", "Krüger", "Hartmann", "Lange", "Schmitt",
  
  // Portuguese surnames
  "Tanaka", "Sato", "Suzuki", "Takahashi", "Yamamoto", "Watanabe", "Ito", "Nakamura", "Kobayashi", "Saito",
  "Kato", "Yoshida", "Yamada", "Sasaki", "Yamaguchi", "Matsumoto", "Inoue", "Kimura", "Hayashi", "Shimizu",
  
  // Romanian surnames
  "Adeyemi", "Okafor", "Nwankwo", "Okonkwo", "Iheanacho", "Ivanov", "Petrov", "Smirnov", "Volkov", "Kuznetsov",
  "Sokolov", "Lebedev", "Kozlov", "Novikov", "Morozov", "Petrov", "Volkov", "Solovyov", "Vasiliev", "Zaitsev",
  
  // Arabic surnames
  "Ali", "Ahmed", "Khan", "Rahman", "Hussein", "Hassan", "Mohamed", "Ibrahim", "Omar", "Youssef",
  "Mansour", "Farouk", "Nasser", "Saeed", "Khalil", "Mahmoud", "Rashid", "Salim", "Tamer", "Waleed",
  
  // Korean surnames
  "Park", "Kim", "Lee", "Choi", "Jung", "Kang", "Cho", "Yoon", "Jang", "Lim",
  "Han", "Oh", "Seo", "Shin", "Kwon", "Hwang", "Ahn", "Song", "Hong", "Yang",
  
  // Dutch surnames
  "Van Dijk", "De Jong", "De Boer", "Van Persie", "Sneijder", "Van der Berg", "De Vries", "Van Leeuwen", "De Wit", "Janssen",
  "Van der Meer", "De Groot", "Peters", "Van den Berg", "Hendriks", "Van der Laan", "Dekker", "Bakker", "Visser", "Smit",
  
  // Scandinavian surnames
  "Cruz", "Ramos", "Vega", "Morales", "Castillo", "Andersson", "Johansson", "Karlsson", "Nilsson", "Eriksson",
  "Larsson", "Olsson", "Persson", "Svensson", "Gustafsson", "Pettersson", "Jonsson", "Jansson", "Hansson", "Bengtsson",
  
  // Turkish surnames
  "Özil", "Çalhanoglu", "Yılmaz", "Şahin", "Turan", "Demiral", "Tosun", "Aktürkoğlu", "Kökçü", "Ünder",
  "Yazıcı", "Kabak", "Ayhan", "Çelik", "Karaman", "Ünal", "Soyuncu", "Yokuslu", "Kahveci", "Dervişoğlu"
];

export const NATIONALITIES = [
  // European countries
  "ROM", "ENG", "FRA", "GER", "ESP", "ITA", "NED", "POR", "BEL", "SUI",
  "AUT", "POL", "CZE", "SVK", "HUN", "BUL", "GRE", "TUR", "SWE", "NOR",
  "DEN", "FIN", "ISL", "IRL", "SCO", "WAL", "CRO", "SRB", "BIH", "SVN",
  "ALB", "MKD", "MNE", "UKR", "RUS", "BLR", "LTU", "LVA", "EST",
  
  // South American countries
  "BRA", "ARG", "URU", "CHI", "COL", "PER", "VEN", "ECU", "PAR", "BOL",
  "GUY", "SUR",
  
  // North American countries
  "USA", "MEX", "CAN", "CRC", "PAN", "HON", "SLV", "GUA", "NIC", "BLZ",
  "JAM", "TRI", "HAI", "DOM", "CUB",
  
  // African countries
  "NGA", "GHA", "CMR", "SEN", "CIV", "RSA", "KEN", "UGA", "ETH", "MAR",
  "ALG", "TUN", "EGY", "MLI", "BUR", "GAB", "CGO", "ANG", "MOZ", "ZIM",
  "ZAM", "TAN", "RWA", "BEN", "TOG", "GUI", "LBR", "SLE", "GAM", "CPV",
  
  // Asian countries
  "JPN", "KOR", "CHN", "AUS", "IND", "THA", "VIE", "IDN", "MAS", "PHI",
  "SGP", "IRN", "IRQ", "JOR", "SYR", "LEB", "ISR", "KSA", "UAE", "QAT",
  "KUW", "BHR", "OMN", "YEM", "AFG", "PAK", "BAN", "SRI", "NPL", "BHU",
  "MYA", "LAO", "KHM", "BRU", "TLS", "MGL", "UZB", "KAZ", "KGZ", "TJK",
  "TKM", "ARM", "GEO", "AZE"
];

// National cup names by country
export const NATIONAL_CUPS: Record<string, string> = {
  'Romania': 'Cupa României',
  'England': 'FA Cup',
  'Spain': 'Copa del Rey',
  'Italy': 'Coppa Italia',
  'Germany': 'DFB-Pokal',
  'France': 'Coupe de France',
  'Portugal': 'Taça de Portugal',
  'Netherlands': 'KNVB Beker',
  'Turkey': 'Türkiye Kupası',
  'Greece': 'Kypello Elladas',
  'Switzerland': 'Swiss Cup',
  'Croatia': 'Hrvatski nogometni kup',
  'Belgium': 'Belgian Cup',
  'Austria': 'ÖFB-Cup',
  'Scotland': 'Scottish Cup',
  'Norway': 'Norwegian Football Cup',
  'Sweden': 'Svenska Cupen',
  'Denmark': 'Danish Cup',
  'Poland': 'Polish Cup',
  'Czech Republic': 'Czech Cup',
  'Brazil': 'Copa do Brasil',
  'Argentina': 'Copa Argentina',
  'Mexico': 'Copa MX',
  'USA': 'US Open Cup',
  'Japan': 'Emperor\'s Cup',
  'South Korea': 'Korean FA Cup',
  'Australia': 'FFA Cup'
};
