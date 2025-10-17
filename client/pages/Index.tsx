import { useState, useEffect } from "react";
import PlayerCreation from "@/components/PlayerCreation";
import CareerManager from "@/components/CareerManager";
import RetirementSummary from "@/components/RetirementSummary";
import { Player } from "@/lib/types";

type GamePhase = "intro" | "creation" | "career" | "retired";

export default function Index() {
  const [gamePhase, setGamePhase] = useState<GamePhase>("intro");
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [language, setLanguage] = useState<"en" | "ro">("en");
  const [savedPlayerData, setSavedPlayerData] = useState<Player | null>(null);
  const [canContinue, setCanContinue] = useState(false);

  const handleStartGame = () => {
    setGamePhase("creation");
  };

  const handlePlayerCreated = (player: Player) => {
    setCurrentPlayer(player);
    setGamePhase("career");
  };

  const handlePlayerUpdate = (player: Player) => {
    setCurrentPlayer(player);
  };

  const handleRetirement = (player: Player) => {
    setCurrentPlayer(player);
    setGamePhase("retired");
  };

  const handleNewCareer = (player: Player) => {
    setCurrentPlayer(player);
    setGamePhase("career");
  };

  const handleRestart = () => {
    setCurrentPlayer(null);
    setGamePhase("creation");
  };

  const handleBackToIntro = () => {
    setCurrentPlayer(null);
    setGamePhase("intro");
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem("careerSaveV1");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.player) {
        setSavedPlayerData(parsed.player as Player);
        setCanContinue(true);
      } else {
        setSavedPlayerData(null);
        setCanContinue(false);
      }
    } catch {
      setSavedPlayerData(null);
      setCanContinue(false);
    }
  }, []);

  const handleContinueCareer = () => {
    if (savedPlayerData) {
      setCurrentPlayer(savedPlayerData);
      setGamePhase("career");
    }
  };

  const text = {
    en: {
      title: "FOOTBALL",
      subtitle: "CAREER SIMULATOR",
      description:
        "Create your footballer and live a complete career with spectacular Champions League style draws!",
      features: {
        draws: "Lottery Draws",
        drawsDesc:
          "Spectacular visual extractions for every important decision",
        career: "Complete Career",
        careerDesc:
          "From debut to retirement, with realistic trophies and transfers",
        leagues: "Real Leagues",
        leaguesDesc: "Play in Premier League, La Liga, Serie A and many others",
      },
      whatCanYouDo: "What You Can Do in Game:",
      gameFeatures: [
        "Create the perfect player through lottery draws",
        "Track evolution of attributes and statistics",
        "Win trophies in national league and European cups",
        "Transfers and contract negotiations",
        "Play for national team",
        "Track salary and market value",
        "Realistic performance simulation",
        "Continue legacy with your son",
      ],
      availableLeagues: "Available Leagues:",
      startButton: "🚀 Start Your Career!",
      readyQuestion: "Are you ready to become the next football legend?",
      footer:
        "Inspired by classic football simulation mechanics with a modern interface",
    },
    ro: {
      title: "FOTBAL",
      subtitle: "SIMULATOR DE CARIERĂ",
      description:
        "Creează-ți fotbalistul și trăiește o carieră completă cu trageri la sorți spectaculoase în stil Champions League!",
      features: {
        draws: "Trageri la Sorți",
        drawsDesc:
          "Extrageri vizuale spectaculoase pentru fiecare decizie importantă",
        career: "Carieră Completă",
        careerDesc:
          "De la debut până la retragere, cu trofee și transferuri realiste",
        leagues: "Ligi Reale",
        leaguesDesc:
          "Joacă în Premier League, La Liga, Serie A și multe altele",
      },
      whatCanYouDo: "Ce Poți Face în Joc:",
      gameFeatures: [
        "Creează jucătorul perfect prin trageri la sorți",
        "Urmărește evoluția atributelor și statisticilor",
        "Câștigă trofee în liga națională și cupele europene",
        "Transferuri și negocieri de contracte",
        "Joacă pentru echipa națională",
        "Urmărește salariul și valoarea de piață",
        "Simularea realistica a performanțelor",
        "Continuă moștenirea cu fiul tău",
      ],
      availableLeagues: "Ligi Disponibile:",
      startButton: "🚀 Începe Cariera Ta!",
      readyQuestion: "Ești gata să devii următoarea legendă a fotbalului?",
      footer:
        "Inspirat de mecanismele clasice de simulare fotbal cu o interfață modernă",
    },
  };

  const currentText = text[language];

  if (gamePhase === "intro") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-800 to-blue-900 flex flex-col">
        {/* Language Toggle */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex bg-white/20 rounded-lg p-1 backdrop-blur-sm border border-white/20">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                language === "en"
                  ? "bg-white text-blue-900"
                  : "text-white hover:bg-white/10"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ro")}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                language === "ro"
                  ? "bg-white text-blue-900"
                  : "text-white hover:bg-white/10"
              }`}
            >
              RO
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center max-w-4xl mx-auto w-full">
            {/* Hero Section - Compact for mobile */}
            <div className="space-y-4 md:space-y-8 mb-8 md:mb-12 bg-black/30 rounded-xl p-4 md:p-6">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white text-glow">
                ⚽ {currentText.title}
              </h1>
              <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-white text-glow">
                {currentText.subtitle}
              </h2>
              <p className="text-sm md:text-xl lg:text-2xl text-white/95 leading-relaxed px-4">
                {currentText.description}
              </p>
            </div>

            {/* Main CTA Button - Prominent and accessible */}
            <div className="mb-8 md:mb-12 space-y-3">
              <button
                onClick={handleStartGame}
                className="group relative px-6 md:px-12 py-3 md:py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white text-lg md:text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
              >
                <span className="relative z-10">{currentText.startButton}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
              {canContinue && (
                <button
                  onClick={handleContinueCareer}
                  className="group relative px-6 md:px-12 py-3 md:py-4 bg-white/90 hover:bg-white text-blue-900 text-lg md:text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  <span className="relative z-10">
                    🔁{" "}
                    {language === "en" ? "Continue Career" : "Continuă Cariera"}
                  </span>
                </button>
              )}
              <p className="text-white/90 text-sm md:text-lg mt-4">
                {currentText.readyQuestion}
              </p>
            </div>

            {/* Features Grid - Responsive */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">🎰</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {currentText.features.draws}
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  {currentText.features.drawsDesc}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">🏆</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {currentText.features.career}
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  {currentText.features.careerDesc}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                <div className="text-2xl md:text-4xl mb-2 md:mb-4">🌍</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                  {currentText.features.leagues}
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  {currentText.features.leaguesDesc}
                </p>
              </div>
            </div>

            {/* Expandable sections for mobile */}
            <div className="space-y-4 md:space-y-8">
              {/* Game Features - Collapsible on mobile */}
              <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 md:open">
                <summary className="p-4 md:p-8 cursor-pointer md:cursor-default">
                  <h3 className="text-lg md:text-2xl font-bold text-white inline">
                    {currentText.whatCanYouDo}
                  </h3>
                  <span className="float-right md:hidden">▼</span>
                </summary>
                <div className="px-4 pb-4 md:p-8 md:pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 text-left">
                    <div className="space-y-2 md:space-y-3">
                      {currentText.gameFeatures
                        .slice(0, 4)
                        .map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 text-blue-100 text-sm md:text-base"
                          >
                            <span className="text-yellow-400 mt-1">⚽</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      {currentText.gameFeatures
                        .slice(4)
                        .map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 text-blue-100 text-sm md:text-base"
                          >
                            <span className="text-yellow-400 mt-1">⚽</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </details>

              {/* Leagues Showcase - Collapsible on mobile */}
              <details className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 md:open">
                <summary className="p-4 md:p-8 cursor-pointer md:cursor-default">
                  <h3 className="text-lg md:text-2xl font-bold text-white inline">
                    {currentText.availableLeagues}
                  </h3>
                  <span className="float-right md:hidden">▼</span>
                </summary>
                <div className="px-4 pb-4 md:p-8 md:pt-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
                    <div className="text-blue-100">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">🏴󠁧󠁢󠁥󠁮󠁧󠁿</div>
                      <div className="font-semibold text-sm md:text-base">
                        Premier League
                      </div>
                      <div className="text-xs md:text-sm">
                        Man City, Liverpool, Arsenal...
                      </div>
                    </div>
                    <div className="text-blue-100">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">🇪🇸</div>
                      <div className="font-semibold text-sm md:text-base">
                        La Liga
                      </div>
                      <div className="text-xs md:text-sm">
                        Real Madrid, Barcelona...
                      </div>
                    </div>
                    <div className="text-blue-100">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">🇮🇹</div>
                      <div className="font-semibold text-sm md:text-base">
                        Serie A
                      </div>
                      <div className="text-xs md:text-sm">
                        Juventus, Inter, Milan...
                      </div>
                    </div>
                    <div className="text-blue-100">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">🇩🇪</div>
                      <div className="font-semibold text-sm md:text-base">
                        Bundesliga
                      </div>
                      <div className="text-xs md:text-sm">
                        Bayern, Dortmund...
                      </div>
                    </div>
                    <div className="text-blue-100">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">🇫🇷</div>
                      <div className="font-semibold text-sm md:text-base">
                        Ligue 1
                      </div>
                      <div className="text-xs md:text-sm">
                        PSG, Marseille...
                      </div>
                    </div>
                    <div className="text-blue-100">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">🇵🇹</div>
                      <div className="font-semibold text-sm md:text-base">
                        Primeira Liga
                      </div>
                      <div className="text-xs md:text-sm">
                        Porto, Benfica...
                      </div>
                    </div>
                    <div className="text-blue-100">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">🇳🇱</div>
                      <div className="font-semibold text-sm md:text-base">
                        Eredivisie
                      </div>
                      <div className="text-xs md:text-sm">Ajax, PSV...</div>
                    </div>
                    <div className="text-blue-100">
                      <div className="text-xl md:text-2xl mb-1 md:mb-2">🇷🇴</div>
                      <div className="font-semibold text-sm md:text-base">
                        Liga 1
                      </div>
                      <div className="text-xs md:text-sm">
                        FCSB, CFR Cluj...
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>

            {/* Footer */}
            <div className="mt-8 md:mt-16 text-center text-blue-300">
              <p className="text-xs md:text-sm">{currentText.footer}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (gamePhase === "creation") {
    return (
      <div className="relative">
        <PlayerCreation onPlayerCreated={handlePlayerCreated} />
        <button
          onClick={handleBackToIntro}
          className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200 z-10"
        >
          ← {language === "en" ? "Back" : "Înapoi"}
        </button>
      </div>
    );
  }

  if (gamePhase === "career" && currentPlayer) {
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
          ← {language === "en" ? "Main Menu" : "Meniu Principal"}
        </button>
      </div>
    );
  }

  if (gamePhase === "retired" && currentPlayer) {
    return (
      <div className="relative">
        <RetirementSummary
          player={currentPlayer}
          onNewCareer={handleNewCareer}
          onRestart={handleRestart}
        />
        <button
          onClick={handleBackToIntro}
          className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-200 z-10"
        >
          ← {language === "en" ? "Main Menu" : "Meniu Principal"}
        </button>
      </div>
    );
  }

  return null;
}
