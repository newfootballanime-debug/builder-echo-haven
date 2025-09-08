import { useState } from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import BallDraw from './BallDraw';
import { POSITIONS, LEAGUES, CLUBS } from '@/lib/gameData';
import { createPlayer } from '@/lib/gameLogic';
import { Player } from '@/lib/types';

interface PlayerCreationProps {
  onPlayerCreated: (player: Player) => void;
}

export default function PlayerCreation({ onPlayerCreated }: PlayerCreationProps) {
  const [step, setStep] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [playerAge, setPlayerAge] = useState(18);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedRetireAge, setSelectedRetireAge] = useState(0);
  const [favoriteClub, setFavoriteClub] = useState('');
  
  const [showDraw, setShowDraw] = useState(false);
  const [currentDraw, setCurrentDraw] = useState<{
    type: 'position' | 'rating' | 'retire',
    balls: Record<string, number>,
    title: string
  } | null>(null);

  const countries = Object.keys(LEAGUES);

  const steps = [
    'Name & Age',
    'Starting Country',
    'Favorite Club',
    'Position',
    'Initial Rating',
    'Retirement Age',
    'Confirmation'
  ];

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };

  const handlePositionDraw = () => {
    const balls: Record<string, number> = {};
    POSITIONS.forEach(pos => {
      balls[pos] = 1;
    });
    
    setCurrentDraw({
      type: 'position',
      balls,
      title: 'Draw Your Position'
    });
    setShowDraw(true);
  };


  const handleRatingDraw = () => {
    const ratingBalls = {
      '55': 5,
      '60': 6,
      '65': 4,
      '70': 6,
      '74': 5,
      '79': 3,
      '83': 2,
      '88': 1,
      '93': 1,
      '99': 1
    };
    
    setCurrentDraw({
      type: 'rating',
      balls: ratingBalls,
      title: 'Draw Your Initial Rating'
    });
    setShowDraw(true);
  };

  const handleRetireDraw = () => {
    const retireBalls: Record<string, number> = {};
    for (let age = 35; age <= 40; age++) {
      retireBalls[age.toString()] = 2;
    }
    
    setCurrentDraw({
      type: 'retire',
      balls: retireBalls,
      title: 'Draw Your Retirement Age'
    });
    setShowDraw(true);
  };

  const handleDrawComplete = (result: string) => {
    if (!currentDraw) return;
    
    switch (currentDraw.type) {
      case 'position':
        setSelectedPosition(result);
        break;
      case 'rating':
        setSelectedRating(parseInt(result));
        break;
      case 'retire':
        setSelectedRetireAge(parseInt(result));
        break;
    }
    
    setShowDraw(false);
    setCurrentDraw(null);
    handleNextStep();
  };

  const handleCreatePlayer = () => {
    const player = createPlayer(
      playerName,
      selectedPosition,
      selectedCountry,
      playerAge,
      selectedRating,
      favoriteClub
    );
    player.retireAt = selectedRetireAge;
    onPlayerCreated(player);
  };

  const getAvailableClubs = () => {
    if (!selectedCountry) return [];
    const topLeague = LEAGUES[selectedCountry]?.[0]?.name || '';
    return CLUBS[selectedCountry]?.filter(club => club.league === topLeague) || [];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 flex items-start md:items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl font-bold text-green-800">
              ⚽ Create Your Footballer
            </CardTitle>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      index <= step ? 'bg-green-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-green-700 mt-2 text-sm md:text-base">
              Step {step + 1} of {steps.length}: {steps[step]}
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {step === 0 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-green-800 font-semibold">
                    Player Name
                  </Label>
                  <Input
                    id="name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Enter your name..."
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="age" className="text-green-800 font-semibold">
                    Age (16-31)
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    min="16"
                    max="31"
                    value={playerAge}
                    onChange={(e) => setPlayerAge(parseInt(e.target.value) || 18)}
                    className="mt-1"
                  />
                </div>
                <Button 
                  onClick={handleNextStep}
                  disabled={!playerName.trim()}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Continue →
                </Button>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <Label className="text-green-800 font-semibold">
                  Choose Your Starting Country
                </Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
                  {countries.map((country) => (
                    <Button
                      key={country}
                      variant={selectedCountry === country ? "default" : "outline"}
                      onClick={() => setSelectedCountry(country)}
                      className={`text-sm ${selectedCountry === country ? 'bg-green-600 text-white' : 'hover:bg-green-50'}`}
                    >
                      {country}
                    </Button>
                  ))}
                </div>
                <Button
                  onClick={handleNextStep}
                  disabled={!selectedCountry}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Continue →
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <Label className="text-green-800 font-semibold">
                  Choose Your Favorite Club in {selectedCountry || '—'}
                </Label>
                <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                  {getAvailableClubs().map((club) => (
                    <Button
                      key={club.club}
                      variant={favoriteClub === club.club ? "default" : "outline"}
                      onClick={() => setFavoriteClub(club.club)}
                      className={`text-left justify-start text-sm ${
                        favoriteClub === club.club
                          ? 'bg-green-600 text-white'
                          : 'hover:bg-green-50'
                      }`}
                    >
                      {club.club} (Strength: {club.strength})
                    </Button>
                  ))}
                </div>
                <Button
                  onClick={handleNextStep}
                  disabled={!favoriteClub}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Continue →
                </Button>
              </div>
            )}

            {step === 3 && (
              <div className="text-center space-y-4">
                <p className="text-green-800">Let's see what position you'll play!</p>
                <Button
                  onClick={handlePositionDraw}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  size="lg"
                >
                  🎰 Draw Position
                </Button>
                {selectedPosition && (
                  <div className="mt-4 p-4 bg-green-100 rounded-lg">
                    <p className="text-green-800 font-bold">
                      Your position: {selectedPosition}
                    </p>
                  </div>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="text-center space-y-4">
                <p className="text-green-800">What rating will you start with?</p>
                <Button
                  onClick={handleRatingDraw}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  size="lg"
                >
                  ⭐ Draw Rating
                </Button>
                {selectedRating > 0 && (
                  <div className="mt-4 p-4 bg-green-100 rounded-lg">
                    <p className="text-green-800 font-bold">
                      Your rating: {selectedRating}
                    </p>
                  </div>
                )}
              </div>
            )}

            {step === 5 && (
              <div className="text-center space-y-4">
                <p className="text-green-800">At what age will you retire?</p>
                <Button
                  onClick={handleRetireDraw}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                  size="lg"
                >
                  🕐 Draw Retirement Age
                </Button>
                {selectedRetireAge > 0 && (
                  <div className="mt-4 p-4 bg-green-100 rounded-lg">
                    <p className="text-green-800 font-bold">
                      You'll retire at: {selectedRetireAge} years old
                    </p>
                  </div>
                )}
              </div>
            )}

            {step === 6 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-green-800 text-center">
                  Confirm Your Player
                </h3>
                <div className="bg-green-50 p-6 rounded-lg space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-green-800">Name:</span>
                      <p>{playerName}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Age:</span>
                      <p>{playerAge} years old</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Position:</span>
                      <p>{selectedPosition}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Country:</span>
                      <p>{selectedCountry}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <span className="font-semibold text-green-800">Favorite Club:</span>
                      <p>{favoriteClub}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Rating:</span>
                      <p>{selectedRating}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-800">Retirement:</span>
                      <p>{selectedRetireAge} years old</p>
                    </div>
                  </div>
                </div>
                <Button 
                  onClick={handleCreatePlayer}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                  size="lg"
                >
                  🚀 Start Career!
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
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
