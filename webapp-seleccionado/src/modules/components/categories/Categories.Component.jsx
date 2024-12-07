import { Icon } from '../Icon/Icon.Component';
import { useState, useContext } from 'react';
import { CreatorElementsContext } from '../../../context/CreatorElements.Context';
import { motion } from 'motion/react';
import { categories } from '../../../mock/exampleCategory';

const Categories = () => {
  const [showCategories, setShowCategories] = useState(false);
  const { game, handleSetGame } = useContext(CreatorElementsContext);
  const handleShowCategories = () => {
    setShowCategories(prev => !prev);
  };

  const icon = game.category
    ? categories.find(c => c.text === game.category)
    : null;

  return (
    <div>
      <button
        type='button'
        onClick={() => handleShowCategories()}
        className={`flex justify-between py-1 px-2 rounded-md border-slate-400 border-2 relative w-full ${
          showCategories ? 'bg-blueSecondary' : ''
        }`}
      >
        <div className='flex items-center gap-1'>
          {game.category && <Icon icon={icon.svg} size={20}></Icon>}
          <p className={`${showCategories ? 'text-white' : 'text-black'}`}>
            {game.category ? game.category : 'Ver todas las categorías'}
          </p>
        </div>
        {showCategories ? (
          <Icon icon='arrow-down'></Icon>
        ) : (
          <Icon icon='arrow-up'></Icon>
        )}
        {showCategories ? (
          <motion.div
            initial='hidden'
            animate='visible'
            className='absolute top-full left-0 bg-white border-b-black border-x-black border-2 w-full'
            variants={{
              hidden: { height: 0 },
              visible: {
                height: 'auto',
                transition: {
                  staggerChildren: 0.1,
                  when: 'beforeChildren',
                },
              },
            }}
          >
            {categories.map((c, idx) => (
              <motion.button
                type='button'
                key={idx}
                onClick={() => handleSetGame({ category: c.text })}
                className='flex items-center p-1 w-full hover:bg-blueSecondary hover:text-white'
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Icon icon={c.svg} size={20}></Icon>
                <p className='ms-2'>{c.text}</p>
              </motion.button>
            ))}
          </motion.div>
        ) : null}
      </button>
    </div>
  );
};

export default Categories;
