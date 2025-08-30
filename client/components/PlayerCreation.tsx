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
    type: 'position' | 'country' | 'rating' | 'retire',
    balls: Record<string, number>,
    title: string
  } | null>(null);

  const countries = Object.keys(LEAGUES);

  const steps = [
    'Nume și Vârstă',
    'Poziție',
    'Țara',
    'Club Favorit',
    'Rating Inițial',
    'Vârsta de Retragere',
    'Confirmare'
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
      title: 'Extragerea Poziției Tale'
    });
    setShowDraw(true);
  };

  const handleCountryDraw = () => {
    const balls: Record<string, number> = {};
    countries.forEach(country => {
      balls[country] = 1;
    });
    
    setCurrentDraw({
      type: 'country',
      balls,
      title: 'Extragerea Țării Tale'
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
      title: 'Extragerea Rating-ului Inițial'
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
      title: 'Extragerea Vârstei de Retragere'
    });
    setShowDraw(true);
  };

  const handleDrawComplete = (result: string) => {
    if (!currentDraw) return;
    
    switch (currentDraw.type) {
      case 'position':
        setSelectedPosition(result);
        break;
      case 'country':
        setSelectedCountry(result);
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
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-green-800">
            ⚽ Creează-ți Fotbalistul
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
          <p className="text-green-700 mt-2">
            Pasul {step + 1} din {steps.length}: {steps[step]}
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === 0 && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-green-800 font-semibold">
                  Numele Jucătorului
                </Label>
                <Input
                  id="name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Introduceți numele..."
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="age" className="text-green-800 font-semibold">
                  Vârsta (16-31)
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
                Continuă →
              </Button>
            </div>
          )}

          {step === 1 && (
            <div className="text-center space-y-4">
              <p className="text-green-800">Hai să vedem ce poziție vei juca!</p>
              <Button 
                onClick={handlePositionDraw}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                size="lg"
              >
                🎰 Extrage Poziția
              </Button>
              {selectedPosition && (
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-bold">
                    Poziția ta: {selectedPosition}
                  </p>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="text-center space-y-4">
              <p className="text-green-800">Din ce țară vei fi?</p>
              <Button 
                onClick={handleCountryDraw}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                size="lg"
              >
                🌍 Extrage Țara
              </Button>
              {selectedCountry && (
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-bold">
                    Țara ta: {selectedCountry}
                  </p>
                </div>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <Label className="text-green-800 font-semibold">
                Alege Clubul Tău Favorit din {selectedCountry}
              </Label>
              <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto">
                {getAvailableClubs().map((club) => (
                  <Button
                    key={club.club}
                    variant={favoriteClub === club.club ? "default" : "outline"}
                    onClick={() => setFavoriteClub(club.club)}
                    className={`text-left justify-start ${
                      favoriteClub === club.club 
                        ? 'bg-green-600 text-white' 
                        : 'hover:bg-green-50'
                    }`}
                  >
                    {club.club} (Putere: {club.strength})
                  </Button>
                ))}
              </div>
              <Button 
                onClick={handleNextStep}
                disabled={!favoriteClub}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Continuă →
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-4">
              <p className="text-green-800">Ce rating vei avea la început?</p>
              <Button 
                onClick={handleRatingDraw}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                size="lg"
              >
                ⭐ Extrage Rating-ul
              </Button>
              {selectedRating > 0 && (
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-bold">
                    Rating-ul tău: {selectedRating}
                  </p>
                </div>
              )}
            </div>
          )}

          {step === 5 && (
            <div className="text-center space-y-4">
              <p className="text-green-800">La ce vârstă te vei retrage?</p>
              <Button 
                onClick={handleRetireDraw}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                size="lg"
              >
                🕐 Extrage Vârsta de Retragere
              </Button>
              {selectedRetireAge > 0 && (
                <div className="mt-4 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-bold">
                    Te vei retrage la: {selectedRetireAge} ani
                  </p>
                </div>
              )}
            </div>
          )}

          {step === 6 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-green-800 text-center">
                Confirmă Jucătorul Tău
              </h3>
              <div className="bg-green-50 p-6 rounded-lg space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="font-semibold text-green-800">Nume:</span>
                    <p>{playerName}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-green-800">Vârstă:</span>
                    <p>{playerAge} ani</p>
                  </div>
                  <div>
                    <span className="font-semibold text-green-800">Poziție:</span>
                    <p>{selectedPosition}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-green-800">Țara:</span>
                    <p>{selectedCountry}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-green-800">Club Favorit:</span>
                    <p>{favoriteClub}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-green-800">Rating:</span>
                    <p>{selectedRating}</p>
                  </div>
                  <div className="col-span-2">
                    <span className="font-semibold text-green-800">Retragere la:</span>
                    <p>{selectedRetireAge} ani</p>
                  </div>
                </div>
              </div>
              <Button 
                onClick={handleCreatePlayer}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                size="lg"
              >
                🚀 Începe Cariera!
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <BallDraw
        balls={currentDraw?.balls || {}}
        title={currentDraw?.title || ''}
        onComplete={handleDrawComplete}
        isVisible={showDraw}
      />
    </div>
  );
}
