import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Player } from '@/lib/types';
import { formatCurrency, randomInt, createPlayer } from '@/lib/gameLogic';

interface RetirementSummaryProps {
  player: Player;
  onNewCareer: (player: Player) => void;
  onRestart: () => void;
}

export default function RetirementSummary({ player, onNewCareer, onRestart }: RetirementSummaryProps) {
  const [showLegacyOption, setShowLegacyOption] = useState(false);

  const totalTrophies = player.career.reduce((total, season) => total + season.trophies.length, 0);
  const totalGoals = player.career.reduce((total, season) => total + season.stats.goals, 0);
  const totalAssists = player.career.reduce((total, season) => total + season.stats.assists, 0);
  const peakRating = Math.max(...player.career.map(season => season.rating), player.rating);
  const peakValue = Math.max(...player.career.map(season => season.marketValue), player.marketValue);
  const topClubs = [...new Set(player.career.map(season => season.club))];

  // Calculate career achievements
  const achievements: string[] = [];
  if (totalTrophies >= 10) achievements.push("🏆 Colecționar de Trofee");
  if (totalGoals >= 100) achievements.push("⚽ Golgheter Legendar");
  if (totalAssists >= 100) achievements.push("🎯 Maestru al Pasa-ului");
  if (peakRating >= 90) achievements.push("⭐ Super Star");
  if (player.career.length >= 15) achievements.push("🏃 Longevitate");
  if (topClubs.length >= 5) achievements.push("🌍 Nomad");

  const handleCreateLegacy = () => {
    // Create a "son" player with similar attributes but younger
    const legacyName = `${player.name.split(' ')[0]} Jr.`;
    const legacyAge = randomInt(16, 18);
    const legacyRating = Math.min(99, player.rating + randomInt(-5, 5));
    
    const legacyPlayer = createPlayer(
      legacyName,
      player.position,
      player.country,
      legacyAge,
      legacyRating,
      player.favoriteClub
    );
    
    // Give small bonus from parent's legacy
    Object.keys(legacyPlayer.attributes).forEach(attr => {
      legacyPlayer.attributes[attr] = Math.min(99, legacyPlayer.attributes[attr] + randomInt(0, 3));
    });
    
    onNewCareer(legacyPlayer);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-purple-800">
            🏆 Cariera S-a Încheiat
          </CardTitle>
          <p className="text-xl text-purple-600 mt-2">
            {player.name} • {player.age} ani
          </p>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Career Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-purple-800">{player.career.length}</div>
              <div className="text-purple-600">Sezoane</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-purple-800">{totalTrophies}</div>
              <div className="text-purple-600">Trofee</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-purple-800">{totalGoals}</div>
              <div className="text-purple-600">Goluri</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-3xl font-bold text-purple-800">{totalAssists}</div>
              <div className="text-purple-600">Assist-uri</div>
            </div>
          </div>

          <Separator />

          {/* Peak Performance */}
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">
              🌟 Performanța de Vârf
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-800">{peakRating}</div>
                <div className="text-purple-600">Rating Maxim</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-800">{formatCurrency(peakValue)}</div>
                <div className="text-purple-600">Valoarea Maximă</div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Achievements */}
          {achievements.length > 0 && (
            <>
              <div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">
                  🏅 Realizări Speciale
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {achievements.map((achievement, index) => (
                    <Badge key={index} variant="secondary" className="text-lg p-2">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
            </>
          )}

          {/* Career History */}
          <div>
            <h3 className="text-2xl font-bold text-purple-800 mb-4 text-center">
              📚 Istorie Completă
            </h3>
            <div className="max-h-64 overflow-y-auto space-y-3">
              {player.career.map((season, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Sezonul {season.season}</h4>
                      <p className="text-sm text-gray-600">{season.club} ({season.league})</p>
                    </div>
                    <Badge variant="secondary">Rating: {season.rating}</Badge>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                    <div>⚽ {season.stats.goals} goluri</div>
                    <div>🎯 {season.stats.assists} assist-uri</div>
                    <div>💰 {formatCurrency(season.salary)}</div>
                    <div>📈 {formatCurrency(season.marketValue)}</div>
                  </div>
                  {season.trophies.length > 0 && (
                    <div className="mt-2 text-sm">
                      <span className="font-semibold">Trofee: </span>
                      {season.trophies.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-xl font-bold text-purple-800 mb-4">
                Ce vrei să faci acum?
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button 
                onClick={onRestart}
                className="bg-green-600 hover:bg-green-700 text-white py-3"
                size="lg"
              >
                🆕 Carieră Nouă
              </Button>
              
              <Button 
                onClick={() => setShowLegacyOption(true)}
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 py-3"
                size="lg"
              >
                👨‍👦 Continuă Moștenirea
              </Button>
            </div>

            {showLegacyOption && (
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-4">
                  <h4 className="font-bold text-purple-800 mb-2">Continuă cu Fiul Tău</h4>
                  <p className="text-purple-700 mb-4">
                    Creează un nou jucător ca fiind fiul lui {player.name}, 
                    cu atribute similare și avantajul moștenirii familiale!
                  </p>
                  <div className="flex gap-2">
                    <Button 
                      onClick={handleCreateLegacy}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      ✨ Creează Moștenitorul
                    </Button>
                    <Button 
                      onClick={() => setShowLegacyOption(false)}
                      variant="outline"
                    >
                      Anulează
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
