import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import BallDraw from './BallDraw';
import { 
  Player, Club, CareerHistory, PlayerStats 
} from '@/lib/types';
import { 
  getLeague, getLeagueClubs, draftClub, isInFirstEleven, 
  generateSeasonStats, calculateSalary, calculateMarketValue,
  simulateCup, simulateEuropean, formatCurrency, randomInt
} from '@/lib/gameLogic';

interface CareerManagerProps {
  player: Player;
  onPlayerUpdate: (player: Player) => void;
  onRetirement: (player: Player) => void;
}

export default function CareerManager({ player, onPlayerUpdate, onRetirement }: CareerManagerProps) {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(player);
  const [showDraw, setShowDraw] = useState(false);
  const [currentDraw, setCurrentDraw] = useState<{
    type: 'evolution' | 'cup' | 'european',
    balls: Record<string, number>,
    title: string,
    onComplete?: (result: string) => void
  } | null>(null);
  const [seasonInProgress, setSeasonInProgress] = useState(false);
  const [seasonResults, setSeasonResults] = useState<{
    league: { position: number, total: number },
    cup: { phase: string, details: string[] },
    european?: { phase: string, details: string[], prize: number },
    evolution: number,
    stats: PlayerStats,
    trophies: string[]
  } | null>(null);

  useEffect(() => {
    onPlayerUpdate(currentPlayer);
  }, [currentPlayer, onPlayerUpdate]);

  const updatePlayer = (updates: Partial<Player>) => {
    setCurrentPlayer(prev => ({ ...prev, ...updates }));
  };

  const handleNewSeason = () => {
    if (currentPlayer.age >= currentPlayer.retireAt) {
      onRetirement(currentPlayer);
      return;
    }

    setSeasonInProgress(true);
    setSeasonResults(null);
    
    // Age the player
    const newAge = currentPlayer.age + 1;
    const newSeason = currentPlayer.season + 1;
    const newContractYears = Math.max(0, currentPlayer.contractYears - 1);
    
    updatePlayer({ 
      age: newAge, 
      season: newSeason, 
      contractYears: newContractYears,
      playedU21ThisSeason: false 
    });

    // Check if needs new club
    if (!currentPlayer.club || newContractYears <= 0) {
      findNewClub();
    } else {
      simulateSeason();
    }
  };

  const findNewClub = () => {
    const country = currentPlayer.country;
    const leagueIndex = currentPlayer.rating >= 80 ? 0 : 1;
    const league = getLeague(leagueIndex, country);
    
    const club = draftClub(
      country, 
      currentPlayer.rating, 
      league, 
      undefined, 
      currentPlayer.favoriteClub
    );

    if (club) {
      updatePlayer({
        club: club.name,
        league: club.league,
        contractYears: 2,
        isOnLoan: false
      });
      
      setTimeout(() => {
        simulateSeason();
      }, 1000);
    }
  };

  const simulateSeason = () => {
    // Get current club
    const clubs = getLeagueClubs(currentPlayer.country, currentPlayer.league);
    const currentClub = clubs.find(c => c.name === currentPlayer.club) || clubs[0];
    
    // Simulate league position
    const totalTeams = clubs.length;
    const leaguePosition = randomInt(1, totalTeams);
    
    // Show evolution draw
    const isStarter = isInFirstEleven(currentPlayer, currentClub);
    const evolutionBalls = isStarter 
      ? { '10': 7, '9': 5, '8': 3, '7': 2, '6': 1 }
      : { '7': 5, '6': 3, '5': 2, '8': 2 };

    setCurrentDraw({
      type: 'evolution',
      balls: evolutionBalls,
      title: 'Evoluția Ta Acest Sezon',
      onComplete: (evolution) => {
        const evo = parseInt(evolution);
        continueSeasonSimulation(currentClub, leaguePosition, totalTeams, evo, isStarter);
      }
    });
    setShowDraw(true);
  };

  const continueSeasonSimulation = (
    club: Club, 
    position: number, 
    totalTeams: number, 
    evolution: number,
    isStarter: boolean
  ) => {
    // Generate stats
    const stats = generateSeasonStats(currentPlayer, club, isStarter, evolution);
    
    // Simulate cup
    const cupResult = simulateCup(club, currentPlayer.country);
    
    // Simulate European competition
    let europeanResult = null;
    if (position <= 8 && currentPlayer.league === getLeague(0, currentPlayer.country)) {
      const competitions = ['Champions League', 'Europa League', 'Conference League'];
      const competition = competitions[Math.min(2, Math.floor((position - 1) / 3))];
      europeanResult = simulateEuropean(club, competition);
    }

    // Calculate trophies
    const trophies: string[] = [];
    if (position === 1) {
      trophies.push(`🏆 ${currentPlayer.league}`);
    }
    if (cupResult.phase === "Câștigător") {
      trophies.push(`🏆 Cupa Națională`);
    }
    if (europeanResult?.phase === "Câștigător") {
      trophies.push(`🏆 ${europeanResult.phase}`);
    }

    // Update player attributes and rating
    updatePlayerAttributes(evolution);
    
    // Update career history
    const careerEntry: CareerHistory = {
      season: currentPlayer.season,
      club: currentPlayer.club,
      league: currentPlayer.league,
      rating: currentPlayer.rating,
      salary: calculateSalary(currentPlayer, club),
      marketValue: calculateMarketValue(currentPlayer, club, stats),
      attributes: { ...currentPlayer.attributes },
      stats,
      trophies
    };

    updatePlayer({
      stats,
      salary: careerEntry.salary,
      marketValue: careerEntry.marketValue,
      career: [...currentPlayer.career, careerEntry]
    });

    setSeasonResults({
      league: { position, total: totalTeams },
      cup: cupResult,
      european: europeanResult || undefined,
      evolution,
      stats,
      trophies
    });
    
    setSeasonInProgress(false);
  };

  const updatePlayerAttributes = (evolution: number) => {
    const newAttributes = { ...currentPlayer.attributes };
    let ratingChange = 0;

    // Update each attribute
    Object.keys(newAttributes).forEach(attr => {
      let growth = 0;
      if (evolution >= 9) {
        growth = randomInt(2, 4);
      } else if (evolution >= 7) {
        growth = randomInt(0, 2);
      } else {
        growth = -randomInt(1, 2);
      }

      // Age factor
      if (currentPlayer.age > 30) {
        growth -= randomInt(0, 1);
      }

      newAttributes[attr] = Math.max(40, Math.min(99, newAttributes[attr] + growth));
    });

    // Calculate new rating
    const averageAttribute = Object.values(newAttributes).reduce((sum, val) => sum + val, 0) / Object.values(newAttributes).length;
    
    if (evolution >= 9) {
      ratingChange = randomInt(1, 3);
    } else if (evolution <= 6) {
      ratingChange = -randomInt(1, 2);
    }

    const newRating = Math.max(45, Math.min(99, Math.max(currentPlayer.rating + ratingChange, Math.floor(averageAttribute))));

    updatePlayer({
      attributes: newAttributes,
      rating: newRating
    });
  };

  const handleDrawComplete = (result: string) => {
    if (currentDraw?.onComplete) {
      currentDraw.onComplete(result);
    }
    setShowDraw(false);
    setCurrentDraw(null);
  };

  if (currentPlayer.age >= currentPlayer.retireAt) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800">
              🏆 Cariera S-a Încheiat
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-xl">
              {currentPlayer.name} s-a retras la vârsta de {currentPlayer.age} ani!
            </p>
            <Button onClick={() => onRetirement(currentPlayer)} className="bg-blue-600 hover:bg-blue-700">
              Vezi Rezumatul Carierei
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Player Header */}
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl font-bold text-green-800">
                  ⚽ {currentPlayer.name}
                </CardTitle>
                <p className="text-green-600">
                  {currentPlayer.position} • {currentPlayer.age} ani • Rating: {currentPlayer.rating}
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-green-800">Club:</span>
                  <p>{currentPlayer.club || 'Liber de contract'}</p>
                </div>
                <div>
                  <span className="font-semibold text-green-800">Liga:</span>
                  <p>{currentPlayer.league || '-'}</p>
                </div>
                <div>
                  <span className="font-semibold text-green-800">Salariu:</span>
                  <p>{formatCurrency(currentPlayer.salary)}/an</p>
                </div>
                <div>
                  <span className="font-semibold text-green-800">Valoare:</span>
                  <p>{formatCurrency(currentPlayer.marketValue)}</p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="career" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="career">Carieră</TabsTrigger>
            <TabsTrigger value="attributes">Atribute</TabsTrigger>
            <TabsTrigger value="season">Sezon</TabsTrigger>
            <TabsTrigger value="actions">Acțiuni</TabsTrigger>
          </TabsList>

          <TabsContent value="career" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Istoricul Carierei</CardTitle>
              </CardHeader>
              <CardContent>
                {currentPlayer.career.length === 0 ? (
                  <p className="text-gray-500 text-center">Nu ai încă istoric de carieră.</p>
                ) : (
                  <div className="space-y-4">
                    {currentPlayer.career.map((entry, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">Sezonul {entry.season}</h4>
                            <p className="text-sm text-gray-600">{entry.club} ({entry.league})</p>
                          </div>
                          <Badge variant="secondary">Rating: {entry.rating}</Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                          <div>Goluri: {entry.stats.goals}</div>
                          <div>Assist-uri: {entry.stats.assists}</div>
                          <div>Salariu: {formatCurrency(entry.salary)}</div>
                          <div>Valoare: {formatCurrency(entry.marketValue)}</div>
                        </div>
                        {entry.trophies.length > 0 && (
                          <div className="mt-2">
                            <span className="text-sm font-semibold">Trofee: </span>
                            {entry.trophies.join(', ')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attributes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Atributele Jucătorului</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(currentPlayer.attributes).map(([attr, value]) => (
                    <div key={attr} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{attr}</span>
                      <Badge variant={value >= 80 ? "default" : value >= 70 ? "secondary" : "destructive"}>
                        {value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="season" className="space-y-4">
            {seasonResults ? (
              <Card>
                <CardHeader>
                  <CardTitle>Rezultatele Sezonului {currentPlayer.season}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Liga</h4>
                    <p>Poziția finală: {seasonResults.league.position}/{seasonResults.league.total}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">Cupa Națională</h4>
                    <p>Faza maximă: {seasonResults.cup.phase}</p>
                    <div className="text-sm text-gray-600 mt-1">
                      {seasonResults.cup.details.map((detail, i) => (
                        <div key={i}>{detail}</div>
                      ))}
                    </div>
                  </div>
                  {seasonResults.european && (
                    <>
                      <Separator />
                      <div>
                        <h4 className="font-semibold mb-2">Competiție Europeană</h4>
                        <p>Faza maximă: {seasonResults.european.phase}</p>
                        <p>Premiu: {formatCurrency(seasonResults.european.prize)}</p>
                        <div className="text-sm text-gray-600 mt-1">
                          {seasonResults.european.details.map((detail, i) => (
                            <div key={i}>{detail}</div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">Statistici Personale</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>Goluri: {seasonResults.stats.goals}</div>
                      <div>Assist-uri: {seasonResults.stats.assists}</div>
                      {seasonResults.stats.cleanSheets && (
                        <div>Clean Sheets: {seasonResults.stats.cleanSheets}</div>
                      )}
                      <div>Evoluție: {seasonResults.evolution}/10</div>
                    </div>
                  </div>
                  {seasonResults.trophies.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h4 className="font-semibold mb-2">Trofee Câștigate</h4>
                        <div>{seasonResults.trophies.join(', ')}</div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-gray-500">Simulează un sezon nou pentru a vedea rezultatele.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="actions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Acțiuni Disponibile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleNewSeason}
                  disabled={seasonInProgress}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                  size="lg"
                >
                  {seasonInProgress ? '⏳ Simulare în curs...' : '▶️ Sezon Nou'}
                </Button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" disabled>
                    🔄 Cere Transfer
                  </Button>
                  <Button variant="outline" disabled>
                    📝 Renegociază Contract
                  </Button>
                  <Button variant="outline" disabled>
                    🏃 Cere Împrumut
                  </Button>
                  <Button variant="outline" disabled>
                    🏠 Transfer Intern
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 text-center">
                  Alte acțiuni vor fi disponibile în versiuni viitoare
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <BallDraw
        balls={currentDraw?.balls || {}}
        title={currentDraw?.title || ''}
        onComplete={handleDrawComplete}
        isVisible={showDraw}
      />
    </div>
  );
}
