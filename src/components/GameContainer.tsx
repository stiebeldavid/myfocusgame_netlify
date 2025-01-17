import React from 'react';
import GameCircle from './GameCircle';
import GameLetters from './GameLetters';
import ScoreDisplay from './ScoreDisplay';
import { Button } from './ui/button';
import { Flag } from 'lucide-react';

interface GameContainerProps {
  gameStarted: boolean;
  gameCircle: {
    type: "green" | "red" | "yellow";
    isVisible: boolean;
    taps: number;
  };
  scrambledLetters: string[];
  currentSequence: string[];
  score: number;
  onCircleClick: () => void;
  onLetterClick: (letter: string) => void;
  onEndGame: () => void;
}

const GameContainer: React.FC<GameContainerProps> = ({
  gameStarted,
  gameCircle,
  scrambledLetters,
  currentSequence,
  score,
  onCircleClick,
  onLetterClick,
  onEndGame,
}) => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center px-4 py-6">
      <ScoreDisplay score={score} />
      
      {gameStarted && (
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-10">
          <Button
            variant="outline"
            onClick={onEndGame}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 text-white border-white/20 text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4"
          >
            <Flag className="mr-2 h-4 w-4" />
            Done Training
          </Button>
        </div>
      )}

      <div className="flex-1 flex items-center justify-center w-full max-w-lg mx-auto">
        <GameCircle
          type={gameCircle.type}
          isVisible={gameCircle.isVisible}
          onClick={onCircleClick}
          taps={gameCircle.taps}
        />
      </div>

      <div className="w-full max-w-lg mx-auto mt-auto">
        <GameLetters
          scrambledLetters={scrambledLetters}
          currentSequence={currentSequence}
          onLetterClick={onLetterClick}
        />
      </div>
    </div>
  );
};

export default GameContainer;