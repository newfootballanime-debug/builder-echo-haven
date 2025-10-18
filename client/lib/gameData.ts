// Game positions and abbreviations
export const POSITIONS = [
  "Goalkeeper",
  "Right Back",
  "Centre Back",
  "Left Back",
  "Defensive Midfielder",
  "Central Midfielder",
  "Attacking Midfielder",
  "Right Midfielder",
  "Left Midfielder",
  "Right Winger",
  "Striker",
  "Left Winger",
];

export const POS_ABB: Record<string, string> = {
  Goalkeeper: "GK",
  "Right Back": "RB",
  "Centre Back": "CB",
  "Left Back": "LB",
  "Defensive Midfielder": "CDM",
  "Central Midfielder": "CM",
  "Attacking Midfielder": "CAM",
  "Right Midfielder": "RM",
  "Left Midfielder": "LM",
  "Right Winger": "RW",
  Striker: "ST",
  "Left Winger": "LW",
};

export const FIFA_ATTRIBUTES = [
  "Pace",
  "Shooting",
  "Passing",
  "Dribbling",
  "Defending",
  "Physical",
];

// Comprehensive leagues by country
export const LEAGUES: Record<
  string,
  Array<{ name: string; size: number; budget: number }>
> = {
  Romania: [
    { name: "Liga 1", size: 16, budget: 30_000_000 },
    { name: "Liga 2", size: 20, budget: 5_000_000 },
  ],
  England: [
    { name: "Premier League", size: 20, budget: 150_000_000 },
    { name: "Championship", size: 24, budget: 25_000_000 },
    { name: "League One", size: 24, budget: 10_000_000 },
  ],
  Spain: [
    { name: "La Liga", size: 20, budget: 120_000_000 },
    { name: "Segunda División", size: 22, budget: 20_000_000 },
  ],
  Italy: [
    { name: "Serie A", size: 20, budget: 100_000_000 },
    { name: "Serie B", size: 20, budget: 15_000_000 },
  ],
  Germany: [
    { name: "Bundesliga", size: 18, budget: 90_000_000 },
    { name: "2. Bundesliga", size: 18, budget: 18_000_000 },
  ],
  France: [
    { name: "Ligue 1", size: 18, budget: 80_000_000 },
    { name: "Ligue 2", size: 20, budget: 12_000_000 },
  ],
  Portugal: [{ name: "Primeira Liga", size: 18, budget: 40_000_000 }],
  Netherlands: [{ name: "Eredivisie", size: 18, budget: 35_000_000 }],
  Turkey: [
    { name: "Süper Lig", size: 20, budget: 45_000_000 },
    { name: "1. Lig", size: 20, budget: 8_000_000 },
  ],
  Greece: [
    { name: "Super League Greece", size: 14, budget: 25_000_000 },
    { name: "Super League 2", size: 16, budget: 5_000_000 },
  ],
  Switzerland: [
    { name: "Swiss Super League", size: 12, budget: 20_000_000 },
    { name: "Swiss Challenge League", size: 10, budget: 4_000_000 },
  ],
  Croatia: [
    { name: "HNL", size: 10, budget: 15_000_000 },
    { name: "First NL", size: 12, budget: 3_000_000 },
  ],
  Belgium: [{ name: "Pro League", size: 18, budget: 35_000_000 }],
  Austria: [{ name: "Austrian Bundesliga", size: 12, budget: 15_000_000 }],
  Scotland: [{ name: "Scottish Premiership", size: 12, budget: 20_000_000 }],
  Norway: [{ name: "Eliteserien", size: 16, budget: 10_000_000 }],
  Sweden: [{ name: "Allsvenskan", size: 16, budget: 12_000_000 }],
  Denmark: [{ name: "Danish Superliga", size: 12, budget: 15_000_000 }],
  Poland: [{ name: "Ekstraklasa", size: 18, budget: 20_000_000 }],
  "Czech Republic": [
    { name: "Czech First League", size: 16, budget: 12_000_000 },
  ],
  Ukraine: [{ name: "Ukrainian Premier League", size: 16, budget: 18_000_000 }],
  Russia: [{ name: "Russian Premier League", size: 16, budget: 30_000_000 }],
  Brazil: [
    { name: "Campeonato Brasileiro Série A", size: 20, budget: 50_000_000 },
  ],
  Argentina: [{ name: "Liga Profesional", size: 28, budget: 25_000_000 }],
  Mexico: [{ name: "Liga MX", size: 18, budget: 30_000_000 }],
  USA: [{ name: "Major League Soccer", size: 30, budget: 40_000_000 }],
  Japan: [{ name: "J1 League", size: 18, budget: 25_000_000 }],
  "South Korea": [{ name: "K League 1", size: 12, budget: 15_000_000 }],
  Australia: [{ name: "A-League", size: 12, budget: 10_000_000 }],
};

// Comprehensive clubs by country with strength and budget
export const CLUBS: Record<
  string,
  Array<{ club: string; strength: number; league: string; budget: number }>
> = {
  Romania: [
    { club: "FCSB", strength: 82, league: "Liga 1", budget: 20_000_000 },
    {
      club: "Rapid Bucuresti",
      strength: 82,
      league: "Liga 1",
      budget: 20_000_000,
    },
    { club: "CFR Cluj", strength: 80, league: "Liga 1", budget: 16_000_000 },
    {
      club: "Farul Constanta",
      strength: 79,
      league: "Liga 1",
      budget: 13_000_000,
    },
    {
      club: "Universitatea Craiova",
      strength: 79,
      league: "Liga 1",
      budget: 12_000_000,
    },
    {
      club: "Petrolul Ploiesti",
      strength: 72,
      league: "Liga 1",
      budget: 6_500_000,
    },
    { club: "Sepsi OSK", strength: 74, league: "Liga 1", budget: 7_000_000 },
    { club: "FC Voluntari", strength: 70, league: "Liga 1", budget: 5_500_000 },
    { club: "FC Botosani", strength: 69, league: "Liga 1", budget: 5_000_000 },
    {
      club: "Universitatea Cluj",
      strength: 71,
      league: "Liga 1",
      budget: 6_000_000,
    },
    { club: "Hermannstadt", strength: 68, league: "Liga 1", budget: 4_800_000 },
    { club: "UTA Arad", strength: 67, league: "Liga 1", budget: 4_500_000 },
    {
      club: "Otelul Galati",
      strength: 66,
      league: "Liga 1",
      budget: 4_200_000,
    },
    { club: "Poli Iasi", strength: 65, league: "Liga 1", budget: 4_000_000 },
    { club: "Gloria Buzau", strength: 64, league: "Liga 1", budget: 3_800_000 },
    {
      club: "Dinamo Bucuresti",
      strength: 73,
      league: "Liga 1",
      budget: 5_200_000,
    },
  ],
  England: [
    {
      club: "Manchester City",
      strength: 95,
      league: "Premier League",
      budget: 610_000_000,
    },
    {
      club: "Liverpool",
      strength: 93,
      league: "Premier League",
      budget: 480_000_000,
    },
    {
      club: "Chelsea",
      strength: 91,
      league: "Premier League",
      budget: 470_000_000,
    },
    {
      club: "Arsenal",
      strength: 90,
      league: "Premier League",
      budget: 420_000_000,
    },
    {
      club: "Manchester United",
      strength: 88,
      league: "Premier League",
      budget: 410_000_000,
    },
    {
      club: "Tottenham Hotspur",
      strength: 86,
      league: "Premier League",
      budget: 380_000_000,
    },
    {
      club: "Newcastle United",
      strength: 85,
      league: "Premier League",
      budget: 350_000_000,
    },
    {
      club: "Aston Villa",
      strength: 83,
      league: "Premier League",
      budget: 300_000_000,
    },
    {
      club: "West Ham United",
      strength: 81,
      league: "Premier League",
      budget: 250_000_000,
    },
    {
      club: "Brighton & Hove Albion",
      strength: 80,
      league: "Premier League",
      budget: 220_000_000,
    },
    {
      club: "Wolverhampton Wanderers",
      strength: 78,
      league: "Premier League",
      budget: 200_000_000,
    },
    {
      club: "Everton",
      strength: 77,
      league: "Premier League",
      budget: 190_000_000,
    },
    {
      club: "Nottingham Forest",
      strength: 76,
      league: "Premier League",
      budget: 180_000_000,
    },
    {
      club: "Fulham",
      strength: 75,
      league: "Premier League",
      budget: 170_000_000,
    },
    {
      club: "Brentford",
      strength: 74,
      league: "Premier League",
      budget: 160_000_000,
    },
    {
      club: "Crystal Palace",
      strength: 73,
      league: "Premier League",
      budget: 150_000_000,
    },
    {
      club: "Bournemouth",
      strength: 72,
      league: "Premier League",
      budget: 140_000_000,
    },
    {
      club: "Southampton",
      strength: 71,
      league: "Premier League",
      budget: 130_000_000,
    },
    {
      club: "Ipswich Town",
      strength: 70,
      league: "Premier League",
      budget: 120_000_000,
    },
    {
      club: "Leicester City",
      strength: 79,
      league: "Premier League",
      budget: 200_000_000,
    },
    {
      club: "Leeds United",
      strength: 78,
      league: "Championship",
      budget: 48_000_000,
    },
    {
      club: "Norwich City",
      strength: 74,
      league: "Championship",
      budget: 34_000_000,
    },
    {
      club: "Watford",
      strength: 73,
      league: "Championship",
      budget: 29_000_000,
    },
    {
      club: "Swansea City",
      strength: 71,
      league: "Championship",
      budget: 27_000_000,
    },
    {
      club: "Stoke City",
      strength: 70,
      league: "Championship",
      budget: 21_000_000,
    },
  ],
  Spain: [
    {
      club: "Real Madrid",
      strength: 96,
      league: "La Liga",
      budget: 800_000_000,
    },
    { club: "Barcelona", strength: 94, league: "La Liga", budget: 700_000_000 },
    {
      club: "Atletico Madrid",
      strength: 92,
      league: "La Liga",
      budget: 600_000_000,
    },
    { club: "Sevilla", strength: 86, league: "La Liga", budget: 290_000_000 },
    { club: "Valencia", strength: 82, league: "La Liga", budget: 210_000_000 },
    {
      club: "Real Betis",
      strength: 83,
      league: "La Liga",
      budget: 188_000_000,
    },
    {
      club: "Villarreal",
      strength: 85,
      league: "La Liga",
      budget: 250_000_000,
    },
    {
      club: "Real Sociedad",
      strength: 84,
      league: "La Liga",
      budget: 230_000_000,
    },
    {
      club: "Athletic Bilbao",
      strength: 81,
      league: "La Liga",
      budget: 200_000_000,
    },
    { club: "Girona", strength: 80, league: "La Liga", budget: 180_000_000 },
    { club: "Osasuna", strength: 77, league: "La Liga", budget: 150_000_000 },
    {
      club: "Celta Vigo",
      strength: 76,
      league: "La Liga",
      budget: 140_000_000,
    },
    {
      club: "Rayo Vallecano",
      strength: 74,
      league: "La Liga",
      budget: 120_000_000,
    },
    { club: "Getafe", strength: 73, league: "La Liga", budget: 110_000_000 },
    { club: "Alaves", strength: 72, league: "La Liga", budget: 100_000_000 },
    { club: "Mallorca", strength: 71, league: "La Liga", budget: 90_000_000 },
    { club: "Espanyol", strength: 78, league: "La Liga", budget: 130_000_000 },
    { club: "Leganes", strength: 70, league: "La Liga", budget: 85_000_000 },
    { club: "Valladolid", strength: 69, league: "La Liga", budget: 80_000_000 },
    { club: "Las Palmas", strength: 68, league: "La Liga", budget: 75_000_000 },
  ],
  Italy: [
    { club: "Juventus", strength: 92, league: "Serie A", budget: 500_000_000 },
    {
      club: "Inter Milan",
      strength: 93,
      league: "Serie A",
      budget: 480_000_000,
    },
    { club: "AC Milan", strength: 91, league: "Serie A", budget: 450_000_000 },
    { club: "Napoli", strength: 90, league: "Serie A", budget: 400_000_000 },
    { club: "Roma", strength: 86, league: "Serie A", budget: 300_000_000 },
    { club: "Lazio", strength: 85, league: "Serie A", budget: 280_000_000 },
    { club: "Atalanta", strength: 84, league: "Serie A", budget: 250_000_000 },
    {
      club: "Fiorentina",
      strength: 82,
      league: "Serie A",
      budget: 200_000_000,
    },
    { club: "Torino", strength: 78, league: "Serie A", budget: 150_000_000 },
    { club: "Bologna", strength: 79, league: "Serie A", budget: 160_000_000 },
    { club: "Udinese", strength: 77, league: "Serie A", budget: 140_000_000 },
    { club: "Sassuolo", strength: 76, league: "Serie A", budget: 130_000_000 },
    { club: "Empoli", strength: 73, league: "Serie A", budget: 110_000_000 },
    { club: "Monza", strength: 74, league: "Serie A", budget: 120_000_000 },
    { club: "Genoa", strength: 75, league: "Serie A", budget: 125_000_000 },
    { club: "Cagliari", strength: 73, league: "Serie A", budget: 115_000_000 },
    { club: "Lecce", strength: 72, league: "Serie A", budget: 105_000_000 },
    { club: "Verona", strength: 71, league: "Serie A", budget: 100_000_000 },
    { club: "Parma", strength: 76, league: "Serie A", budget: 135_000_000 },
    { club: "Como", strength: 70, league: "Serie A", budget: 95_000_000 },
  ],
  Germany: [
    {
      club: "Bayern Munich",
      strength: 95,
      league: "Bundesliga",
      budget: 600_000_000,
    },
    {
      club: "Borussia Dortmund",
      strength: 90,
      league: "Bundesliga",
      budget: 400_000_000,
    },
    {
      club: "RB Leipzig",
      strength: 88,
      league: "Bundesliga",
      budget: 350_000_000,
    },
    {
      club: "Bayer Leverkusen",
      strength: 87,
      league: "Bundesliga",
      budget: 320_000_000,
    },
    {
      club: "Eintracht Frankfurt",
      strength: 83,
      league: "Bundesliga",
      budget: 250_000_000,
    },
    {
      club: "VfL Wolfsburg",
      strength: 81,
      league: "Bundesliga",
      budget: 220_000_000,
    },
    {
      club: "Borussia Monchengladbach",
      strength: 80,
      league: "Bundesliga",
      budget: 200_000_000,
    },
    {
      club: "VfB Stuttgart",
      strength: 79,
      league: "Bundesliga",
      budget: 180_000_000,
    },
    {
      club: "SC Freiburg",
      strength: 78,
      league: "Bundesliga",
      budget: 170_000_000,
    },
    {
      club: "TSG Hoffenheim",
      strength: 77,
      league: "Bundesliga",
      budget: 160_000_000,
    },
    {
      club: "1. FSV Mainz 05",
      strength: 76,
      league: "Bundesliga",
      budget: 150_000_000,
    },
    {
      club: "FC Augsburg",
      strength: 75,
      league: "Bundesliga",
      budget: 140_000_000,
    },
    {
      club: "Werder Bremen",
      strength: 77,
      league: "Bundesliga",
      budget: 155_000_000,
    },
    {
      club: "Union Berlin",
      strength: 78,
      league: "Bundesliga",
      budget: 165_000_000,
    },
    {
      club: "VfL Bochum",
      strength: 73,
      league: "Bundesliga",
      budget: 120_000_000,
    },
    {
      club: "1. FC Koln",
      strength: 76,
      league: "Bundesliga",
      budget: 145_000_000,
    },
    {
      club: "Heidenheim",
      strength: 72,
      league: "Bundesliga",
      budget: 110_000_000,
    },
    {
      club: "Holstein Kiel",
      strength: 71,
      league: "Bundesliga",
      budget: 105_000_000,
    },
  ],
  France: [
    {
      club: "Paris Saint-Germain",
      strength: 94,
      league: "Ligue 1",
      budget: 700_000_000,
    },
    {
      club: "Olympique de Marseille",
      strength: 85,
      league: "Ligue 1",
      budget: 250_000_000,
    },
    { club: "AS Monaco", strength: 86, league: "Ligue 1", budget: 280_000_000 },
    {
      club: "Olympique Lyonnais",
      strength: 84,
      league: "Ligue 1",
      budget: 230_000_000,
    },
    { club: "Lille OSC", strength: 82, league: "Ligue 1", budget: 200_000_000 },
    {
      club: "Stade Rennais",
      strength: 81,
      league: "Ligue 1",
      budget: 180_000_000,
    },
    { club: "OGC Nice", strength: 80, league: "Ligue 1", budget: 170_000_000 },
    { club: "RC Lens", strength: 79, league: "Ligue 1", budget: 160_000_000 },
    {
      club: "Montpellier HSC",
      strength: 77,
      league: "Ligue 1",
      budget: 140_000_000,
    },
    {
      club: "Strasbourg",
      strength: 76,
      league: "Ligue 1",
      budget: 130_000_000,
    },
    { club: "Nantes", strength: 75, league: "Ligue 1", budget: 120_000_000 },
    { club: "Toulouse", strength: 74, league: "Ligue 1", budget: 110_000_000 },
    { club: "Brest", strength: 73, league: "Ligue 1", budget: 100_000_000 },
    { club: "Reims", strength: 72, league: "Ligue 1", budget: 95_000_000 },
    { club: "Lorient", strength: 71, league: "Ligue 1", budget: 90_000_000 },
    {
      club: "Clermont Foot",
      strength: 70,
      league: "Ligue 1",
      budget: 85_000_000,
    },
    {
      club: "Saint-Etienne",
      strength: 76,
      league: "Ligue 1",
      budget: 125_000_000,
    },
    { club: "Angers SCO", strength: 71, league: "Ligue 1", budget: 88_000_000 },
  ],
  Portugal: [
    {
      club: "SL Benfica",
      strength: 88,
      league: "Primeira Liga",
      budget: 200_000_000,
    },
    {
      club: "FC Porto",
      strength: 89,
      league: "Primeira Liga",
      budget: 220_000_000,
    },
    {
      club: "Sporting CP",
      strength: 87,
      league: "Primeira Liga",
      budget: 190_000_000,
    },
    {
      club: "SC Braga",
      strength: 82,
      league: "Primeira Liga",
      budget: 120_000_000,
    },
    {
      club: "Vitoria Guimaraes",
      strength: 79,
      league: "Primeira Liga",
      budget: 90_000_000,
    },
    {
      club: "Famalicao",
      strength: 76,
      league: "Primeira Liga",
      budget: 70_000_000,
    },
    {
      club: "Moreirense",
      strength: 74,
      league: "Primeira Liga",
      budget: 60_000_000,
    },
    {
      club: "Boavista",
      strength: 73,
      league: "Primeira Liga",
      budget: 55_000_000,
    },
    {
      club: "Gil Vicente",
      strength: 72,
      league: "Primeira Liga",
      budget: 50_000_000,
    },
    {
      club: "Estoril",
      strength: 71,
      league: "Primeira Liga",
      budget: 48_000_000,
    },
    {
      club: "Rio Ave",
      strength: 70,
      league: "Primeira Liga",
      budget: 45_000_000,
    },
    {
      club: "Portimonense",
      strength: 69,
      league: "Primeira Liga",
      budget: 42_000_000,
    },
    {
      club: "Casa Pia",
      strength: 68,
      league: "Primeira Liga",
      budget: 40_000_000,
    },
    {
      club: "Arouca",
      strength: 70,
      league: "Primeira Liga",
      budget: 43_000_000,
    },
    {
      club: "Santa Clara",
      strength: 71,
      league: "Primeira Liga",
      budget: 46_000_000,
    },
    {
      club: "Nacional",
      strength: 69,
      league: "Primeira Liga",
      budget: 41_000_000,
    },
    {
      club: "Estrela Amadora",
      strength: 67,
      league: "Primeira Liga",
      budget: 38_000_000,
    },
    { club: "AVS", strength: 66, league: "Primeira Liga", budget: 35_000_000 },
  ],
  Netherlands: [
    { club: "Ajax", strength: 89, league: "Eredivisie", budget: 200_000_000 },
    {
      club: "PSV Eindhoven",
      strength: 88,
      league: "Eredivisie",
      budget: 180_000_000,
    },
    {
      club: "Feyenoord",
      strength: 86,
      league: "Eredivisie",
      budget: 150_000_000,
    },
    {
      club: "AZ Alkmaar",
      strength: 80,
      league: "Eredivisie",
      budget: 100_000_000,
    },
    {
      club: "FC Twente",
      strength: 79,
      league: "Eredivisie",
      budget: 90_000_000,
    },
    {
      club: "FC Utrecht",
      strength: 77,
      league: "Eredivisie",
      budget: 80_000_000,
    },
    {
      club: "Sparta Rotterdam",
      strength: 75,
      league: "Eredivisie",
      budget: 70_000_000,
    },
    {
      club: "Heerenveen",
      strength: 74,
      league: "Eredivisie",
      budget: 65_000_000,
    },
    {
      club: "Go Ahead Eagles",
      strength: 72,
      league: "Eredivisie",
      budget: 55_000_000,
    },
    {
      club: "Fortuna Sittard",
      strength: 71,
      league: "Eredivisie",
      budget: 50_000_000,
    },
    {
      club: "NEC Nijmegen",
      strength: 70,
      league: "Eredivisie",
      budget: 48_000_000,
    },
    {
      club: "Heracles Almelo",
      strength: 69,
      league: "Eredivisie",
      budget: 45_000_000,
    },
    {
      club: "PEC Zwolle",
      strength: 68,
      league: "Eredivisie",
      budget: 42_000_000,
    },
    {
      club: "Almere City",
      strength: 67,
      league: "Eredivisie",
      budget: 40_000_000,
    },
    {
      club: "RKC Waalwijk",
      strength: 66,
      league: "Eredivisie",
      budget: 38_000_000,
    },
    {
      club: "Willem II",
      strength: 70,
      league: "Eredivisie",
      budget: 46_000_000,
    },
    {
      club: "NAC Breda",
      strength: 69,
      league: "Eredivisie",
      budget: 43_000_000,
    },
    {
      club: "Groningen",
      strength: 71,
      league: "Eredivisie",
      budget: 47_000_000,
    },
  ],
  Turkey: [
    {
      club: "Galatasaray",
      strength: 86,
      league: "Süper Lig",
      budget: 120_000_000,
    },
    {
      club: "Fenerbahce",
      strength: 87,
      league: "Süper Lig",
      budget: 130_000_000,
    },
    {
      club: "Besiktas",
      strength: 85,
      league: "Süper Lig",
      budget: 110_000_000,
    },
    {
      club: "Trabzonspor",
      strength: 82,
      league: "Süper Lig",
      budget: 90_000_000,
    },
    {
      club: "Basaksehir",
      strength: 79,
      league: "Süper Lig",
      budget: 70_000_000,
    },
    {
      club: "Bursaspor",
      strength: 76,
      league: "Süper Lig",
      budget: 55_000_000,
    },
    {
      club: "Adana Demirspor",
      strength: 77,
      league: "Süper Lig",
      budget: 60_000_000,
    },
    {
      club: "Konyaspor",
      strength: 75,
      league: "Süper Lig",
      budget: 50_000_000,
    },
    {
      club: "Antalyaspor",
      strength: 74,
      league: "Süper Lig",
      budget: 48_000_000,
    },
    {
      club: "Gaziantep FK",
      strength: 72,
      league: "Süper Lig",
      budget: 45_000_000,
    },
    {
      club: "Alanyaspor",
      strength: 73,
      league: "Süper Lig",
      budget: 47_000_000,
    },
    {
      club: "Kayserispor",
      strength: 71,
      league: "Süper Lig",
      budget: 43_000_000,
    },
    {
      club: "Hatayspor",
      strength: 70,
      league: "Süper Lig",
      budget: 40_000_000,
    },
    { club: "Rizespor", strength: 71, league: "Süper Lig", budget: 42_000_000 },
    {
      club: "Samsunspor",
      strength: 72,
      league: "Süper Lig",
      budget: 44_000_000,
    },
    {
      club: "Pendikspor",
      strength: 69,
      league: "Süper Lig",
      budget: 38_000_000,
    },
    {
      club: "Karagumruk",
      strength: 70,
      league: "Süper Lig",
      budget: 41_000_000,
    },
    {
      club: "Ankaragucu",
      strength: 71,
      league: "Süper Lig",
      budget: 43_000_000,
    },
    {
      club: "Sivasspor",
      strength: 73,
      league: "Süper Lig",
      budget: 46_000_000,
    },
    { club: "Eyupspor", strength: 70, league: "Süper Lig", budget: 40_000_000 },
  ],
  Greece: [
    {
      club: "Olympiacos",
      strength: 84,
      league: "Super League Greece",
      budget: 80_000_000,
    },
    {
      club: "Panathinaikos",
      strength: 83,
      league: "Super League Greece",
      budget: 75_000_000,
    },
    {
      club: "AEK Athens",
      strength: 82,
      league: "Super League Greece",
      budget: 70_000_000,
    },
    {
      club: "PAOK",
      strength: 81,
      league: "Super League Greece",
      budget: 65_000_000,
    },
    {
      club: "Aris Thessaloniki",
      strength: 77,
      league: "Super League Greece",
      budget: 40_000_000,
    },
    {
      club: "Panetolikos",
      strength: 71,
      league: "Super League Greece",
      budget: 25_000_000,
    },
    {
      club: "Asteras Tripolis",
      strength: 70,
      league: "Super League Greece",
      budget: 22_000_000,
    },
    {
      club: "OFI Crete",
      strength: 72,
      league: "Super League Greece",
      budget: 28_000_000,
    },
    {
      club: "Atromitos",
      strength: 71,
      league: "Super League Greece",
      budget: 26_000_000,
    },
    {
      club: "Volos NFC",
      strength: 69,
      league: "Super League Greece",
      budget: 20_000_000,
    },
    {
      club: "Panserraikos",
      strength: 68,
      league: "Super League Greece",
      budget: 18_000_000,
    },
    {
      club: "Lamia",
      strength: 67,
      league: "Super League Greece",
      budget: 16_000_000,
    },
    {
      club: "Kallithea",
      strength: 66,
      league: "Super League Greece",
      budget: 15_000_000,
    },
    {
      club: "Levadiakos",
      strength: 67,
      league: "Super League Greece",
      budget: 17_000_000,
    },
  ],
  Belgium: [
    {
      club: "Club Brugge",
      strength: 82,
      league: "Pro League",
      budget: 80_000_000,
    },
    {
      club: "Royal Antwerp",
      strength: 78,
      league: "Pro League",
      budget: 60_000_000,
    },
    { club: "Genk", strength: 80, league: "Pro League", budget: 70_000_000 },
    {
      club: "Anderlecht",
      strength: 81,
      league: "Pro League",
      budget: 75_000_000,
    },
    {
      club: "Standard Liege",
      strength: 76,
      league: "Pro League",
      budget: 50_000_000,
    },
    { club: "Gent", strength: 77, league: "Pro League", budget: 55_000_000 },
    {
      club: "Union Saint-Gilloise",
      strength: 79,
      league: "Pro League",
      budget: 65_000_000,
    },
    {
      club: "Cercle Brugge",
      strength: 73,
      league: "Pro League",
      budget: 40_000_000,
    },
    {
      club: "Mechelen",
      strength: 72,
      league: "Pro League",
      budget: 35_000_000,
    },
    {
      club: "Charleroi",
      strength: 71,
      league: "Pro League",
      budget: 30_000_000,
    },
    {
      club: "Sint-Truiden",
      strength: 68,
      league: "Pro League",
      budget: 25_000_000,
    },
    {
      club: "Kortrijk",
      strength: 67,
      league: "Pro League",
      budget: 22_000_000,
    },
    {
      club: "Westerlo",
      strength: 69,
      league: "Pro League",
      budget: 28_000_000,
    },
    { club: "Eupen", strength: 66, league: "Pro League", budget: 20_000_000 },
    {
      club: "Oostende",
      strength: 65,
      league: "Pro League",
      budget: 18_000_000,
    },
    { club: "Seraing", strength: 64, league: "Pro League", budget: 15_000_000 },
    {
      club: "Beerschot",
      strength: 70,
      league: "Pro League",
      budget: 32_000_000,
    },
    { club: "Dender", strength: 63, league: "Pro League", budget: 12_000_000 },
  ],
  Brazil: [
    {
      club: "Flamengo",
      strength: 85,
      league: "Campeonato Brasileiro Série A",
      budget: 120_000_000,
    },
    {
      club: "Palmeiras",
      strength: 84,
      league: "Campeonato Brasileiro Série A",
      budget: 110_000_000,
    },
    {
      club: "Corinthians",
      strength: 82,
      league: "Campeonato Brasileiro Série A",
      budget: 100_000_000,
    },
    {
      club: "Sao Paulo",
      strength: 81,
      league: "Campeonato Brasileiro Série A",
      budget: 95_000_000,
    },
    {
      club: "Atletico Mineiro",
      strength: 80,
      league: "Campeonato Brasileiro Série A",
      budget: 90_000_000,
    },
    {
      club: "Internacional",
      strength: 78,
      league: "Campeonato Brasileiro Série A",
      budget: 80_000_000,
    },
    {
      club: "Gremio",
      strength: 77,
      league: "Campeonato Brasileiro Série A",
      budget: 75_000_000,
    },
    {
      club: "Fluminense",
      strength: 79,
      league: "Campeonato Brasileiro Série A",
      budget: 85_000_000,
    },
    {
      club: "Botafogo",
      strength: 76,
      league: "Campeonato Brasileiro Série A",
      budget: 70_000_000,
    },
    {
      club: "Santos",
      strength: 75,
      league: "Campeonato Brasileiro Série A",
      budget: 65_000_000,
    },
  ],
};

// --- Generated 2025-26 leagues and clubs (auto strength/budget) ---
const split = (s: string) =>
  s
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

// Teams per league as comma-separated strings to keep file compact
const TEAM_LISTS_2025_26: Record<string, Record<string, string>> = {
  England: {
    "Premier League":
      "Manchester City, Arsenal, Liverpool, Chelsea, Manchester United, Tottenham Hotspur, Newcastle United, Aston Villa, West Ham United, Brighton & Hove Albion, Crystal Palace, Brentford, Fulham, Bournemouth, Wolverhampton Wanderers, Everton, Nottingham Forest, Luton Town, Burnley, Sheffield United",
    Championship:
      "Leicester City, Southampton, Leeds United, Ipswich Town, West Bromwich Albion, Sunderland, Hull City, Middlesbrough, Coventry City, Preston North End, Bristol City, Cardiff City, Millwall, Swansea City, Blackburn Rovers, Plymouth Argyle, Stoke City, Birmingham City, Huddersfield Town, Sheffield Wednesday, Queens Park Rangers, Watford, Rotherham United, Norwich City",
  },
  Italy: {
    "Serie A":
      "Juventus, Inter Milan, AC Milan, Napoli, Roma, Lazio, Fiorentina, Atalanta, Torino, Monza, Bologna, Udinese, Sassuolo, Empoli, Salernitana, Lecce, Hellas Verona, Spezia, Cremonese, Sampdoria",
    "Serie B":
      "Parma, Genoa, Cagliari, Frosinone, Bari, Pisa, Reggina, Brescia, Cosenza, Modena, Ternana, Cittadella, Ascoli, Como, Perugia, Benevento, SPAL, Palermo, Venezia, Südtirol",
  },
  Spain: {
    "La Liga":
      "Real Madrid, Barcelona, Atletico Madrid, Sevilla, Real Sociedad, Villarreal, Athletic Bilbao, Real Betis, Osasuna, Rayo Vallecano, Mallorca, Girona, Celta Vigo, Cadiz, Getafe, Valencia, Almeria, Valladolid, Espanyol, Elche",
    "Segunda División":
      "Levante, Eibar, Alaves, Granada, Las Palmas, Sporting Gijon, Real Oviedo, Real Zaragoza, Cartagena, Tenerife, Burgos, Racing Santander, Huesca, Mirandes, Lugo, Ponferradina, Malaga, Ibiza, Leganes, Andorra, Albacete, Villarreal B",
  },
  Germany: {
    Bundesliga:
      "Bayern Munich, Borussia Dortmund, RB Leipzig, Bayer Leverkusen, Eintracht Frankfurt, VfB Stuttgart, Borussia Mönchengladbach, VfL Wolfsburg, SC Freiburg, TSG Hoffenheim, 1. FC Union Berlin, 1. FC Köln, Mainz 05, Werder Bremen, Augsburg, Hertha BSC, Schalke 04, VfL Bochum",
    "2. Bundesliga":
      "Hamburger SV, SV Darmstadt 98, 1. FC Heidenheim, Fortuna Düsseldorf, St. Pauli, Paderborn 07, Holstein Kiel, 1. FC Nürnberg, Hannover 96, Karlsruher SC, Greuther Fürth, Hansa Rostock, 1. FC Magdeburg, Jahn Regensburg, Eintracht Braunschweig, 1. FC Kaiserslautern, SV Sandhausen, Arminia Bielefeld",
  },
  France: {
    "Ligue 1":
      "Paris Saint-Germain, Olympique Marseille, Olympique Lyon, AS Monaco, Lille, Nice, Lens, Rennes, Strasbourg, Montpellier, Brest, Nantes, Toulouse, Reims, Lorient, Clermont Foot, Troyes, Ajaccio",
    "Ligue 2":
      "Saint-Étienne, Auxerre, Sochaux, Bordeaux, Metz, Bastia, Caen, Le Havre, Nîmes, Dijon, Grenoble, Rodez, Quevilly-Rouen, Laval, Valenciennes, Niort, Pau, Annecy, Guingamp, Amiens",
  },
  Portugal: {
    "Primeira Liga":
      "Benfica, Porto, Sporting CP, Braga, Vitória Guimarães, Boavista, Gil Vicente, Famalic��o, Santa Clara, Estoril, Marítimo, Paços de Ferreira, Portimonense, Vizela, Chaves, Arouca, Rio Ave, Casa Pia",
    "Liga Portugal 2":
      "Moreirense, Farense, Estrela Amadora, Académico Viseu, Feirense, Penafiel, Leixões, Mafra, Tondela, Oliveirense, Belenenses SAD, Trofense, Covilhã, Nacional, Benfica B, Porto B, Sporting B, Vilafranquense",
  },
  Netherlands: {
    Eredivisie:
      "Ajax, PSV Eindhoven, Feyenoord, AZ Alkmaar, Twente, Sparta Rotterdam, Utrecht, Heerenveen, Go Ahead Eagles, NEC Nijmegen, Fortuna Sittard, Groningen, Cambuur, Vitesse, Excelsior, Emmen, Volendam, RKC Waalwijk",
    "Eerste Divisie":
      "PEC Zwolle, Heracles Almelo, Willem II, NAC Breda, MVV Maastricht, VVV-Venlo, FC Eindhoven, Telstar, Den Bosch, De Graafschap, Jong Ajax, Jong AZ, Jong PSV, Jong Utrecht, Dordrecht, ADO Den Haag, TOP Oss, Helmond Sport, Roda JC, Almere City",
  },
  Belgium: {
    "Pro League":
      "Club Brugge, Union Saint-Gilloise, Antwerp, Genk, Anderlecht, Gent, Charleroi, Mechelen, Standard Liège, Sint-Truiden, Cercle Brugge, OH Leuven, Oostende, Kortrijk, Zulte Waregem, Seraing, Eupen, Westerlo",
    "Challenger Pro League":
      "RWDM, Waasland-Beveren, Beerschot, Lierse Kempenzonen, Lommel, Deinze, Virton, Dender EH, Club NXT, Jong Genk, SL16 FC, Excelsior Molenbeek",
  },
  Turkey: {
    "Süper Lig":
      "Galatasaray, Fenerbahçe, Beşiktaş, Başakşehir, Trabzonspor, Bursaspor, Adana Demirspor, Konyaspor, Kayserispor, Gaziantep, Fatih Karagümrük, Ümraniyespor, İstanbulspor, Giresunspor, Kasımpaşa, Hatayspor, Sivasspor, Alanyaspor, Antalyaspor",
    "TFF 1. Lig":
      "Samsunspor, Rizespor, Pendikspor, Keçiörengücü, Bodrumspor, Eyüpspor, Sakaryaspor, Manisa FK, Bandırmaspor, Boluspor, Altay, Erzurumspor, Altınordu, Gençlerbirliği, Denizlispor, Tuzlaspor, Adanaspor, Yeni Malatyaspor, Göztepe",
  },
  Scotland: {
    "Scottish Premiership":
      "Celtic, Rangers, Hearts, Hibernian, Aberdeen, St. Mirren, Kilmarnock, St. Johnstone, Motherwell, Livingston, Ross County, Dundee United",
    "Scottish Championship":
      "Dundee, Inverness Caledonian Thistle, Partick Thistle, Ayr United, Greenock Morton, Queen’s Park, Arbroath, Cove Rangers, Hamilton Academical, Raith Rovers",
  },
  Austria: {
    "Austrian Bundesliga":
      "Red Bull Salzburg, Sturm Graz, LASK, Rapid Wien, Austria Wien, Wolfsberger AC, Austria Klagenfurt, WSG Tirol, Hartberg, Ried, Altach, Austria Lustenau",
    "2. Liga":
      "Blau-Weiß Linz, Grazer AK, St. Pölten, Horn, Amstetten, First Vienna, Lafnitz, Liefering, Admira Wacker, Dornbirn, Sturm Graz II, Floridsdorfer AC, Kapfenberg, Vorwärts Steyr, Rapid Wien II, SKU Amstetten",
  },
  Denmark: {
    Superliga:
      "Copenhagen, Nordsjælland, Viborg, Aarhus, Randers, Brøndby, Silkeborg, Midtjylland, OB, Horsens, Lyngby, AaB",
    "1st Division":
      "Vejle, Hvidovre, SønderjyskE, Vendsyssel, Fredericia, HB Køge, Hillerød, Næstved, Nykøbing, Fremad Amager, Hobro, Helsingør",
  },
  Switzerland: {
    "Swiss Super League":
      "Young Boys, Basel, Zürich, Servette, Lugano, St. Gallen, Grasshopper, Luzern, Sion, Winterthur",
    "Challenge League":
      "Lausanne-Sport, Yverdon-Sport, Wil, Aarau, Vaduz, Schaffhausen, Thun, Stade Lausanne-Ouchy, Bellinzona, Neuchâtel Xamax",
  },
  Greece: {
    "Super League Greece":
      "Olympiacos, PAOK, AEK Athens, Panathinaikos, Aris, OFI, Asteras Tripolis, PAS Giannina, Atromitos, Lamia, Levadiakos, Ionikos, Panetolikos, Volos",
    "Super League 2":
      "Kifisia, Kallithea, Apollon Smyrnis, Chania, Episkopi, Ilioupoli, Egaleo, Proodeftiki, Diagoras, Panachaiki, Olympiacos B, PAOK B, AEK B, Panathinaikos B",
  },
  "Czech Republic": {
    "Czech First League":
      "Sparta Prague, Slavia Prague, Viktoria Plzeň, Bohemians 1905, Slovacko, Sigma Olomouc, Baník Ostrava, Hradec Králové, Mladá Boleslav, České Budějovice, Jablonec, Pardubice, Zbrojovka Brno, Teplice, Liberec, Fastav Zlín",
    "Czech National Football League":
      "Vyškov, Karviná, Líšeň, Táborsko, Chrudim, Dukla Prague, Sigma Olomouc B, Prostějov, Příbram, Varnsdorf, Vlašim, Třinec, Slavia Prague B, Sparta Prague B, Opava, Viktoria Žižkov",
  },
  Norway: {
    Eliteserien:
      "Bodø/Glimt, Molde, Rosenborg, Lillestrøm, Vålerenga, Viking, Strømsgodset, Haugesund, Tromsø, Sandefjord, Sarpsborg 08, Aalesund, Jerv, HamKam, Odd, Kristiansund",
    "OBOS-ligaen":
      "Brann, Stabæk, Start, KFUM Oslo, Sandnes Ulf, Kongsvinger, Sogndal, Ranheim, Mjøndalen, Fredrikstad, Skeid, Bryne, Raufoss, Åsane, Grorud, Stjørdals-Blink",
  },
  Sweden: {
    Allsvenskan:
      "Häcken, Djurgården, Hammarby, Kalmar, AIK, Elfsborg, Malmö FF, IFK Göteborg, Norrköping, Sirius, Värnamo, Mjällby, Varberg, Helsingborg, Degerfors, Sundsvall",
    Superettan:
      "Halmstad, Brommapojkarna, Öster, Landskrona, Trelleborg, AFC Eskilstuna, Västerås SK, Örebro, Skövde AIK, J��nköpings Södra, Norrby, Utsikten, Örgryte, Brage, Dalkurd, Östersund",
  },
  Poland: {
    Ekstraklasa:
      "Lech Poznań, Raków Częstochowa, Legia Warsaw, Pogoń Szczecin, Lechia Gdańsk, Wisła Płock, Radomiak Radom, Górnik Zabrze, Cracovia, Śląsk Wrocław, Jagiellonia Białystok, Zagłębie Lubin, Widzew Łódź, Stal Mielec, Korona Kielce, Warta Poznań, Piast Gliwice, Miedź Legnica",
    "I Liga":
      "Wisła Kraków, Arka Gdynia, ŁKS Łódź, Chrobry Głogów, Puszcza Niepołomice, Bruk-Bet Termalica Nieciecza, Podbeskidzie Bielsko-Biała, Resovia, Tychy, Skra Częstochowa, Sandecja Nowy Sącz, Odra Opole, Górnik Łęczna, Katowice, Zagłębie Sosnowiec, Stomil Olsztyn, Chojniczanka Chojnice, Ruch Chorzów",
  },
  Romania: {
    "Liga 1":
      "FCSB, CFR Cluj, Universitatea Craiova, Rapid București, Sepsi OSK, Farul Constanța, Petrolul Ploiești, UTA Arad, Voluntari, Botoșani, Chindia Târgoviște, Mioveni, Universitatea Cluj, Hermannstadt, Oțelul Galați, Dinamo București",
    "Liga 2":
      "Politehnica Iași, Steaua București, Unirea Slobozia, Gloria Buzău, Concordia Chiajna, Brașov, Unirea Dej, Ripensia Timișoara, Progresul Spartac, Metaloglobus București, Viitorul Pandurii Târgu Jiu, CSM Slatina, Poli Timișoara, Dumbrăvița, Minaur Baia Mare, Unirea Constanța, FK Miercurea Ciuc, Șelimbăr, Reșița",
  },
  Croatia: {
    HNL: "Dinamo Zagreb, Hajduk Split, Osijek, Rijeka, Lokomotiva, Varaždin, Istra 1961, Slaven Belupo, Gorica, Šibenik",
    "Prva NL":
      "Rudeš, Cibalia, Vukovar 1991, Solin, Dubrava, Jarun, Orijent 1919, Croatia Zmijavci, Dugopolje, Kustošija, BSK Bijelo Brdo, Hrvatski Dragovoljac",
  },
  Serbia: {
    SuperLiga:
      "Red Star Belgrade, Partizan, Čukarički, Vojvodina, TSC Bačka Topola, Voždovac, Radnički Niš, Mladost Lučani, Spartak Subotica, Kolubara, Radnik Surdulica, Napredak Kruševac, Javor Ivanjica, Novi Pazar, Radnički 1923, Mladost GAT",
    "Prva Liga":
      "Grafičar, IMT, Železničar Pančevo, Novi Sad 1921, Radnički Sremska Mitrovica, Inđija, Jedinstvo Ub, Sloboda Užice, Trayal Kruševac, Rad, Mačva Šabac, Loznica, Zlatibor Čajetina, OFK Vršac, Metalac Gornji Milanovac, Zvezdara",
  },
  Hungary: {
    "NB I":
      "Ferencváros, Kisvárda, Puskás Akadémia, Debrecen, Zalaegerszeg, Fehérvár, Mezőkövesd, Újpest, Paks, Honvéd, Kecskemét, Vasas",
    "NB II":
      "Diósgyőr, MTK Budapest, Győr, Szeged-Csanád, Szentlőrinc, Csákvár, Tiszakécske, Kazincbarcika, Gyirmót, Nyíregyháza, Békéscsaba, Soroksár, Siófok, Haladás, Eger, Budafok, Pécs, Ajka, Kozármisleny, Dorog",
  },
  Bulgaria: {
    "First Professional Football League":
      "Ludogorets Razgrad, CSKA Sofia, CSKA 1948, Levski Sofia, Cherno More, Lokomotiv Plovdiv, Slavia Sofia, Arda Kardzhali, Botev Plovdiv, Beroe, Pirin Blagoevgrad, Hebar Pazardzhik, Septemvri Sofia, Lokomotiv Sofia, Botev Vratsa, Spartak Varna",
    "Second League":
      "Etar Veliko Tarnovo, Sportist Svoge, Belasitsa Petrich, Montana, Strumska Slava, Maritsa Plovdiv, Dunav Ruse, Litex Lovech, Spartak Pleven, Yantra Gabrovo, Minyor Pernik, Dobrudzha Dobrich, Ludogorets II, Sozopol, Vitosha Bistritsa, Bdin Vidin, Krumovgrad, CSKA 1948 II",
  },
  Slovakia: {
    "Slovak Super Liga":
      "Slovan Bratislava, DAC Dunajská Streda, Spartak Trnava, Ružomberok, Žilina, Podbrezová, Trenčín, Banská Bystrica, Zemplín Michalovce, Skalica, ViOn Zlaté Moravce, Tatran Liptovský Mikuláš",
    "2. Liga":
      "Košice, Tatran Prešov, Komárno, Banská Bystrica II, Slavoj Trebišov, Humenné, Púchov, Šamorín, Petržalka, Žilina II, Dubnica, Slovan Bratislava II, Pohronie, Dolný Kubín, Rača, Futura Humenné",
  },
  Slovenia: {
    PrvaLiga:
      "Maribor, Celje, Olimpija Ljubljana, Mura, Koper, Bravo, Radomlje, Domžale, Tabor Sežana, Gorica",
    "2. SNL":
      "Rogaška, Aluminij, Krka, Ilirija 1911, Bistrica, Fužinar, Brinje Grosuplje, Triglav Kranj, Nafta, Primorje, Beltinci, Bilje, Dekani, Dob, Krško, Vitanest Bilje",
  },
  Cyprus: {
    "Cypriot First Division":
      "APOEL, AEK Larnaca, Apollon Limassol, Omonia Nicosia, Aris Limassol, Pafos FC, Anorthosis Famagusta, Nea Salamina, Karmiotissa, Enosis Neon Paralimni, Akritas Chlorakas, Olympiakos Nicosia, Doxa Katokopias, AEL Limassol",
    "Cypriot Second Division":
      "Othellos Athienou, Ethnikos Achna, Achyronas-Onisilos, Ermis Aradippou, Xylotympou, PAEEK, Alki Oroklini, MEAP Nisou, Ayia Napa, Anagennisi Deryneia, Omonia Aradippou, Digenis Akritas Morphou, PO Achyronas Liopetriou, Krasava Eny Ypsonas, Olympias Lympion, Peyia 2014",
  },
  Israel: {
    "Israeli Premier League":
      "Maccabi Haifa, Hapoel Be’er Sheva, Maccabi Tel Aviv, Hapoel Jerusalem, Maccabi Netanya, Ashdod, Beitar Jerusalem, Hapoel Hadera, Ironi Kiryat Shmona, Bnei Sakhnin, Hapoel Tel Aviv, Hapoel Haifa, Sektzia Ness Ziona, Ironi Tiberias",
    "Liga Leumit":
      "Hapoel Petah Tikva, Hapoel Kfar Saba, Bnei Yehuda, Hapoel Acre, Maccabi Petah Tikva, Hapoel Nof HaGalil, Ironi Ramat HaSharon, Maccabi Ahi Nazareth, Hapoel Afula, Hapoel Ramat Gan, Kafr Qasim, Hapoel Rishon LeZion, Maccabi Kabilio Jaffa, Hapoel Umm al-Fahm, Agudat Sport Ashdod, Hapoel Ashdod",
  },
  Azerbaijan: {
    "Azerbaijan Premier League":
      "Qarabağ, Neftçi, Zira, Sabah, Gabala, Sumgayit, Kapaz, Turan Tovuz, Shamakhi, Sabail",
    "First Division":
      "Araz-Naxçıvan, Zaqatala, MOIK Baku, Mingachevir, Imishli, Qaradag Lokbatan, Energetik Mingachevir, Difai Agsu, Shamkir, Qarabağ II, Neftçi II, Sumgayit II, Zira II, Gabala II, Sabah II, Turan Tovuz II",
  },
  Finland: {
    Veikkausliiga:
      "HJK, KuPS, Honka, Haka, Ilves, SJK, Inter Turku, Oulu, VPS, Lahti, Mariehamn, KTP",
    Ykkönen:
      "TPS, KPV, EIF, Gnistan, MP, JäPS, PK-35, Jaro, PEPO, PIF, SJK Akatemia, KäPa",
  },
  Ireland: {
    "League of Ireland Premier Division":
      "Shamrock Rovers, Derry City, Dundalk, St Patrick’s Athletic, Sligo Rovers, Shelbourne, Bohemians, Drogheda United, Finn Harps, UCD",
    "First Division":
      "Cork City, Galway United, Longford Town, Treaty United, Waterford, Wexford, Bray Wanderers, Athlone Town, Cobh Ramblers",
  },
};

function ensureLeague(country: string, league: string, size: number) {
  LEAGUES[country] = LEAGUES[country] || [];
  if (!LEAGUES[country].some((l) => l.name === league)) {
    const tier = LEAGUES[country].length; // 0 = top
    const countryCoef = country in (globalThis as any) ? 50 : 50; // fallback
    const base = tier === 0 ? 100_000_000 : 20_000_000;
    LEAGUES[country].push({ name: league, size, budget: base });
  }
}

function genStrengthBudget(
  country: string,
  league: string,
  name: string,
  i: number,
  n: number,
): { strength: number; budget: number } {
  const tier = LEAGUES[country]?.findIndex((l) => l.name === league) ?? 0;
  const leagueInfo = LEAGUES[country]?.find((l) => l.name === league);
  const leagueBudget =
    leagueInfo?.budget ?? (tier === 0 ? 100_000_000 : 20_000_000);
  const max = tier === 0 ? 95 : 82;
  const min = tier === 0 ? 66 : 60;
  let strength = Math.round(max - (max - min) * (i / Math.max(1, n - 1)));
  const eliteBoost = new Set([
    "Real Madrid",
    "Barcelona",
    "Atletico Madrid",
    "Bayern Munich",
    "Borussia Dortmund",
    "RB Leipzig",
    "Juventus",
    "Inter Milan",
    "AC Milan",
    "Napoli",
    "Paris Saint-Germain",
    "Liverpool",
    "Manchester City",
    "Arsenal",
    "Chelsea",
    "Manchester United",
    "Ajax",
    "PSV Eindhoven",
    "Feyenoord",
    "Benfica",
    "Porto",
    "Sporting CP",
  ]);
  if (eliteBoost.has(name)) strength = Math.min(96, strength + 4);
  if (
    country === "Romania" &&
    (name.toLowerCase().includes("rapid") ||
      name.toLowerCase().includes("fcsb"))
  )
    strength = 82;
  const rel = (strength - min) / (max - min);
  const budget = Math.round(leagueBudget * (0.6 + 1.8 * rel));
  return { strength, budget };
}

(function mergeTeamLists() {
  for (const [country, leagues] of Object.entries(TEAM_LISTS_2025_26)) {
    for (const [league, list] of Object.entries(leagues)) {
      const teams = split(list);
      ensureLeague(country, league, teams.length);
      CLUBS[country] = CLUBS[country] || [];
      const existingNames = new Set(CLUBS[country].map((c) => c.club));
      teams.forEach((name, i) => {
        if (!existingNames.has(name)) {
          const { strength, budget } = genStrengthBudget(
            country,
            league,
            name,
            i,
            teams.length,
          );
          CLUBS[country].push({ club: name, strength, league, budget });
        }
      });
    }
  }
})();

// Ensure at least three functional leagues per country and generate third tiers dynamically (2025-26 baseline)
(function ensureThreeLeaguesAndGenerateThirdTier() {
  const THIRD_LEAGUE_NAMES: Record<string, string> = {
    England: "League One",
    Spain: "Primera Federación",
    Italy: "Serie C",
    Germany: "3. Liga",
    France: "Championnat National",
    Portugal: "Liga 3",
    Netherlands: "Tweede Divisie",
    Belgium: "National Division 1",
    Turkey: "TFF 2. Lig",
    Greece: "Gamma Ethniki",
    Switzerland: "Promotion League",
    Austria: "Regionalliga",
    Scotland: "Scottish League One",
    Romania: "Liga 3",
    Poland: "II Liga",
    "Czech Republic": "Czech National Football League 2",
    Croatia: "Second NL",
    Serbia: "Serbian League",
    Norway: "1. Division",
    Sweden: "Ettan",
    Denmark: "2nd Division",
    Ukraine: "Persha Liha B",
    Russia: "FNL 2",
    Brazil: "Série C",
    Argentina: "Primera Nacional B",
  };

  function getThirdLeagueName(country: string): string {
    return THIRD_LEAGUE_NAMES[country] || "League 3";
  }

  function makeBName(name: string): string {
    if (/\bB$/.test(name) || /\bII$/.test(name)) return name;
    if (name.length > 20) return `${name} B`;
    return `${name} B`;
  }

  function generateClubName(
    country: string,
    league: string,
    index: number,
  ): string {
    const SUFFIXES = [
      "United",
      "City",
      "Athletic",
      "Sporting",
      "Rovers",
      "Wanderers",
      "Town",
      "County",
      "FC",
      "SC",
    ];
    const code = country
      .split(" ")
      .map((s) => s[0])
      .join("")
      .toUpperCase();
    const suffix = SUFFIXES[index % SUFFIXES.length];
    return `${league} ${suffix} ${code}-${index + 1}`;
  }

  function fillLeague(country: string, league: string, targetSize: number) {
    const existing = (CLUBS[country] || []).filter((c) => c.league === league);
    const need = Math.max(0, targetSize - existing.length);
    if (!need) return;
    const leagueInfo = (LEAGUES[country] || []).find((l) => l.name === league);
    const baseBudget = leagueInfo?.budget || 12_000_000;
    for (let i = 0; i < need; i++) {
      const name = generateClubName(country, league, i);
      if ((CLUBS[country] || []).some((c) => c.club === name)) continue;
      const tier = (LEAGUES[country] || []).findIndex((l) => l.name === league);
      const max = tier === 0 ? 85 : tier === 1 ? 78 : 72;
      const min = tier === 0 ? 68 : tier === 1 ? 62 : 58;
      const strength = Math.round(min + (max - min) * Math.random());
      const budget = Math.round(baseBudget * (0.7 + Math.random() * 0.6));
      CLUBS[country] = CLUBS[country] || [];
      CLUBS[country].push({ club: name, strength, league, budget });
    }
  }

  for (const country of Object.keys(LEAGUES)) {
    const leagues = LEAGUES[country] || [];
    if (leagues.length >= 3) {
      // ensure sizes for first three leagues
      for (let i = 0; i < Math.min(3, leagues.length); i++) {
        const l = leagues[i];
        fillLeague(country, l.name, l.size);
      }
      continue;
    }

    const desired = 3 - leagues.length;
    const existingClubs = (CLUBS[country] || [])
      .slice()
      .sort((a, b) => b.strength - a.strength);
    const existingNames = new Set((CLUBS[country] || []).map((c) => c.club));

    // Build third-tier club candidates from B teams of strongest clubs
    const thirdLeagueClubs: {
      club: string;
      strength: number;
      league: string;
      budget: number;
    }[] = [];
    const thirdName = getThirdLeagueName(country);

    const targetSize = Math.max(
      16,
      Math.min(20, Math.ceil((LEAGUES[country]?.[0]?.size || 18) * 0.9)),
    );

    for (const c of existingClubs) {
      if (thirdLeagueClubs.length >= targetSize) break;
      const bName = makeBName(c.club);
      if (existingNames.has(bName)) continue;
      const strength = Math.max(
        55,
        Math.min(80, Math.round(c.strength - 10 - Math.random() * 6)),
      );
      const budget = Math.max(
        1_500_000,
        Math.round((c.budget || 10_000_000) * (0.18 + Math.random() * 0.12)),
      );
      thirdLeagueClubs.push({
        club: bName,
        strength,
        league: thirdName,
        budget,
      });
      existingNames.add(bName);
    }

    // If still not enough, duplicate some lower clubs as II teams
    let idx = existingClubs.length - 1;
    while (thirdLeagueClubs.length < targetSize && idx >= 0) {
      const base = existingClubs[idx--];
      const iiName = /\bII$/.test(base.club) ? base.club : `${base.club} II`;
      if (existingNames.has(iiName)) continue;
      const strength = Math.max(
        52,
        Math.min(76, Math.round(base.strength - 12 - Math.random() * 6)),
      );
      const budget = Math.max(
        1_000_000,
        Math.round((base.budget || 8_000_000) * (0.15 + Math.random() * 0.1)),
      );
      thirdLeagueClubs.push({
        club: iiName,
        strength,
        league: thirdName,
        budget,
      });
      existingNames.add(iiName);
    }

    // Guardrail minimal functionality
    if (thirdLeagueClubs.length >= 12) {
      LEAGUES[country].push({
        name: thirdName,
        size: thirdLeagueClubs.length,
        budget: Math.max(
          5_000_000,
          Math.round(
            thirdLeagueClubs.reduce((s, c) => s + c.budget, 0) /
              thirdLeagueClubs.length,
          ),
        ),
      });
      CLUBS[country] = (CLUBS[country] || []).concat(thirdLeagueClubs);
    }

    // If still fewer than 3 leagues (some countries had only 1), create a second tier quickly as well
    if (LEAGUES[country].length < 3) {
      const name =
        LEAGUES[country].length === 1
          ? LEAGUES[country][0].name === "Liga 1"
            ? "Liga 2"
            : `${LEAGUES[country][0].name} 2`
          : getThirdLeagueName(country);
      const fallbackSize = 16;
      if (!LEAGUES[country].some((l) => l.name === name))
        LEAGUES[country].push({ name, size: fallbackSize, budget: 10_000_000 });
    }

    // After ensuring three leagues exist, fill each of the first three to target sizes
    const list = LEAGUES[country] || [];
    for (let i = 0; i < Math.min(3, list.length); i++) {
      fillLeague(country, list[i].name, list[i].size);
    }
  }
})();

// European competitions
export const EUROPEAN_COMP = [
  { name: "Champions League", prestige: 99 },
  { name: "Europa League", prestige: 90 },
  { name: "Conference League", prestige: 80 },
];

// Apply user-provided club overrides (no duplicates)
(function applyUserClubOverrides(){
  const mapCountry = (name: string): string => ({
    'România':'Romania','Anglia':'England','Spania':'Spain','Italia':'Italy','Germania':'Germany','Franța':'France','Portugalia':'Portugal','Olanda':'Netherlands','Turcia':'Turkey','Grecia':'Greece','Elveția':'Switzerland','Croația':'Croatia'
  } as Record<string,string>)[name] || name;

  const normalize = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();

  const USER_CLUBS_OVERRIDES: Record<string, { club: string; strength: number; league: string; budget: number }[]> = {
    Romania: [
      { club: 'FCSB', strength: 80, league: 'Liga 1', budget: 15_000_000 },
      { club: 'CFR Cluj', strength: 79, league: 'Liga 1', budget: 14_500_000 },
      { club: 'Farul Constanța', strength: 79, league: 'Liga 1', budget: 12_500_000 },
      { club: 'Rapid București', strength: 80, league: 'Liga 1', budget: 15_000_000 },
      { club: 'Universitatea Craiova', strength: 80, league: 'Liga 1', budget: 11_000_000 },
      { club: 'Petrolul Ploiești', strength: 72, league: 'Liga 1', budget: 6_500_000 },
      { club: 'Sepsi OSK', strength: 74, league: 'Liga 1', budget: 7_000_000 },
      { club: 'FC Voluntari', strength: 70, league: 'Liga 1', budget: 5_500_000 },
      { club: 'FC Botoșani', strength: 69, league: 'Liga 1', budget: 5_000_000 },
      { club: 'Universitatea Cluj', strength: 71, league: 'Liga 1', budget: 6_000_000 },
      { club: 'Hermannstadt', strength: 68, league: 'Liga 1', budget: 4_800_000 },
      { club: 'UTA Arad', strength: 67, league: 'Liga 1', budget: 4_500_000 },
      { club: 'Oțelul Galați', strength: 66, league: 'Liga 1', budget: 4_200_000 },
      { club: 'Poli Iași', strength: 65, league: 'Liga 1', budget: 4_000_000 },
      { club: 'Gloria Buzău', strength: 64, league: 'Liga 1', budget: 3_800_000 },
      { club: 'Dinamo București', strength: 73, league: 'Liga 1', budget: 5_200_000 },
      { club: 'CSM Politehnica Iași', strength: 62, league: 'Liga 2', budget: 2_100_000 },
      { club: 'Concordia Chiajna', strength: 60, league: 'Liga 2', budget: 1_280_000 },
      { club: 'Metaloglobus București', strength: 55, league: 'Liga 2', budget: 1_000_000 },
      { club: 'Ripensia Timișoara', strength: 58, league: 'Liga 2', budget: 1_350_000 },
      { club: 'Corvinul Hunedoara', strength: 63, league: 'Liga 2', budget: 1_500_000 },
      { club: 'Csikszereda', strength: 59, league: 'Liga 2', budget: 1_200_000 },
      { club: 'Unirea Slobozia', strength: 61, league: 'Liga 2', budget: 1_400_000 },
      { club: 'Viitorul Pandurii', strength: 57, league: 'Liga 2', budget: 1_100_000 },
      { club: 'Dumbrăvița', strength: 56, league: 'Liga 2', budget: 900_000 },
      { club: 'Tunari', strength: 54, league: 'Liga 2', budget: 850_000 },
      { club: 'Steaua București', strength: 60, league: 'Liga 2', budget: 1_300_000 },
      { club: 'Chindia Târgoviște', strength: 62, league: 'Liga 2', budget: 1_400_000 },
      { club: 'Argeș Pitești', strength: 64, league: 'Liga 2', budget: 1_600_000 },
      { club: 'Mioveni', strength: 61, league: 'Liga 2', budget: 1_200_000 },
      { club: 'Șelimbăr', strength: 58, league: 'Liga 2', budget: 950_000 },
      { club: 'Unirea Dej', strength: 55, league: 'Liga 2', budget: 800_000 },
      { club: 'Reșița', strength: 57, league: 'Liga 2', budget: 900_000 },
      { club: 'Slatina', strength: 56, league: 'Liga 2', budget: 850_000 },
      { club: 'Ceahlăul Piatra Neamț', strength: 59, league: 'Liga 2', budget: 1_000_000 },
      { club: 'Bistrița', strength: 54, league: 'Liga 2', budget: 800_000 },
    ],
    England: [
      { club: 'Manchester City', strength: 95, league: 'Premier League', budget: 610_000_000 },
      { club: 'Liverpool', strength: 93, league: 'Premier League', budget: 480_000_000 },
      { club: 'Chelsea', strength: 91, league: 'Premier League', budget: 470_000_000 },
      { club: 'Arsenal', strength: 90, league: 'Premier League', budget: 420_000_000 },
      { club: 'Manchester United', strength: 88, league: 'Premier League', budget: 410_000_000 },
      { club: 'Tottenham Hotspur', strength: 86, league: 'Premier League', budget: 380_000_000 },
      { club: 'Newcastle United', strength: 85, league: 'Premier League', budget: 350_000_000 },
      { club: 'Aston Villa', strength: 83, league: 'Premier League', budget: 300_000_000 },
      { club: 'West Ham United', strength: 81, league: 'Premier League', budget: 250_000_000 },
      { club: 'Brighton & Hove Albion', strength: 80, league: 'Premier League', budget: 220_000_000 },
      { club: 'Wolverhampton Wanderers', strength: 78, league: 'Premier League', budget: 200_000_000 },
      { club: 'Everton', strength: 77, league: 'Premier League', budget: 190_000_000 },
      { club: 'Nottingham Forest', strength: 76, league: 'Premier League', budget: 180_000_000 },
      { club: 'Fulham', strength: 75, league: 'Premier League', budget: 170_000_000 },
      { club: 'Brentford', strength: 74, league: 'Premier League', budget: 160_000_000 },
      { club: 'Crystal Palace', strength: 73, league: 'Premier League', budget: 150_000_000 },
      { club: 'Bournemouth', strength: 72, league: 'Premier League', budget: 140_000_000 },
      { club: 'Southampton', strength: 71, league: 'Premier League', budget: 130_000_000 },
      { club: 'Ipswich Town', strength: 70, league: 'Premier League', budget: 120_000_000 },
      { club: 'Leicester City', strength: 79, league: 'Premier League', budget: 200_000_000 },
      { club: 'Leeds United', strength: 78, league: 'Championship', budget: 48_000_000 },
      { club: 'Norwich City', strength: 74, league: 'Championship', budget: 34_000_000 },
      { club: 'Watford', strength: 73, league: 'Championship', budget: 29_000_000 },
      { club: 'Swansea City', strength: 71, league: 'Championship', budget: 27_000_000 },
      { club: 'Stoke City', strength: 70, league: 'Championship', budget: 21_000_000 },
      { club: 'Reading', strength: 65, league: 'Championship', budget: 16_000_000 },
      { club: 'Burnley', strength: 77, league: 'Championship', budget: 40_000_000 },
      { club: 'Sheffield United', strength: 76, league: 'Championship', budget: 38_000_000 },
      { club: 'West Bromwich Albion', strength: 75, league: 'Championship', budget: 35_000_000 },
      { club: 'Middlesbrough', strength: 72, league: 'Championship', budget: 30_000_000 },
      { club: 'Hull City', strength: 70, league: 'Championship', budget: 25_000_000 },
      { club: 'Preston North End', strength: 68, league: 'Championship', budget: 20_000_000 },
      { club: 'Cardiff City', strength: 69, league: 'Championship', budget: 22_000_000 },
      { club: 'Bristol City', strength: 67, league: 'Championship', budget: 18_000_000 },
      { club: 'Blackburn Rovers', strength: 70, league: 'Championship', budget: 24_000_000 },
      { club: 'Sunderland', strength: 72, league: 'Championship', budget: 28_000_000 },
      { club: 'Millwall', strength: 66, league: 'Championship', budget: 17_000_000 },
      { club: 'Coventry City', strength: 71, league: 'Championship', budget: 26_000_000 },
      { club: 'Plymouth Argyle', strength: 65, league: 'Championship', budget: 15_000_000 },
      { club: 'Derby County', strength: 69, league: 'Championship', budget: 23_000_000 },
      { club: 'Sheffield Wednesday', strength: 68, league: 'Championship', budget: 21_000_000 },
      { club: 'Luton Town', strength: 73, league: 'Championship', budget: 32_000_000 },
      { club: 'Oxford United', strength: 64, league: 'Championship', budget: 14_000_000 },
      { club: 'Portsmouth', strength: 66, league: 'Championship', budget: 16_000_000 },
      { club: 'QPR', strength: 67, league: 'Championship', budget: 19_000_000 },
      { club: 'Wigan Athletic', strength: 65, league: 'League One', budget: 10_000_000 },
      { club: 'Charlton Athletic', strength: 64, league: 'League One', budget: 9_500_000 },
      { club: 'Blackpool', strength: 66, league: 'League One', budget: 11_000_000 },
      { club: 'Barnsley', strength: 67, league: 'League One', budget: 12_000_000 },
      { club: 'Peterborough United', strength: 65, league: 'League One', budget: 10_500_000 },
      { club: 'Bolton Wanderers', strength: 68, league: 'League One', budget: 13_000_000 },
      { club: 'Port Vale', strength: 62, league: 'League One', budget: 8_000_000 },
      { club: 'Wycombe Wanderers', strength: 63, league: 'League One', budget: 8_500_000 },
      { club: 'Lincoln City', strength: 62, league: 'League One', budget: 7_500_000 },
      { club: 'Shrewsbury Town', strength: 61, league: 'League One', budget: 7_000_000 },
      { club: 'Fleetwood Town', strength: 60, league: 'League One', budget: 6_500_000 },
      { club: 'Burton Albion', strength: 59, league: 'League One', budget: 6_000_000 },
      { club: 'Northampton Town', strength: 58, league: 'League One', budget: 5_500_000 },
      { club: 'Stevenage', strength: 59, league: 'League One', budget: 5_800_000 },
      { club: 'Leyton Orient', strength: 60, league: 'League One', budget: 6_200_000 },
      { club: 'Bristol Rovers', strength: 61, league: 'League One', budget: 6_800_000 },
      { club: 'Carlisle United', strength: 57, league: 'League One', budget: 5_000_000 },
      { club: 'Cambridge United', strength: 58, league: 'League One', budget: 5_200_000 },
      { club: 'Exeter City', strength: 60, league: 'League One', budget: 6_000_000 },
      { club: 'Rotherham United', strength: 64, league: 'League One', budget: 9_000_000 },
      { club: 'Huddersfield Town', strength: 65, league: 'League One', budget: 10_000_000 },
      { club: 'Stockport County', strength: 62, league: 'League One', budget: 7_200_000 },
      { club: 'Mansfield Town', strength: 60, league: 'League One', budget: 6_400_000 },
      { club: 'Crawley Town', strength: 57, league: 'League One', budget: 5_000_000 },
    ],
    Spain: [
      { club: 'Real Madrid', strength: 96, league: 'La Liga', budget: 800_000_000 },
      { club: 'Barcelona', strength: 94, league: 'La Liga', budget: 700_000_000 },
      { club: 'Atlético Madrid', strength: 92, league: 'La Liga', budget: 600_000_000 },
      { club: 'Sevilla', strength: 86, league: 'La Liga', budget: 290_000_000 },
      { club: 'Valencia', strength: 82, league: 'La Liga', budget: 210_000_000 },
      { club: 'Real Betis', strength: 83, league: 'La Liga', budget: 188_000_000 },
      { club: 'Villarreal', strength: 85, league: 'La Liga', budget: 250_000_000 },
      { club: 'Real Sociedad', strength: 84, league: 'La Liga', budget: 230_000_000 },
      { club: 'Athletic Bilbao', strength: 81, league: 'La Liga', budget: 200_000_000 },
      { club: 'Girona', strength: 80, league: 'La Liga', budget: 180_000_000 },
      { club: 'Osasuna', strength: 77, league: 'La Liga', budget: 150_000_000 },
      { club: 'Celta Vigo', strength: 76, league: 'La Liga', budget: 140_000_000 },
      { club: 'Rayo Vallecano', strength: 74, league: 'La Liga', budget: 120_000_000 },
      { club: 'Getafe', strength: 73, league: 'La Liga', budget: 110_000_000 },
      { club: 'Alavés', strength: 72, league: 'La Liga', budget: 100_000_000 },
      { club: 'Mallorca', strength: 71, league: 'La Liga', budget: 90_000_000 },
      { club: 'Espanyol', strength: 78, league: 'La Liga', budget: 130_000_000 },
      { club: 'Leganés', strength: 70, league: 'La Liga', budget: 85_000_000 },
      { club: 'Valladolid', strength: 69, league: 'La Liga', budget: 80_000_000 },
      { club: 'Las Palmas', strength: 68, league: 'La Liga', budget: 75_000_000 },
      { club: 'Levante', strength: 74, league: 'Segunda División', budget: 20_000_000 },
      { club: 'Sporting Gijón', strength: 72, league: 'Segunda División', budget: 18_000_000 },
      { club: 'Real Zaragoza', strength: 71, league: 'Segunda División', budget: 17_000_000 },
      { club: 'Eibar', strength: 73, league: 'Segunda División', budget: 19_000_000 },
      { club: 'Granada', strength: 75, league: 'Segunda División', budget: 22_000_000 },
      { club: 'Almería', strength: 74, league: 'Segunda División', budget: 21_000_000 },
      { club: 'Oviedo', strength: 70, league: 'Segunda División', budget: 16_000_000 },
      { club: 'Elche', strength: 72, league: 'Segunda División', budget: 18_500_000 },
      { club: 'Huesca', strength: 69, league: 'Segunda División', budget: 15_000_000 },
      { club: 'Tenerife', strength: 68, league: 'Segunda División', budget: 14_500_000 },
      { club: 'Mirandés', strength: 66, league: 'Segunda División', budget: 12_000_000 },
      { club: 'Alcorcón', strength: 65, league: 'Segunda División', budget: 11_000_000 },
      { club: 'Albacete', strength: 67, league: 'Segunda División', budget: 13_000_000 },
      { club: 'Burgos', strength: 66, league: 'Segunda División', budget: 12_500_000 },
      { club: 'Málaga', strength: 71, league: 'Segunda División', budget: 17_500_000 },
      { club: 'Córdoba', strength: 65, league: 'Segunda División', budget: 11_500_000 },
      { club: 'Castellón', strength: 67, league: 'Segunda División', budget: 13_500_000 },
      { club: 'Racing Santander', strength: 68, league: 'Segunda División', budget: 14_000_000 },
      { club: 'Deportivo La Coruña', strength: 70, league: 'Segunda División', budget: 16_500_000 },
      { club: 'Cartagena', strength: 64, league: 'Segunda División', budget: 10_500_000 },
      { club: 'Eldense', strength: 63, league: 'Segunda División', budget: 10_000_000 },
      { club: 'Ferrol', strength: 64, league: 'Segunda División', budget: 10_200_000 },
    ],
    Italy: [
      { club: 'Juventus', strength: 92, league: 'Serie A', budget: 500_000_000 },
      { club: 'Inter Milan', strength: 93, league: 'Serie A', budget: 480_000_000 },
      { club: 'AC Milan', strength: 91, league: 'Serie A', budget: 450_000_000 },
      { club: 'Napoli', strength: 90, league: 'Serie A', budget: 400_000_000 },
      { club: 'Roma', strength: 86, league: 'Serie A', budget: 300_000_000 },
      { club: 'Lazio', strength: 85, league: 'Serie A', budget: 280_000_000 },
      { club: 'Atalanta', strength: 84, league: 'Serie A', budget: 250_000_000 },
      { club: 'Fiorentina', strength: 82, league: 'Serie A', budget: 200_000_000 },
      { club: 'Torino', strength: 78, league: 'Serie A', budget: 150_000_000 },
      { club: 'Bologna', strength: 79, league: 'Serie A', budget: 160_000_000 },
      { club: 'Udinese', strength: 77, league: 'Serie A', budget: 140_000_000 },
      { club: 'Sassuolo', strength: 76, league: 'Serie A', budget: 130_000_000 },
      { club: 'Empoli', strength: 73, league: 'Serie A', budget: 110_000_000 },
      { club: 'Monza', strength: 74, league: 'Serie A', budget: 120_000_000 },
      { club: 'Genoa', strength: 75, league: 'Serie A', budget: 125_000_000 },
      { club: 'Cagliari', strength: 73, league: 'Serie A', budget: 115_000_000 },
      { club: 'Lecce', strength: 72, league: 'Serie A', budget: 105_000_000 },
      { club: 'Verona', strength: 71, league: 'Serie A', budget: 100_000_000 },
      { club: 'Parma', strength: 76, league: 'Serie A', budget: 135_000_000 },
      { club: 'Como', strength: 70, league: 'Serie A', budget: 95_000_000 },
      { club: 'Palermo', strength: 72, league: 'Serie B', budget: 18_000_000 },
      { club: 'Brescia', strength: 70, league: 'Serie B', budget: 16_000_000 },
      { club: 'Cremonese', strength: 74, league: 'Serie B', budget: 20_000_000 },
      { club: 'Pisa', strength: 68, league: 'Serie B', budget: 14_000_000 },
      { club: 'Reggiana', strength: 67, league: 'Serie B', budget: 13_000_000 },
      { club: 'Modena', strength: 69, league: 'Serie B', budget: 15_000_000 },
      { club: 'Cosenza', strength: 66, league: 'Serie B', budget: 12_000_000 },
      { club: 'Catanzaro', strength: 65, league: 'Serie B', budget: 11_500_000 },
      { club: 'Sampdoria', strength: 75, league: 'Serie B', budget: 22_000_000 },
      { club: 'Spezia', strength: 73, league: 'Serie B', budget: 19_000_000 },
      { club: 'Bari', strength: 71, league: 'Serie B', budget: 17_000_000 },
      { club: 'Ascoli', strength: 68, league: 'Serie B', budget: 14_500_000 },
      { club: 'FeralpiSalò', strength: 64, league: 'Serie B', budget: 10_500_000 },
      { club: 'Ternana', strength: 67, league: 'Serie B', budget: 13_500_000 },
      { club: 'Cittadella', strength: 66, league: 'Serie B', budget: 12_500_000 },
      { club: 'Sudtirol', strength: 65, league: 'Serie B', budget: 11_000_000 },
      { club: 'Mantova', strength: 64, league: 'Serie B', budget: 10_000_000 },
      { club: 'Carrarese', strength: 63, league: 'Serie B', budget: 9_500_000 },
      { club: 'Juve Stabia', strength: 65, league: 'Serie B', budget: 11_200_000 },
      { club: 'Salernitana', strength: 72, league: 'Serie B', budget: 18_500_000 },
    ],
    Germany: [
      { club: 'Bayern München', strength: 95, league: 'Bundesliga', budget: 600_000_000 },
      { club: 'Borussia Dortmund', strength: 90, league: 'Bundesliga', budget: 400_000_000 },
      { club: 'RB Leipzig', strength: 88, league: 'Bundesliga', budget: 350_000_000 },
      { club: 'Bayer Leverkusen', strength: 87, league: 'Bundesliga', budget: 320_000_000 },
      { club: 'Eintracht Frankfurt', strength: 83, league: 'Bundesliga', budget: 250_000_000 },
      { club: 'VfL Wolfsburg', strength: 81, league: 'Bundesliga', budget: 220_000_000 },
      { club: 'Borussia Mönchengladbach', strength: 80, league: 'Bundesliga', budget: 200_000_000 },
      { club: 'VfB Stuttgart', strength: 79, league: 'Bundesliga', budget: 180_000_000 },
      { club: 'SC Freiburg', strength: 78, league: 'Bundesliga', budget: 170_000_000 },
      { club: 'TSG Hoffenheim', strength: 77, league: 'Bundesliga', budget: 160_000_000 },
      { club: '1. FSV Mainz 05', strength: 76, league: 'Bundesliga', budget: 150_000_000 },
      { club: 'FC Augsburg', strength: 75, league: 'Bundesliga', budget: 140_000_000 },
      { club: 'Werder Bremen', strength: 77, league: 'Bundesliga', budget: 155_000_000 },
      { club: 'Union Berlin', strength: 78, league: 'Bundesliga', budget: 165_000_000 },
      { club: 'VfL Bochum', strength: 73, league: 'Bundesliga', budget: 120_000_000 },
      { club: '1. FC Köln', strength: 76, league: 'Bundesliga', budget: 145_000_000 },
      { club: 'Heidenheim', strength: 72, league: 'Bundesliga', budget: 110_000_000 },
      { club: 'Holstein Kiel', strength: 71, league: 'Bundesliga', budget: 105_000_000 },
      { club: 'Hamburger SV', strength: 75, league: '2. Bundesliga', budget: 25_000_000 },
      { club: 'Fortuna Düsseldorf', strength: 74, league: '2. Bundesliga', budget: 23_000_000 },
      { club: 'Hannover 96', strength: 73, league: '2. Bundesliga', budget: 22_000_000 },
      { club: 'Hertha BSC', strength: 76, league: '2. Bundesliga', budget: 27_000_000 },
      { club: '1. FC Nürnberg', strength: 71, league: '2. Bundesliga', budget: 19_000_000 },
      { club: 'Schalke 04', strength: 77, league: '2. Bundesliga', budget: 30_000_000 },
      { club: 'SV Darmstadt 98', strength: 72, league: '2. Bundesliga', budget: 20_000_000 },
      { club: '1. FC Magdeburg', strength: 69, league: '2. Bundesliga', budget: 16_000_000 },
      { club: 'Greuther Fürth', strength: 70, league: '2. Bundesliga', budget: 17_000_000 },
      { club: 'Kaiserslautern', strength: 71, league: '2. Bundesliga', budget: 18_000_000 },
      { club: 'SV Elversberg', strength: 68, league: '2. Bundesliga', budget: 14_000_000 },
      { club: 'Karlsruher SC', strength: 70, league: '2. Bundesliga', budget: 17_500_000 },
      { club: 'SC Paderborn', strength: 71, league: '2. Bundesliga', budget: 18_500_000 },
      { club: 'SSV Jahn Regensburg', strength: 67, league: '2. Bundesliga', budget: 13_000_000 },
      { club: 'Preußen Münster', strength: 66, league: '2. Bundesliga', budget: 12_000_000 },
      { club: 'SV Sandhausen', strength: 68, league: '2. Bundesliga', budget: 14_500_000 },
      { club: 'Eintracht Braunschweig', strength: 69, league: '2. Bundesliga', budget: 15_000_000 },
      { club: 'VfL Osnabrück', strength: 67, league: '2. Bundesliga', budget: 13_500_000 },
    ],
    France: [
      { club: 'Paris Saint-Germain', strength: 94, league: 'Ligue 1', budget: 700_000_000 },
      { club: 'Olympique de Marseille', strength: 85, league: 'Ligue 1', budget: 250_000_000 },
      { club: 'AS Monaco', strength: 86, league: 'Ligue 1', budget: 280_000_000 },
      { club: 'Olympique Lyonnais', strength: 84, league: 'Ligue 1', budget: 230_000_000 },
      { club: 'Lille OSC', strength: 82, league: 'Ligue 1', budget: 200_000_000 },
      { club: 'Stade Rennais', strength: 81, league: 'Ligue 1', budget: 180_000_000 },
      { club: 'OGC Nice', strength: 80, league: 'Ligue 1', budget: 170_000_000 },
      { club: 'RC Lens', strength: 79, league: 'Ligue 1', budget: 160_000_000 },
      { club: 'Montpellier HSC', strength: 77, league: 'Ligue 1', budget: 140_000_000 },
      { club: 'Strasbourg', strength: 76, league: 'Ligue 1', budget: 130_000_000 },
      { club: 'Nantes', strength: 75, league: 'Ligue 1', budget: 120_000_000 },
      { club: 'Toulouse', strength: 74, league: 'Ligue 1', budget: 110_000_000 },
      { club: 'Brest', strength: 73, league: 'Ligue 1', budget: 100_000_000 },
      { club: 'Reims', strength: 72, league: 'Ligue 1', budget: 95_000_000 },
      { club: 'Lorient', strength: 71, league: 'Ligue 1', budget: 90_000_000 },
      { club: 'Clermont Foot', strength: 70, league: 'Ligue 1', budget: 85_000_000 },
      { club: 'Saint-Étienne', strength: 76, league: 'Ligue 1', budget: 125_000_000 },
      { club: 'Angers SCO', strength: 71, league: 'Ligue 1', budget: 88_000_000 },
      { club: 'Bordeaux', strength: 73, league: 'Ligue 2', budget: 18_000_000 },
      { club: 'Amiens SC', strength: 70, league: 'Ligue 2', budget: 15_000_000 },
      { club: 'Caen', strength: 71, league: 'Ligue 2', budget: 16_000_000 },
      { club: 'Guingamp', strength: 72, league: 'Ligue 2', budget: 17_000_000 },
      { club: 'Paris FC', strength: 69, league: 'Ligue 2', budget: 14_000_000 },
      { club: 'Grenoble Foot 38', strength: 68, league: 'Ligue 2', budget: 13_000_000 },
      { club: 'Pau FC', strength: 67, league: 'Ligue 2', budget: 12_000_000 },
      { club: 'Laval', strength: 66, league: 'Ligue 2', budget: 11_500_000 },
      { club: 'Valenciennes', strength: 65, league: 'Ligue 2', budget: 11_000_000 },
      { club: 'Annecy', strength: 64, league: 'Ligue 2', budget: 10_500_000 },
      { club: 'Dunkerque', strength: 64, league: 'Ligue 2', budget: 10_000_000 },
      { club: 'Rodez', strength: 65, league: 'Ligue 2', budget: 10_800_000 },
      { club: 'Bastia', strength: 68, league: 'Ligue 2', budget: 13_500_000 },
      { club: 'Ajaccio', strength: 70, league: 'Ligue 2', budget: 15_500_000 },
      { club: 'Sochaux', strength: 69, league: 'Ligue 2', budget: 14_500_000 },
      { club: 'Nîmes Olympique', strength: 67, league: 'Ligue 2', budget: 12_500_000 },
      { club: 'Le Havre', strength: 72, league: 'Ligue 2', budget: 17_500_000 },
      { club: 'Metz', strength: 73, league: 'Ligue 2', budget: 18_000_000 },
      { club: 'Quevilly-Rouen', strength: 66, league: 'Ligue 2', budget: 11_800_000 },
      { club: 'Red Star', strength: 65, league: 'Ligue 2', budget: 11_200_000 },
    ],
    Portugal: [
      { club: 'SL Benfica', strength: 88, league: 'Primeira Liga', budget: 200_000_000 },
      { club: 'FC Porto', strength: 89, league: 'Primeira Liga', budget: 220_000_000 },
      { club: 'Sporting CP', strength: 87, league: 'Primeira Liga', budget: 190_000_000 },
      { club: 'SC Braga', strength: 82, league: 'Primeira Liga', budget: 120_000_000 },
      { club: 'Vitória Guimarães', strength: 79, league: 'Primeira Liga', budget: 90_000_000 },
      { club: 'Famalicão', strength: 76, league: 'Primeira Liga', budget: 70_000_000 },
      { club: 'Moreirense', strength: 74, league: 'Primeira Liga', budget: 60_000_000 },
      { club: 'Boavista', strength: 73, league: 'Primeira Liga', budget: 55_000_000 },
      { club: 'Gil Vicente', strength: 72, league: 'Primeira Liga', budget: 50_000_000 },
      { club: 'Estoril', strength: 71, league: 'Primeira Liga', budget: 48_000_000 },
      { club: 'Rio Ave', strength: 70, league: 'Primeira Liga', budget: 45_000_000 },
      { club: 'Portimonense', strength: 69, league: 'Primeira Liga', budget: 42_000_000 },
      { club: 'Casa Pia', strength: 68, league: 'Primeira Liga', budget: 40_000_000 },
      { club: 'Arouca', strength: 70, league: 'Primeira Liga', budget: 43_000_000 },
      { club: 'Santa Clara', strength: 71, league: 'Primeira Liga', budget: 46_000_000 },
      { club: 'Nacional', strength: 69, league: 'Primeira Liga', budget: 41_000_000 },
      { club: 'Estrela Amadora', strength: 67, league: 'Primeira Liga', budget: 38_000_000 },
      { club: 'AVS', strength: 66, league: 'Primeira Liga', budget: 35_000_000 },
    ],
    Netherlands: [
      { club: 'Ajax', strength: 89, league: 'Eredivisie', budget: 200_000_000 },
      { club: 'PSV Eindhoven', strength: 88, league: 'Eredivisie', budget: 180_000_000 },
      { club: 'Feyenoord', strength: 86, league: 'Eredivisie', budget: 150_000_000 },
      { club: 'AZ Alkmaar', strength: 80, league: 'Eredivisie', budget: 100_000_000 },
      { club: 'FC Twente', strength: 79, league: 'Eredivisie', budget: 90_000_000 },
      { club: 'FC Utrecht', strength: 77, league: 'Eredivisie', budget: 80_000_000 },
      { club: 'Sparta Rotterdam', strength: 75, league: 'Eredivisie', budget: 70_000_000 },
      { club: 'Heerenveen', strength: 74, league: 'Eredivisie', budget: 65_000_000 },
      { club: 'Go Ahead Eagles', strength: 72, league: 'Eredivisie', budget: 55_000_000 },
      { club: 'Fortuna Sittard', strength: 71, league: 'Eredivisie', budget: 50_000_000 },
      { club: 'NEC Nijmegen', strength: 70, league: 'Eredivisie', budget: 48_000_000 },
      { club: 'Heracles Almelo', strength: 69, league: 'Eredivisie', budget: 45_000_000 },
      { club: 'PEC Zwolle', strength: 68, league: 'Eredivisie', budget: 42_000_000 },
      { club: 'Almere City', strength: 67, league: 'Eredivisie', budget: 40_000_000 },
      { club: 'RKC Waalwijk', strength: 66, league: 'Eredivisie', budget: 38_000_000 },
      { club: 'Willem II', strength: 70, league: 'Eredivisie', budget: 46_000_000 },
      { club: 'NAC Breda', strength: 69, league: 'Eredivisie', budget: 43_000_000 },
      { club: 'Groningen', strength: 71, league: 'Eredivisie', budget: 47_000_000 },
    ],
    Turkey: [
      { club: 'Galatasaray', strength: 86, league: 'Süper Lig', budget: 120_000_000 },
      { club: 'Fenerbahçe', strength: 87, league: 'Süper Lig', budget: 130_000_000 },
      { club: 'Beşiktaş', strength: 85, league: 'Süper Lig', budget: 110_000_000 },
      { club: 'Trabzonspor', strength: 82, league: 'Süper Lig', budget: 90_000_000 },
      { club: 'Başakşehir', strength: 79, league: 'Süper Lig', budget: 70_000_000 },
      { club: 'Bursaspor', strength: 76, league: 'Süper Lig', budget: 55_000_000 },
      { club: 'Adana Demirspor', strength: 77, league: 'Süper Lig', budget: 60_000_000 },
      { club: 'Konyaspor', strength: 75, league: 'Süper Lig', budget: 50_000_000 },
      { club: 'Antalyaspor', strength: 74, league: 'Süper Lig', budget: 48_000_000 },
      { club: 'Gaziantep FK', strength: 72, league: 'Süper Lig', budget: 45_000_000 },
      { club: 'Alanyaspor', strength: 73, league: 'Süper Lig', budget: 47_000_000 },
      { club: 'Kayserispor', strength: 71, league: 'Süper Lig', budget: 43_000_000 },
      { club: 'Hatayspor', strength: 70, league: 'Süper Lig', budget: 40_000_000 },
      { club: 'Rizespor', strength: 71, league: 'Süper Lig', budget: 42_000_000 },
      { club: 'Samsunspor', strength: 72, league: 'Süper Lig', budget: 44_000_000 },
      { club: 'Pendikspor', strength: 69, league: 'Süper Lig', budget: 38_000_000 },
      { club: 'Karagümrük', strength: 70, league: 'Süper Lig', budget: 41_000_000 },
      { club: 'Ankaragücü', strength: 71, league: 'Süper Lig', budget: 43_000_000 },
      { club: 'Sivasspor', strength: 73, league: 'Süper Lig', budget: 46_000_000 },
      { club: 'Eyüpspor', strength: 70, league: 'Süper Lig', budget: 40_000_000 },
      { club: 'Göztepe', strength: 71, league: '1. Lig', budget: 10_000_000 },
      { club: 'Gençlerbirliği', strength: 70, league: '1. Lig', budget: 9_500_000 },
      { club: 'Denizlispor', strength: 68, league: '1. Lig', budget: 8_000_000 },
      { club: 'Altay', strength: 67, league: '1. Lig', budget: 7_500_000 },
      { club: 'Manisa FK', strength: 66, league: '1. Lig', budget: 7_000_000 },
      { club: 'Bandırmaspor', strength: 68, league: '1. Lig', budget: 8_200_000 },
      { club: 'Ümraniyespor', strength: 67, league: '1. Lig', budget: 7_800_000 },
      { club: 'Erzurumspor', strength: 66, league: '1. Lig', budget: 7_200_000 },
      { club: 'Tuzlaspor', strength: 65, league: '1. Lig', budget: 6_500_000 },
      { club: 'Keçiörengücü', strength: 65, league: '1. Lig', budget: 6_800_000 },
      { club: 'Sakaryaspor', strength: 69, league: '1. Lig', budget: 8_500_000 },
      { club: 'Boluspor', strength: 67, league: '1. Lig', budget: 7_600_000 },
      { club: 'Balıkesirspor', strength: 64, league: '1. Lig', budget: 6_000_000 },
      { club: 'Adanaspor', strength: 66, league: '1. Lig', budget: 7_000_000 },
      { club: 'Şanlıurfaspor', strength: 65, league: '1. Lig', budget: 6_700_000 },
      { club: 'Amed SK', strength: 64, league: '1. Lig', budget: 6_200_000 },
      { club: 'İstanbulspor', strength: 68, league: '1. Lig', budget: 8_000_000 },
      { club: 'Kocaelispor', strength: 69, league: '1. Lig', budget: 8_700_000 },
      { club: 'Çorum FK', strength: 66, league: '1. Lig', budget: 7_100_000 },
      { club: 'Esenler Erokspor', strength: 64, league: '1. Lig', budget: 6_300_000 },
    ],
    Greece: [
      { club: 'Olympiacos', strength: 84, league: 'Super League Greece', budget: 80_000_000 },
      { club: 'Panathinaikos', strength: 83, league: 'Super League Greece', budget: 75_000_000 },
      { club: 'AEK Athens', strength: 82, league: 'Super League Greece', budget: 70_000_000 },
      { club: 'PAOK', strength: 81, league: 'Super League Greece', budget: 65_000_000 },
      { club: 'Aris Thessaloniki', strength: 77, league: 'Super League Greece', budget: 40_000_000 },
      { club: 'Panetolikos', strength: 71, league: 'Super League Greece', budget: 25_000_000 },
      { club: 'Asteras Tripolis', strength: 70, league: 'Super League Greece', budget: 22_000_000 },
      { club: 'OFI Crete', strength: 72, league: 'Super League Greece', budget: 28_000_000 },
      { club: 'Atromitos', strength: 71, league: 'Super League Greece', budget: 26_000_000 },
      { club: 'Volos NFC', strength: 69, league: 'Super League Greece', budget: 20_000_000 },
      { club: 'Panserraikos', strength: 68, league: 'Super League Greece', budget: 18_000_000 },
      { club: 'Lamia', strength: 67, league: 'Super League Greece', budget: 16_000_000 },
      { club: 'Kallithea', strength: 66, league: 'Super League Greece', budget: 15_000_000 },
      { club: 'Levadiakos', strength: 67, league: 'Super League Greece', budget: 17_000_000 },
      { club: 'Ionikos', strength: 65, league: 'Super League 2', budget: 5_000_000 },
      { club: 'Chania', strength: 64, league: 'Super League 2', budget: 4_800_000 },
      { club: 'Kalamata', strength: 63, league: 'Super League 2', budget: 4_500_000 },
      { club: 'Ilioupoli', strength: 62, league: 'Super League 2', budget: 4_200_000 },
      { club: 'Panachaiki', strength: 64, league: 'Super League 2', budget: 4_700_000 },
      { club: 'Egaleo', strength: 61, league: 'Super League 2', budget: 4_000_000 },
      { club: 'Diagoras', strength: 60, league: 'Super League 2', budget: 3_800_000 },
      { club: 'Makedonikos', strength: 62, league: 'Super League 2', budget: 4_100_000 },
      { club: 'Niki Volos', strength: 63, league: 'Super League 2', budget: 4_400_000 },
      { club: 'AEL Larissa', strength: 66, league: 'Super League 2', budget: 5_200_000 },
      { club: 'Kavala', strength: 61, league: 'Super League 2', budget: 3_900_000 },
      { club: 'Kozani', strength: 60, league: 'Super League 2', budget: 3_700_000 },
      { club: 'Trikala', strength: 62, league: 'Super League 2', budget: 4_000_000 },
      { club: 'Anagennisi Karditsa', strength: 61, league: 'Super League 2', budget: 3_850_000 },
      { club: 'PAS Giannina', strength: 65, league: 'Super League 2', budget: 5_000_000 },
      { club: 'Iraklis', strength: 64, league: 'Super League 2', budget: 4_600_000 },
    ],
    Switzerland: [
      { club: 'Young Boys', strength: 80, league: 'Swiss Super League', budget: 40_000_000 },
      { club: 'Basel', strength: 79, league: 'Swiss Super League', budget: 35_000_000 },
      { club: 'Zürich', strength: 78, league: 'Swiss Super League', budget: 30_000_000 },
      { club: 'Servette', strength: 77, league: 'Swiss Super League', budget: 28_000_000 },
      { club: 'Lugano', strength: 76, league: 'Swiss Super League', budget: 25_000_000 },
      { club: 'St. Gallen', strength: 75, league: 'Swiss Super League', budget: 22_000_000 },
      { club: 'Grasshopper', strength: 73, league: 'Swiss Super League', budget: 20_000_000 },
      { club: 'Luzern', strength: 74, league: 'Swiss Super League', budget: 21_000_000 },
      { club: 'Lausanne-Sport', strength: 72, league: 'Swiss Super League', budget: 18_000_000 },
      { club: 'Winterthur', strength: 70, league: 'Swiss Super League', budget: 15_000_000 },
      { club: 'Sion', strength: 72, league: 'Swiss Super League', budget: 17_000_000 },
      { club: 'Yverdon-Sport', strength: 69, league: 'Swiss Super League', budget: 14_000_000 },
      { club: 'Thun', strength: 68, league: 'Swiss Challenge League', budget: 5_000_000 },
      { club: 'Neuchâtel Xamax', strength: 67, league: 'Swiss Challenge League', budget: 4_800_000 },
      { club: 'Wil', strength: 66, league: 'Swiss Challenge League', budget: 4_500_000 },
      { club: 'Aarau', strength: 65, league: 'Swiss Challenge League', budget: 4_200_000 },
      { club: 'Schaffhausen', strength: 64, league: 'Swiss Challenge League', budget: 4_000_000 },
      { club: 'Bellinzona', strength: 63, league: 'Swiss Challenge League', budget: 3_800_000 },
      { club: 'Stade Nyonnais', strength: 62, league: 'Swiss Challenge League', budget: 3_500_000 },
      { club: 'Vaduz', strength: 64, league: 'Swiss Challenge League', budget: 3_900_000 },
      { club: 'Etoile Carouge', strength: 61, league: 'Swiss Challenge League', budget: 3_200_000 },
      { club: 'Stade Lausanne-Ouchy', strength: 65, league: 'Swiss Challenge League', budget: 4_100_000 },
    ],
    Croatia: [
      { club: 'Dinamo Zagreb', strength: 82, league: 'HNL', budget: 30_000_000 },
      { club: 'Hajduk Split', strength: 80, league: 'HNL', budget: 25_000_000 },
      { club: 'Rijeka', strength: 78, league: 'HNL', budget: 20_000_000 },
      { club: 'Osijek', strength: 76, league: 'HNL', budget: 18_000_000 },
      { club: 'Lokomotiva Zagreb', strength: 73, league: 'HNL', budget: 12_000_000 },
      { club: 'Istra 1961', strength: 70, league: 'HNL', budget: 10_000_000 },
      { club: 'Slaven Belupo', strength: 69, league: 'HNL', budget: 9_000_000 },
      { club: 'Varteks Varaždin', strength: 68, league: 'HNL', budget: 8_500_000 },
      { club: 'Gorica', strength: 67, league: 'HNL', budget: 8_000_000 },
      { club: 'Šibenik', strength: 66, league: 'HNL', budget: 7_500_000 },
      { club: 'Cibalia', strength: 65, league: 'First NL', budget: 3_000_000 },
      { club: 'Sesvete', strength: 64, league: 'First NL', budget: 2_800_000 },
      { club: 'Jarun', strength: 62, league: 'First NL', budget: 2_500_000 },
      { club: 'Dugopolje', strength: 63, league: 'First NL', budget: 2_600_000 },
      { club: 'Solin', strength: 61, league: 'First NL', budget: 2_300_000 },
      { club: 'Dubrava', strength: 60, league: 'First NL', budget: 2_200_000 },
      { club: 'Zrinski Jurjevac', strength: 62, league: 'First NL', budget: 2_400_000 },
      { club: 'Orijent', strength: 61, league: 'First NL', budget: 2_350_000 },
      { club: 'Croatia Zmijavci', strength: 60, league: 'First NL', budget: 2_100_000 },
      { club: 'Bijelo Brdo', strength: 59, league: 'First NL', budget: 2_000_000 },
      { club: 'Rudeš', strength: 64, league: 'First NL', budget: 2_700_000 },
      { club: 'Vukovar 91', strength: 63, league: 'First NL', budget: 2_550_000 },
    ],
  };

  for (const [countryRaw, list] of Object.entries(USER_CLUBS_OVERRIDES)) {
    const country = mapCountry(countryRaw);
    if (!CLUBS[country]) CLUBS[country] = [];
    const byNorm = new Map<string, number>();
    // index existing by normalized name
    (CLUBS[country] || []).forEach((c, i) => byNorm.set(normalize(c.club), i));
    for (const entry of list) {
      const key = normalize(entry.club);
      if (byNorm.has(key)) {
        const idx = byNorm.get(key)!;
        CLUBS[country][idx] = { club: entry.club, strength: entry.strength, league: entry.league, budget: entry.budget };
      } else {
        // avoid duplicates by league+name collisions after diacritic changes
        if (!(CLUBS[country] || []).some(c => normalize(c.club) === key)) {
          CLUBS[country].push({ club: entry.club, strength: entry.strength, league: entry.league, budget: entry.budget });
        }
      }
    }
    // Remove accidental duplicates (normalize-based)
    const seen = new Set<string>();
    CLUBS[country] = (CLUBS[country] || []).filter(c => {
      const k = normalize(c.club);
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  }
})();

// National competitions
export const NATIONAL_COMP = [
  { name: "World Cup", prestige: 100 },
  { name: "European Championship", prestige: 95 },
  { name: "Copa America", prestige: 93 },
  { name: "African Cup of Nations", prestige: 88 },
  { name: "Asian Cup", prestige: 85 },
];

// Comprehensive names for players
export const FIRST_NAMES = [
  // English/American names
  "Alex",
  "John",
  "James",
  "William",
  "Oliver",
  "Harry",
  "George",
  "Charlie",
  "Jack",
  "Jacob",
  "Thomas",
  "Oscar",
  "Lucas",
  "Henry",
  "Samuel",
  "Daniel",
  "Michael",
  "David",
  "Andrew",
  "Benjamin",
  "Christopher",
  "Matthew",
  "Anthony",
  "Mark",
  "Donald",
  "Steven",
  "Paul",
  "Joshua",
  "Kenneth",
  "Kevin",

  // Spanish/Latin names
  "Mario",
  "Diego",
  "Sergio",
  "Carlos",
  "Juan",
  "Miguel",
  "Pedro",
  "Rafael",
  "Gabriel",
  "Lucas",
  "Bruno",
  "Felipe",
  "Thiago",
  "Alejandro",
  "Santiago",
  "Nicolás",
  "Sebastián",
  "Mateo",
  "Adrián",
  "Ángel",
  "Javier",
  "Francisco",
  "Fernando",
  "Ricardo",
  "Roberto",
  "Eduardo",
  "Andrés",
  "Gonzalo",
  "Emilio",
  "Raúl",

  // Italian names
  "Matteo",
  "Giovanni",
  "Lorenzo",
  "Marco",
  "Alessandro",
  "Andrea",
  "Stefano",
  "Francesco",
  "Giuseppe",
  "Antonio",
  "Luca",
  "Davide",
  "Simone",
  "Federico",
  "Riccardo",
  "Tommaso",
  "Gabriele",
  "Filippo",
  "Jacopo",
  "Edoardo",

  // French names
  "Pierre",
  "Kylian",
  "Antoine",
  "Hugo",
  "Louis",
  "Baptiste",
  "Théo",
  "Maxime",
  "Alexandre",
  "Nicolas",
  "Julien",
  "Romain",
  "Florian",
  "Adrien",
  "Mathieu",
  "Benjamin",
  "Sébastien",
  "Vincent",
  "Olivier",
  "Pascal",

  // German names
  "Hans",
  "Lars",
  "Jens",
  "Sven",
  "Niels",
  "Erik",
  "Thomas",
  "Michael",
  "Stefan",
  "Christian",
  "Sebastian",
  "Matthias",
  "Andreas",
  "Markus",
  "Martin",
  "Patrick",
  "Daniel",
  "Alexander",
  "Tobias",
  "Florian",

  // Portuguese names
  "Rui",
  "João",
  "Diogo",
  "André",
  "Bernardo",
  "Gonçalo",
  "Tiago",
  "Ricardo",
  "Pedro",
  "Miguel",
  "Nuno",
  "Paulo",
  "Carlos",
  "Luís",
  "António",
  "José",
  "Francisco",
  "Bruno",
  "Vítor",
  "Hélder",

  // Romanian names
  "Andrei",
  "Florin",
  "Alexandru",
  "Mihai",
  "Adrian",
  "Cristian",
  "Daniel",
  "Ionuț",
  "Marius",
  "George",
  "Bogdan",
  "Vlad",
  "Radu",
  "Ștefan",
  "Cătălin",
  "Gabriel",
  "Cosmin",
  "Silviu",
  "Laurențiu",
  "Ciprian",

  // Arabic names
  "Mohamed",
  "Ahmed",
  "Youssef",
  "Ali",
  "Ibrahim",
  "Omar",
  "Hassan",
  "Khalid",
  "Faisal",
  "Amir",
  "Mustafa",
  "Mahmoud",
  "Rashid",
  "Tariq",
  "Samir",
  "Karim",
  "Nasser",
  "Walid",
  "Marwan",
  "Adel",

  // African names
  "Emmanuel",
  "Chukwuemeka",
  "Tunde",
  "Adebayo",
  "Olumide",
  "Kwame",
  "Kofi",
  "Mamadou",
  "Ousmane",
  "Bakary",
  "Seydou",
  "Ibrahim",
  "Moussa",
  "Abdoulaye",
  "Amadou",
  "Souleymane",
  "Boubacar",
  "Cheikh",
  "Lamine",
  "Saliou",

  // Scandinavian names
  "Magnus",
  "Björn",
  "Anders",
  "Nils",
  "Gustav",
  "Henrik",
  "Johan",
  "Mikael",
  "Oskar",
  "Viktor",
  "Rasmus",
  "Emil",
  "Simon",
  "Adam",
  "Filip",
  "Anton",
  "Elias",
  "Noah",
  "William",
  "Hugo",

  // Eastern European names
  "Dimitri",
  "Ivan",
  "Nikolai",
  "Sergei",
  "Alexei",
  "Pavel",
  "Andrej",
  "Marko",
  "Petar",
  "Stefan",
  "Nemanja",
  "Miloš",
  "Dušan",
  "Bojan",
  "Zoran",
  "Dragan",
  "Milan",
  "Dejan",
  "Goran",
  "Saša",

  // Asian names
  "Kenji",
  "Hiroshi",
  "Takashi",
  "Yuto",
  "Daichi",
  "Haruto",
  "Sota",
  "Ren",
  "Kai",
  "Riku",
  "Min-jun",
  "Seo-jun",
  "Do-yoon",
  "Eun-woo",
  "Si-woo",
  "Ye-jun",
  "Yu-jin",
  "Ha-jun",
  "Woo-jin",
  "Jun-seo",
];

export const LAST_NAMES = [
  // English/British surnames
  "Smith",
  "Brown",
  "Taylor",
  "Wilson",
  "Davis",
  "Johnson",
  "Williams",
  "Jones",
  "Miller",
  "Moore",
  "Anderson",
  "Thomas",
  "Jackson",
  "White",
  "Harris",
  "Martin",
  "Thompson",
  "Garcia",
  "Martinez",
  "Robinson",
  "Clark",
  "Lewis",
  "Lee",
  "Walker",
  "Hall",
  "Allen",
  "Young",
  "King",
  "Wright",
  "Lopez",

  // Spanish surnames
  "Popescu",
  "Rossi",
  "Müller",
  "Gómez",
  "Blanc",
  "Torres",
  "Ionescu",
  "Doe",
  "Silva",
  "Rodríguez",
  "Martínez",
  "Hernández",
  "López",
  "Pérez",
  "González",
  "Sánchez",
  "Ramírez",
  "Cruz",
  "Flores",
  "Gutierrez",
  "Morales",
  "Ortiz",
  "Jiménez",
  "Ruiz",
  "Vargas",
  "Castillo",
  "Romero",
  "Herrera",
  "Medina",
  "Guerrero",

  // Italian surnames
  "Santos",
  "Ferreira",
  "Oliveira",
  "Costa",
  "Pereira",
  "Rizzo",
  "Conti",
  "Bianchi",
  "Romano",
  "Greco",
  "Esposito",
  "Fontana",
  "Santoro",
  "Mariani",
  "Rinaldi",
  "Colombo",
  "Benedetti",
  "Pellegrini",
  "Vitale",
  "Donati",

  // French surnames
  "Mbappé",
  "Giroud",
  "Pogba",
  "Kanté",
  "Deschamps",
  "Dupont",
  "Martin",
  "Bernard",
  "Petit",
  "Robert",
  "Richard",
  "Durand",
  "Leroy",
  "Moreau",
  "Simon",
  "Laurent",
  "Lefebvre",
  "Michel",
  "Garcia",
  "David",

  // German surnames
  "Schmidt",
  "Weber",
  "Meyer",
  "Wagner",
  "Becker",
  "Schulz",
  "Hoffmann",
  "Koch",
  "Richter",
  "Klein",
  "Wolf",
  "Schröder",
  "Neumann",
  "Schwarz",
  "Zimmermann",
  "Braun",
  "Krüger",
  "Hartmann",
  "Lange",
  "Schmitt",

  // Portuguese surnames
  "Tanaka",
  "Sato",
  "Suzuki",
  "Takahashi",
  "Yamamoto",
  "Watanabe",
  "Ito",
  "Nakamura",
  "Kobayashi",
  "Saito",
  "Kato",
  "Yoshida",
  "Yamada",
  "Sasaki",
  "Yamaguchi",
  "Matsumoto",
  "Inoue",
  "Kimura",
  "Hayashi",
  "Shimizu",

  // Romanian surnames
  "Adeyemi",
  "Okafor",
  "Nwankwo",
  "Okonkwo",
  "Iheanacho",
  "Ivanov",
  "Petrov",
  "Smirnov",
  "Volkov",
  "Kuznetsov",
  "Sokolov",
  "Lebedev",
  "Kozlov",
  "Novikov",
  "Morozov",
  "Petrov",
  "Volkov",
  "Solovyov",
  "Vasiliev",
  "Zaitsev",

  // Arabic surnames
  "Ali",
  "Ahmed",
  "Khan",
  "Rahman",
  "Hussein",
  "Hassan",
  "Mohamed",
  "Ibrahim",
  "Omar",
  "Youssef",
  "Mansour",
  "Farouk",
  "Nasser",
  "Saeed",
  "Khalil",
  "Mahmoud",
  "Rashid",
  "Salim",
  "Tamer",
  "Waleed",

  // Korean surnames
  "Park",
  "Kim",
  "Lee",
  "Choi",
  "Jung",
  "Kang",
  "Cho",
  "Yoon",
  "Jang",
  "Lim",
  "Han",
  "Oh",
  "Seo",
  "Shin",
  "Kwon",
  "Hwang",
  "Ahn",
  "Song",
  "Hong",
  "Yang",

  // Dutch surnames
  "Van Dijk",
  "De Jong",
  "De Boer",
  "Van Persie",
  "Sneijder",
  "Van der Berg",
  "De Vries",
  "Van Leeuwen",
  "De Wit",
  "Janssen",
  "Van der Meer",
  "De Groot",
  "Peters",
  "Van den Berg",
  "Hendriks",
  "Van der Laan",
  "Dekker",
  "Bakker",
  "Visser",
  "Smit",

  // Scandinavian surnames
  "Cruz",
  "Ramos",
  "Vega",
  "Morales",
  "Castillo",
  "Andersson",
  "Johansson",
  "Karlsson",
  "Nilsson",
  "Eriksson",
  "Larsson",
  "Olsson",
  "Persson",
  "Svensson",
  "Gustafsson",
  "Pettersson",
  "Jonsson",
  "Jansson",
  "Hansson",
  "Bengtsson",

  // Turkish surnames
  "Özil",
  "Çalhanoglu",
  "Yılmaz",
  "Şahin",
  "Turan",
  "Demiral",
  "Tosun",
  "Aktürkoğlu",
  "Kökçü",
  "Ünder",
  "Yazıcı",
  "Kabak",
  "Ayhan",
  "Çelik",
  "Karaman",
  "Ünal",
  "Soyuncu",
  "Yokuslu",
  "Kahveci",
  "Dervişoğlu",
];

export const NATIONALITIES = [
  // European countries
  "ROM",
  "ENG",
  "FRA",
  "GER",
  "ESP",
  "ITA",
  "NED",
  "POR",
  "BEL",
  "SUI",
  "AUT",
  "POL",
  "CZE",
  "SVK",
  "HUN",
  "BUL",
  "GRE",
  "TUR",
  "SWE",
  "NOR",
  "DEN",
  "FIN",
  "ISL",
  "IRL",
  "SCO",
  "WAL",
  "CRO",
  "SRB",
  "BIH",
  "SVN",
  "ALB",
  "MKD",
  "MNE",
  "UKR",
  "RUS",
  "BLR",
  "LTU",
  "LVA",
  "EST",

  // South American countries
  "BRA",
  "ARG",
  "URU",
  "CHI",
  "COL",
  "PER",
  "VEN",
  "ECU",
  "PAR",
  "BOL",
  "GUY",
  "SUR",

  // North American countries
  "USA",
  "MEX",
  "CAN",
  "CRC",
  "PAN",
  "HON",
  "SLV",
  "GUA",
  "NIC",
  "BLZ",
  "JAM",
  "TRI",
  "HAI",
  "DOM",
  "CUB",

  // African countries
  "NGA",
  "GHA",
  "CMR",
  "SEN",
  "CIV",
  "RSA",
  "KEN",
  "UGA",
  "ETH",
  "MAR",
  "ALG",
  "TUN",
  "EGY",
  "MLI",
  "BUR",
  "GAB",
  "CGO",
  "ANG",
  "MOZ",
  "ZIM",
  "ZAM",
  "TAN",
  "RWA",
  "BEN",
  "TOG",
  "GUI",
  "LBR",
  "SLE",
  "GAM",
  "CPV",

  // Asian countries
  "JPN",
  "KOR",
  "CHN",
  "AUS",
  "IND",
  "THA",
  "VIE",
  "IDN",
  "MAS",
  "PHI",
  "SGP",
  "IRN",
  "IRQ",
  "JOR",
  "SYR",
  "LEB",
  "ISR",
  "KSA",
  "UAE",
  "QAT",
  "KUW",
  "BHR",
  "OMN",
  "YEM",
  "AFG",
  "PAK",
  "BAN",
  "SRI",
  "NPL",
  "BHU",
  "MYA",
  "LAO",
  "KHM",
  "BRU",
  "TLS",
  "MGL",
  "UZB",
  "KAZ",
  "KGZ",
  "TJK",
  "TKM",
  "ARM",
  "GEO",
  "AZE",
];

// National cup names by country
export const NATIONAL_CUPS: Record<string, string> = {
  Romania: "Cupa României",
  England: "FA Cup",
  Spain: "Copa del Rey",
  Italy: "Coppa Italia",
  Germany: "DFB-Pokal",
  France: "Coupe de France",
  Portugal: "Taça de Portugal",
  Netherlands: "KNVB Beker",
  Turkey: "Türkiye Kupası",
  Greece: "Kypello Elladas",
  Switzerland: "Swiss Cup",
  Croatia: "Hrvatski nogometni kup",
  Belgium: "Belgian Cup",
  Austria: "ÖFB-Cup",
  Scotland: "Scottish Cup",
  Norway: "Norwegian Football Cup",
  Sweden: "Svenska Cupen",
  Denmark: "Danish Cup",
  Poland: "Polish Cup",
  "Czech Republic": "Czech Cup",
  Brazil: "Copa do Brasil",
  Argentina: "Copa Argentina",
  Mexico: "Copa MX",
  USA: "US Open Cup",
  Japan: "Emperor's Cup",
  "South Korea": "Korean FA Cup",
  Australia: "FFA Cup",
};
