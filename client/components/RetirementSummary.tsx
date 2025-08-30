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
  if (totalTrophies >= 10) achievements.push("🏆 Trophy Collector");
  if (totalGoals >= 100) achievements.push("⚽ Legendary Goalscorer");
  if (totalAssists >= 100) achievements.push("🎯 Master Playmaker");
  if (peakRating >= 90) achievements.push("⭐ Superstar");
  if (player.career.length >= 15) achievements.push("🏃 Longevity");
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
      <div className="w-full max-w-4xl">
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-purple-800">
              🏆 Career Completed
            </CardTitle>
            <p className="text-lg md:text-xl text-purple-600 mt-2">
              {player.name} • {player.age} years old
            </p>
          </CardHeader>

          <CardContent className="space-y-6 md:space-y-8">
            {/* Career Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-purple-800">{player.career.length}</div>
                <div className="text-purple-600 text-sm md:text-base">Seasons</div>
              </div>
              <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-purple-800">{totalTrophies}</div>
                <div className="text-purple-600 text-sm md:text-base">Trophies</div>
              </div>
              <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-purple-800">{totalGoals}</div>
                <div className="text-purple-600 text-sm md:text-base">Goals</div>
              </div>
              <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
                <div className="text-2xl md:text-3xl font-bold text-purple-800">{totalAssists}</div>
                <div className="text-purple-600 text-sm md:text-base">Assists</div>
              </div>
            </div>

            <Separator />

            {/* Peak Performance */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-purple-800 mb-4 text-center">
                🌟 Peak Performance
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-xl md:text-2xl font-bold text-purple-800">{peakRating}</div>
                  <div className="text-purple-600">Highest Rating</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-xl md:text-2xl font-bold text-purple-800">{formatCurrency(peakValue)}</div>
                  <div className="text-purple-600">Peak Market Value</div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Achievements */}
            {achievements.length > 0 && (
              <>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-purple-800 mb-4 text-center">
                    🏅 Special Achievements
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {achievements.map((achievement, index) => (
                      <Badge key={index} variant="secondary" className="text-sm md:text-lg p-2">
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
              <h3 className="text-xl md:text-2xl font-bold text-purple-800 mb-4 text-center">
                📚 Complete History
              </h3>
              <div className="max-h-64 overflow-y-auto space-y-3">
                {player.career.map((season, index) => (
                  <div key={index} className="border rounded-lg p-3 md:p-4 bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-sm md:text-base">Season {season.season}</h4>
                        <p className="text-xs md:text-sm text-gray-600">{season.club} ({season.league})</p>
                      </div>
                      <Badge variant="secondary" className="text-xs md:text-sm">Rating: {season.rating}</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs md:text-sm">
                      <div>⚽ {season.stats.goals} goals</div>
                      <div>🎯 {season.stats.assists} assists</div>
                      <div>💰 {formatCurrency(season.salary)}</div>
                      <div>📈 {formatCurrency(season.marketValue)}</div>
                    </div>
                    {season.trophies.length > 0 && (
                      <div className="mt-2 text-xs md:text-sm">
                        <span className="font-semibold">Trophies: </span>
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
                <h3 className="text-lg md:text-xl font-bold text-purple-800 mb-4">
                  What would you like to do now?
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button 
                  onClick={onRestart}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 md:py-3"
                  size="lg"
                >
                  🆕 New Career
                </Button>
                
                <Button 
                  onClick={() => setShowLegacyOption(true)}
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 py-2 md:py-3"
                  size="lg"
                >
                  👨‍👦 Continue Legacy
                </Button>
              </div>

              {showLegacyOption && (
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4">
                    <h4 className="font-bold text-purple-800 mb-2">Continue with Your Son</h4>
                    <p className="text-purple-700 mb-4 text-sm md:text-base">
                      Create a new player as {player.name}'s son, 
                      with similar attributes and the advantage of family heritage!
                    </p>
                    <div className="flex gap-2">
                      <Button 
                        onClick={handleCreateLegacy}
                        className="bg-purple-600 hover:bg-purple-700 text-white"
                      >
                        ✨ Create Heir
                      </Button>
                      <Button 
                        onClick={() => setShowLegacyOption(false)}
                        variant="outline"
                      >
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
