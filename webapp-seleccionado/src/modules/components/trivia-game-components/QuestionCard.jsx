import React from 'react';
import { motion } from 'framer-motion';

function QuestionCard({ question, onAnswer, isAnswered, selectedAnswer }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className=" bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full"
    >
      <h2 className="text-xl font-semibold mb-4 text-black">{question.string}</h2>
      <div className="grid grid-rows-2 grid-cols-2 gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isAnswered && onAnswer(option)}
            className={`w-full h-full p-3 text-left rounded-lg transition-colors ${
              isAnswered
                ? option.correct
                  ? 'bg-green-100 border-green-500'
                  : selectedAnswer === option
                  ? 'bg-red-100 border-red-500'
                  : 'bg-gray-100'
                : 'hover:bg-blue-50 bg-gray-50'
            } border ${
              isAnswered && (option.correct || selectedAnswer === option)
                ? 'border-2'
                : 'border-2'
            }`}
            disabled={isAnswered}
          >
            {option.prompt}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default QuestionCard;
