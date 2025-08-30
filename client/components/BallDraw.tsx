import { useState, useEffect } from 'react';
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

  // Create all balls array
  const allBalls: string[] = [];
  Object.entries(balls).forEach(([value, count]) => {
    for (let i = 0; i < count; i++) {
      allBalls.push(value);
    }
  });

  useEffect(() => {
    if (isVisible) {
      setReadyToDraw(true);
    }
  }, [isVisible]);

  const startDraw = () => {
    setIsDrawing(true);
    setDrawIndex(0);
    setShowFinal(false);
    
    // Simulate ball rolling animation
    const drawInterval = setInterval(() => {
      const randomBall = allBalls[Math.floor(Math.random() * allBalls.length)];
      setCurrentBall(randomBall);
      setDrawIndex(prev => prev + 1);
      
      if (drawIndex >= 14) { // Show 15 random balls before final
        clearInterval(drawInterval);
        // Final result
        setTimeout(() => {
          const finalBall = allBalls[Math.floor(Math.random() * allBalls.length)];
          setFinalResult(finalBall);
          setShowFinal(true);
          setIsDrawing(false);
          
          setTimeout(() => {
            onComplete(finalBall);
          }, 2000);
        }, 300);
      }
    }, 200);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 border-blue-700 text-white">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-blue-100">{title}</h2>
          
          {/* Ball distribution display */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {Object.entries(balls).map(([value, count]) => (
              <div key={value} className="text-center p-3 bg-blue-800/50 rounded-lg border border-blue-600">
                <div className="font-bold text-lg text-blue-100">{value}</div>
                <div className="text-sm text-blue-300">{count} bile</div>
                <div className="flex justify-center mt-2 flex-wrap gap-1">
                  {Array.from({ length: Math.min(count, 10) }).map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-blue-400 rounded-full" />
                  ))}
                  {count > 10 && <span className="text-xs text-blue-300">+{count - 10}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Drawing machine visualization */}
          <div className="relative">
            <div className="w-64 h-64 mx-auto bg-gradient-to-b from-gray-300 to-gray-600 rounded-full border-8 border-gray-700 shadow-2xl flex items-center justify-center relative overflow-hidden">
              
              {/* Machine interior */}
              <div className="w-56 h-56 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full flex items-center justify-center relative">
                
                {/* Floating balls animation when drawing */}
                <AnimatePresence>
                  {isDrawing && (
                    <>
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-6 h-6 bg-gradient-to-br from-white to-blue-200 rounded-full shadow-lg"
                          initial={{ 
                            x: Math.random() * 200 - 100, 
                            y: Math.random() * 200 - 100,
                            scale: 0.5
                          }}
                          animate={{ 
                            x: Math.random() * 200 - 100, 
                            y: Math.random() * 200 - 100,
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
                    className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-xl border-4 border-yellow-600"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ duration: 0.15 }}
                  >
                    {currentBall}
                  </motion.div>
                )}

                {/* Final result ball */}
                {showFinal && (
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl shadow-xl border-4 border-yellow-600"
                    initial={{ scale: 0, y: -50 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 10 
                    }}
                  >
                    {finalResult}
                  </motion.div>
                )}
              </div>
              
              {/* Machine glow effect */}
              <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse" />
            </div>
            
            {/* Machine stand */}
            <div className="w-32 h-16 bg-gradient-to-b from-gray-600 to-gray-800 mx-auto rounded-b-lg border-4 border-gray-700" />
          </div>

          {/* Draw controls */}
          <div className="space-y-4">
            {!isDrawing && !showFinal && readyToDraw && (
              <Button 
                onClick={startDraw}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 text-lg"
                size="lg"
              >
                🎰 Începe Extragerea!
              </Button>
            )}

            {isDrawing && (
              <div className="space-y-3">
                <div className="text-yellow-300 font-bold text-xl animate-pulse">
                  EXTRAGERE ÎN CURS...
                </div>
                <div className="text-blue-200">
                  Bilă #{drawIndex + 1}/15
                </div>
              </div>
            )}

            {showFinal && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-yellow-300 font-bold text-2xl">
                  🎉 REZULTAT FINAL 🎉
                </div>
                <div className="text-4xl font-bold text-yellow-400 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                  {finalResult}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
