import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import BallDraw from './BallDraw';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import {
  Player, Club, CareerHistory, PlayerStats
} from '@/lib/types';
import { LEAGUES } from '@/lib/gameData';
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
  const [firstSeasonHandled, setFirstSeasonHandled] = useState(false);
  const [seasonResults, setSeasonResults] = useState<{
    league: { position: number, total: number },
    cup: { phase: string, details: string[] },
    european?: { phase: string, details: string[], prize: number },
    evolution: number,
    stats: PlayerStats,
    trophies: string[],
    globalWinners?: Record<string, string>,
    standings?: Record<string, string[]>,
    topXILeague?: { position: string, club: string }[],
    topXIGlobal?: { position: string, club: string, country: string }[]
  } | null>(null);

  const [offerOpen, setOfferOpen] = useState(false);
  const [pendingOffer, setPendingOffer] = useState<{
    type: 'external' | 'domestic' | 'loan',
    club: Club,
    salary: number,
    contractYears: number
  } | null>(null);

  useEffect(() => {
    onPlayerUpdate(currentPlayer);
  }, [currentPlayer, onPlayerUpdate]);

  // Auto-sign with a club in Season 1 (like the Python flow)
  useEffect(() => {
    if (!firstSeasonHandled && !currentPlayer.club && currentPlayer.season === 1 && !seasonInProgress && !showDraw) {
      setFirstSeasonHandled(true);
      findNewClub();
    }
  }, [firstSeasonHandled, currentPlayer.club, currentPlayer.season, seasonInProgress, showDraw]);

  // Start simulation when a club + league exist and a season is in progress
  useEffect(() => {
    if (seasonInProgress && currentPlayer.club && currentPlayer.league && !showDraw && !seasonResults) {
      simulateSeason();
    }
  }, [seasonInProgress, currentPlayer.club, currentPlayer.league, showDraw, seasonResults]);

  const updatePlayer = (updates: Partial<Player>) => {
    setCurrentPlayer(prev => ({ ...prev, ...updates }));
  };

  const pickWeighted = (clubs: Club[], rating: number): Club => {
    const weights = clubs.map(c => {
      const delta = Math.abs(c.strength - rating);
      return Math.max(1, 26 - Math.min(20, delta));
    });
    const total = weights.reduce((a,b) => a+b, 0);
    let r = Math.random() * total;
    for (let i = 0; i < clubs.length; i++) {
      r -= weights[i];
      if (r <= 0) return clubs[i];
    }
    return clubs[clubs.length - 1];
  };

  const proposeOffer = (type: 'external'|'domestic'|'loan', club: Club, years: number) => {
    const salary = calculateSalary(currentPlayer, club);
    setPendingOffer({ type, club, salary, contractYears: years });
    setOfferOpen(true);
  };

  const acceptOffer = () => {
    if (!pendingOffer) return;
    const c = pendingOffer.club;
    const updates: Partial<Player> = {
      club: c.name,
      league: c.league,
      country: c.country,
      salary: pendingOffer.salary,
      contractYears: pendingOffer.type === 'loan' ? Math.max(1, currentPlayer.contractYears) : pendingOffer.contractYears,
      isOnLoan: pendingOffer.type === 'loan'
    };
    updatePlayer(updates);
    setOfferOpen(false);
    setPendingOffer(null);
  };

  const requestDomesticTransfer = () => {
    if (!currentPlayer.country || !currentPlayer.league) return;
    const pool = getLeagueClubs(currentPlayer.country, currentPlayer.league).filter(c => c.name !== currentPlayer.club);
    if (!pool.length) return;
    const chosen = pickWeighted(pool, currentPlayer.rating);
    proposeOffer('domestic', chosen, 3);
  };

  const requestExternalTransfer = () => {
    const countries = Object.keys(LEAGUES);
    let candidates: Club[] = [];
    countries.forEach(country => {
      const topLeague = getLeague(0, country);
      candidates = candidates.concat(
        getLeagueClubs(country, topLeague).filter(c => !(country === currentPlayer.country && c.name === currentPlayer.club))
      );
    });
    if (!candidates.length) return;
    const chosen = pickWeighted(candidates, currentPlayer.rating);
    proposeOffer('external', chosen, 3);
  };

  const requestLoan = () => {
    if (!currentPlayer.country || !currentPlayer.league) return;
    const pool = getLeagueClubs(currentPlayer.country, currentPlayer.league).filter(c => c.name !== currentPlayer.club);
    if (!pool.length) return;
    const chosen = pickWeighted(pool, currentPlayer.rating);
    proposeOffer('loan', chosen, 1);
  };

  const requestNewContract = () => {
    if (!currentPlayer.club || !currentPlayer.league) return;
    const clubs = getLeagueClubs(currentPlayer.country, currentPlayer.league);
    const club = clubs.find(c => c.name === currentPlayer.club) || clubs[0];
    if (!club) return;
    const newSalary = Math.floor(calculateSalary(currentPlayer, club) * 1.1);
    updatePlayer({ salary: newSalary, contractYears: Math.max(2, currentPlayer.contractYears + 1) });
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
    let league = getLeague(leagueIndex, country);

    // Try preferred league
    let club = draftClub(
      country,
      currentPlayer.rating,
      league,
      undefined,
      currentPlayer.favoriteClub
    );

    // Fallback to top league if no club in current league
    if (!club) {
      league = getLeague(0, country);
      club = draftClub(
        country,
        currentPlayer.rating,
        league,
        undefined,
        currentPlayer.favoriteClub
      );
    }

    // Fallback to first available club in top league
    if (!club) {
      const topClubs = getLeagueClubs(country, getLeague(0, country));
      if (topClubs.length) {
        club = topClubs[0];
      }
    }

    if (club) {
      setSeasonInProgress(true);
      updatePlayer({
        club: club.name,
        league: club.league,
        contractYears: 2,
        isOnLoan: false
      });
    } else {
      // Last resort generic assignment in top league
      const topLeague = getLeague(0, country);
      setSeasonInProgress(true);
      updatePlayer({
        club: 'Generic Club',
        league: topLeague,
        contractYears: 2,
        isOnLoan: false
      });
    }
  };

  const simulateSeason = () => {
    // Get current club
    let clubs = getLeagueClubs(currentPlayer.country, currentPlayer.league);
    if (!clubs.length) {
      const topLeague = getLeague(0, currentPlayer.country);
      const topClubs = getLeagueClubs(currentPlayer.country, topLeague);
      if (topClubs.length) {
        clubs = topClubs;
        if (!currentPlayer.league) updatePlayer({ league: topLeague });
      }
    }

    let currentClub = clubs.find(c => c.name === currentPlayer.club) || clubs[0];
    if (!currentClub) {
      // Create generic club if absolutely none available
      const genericClub = {
        name: 'Generic Club',
        country: currentPlayer.country,
        league: getLeague(0, currentPlayer.country),
        strength: Math.max(60, currentPlayer.rating + 5),
        budget: 10000000,
        europeanComp: ''
      } as Club;
      clubs = [genericClub];
      currentClub = genericClub;
      updatePlayer({ club: genericClub.name, league: genericClub.league });
    } else if (!currentPlayer.club) {
      updatePlayer({ club: currentClub.name });
    }

    // Simulate league position
    const totalTeams = clubs.length || 20;
    const leaguePosition = randomInt(1, totalTeams);
    
    // Show evolution draw with equal chances 5-10 (Python parity)
    const isStarter = isInFirstEleven(currentPlayer, currentClub);
    const evolutionBalls = { '5': 1, '6': 1, '7': 1, '8': 1, '9': 1, '10': 1 };

    setCurrentDraw({
      type: 'evolution',
      balls: evolutionBalls,
      title: 'Your Performance This Season',
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
    if (cupResult.phase === "Winner") {
      trophies.push(`🏆 National Cup`);
    }
    if (europeanResult?.phase === "Winner") {
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

    const countries = Object.keys(LEAGUES).slice(0, 6);
    const standings: Record<string, string[]> = {};
    countries.forEach(ct => {
      const topLeague = getLeague(0, ct);
      const table = getLeagueClubs(ct, topLeague)
        .sort((a,b)=> b.strength - a.strength)
        .slice(0,5)
        .map(c=>c.name);
      standings[`${ct} • ${topLeague}`] = table;
    });

    // Winners and Top XI
    const globalWinners: Record<string, string> = (() => {
      const winners: Record<string, string> = {};
      let topPool: Club[] = [];
      Object.keys(LEAGUES).forEach(ct => {
        const tl = getLeague(0, ct);
        topPool = topPool.concat(getLeagueClubs(ct, tl));
      });
      topPool.sort((a,b)=> b.strength - a.strength);
      if (topPool[0]) winners['Champions League'] = topPool[0].name;
      if (topPool[1]) winners['Europa League'] = topPool[1].name;
      if (topPool[2]) winners['Conference League'] = topPool[2].name;
      return winners;
    })();
    const topXILeague = [
      { position: 'GK', club: clubs[0]?.name || '-' },
      { position: 'RB', club: clubs[1 % clubs.length]?.name || '-' },
      { position: 'CB', club: clubs[2 % clubs.length]?.name || '-' },
      { position: 'CB', club: clubs[3 % clubs.length]?.name || '-' },
      { position: 'LB', club: clubs[4 % clubs.length]?.name || '-' },
      { position: 'CDM', club: clubs[0]?.name || '-' },
      { position: 'CM', club: clubs[1 % clubs.length]?.name || '-' },
      { position: 'CAM', club: clubs[2 % clubs.length]?.name || '-' },
      { position: 'RW', club: clubs[3 % clubs.length]?.name || '-' },
      { position: 'LW', club: clubs[4 % clubs.length]?.name || '-' },
      { position: 'ST', club: clubs[0]?.name || '-' },
    ];

    setSeasonResults({
      league: { position, total: totalTeams },
      cup: cupResult,
      european: europeanResult || undefined,
      evolution,
      stats,
      trophies,
      standings,
      globalWinners,
      topXILeague,
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
              🏆 Career Ended
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-xl">
              {currentPlayer.name} retired at age {currentPlayer.age}!
            </p>
            <Button onClick={() => onRetirement(currentPlayer)} className="bg-blue-600 hover:bg-blue-700">
              View Career Summary
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
                <CardTitle className="text-xl md:text-2xl font-bold text-green-800">
                  ⚽ {currentPlayer.name}
                </CardTitle>
                <p className="text-green-600 text-sm md:text-base">
                  {currentPlayer.position} • {currentPlayer.age} years old • Rating: {currentPlayer.rating}
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 text-xs md:text-sm">
                <div>
                  <span className="font-semibold text-green-800">Club:</span>
                  <p className="break-words">{currentPlayer.club || 'Free agent'}</p>
                </div>
                <div>
                  <span className="font-semibold text-green-800">League:</span>
                  <p className="break-words">{currentPlayer.league || '-'}</p>
                </div>
                <div>
                  <span className="font-semibold text-green-800">Salary:</span>
                  <p>{formatCurrency(currentPlayer.salary)}/year</p>
                </div>
                <div>
                  <span className="font-semibold text-green-800">Value:</span>
                  <p>{formatCurrency(currentPlayer.marketValue)}</p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="career" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="attributes">Attributes</TabsTrigger>
            <TabsTrigger value="season">Season</TabsTrigger>
            <TabsTrigger value="actions">Actions</TabsTrigger>
          </TabsList>

          <TabsContent value="career" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Career History</CardTitle>
              </CardHeader>
              <CardContent>
                {currentPlayer.career.length === 0 ? (
                  <p className="text-gray-500 text-center">No career history yet.</p>
                ) : (
                  <div className="space-y-4">
                    {currentPlayer.career.map((entry, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold">Season {entry.season}</h4>
                            <p className="text-sm text-gray-600">{entry.club} ({entry.league})</p>
                          </div>
                          <Badge variant="secondary">Rating: {entry.rating}</Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                          <div>Goals: {entry.stats.goals}</div>
                          <div>Assists: {entry.stats.assists}</div>
                          <div>Salary: {formatCurrency(entry.salary)}</div>
                          <div>Value: {formatCurrency(entry.marketValue)}</div>
                        </div>
                        {entry.trophies.length > 0 && (
                          <div className="mt-2">
                            <span className="text-sm font-semibold">Trophies: </span>
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
                <CardTitle>Player Attributes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(currentPlayer.attributes).map(([attr, value]) => (
                    <div key={attr} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-sm md:text-base">{attr}</span>
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
              <>
              <Card>
                <CardHeader>
                  <CardTitle>Season {currentPlayer.season} Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">League</h4>
                    <p>Final position: {seasonResults.league.position}/{seasonResults.league.total}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2">National Cup</h4>
                    <p>Best round: {seasonResults.cup.phase}</p>
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
                        <h4 className="font-semibold mb-2">European Competition</h4>
                        <p>Best round: {seasonResults.european.phase}</p>
                        <p>Prize money: {formatCurrency(seasonResults.european.prize)}</p>
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
                    <h4 className="font-semibold mb-2">Personal Statistics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>Goals: {seasonResults.stats.goals}</div>
                      <div>Assists: {seasonResults.stats.assists}</div>
                      {seasonResults.stats.cleanSheets && (
                        <div>Clean Sheets: {seasonResults.stats.cleanSheets}</div>
                      )}
                      <div>Performance: {seasonResults.evolution}/10</div>
                    </div>
                  </div>
                  {seasonResults.trophies.length > 0 && (
                    <>
                      <Separator />
                      <div>
                        <h4 className="font-semibold mb-2">Trophies Won</h4>
                        <div>{seasonResults.trophies.join(', ')}</div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Global League Standings (Top 5)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                    {seasonResults.standings && Object.entries(seasonResults.standings).map(([key, table]) => (
                      <div key={key}>
                        <div className="font-semibold mb-1">{key}</div>
                        {table.map((name, i) => (<div key={i}>{i+1}. {name}</div>))}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              </>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-gray-500">Play a new season to see results.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="actions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Available Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={handleNewSeason}
                  disabled={seasonInProgress}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                  size="lg"
                >
                  {seasonInProgress ? '⏳ Simulating...' : '▶️ New Season'}
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button variant="outline" onClick={requestExternalTransfer} disabled={seasonInProgress}>
                    🔄 Request Transfer (Abroad)
                  </Button>
                  <Button variant="outline" onClick={requestNewContract} disabled={seasonInProgress}>
                    📝 Renegotiate Contract
                  </Button>
                  <Button variant="outline" onClick={requestLoan} disabled={seasonInProgress}>
                    🏃 Request Loan
                  </Button>
                  <Button variant="outline" onClick={requestDomesticTransfer} disabled={seasonInProgress}>
                    🏠 Domestic Transfer
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  Actions apply instantly and affect next season simulation
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <AlertDialog open={offerOpen} onOpenChange={setOfferOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Transfer Offer</AlertDialogTitle>
            <AlertDialogDescription>
              {pendingOffer ? (
                <div className="space-y-2">
                  <div>Type: {pendingOffer.type}</div>
                  <div>Club: <span className="font-semibold">{pendingOffer.club.name}</span> ({pendingOffer.club.country} • {pendingOffer.club.league})</div>
                  <div>Proposed salary: {formatCurrency(pendingOffer.salary)}/year</div>
                  <div>Contract: {pendingOffer.contractYears} years</div>
                </div>
              ) : null}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setPendingOffer(null)}>Refuse</AlertDialogCancel>
            <AlertDialogAction onClick={acceptOffer}>Accept</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <BallDraw
        balls={currentDraw?.balls || {}}
        title={currentDraw?.title || ''}
        onComplete={handleDrawComplete}
        isVisible={showDraw}
      />
    </div>
  );
}
