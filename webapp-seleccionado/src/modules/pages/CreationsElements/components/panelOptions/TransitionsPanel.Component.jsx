import { useEffect, useState } from 'react';
import { transitionVariants } from '../../../../components/trivia-game-components/animations.js';
import { motion } from 'motion/react';
import { useContext } from 'react';
import { CreatorElementsContext } from '../../../../../context/CreatorElements.Context.jsx';

const TransitionsPanel = ({ handleShowPanel }) => {
  const { handleSetGame } = useContext(CreatorElementsContext);
  const [animations, setAnimations] = useState([]);
  const [currentAnimation, setCurrentAnimation] = useState(0);
  useEffect(() => {
    const transformedArrayTransitions = Object.entries(transitionVariants).map(
      ([key, animation]) => ({ key, animation })
    );
    setAnimations(transformedArrayTransitions);
  }, []);

  const handleNext = () => {
    setCurrentAnimation(prev => (prev + 1) % 4);
  };

  const handlePreview = () => {
    setCurrentAnimation(prev => (prev - 1 + 4) % 4);
  };

  const currentTransition = animations[currentAnimation];

  return (
    <div className='bg-white w-full absolute h-72 p-4 border-2 border-black'>
      <div className='flex justify-between items-center'>
        <button
          className='bg-blueSecondary rounded-2xl text-white py-1 px-3'
          onClick={() => handlePreview()}
        >
          Preview
        </button>
        <label>
          {currentTransition ? currentTransition.key : 'Cargando...'}
        </label>
        <button
          className='bg-blueSecondary rounded-2xl text-white py-1 px-3'
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
      {currentTransition ? (
        <motion.div
          key={currentAnimation}
          initial={currentTransition.animation.initial}
          exit={currentTransition.animation.exit}
          animate={currentTransition.animation.animate}
          className='flex flex-col h-[80%] w-full gap-2 p-4'
        >
          <div className='h-[50%] w-full bg-red-500'></div>
          <div className='flex gap-2 h-[50%] w-full'>
            <div className='bg-pink-500 w-full h-full'></div>
            <div className='bg-violet-500 w-full h-full'></div>
          </div>
        </motion.div>
      ) : (
        <p>...Cargando</p>
      )}
      <button
        onClick={() => {
          handleSetGame(
            { transitions: currentTransition.key },
            handleShowPanel('transitionsPanel')
          );
        }}
        className='bg-blueSecondary rounded-2xl text-white p-1'
      >
        Guardar
      </button>
    </div>
  );
};

export default TransitionsPanel;
