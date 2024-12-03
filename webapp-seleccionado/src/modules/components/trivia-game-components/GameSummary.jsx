import React from 'react';
import { motion } from 'framer-motion';

function GameSummary({ correctAnswers, totalQuestions, onRestart }) {
  const percentage = (correctAnswers / totalQuestions) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center"
    >
      <h2 className="text-2xl font-bold mb-4">¡Juego Terminado!</h2>
      <div className="text-4xl font-bold text-blue-600 mb-4">
        {percentage.toFixed(0)}%
      </div>
      <p className="mb-6 text-gray-600">
        Respondiste correctamente {correctAnswers} de {totalQuestions} preguntas
      </p>
      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Jugar de nuevo
      </button>
    </motion.div>
  );
}

export default GameSummary;
