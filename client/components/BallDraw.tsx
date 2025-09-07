import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

interface BallDrawProps {
  balls: Record<string, number>;
  title: string;
  onComplete: (result: string) => void;
  isVisible: boolean;
}

export default function BallDraw({ balls, title, onComplete, isVisible }: BallDrawProps) {
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentBall, setCurrentBall] = useState<string>('');
  const [drawIndex, setDrawIndex] = useState(0);
  const [finalResult, setFinalResult] = useState<string>('');
  const [showFinal, setShowFinal] = useState(false);
  const [readyToDraw, setReadyToDraw] = useState(false);
  const completedRef = useRef(false);

  // Create all balls array
  const allBalls: string[] = [];
  Object.entries(balls).forEach(([value, count]) => {
    for (let i = 0; i < count; i++) {
      allBalls.push(value);
    }
  });


  useEffect(() => {
    if (isVisible) {
      // Reset state every time a new draw opens or inputs change
      setIsDrawing(false);
      setCurrentBall('');
      setDrawIndex(0);
      setFinalResult('');
      setShowFinal(false);
      setReadyToDraw(true);
      completedRef.current = false;
    } else {
      setIsDrawing(false);
      setReadyToDraw(false);
    }
  }, [isVisible, title, balls]);

  const handleContinue = () => {
    if (finalResult && !completedRef.current) {
      completedRef.current = true;
      onComplete(finalResult);
    }
  };

  const startDraw = () => {
    setIsDrawing(true);
    setShowFinal(false);
    setFinalResult('');
    setCurrentBall('');
    let iterations = 0;
    setDrawIndex(0);

    // Simulate ball rolling animation with a local counter to avoid stale state
    const drawInterval = setInterval(() => {
      const randomBall = allBalls[Math.floor(Math.random() * allBalls.length)];
      setCurrentBall(randomBall);
      iterations += 1;
      setDrawIndex(iterations);

      if (iterations >= 15) { // Show 15 random balls before final
        clearInterval(drawInterval);
        // Final result
        setTimeout(() => {
          const finalBall = allBalls[Math.floor(Math.random() * allBalls.length)];
          setFinalResult(finalBall);
          setShowFinal(true);
          setIsDrawing(false);
        }, 300);
      }
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start md:items-center justify-center p-4 overflow-y-auto">
      <Card className="w-full max-w-2xl p-4 md:p-8 pb-28 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 border-blue-700 text-white max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-4rem)] overflow-y-auto rounded-xl" key={title}>
        <div className="text-center space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-100">{title}</h2>
          
          {/* Ball distribution (scrollable on small screens) */}
          <div className="mb-6 md:mb-8">
            <div className="max-h-48 md:max-h-64 overflow-y-auto pr-1">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                {Object.entries(balls).map(([value, count]) => (
                  <div key={value} className="text-center p-2 md:p-3 bg-blue-800/50 rounded-lg border border-blue-600">
                    <div className="font-bold text-sm md:text-lg text-blue-100">{value}</div>
                    <div className="text-xs md:text-sm text-blue-300">{count} balls</div>
                    <div className="flex justify-center mt-1 md:mt-2 flex-wrap gap-1">
                      {Array.from({ length: Math.min(count, 10) }).map((_, i) => (
                        <div key={i} className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full" />
                      ))}
                      {count > 10 && <span className="text-xs text-blue-300">+{count - 10}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drawing machine visualization */}
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-b from-gray-300 to-gray-600 rounded-full border-4 md:border-8 border-gray-700 shadow-2xl flex items-center justify-center relative overflow-hidden">
              
              {/* Machine interior */}
              <div className="w-44 h-44 md:w-56 md:h-56 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full flex items-center justify-center relative">
                
                {/* Floating balls animation when drawing */}
                <AnimatePresence>
                  {isDrawing && (
                    <>
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 md:w-6 md:h-6 bg-gradient-to-br from-white to-blue-200 rounded-full shadow-lg"
                          initial={{ 
                            x: Math.random() * 160 - 80, 
                            y: Math.random() * 160 - 80,
                            scale: 0.5
                          }}
                          animate={{ 
                            x: Math.random() * 160 - 80, 
                            y: Math.random() * 160 - 80,
                            scale: [0.5, 1, 0.5],
                            rotate: 360
                          }}
                          transition={{ 
                            duration: 0.8, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>

                {/* Current ball display */}
                {isDrawing && (
                  <motion.div
                    key={currentBall + drawIndex}
                    className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm md:text-lg shadow-xl border-2 md:border-4 border-yellow-600"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="text-center leading-tight break-words max-w-full px-1">
                      {currentBall.length > 8 ? currentBall.substring(0, 6) + '...' : currentBall}
                    </span>
                  </motion.div>
                )}

                {/* Final result ball */}
                {showFinal && (
                  <motion.div
                    className="w-18 h-18 md:w-24 md:h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm md:text-xl shadow-xl border-2 md:border-4 border-yellow-600"
                    initial={{ scale: 0, y: -50 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 10 
                    }}
                  >
                    <span className="text-center leading-tight break-words max-w-full px-1">
                      {finalResult.length > 10 ? finalResult.substring(0, 8) + '...' : finalResult}
                    </span>
                  </motion.div>
                )}
              </div>
              
              {/* Machine glow effect */}
              <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse" />
            </div>
            
            {/* Machine stand */}
            <div className="w-24 h-12 md:w-32 md:h-16 bg-gradient-to-b from-gray-600 to-gray-800 mx-auto rounded-b-lg border-2 md:border-4 border-gray-700" />
          </div>

          {/* Draw controls */}
          <div className="space-y-4">
            {!isDrawing && !showFinal && readyToDraw && (
              <Button 
                onClick={startDraw}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-2 md:py-3 px-6 md:px-8 text-base md:text-lg"
                size="lg"
              >
                🎰 Start Draw!
              </Button>
            )}

            {isDrawing && (
              <div className="space-y-3">
                <div className="text-yellow-300 font-bold text-lg md:text-xl animate-pulse">
                  DRAWING IN PROGRESS...
                </div>
                <div className="text-blue-200 text-sm md:text-base">
                  Ball #{Math.min(drawIndex, 15)}/15
                </div>
              </div>
            )}

            {showFinal && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-yellow-300 font-bold text-xl md:text-2xl">
                  🎉 FINAL RESULT 🎉
                </div>
                <div className="text-2xl md:text-4xl font-bold text-yellow-400 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent break-words">
                  {finalResult}
                </div>
                <div className="sticky bottom-0 left-0 right-0 mt-2 z-50 pointer-events-auto">
                  <div className="bg-blue-900/60 backdrop-blur-md rounded-xl p-2 border border-white/20" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px))' }}>
                    <Button
                      onClick={handleContinue}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-extrabold py-4 md:py-5 text-lg md:text-xl shadow-2xl rounded-2xl border-2 border-white/40"
                      size="lg"
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
