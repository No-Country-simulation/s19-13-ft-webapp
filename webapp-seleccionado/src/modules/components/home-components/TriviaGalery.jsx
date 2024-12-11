import { useState } from 'react';
import { categories } from '../../../mock/exampleCategory';
import CardGame from './CardGame';
import { motion } from 'motion/react';
import { Icon } from '../Icon/Icon.Component';

const triviaGames = JSON.parse(localStorage.getItem('games')) || [];

export default function TriviaGalery() {
  const [selectedCategory, setSelectedCategory] = useState('AllGames');
  const [showCategories, setShowCategories] = useState(false);
  const filteredGames =
    selectedCategory === 'AllGames'
      ? triviaGames
      : triviaGames.filter(g => g.category === selectedCategory.text);

  const handleShowCategories = () => {
    setShowCategories(prev => !prev);
  };

  return (
    <div>
      <button
        type='button'
        onClick={() => handleShowCategories()}
        className={`flex justify-between py-1 px-2 rounded-md my-4 border-slate-400 border-2 relative w-1/3 ${
          showCategories ? 'bg-blueSecondary' : 'bg-white'
        }`}
      >
        <div className='flex items-center gap-1'>
          {selectedCategory !== 'AllGames' && (
            <Icon icon={selectedCategory.svg} size={20}></Icon>
          )}
          <p className={`${showCategories ? 'text-white' : 'text-black'}`}>
            {selectedCategory !== 'AllGames'
              ? selectedCategory.text
              : 'Ver todas las categorías'}
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
            className='absolute z-30 top-full left-0 bg-white border-b-black border-x-black border-2 w-full'
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
            <motion.div
              onClick={() => setSelectedCategory('AllGames')}
              className='flex items-center p-1 w-full hover:bg-blueSecondary hover:text-white'
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Todos los juegos
            </motion.div>
            {categories.map((c, idx) => (
              <motion.div
                key={idx}
                onClick={() => setSelectedCategory(c)}
                className='flex items-center p-1 w-full hover:bg-blueSecondary hover:text-white'
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Icon icon={c.svg} size={20}></Icon>
                <p className='ms-2'>{c.text}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </button>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {filteredGames.length > 0 &&
          filteredGames.map((g, idx) => (
            <CardGame key={idx} level={g} categories={categories}></CardGame>
          ))}
      </div>
    </div>
  );
}
