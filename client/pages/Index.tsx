import { useState } from 'react';
import PlayerCreation from '@/components/PlayerCreation';
import CareerManager from '@/components/CareerManager';
import RetirementSummary from '@/components/RetirementSummary';
import { Player } from '@/lib/types';

type GamePhase = 'intro' | 'creation' | 'career' | 'retired';

export default function Index() {
  const [gamePhase, setGamePhase] = useState<GamePhase>('intro');
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const handleStartGame = () => {
    setGamePhase('creation');
  };

  const handlePlayerCreated = (player: Player) => {
    setCurrentPlayer(player);
    setGamePhase('career');
  };

  const handlePlayerUpdate = (player: Player) => {
    setCurrentPlayer(player);
  };

  const handleRetirement = (player: Player) => {
    setCurrentPlayer(player);
    setGamePhase('retired');
  };

  const handleNewCareer = (player: Player) => {
    setCurrentPlayer(player);
    setGamePhase('career');
  };

  const handleRestart = () => {
    setCurrentPlayer(null);
    setGamePhase('creation');
  };

  const handleBackToIntro = () => {
    setCurrentPlayer(null);
    setGamePhase('intro');
  };

  if (gamePhase === 'intro') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-800 to-blue-900 flex items-center justify-center p-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300 animate-pulse">
              ⚽ FOTBAL
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              SIMULATOR DE CARIERĂ
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Creează-ți fotbalistul și trăiește o carieră completă cu trageri la sorți 
              spectaculoase în stil Champions League!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🎰</div>
              <h3 className="text-xl font-bold text-white mb-2">Trageri la Sorți</h3>
              <p className="text-blue-100">
                Extrageri vizuale spectaculoase pentru fiecare decizie importantă
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2">Carieră Completă</h3>
              <p className="text-blue-100">
                De la debut până la retragere, cu trofee și transferuri realiste
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Ligi Reale</h3>
              <p className="text-blue-100">
                Joacă în Premier League, La Liga, Serie A și multe altele
              </p>
            </div>
          </div>

          {/* Game Features */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Ce Poți Face în Joc:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-400">⚽</span>
                  <span>Creează jucătorul perfect prin trageri la sorți</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-400">📊</span>
                  <span>Urmărește evoluția atributelor și statisticilor</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-400">🏆</span>
                  <span>Câștigă trofee în liga națională și cupele europene</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-400">🔄</span>
                  <span>Transferuri și negocieri de contracte</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-400">🌟</span>
                  <span>Joacă pentru echipa națională</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-400">💰</span>
                  <span>Urmărește salariul și valoarea de piață</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-400">📈</span>
                  <span>Simularea realistica a performanțelor</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-400">👨‍👦</span>
                  <span>Continuă moștenirea cu fiul tău</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leagues Showcase */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Ligi Disponibile:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="text-blue-100">
                <div className="text-2xl mb-2">🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>
                <div className="font-semibold">Premier League</div>
                <div className="text-sm">Man City, Liverpool, Arsenal...</div>
              </div>
              <div className="text-blue-100">
                <div className="text-2xl mb-2">🇪🇸</div>
                <div className="font-semibold">La Liga</div>
                <div className="text-sm">Real Madrid, Barcelona...</div>
              </div>
              <div className="text-blue-100">
                <div className="text-2xl mb-2">🇮🇹</div>
                <div className="font-semibold">Serie A</div>
                <div className="text-sm">Juventus, Inter, Milan...</div>
              </div>
              <div className="text-blue-100">
                <div className="text-2xl mb-2">🇩🇪</div>
                <div className="font-semibold">Bundesliga</div>
                <div className="text-sm">Bayern, Dortmund...</div>
              </div>
              <div className="text-blue-100">
                <div className="text-2xl mb-2">🇫🇷</div>
                <div className="font-semibold">Ligue 1</div>
                <div className="text-sm">PSG, Marseille...</div>
              </div>
              <div className="text-blue-100">
                <div className="text-2xl mb-2">🇵🇹</div>
                <div className="font-semibold">Primeira Liga</div>
                <div className="text-sm">Porto, Benfica...</div>
              </div>
              <div className="text-blue-100">
                <div className="text-2xl mb-2">🇳🇱</div>
                <div className="font-semibold">Eredivisie</div>
                <div className="text-sm">Ajax, PSV...</div>
              </div>
              <div className="text-blue-100">
                <div className="text-2xl mb-2">🇷🇴</div>
                <div className="font-semibold">Liga 1</div>
                <div className="text-sm">FCSB, CFR Cluj...</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <button
              onClick={handleStartGame}
              className="group relative px-12 py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              <span className="relative z-10">🚀 Începe Cariera Ta!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
            
            <p className="text-blue-200 text-lg">
              Ești gata să devii următoarea legendă a fotbalului?
            </p>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center text-blue-300">
            <p className="text-sm">
              Inspirat de mecanismele clasice de simulare fotbal cu o interfață modernă
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === 'creation') {
    return (
      <div className="relative">
        <PlayerCreation onPlayerCreated={handlePlayerCreated} />
        <button
          onClick={handleBackToIntro}
          className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200"
        >
          ← Înapoi
        </button>
      </div>
    );
  }

  if (gamePhase === 'career' && currentPlayer) {
    return (
      <div className="relative">
        <CareerManager 
          player={currentPlayer} 
          onPlayerUpdate={handlePlayerUpdate}
          onRetirement={handleRetirement}
        />
        <button
          onClick={handleBackToIntro}
          className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200 z-10"
        >
          ← Meniu Principal
        </button>
      </div>
    );
  }

  if (gamePhase === 'retired' && currentPlayer) {
    return (
      <div className="relative">
        <RetirementSummary 
          player={currentPlayer}
          onNewCareer={handleNewCareer}
          onRestart={handleRestart}
        />
        <button
          onClick={handleBackToIntro}
          className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200"
        >
          ← Meniu Principal
        </button>
      </div>
    );
  }

  return null;
}
