import React, { useState } from 'react';
import {  AnimatePresence } from 'framer-motion';
import mathChallengeData from './Data/MathData.json';
import QuestionCard from './QuestionCard.jsx';
import ProgressBar from './ProgressBar.jsx';
import GameSummary from './GameSummary.jsx';

function TriviaGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [gameFinished, setGameFinished] = useState(false);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option.correct) {
      setCorrectAnswers(correctAnswers + 1);
    }

    setTimeout(() => {
      if (currentQuestion < mathChallengeData.game.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnswered(false);
        setSelectedAnswer(null);
      } else {
        setGameFinished(true);
      }
    }, 1500);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setGameFinished(false);
  };

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <GameSummary
          correctAnswers={correctAnswers}
          totalQuestions={mathChallengeData.game.length}
          onRestart={restartGame}
          transitionType={mathChallengeData.transitions}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 pt-8">
      <div className="w-full max-w-2xl mb-8">
        <h1 className="text-3xl font-bold text-center text-black mb-2">
          {mathChallengeData.title}
        </h1>
        <p className="text-center text-gray-900 mb-6">
          {mathChallengeData.description}
        </p>
      </div>

      <ProgressBar
        current={currentQuestion + 1}
        total={mathChallengeData.game.length}
        correct={correctAnswers}
      />

      <AnimatePresence mode="wait">
        <QuestionCard
          key={currentQuestion}
          question={mathChallengeData.game[currentQuestion]}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          selectedAnswer={selectedAnswer}
          transitionType={mathChallengeData.transitions}
        />
      </AnimatePresence>
    </div>
  );
}

export default TriviaGame;
