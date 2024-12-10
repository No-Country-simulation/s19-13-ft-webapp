import { useState, useContext } from 'react';
import { CreatorElementsContext } from '../../../../../context/CreatorElements.Context';
import ButtonDificulty from './ButtonDificulty.Component';
import '../../styles/spinner.Styles.css';
import Categories from '../../../../components/categories/Categories.Component';
import { Icon } from '../../../../components/Icon/Icon.Component';
import { motion } from 'motion/react';

const FinalForm = ({ typeForm }) => {
  const {
    game,
    handleSetGame,
    createPreviewGameWithAI,
    createFinalGame,
    handleSetFinalForm,
  } = useContext(CreatorElementsContext);
  const [errors, setErrors] = useState({
    id: false,
    title: false,
    category: false,
    autor: false,
    description: false,
    transitions: false,
    dificulty: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleForm = () => {
    const newErrors = Object.fromEntries(
      Object.entries(game)
        .filter(
          ([key]) => key !== 'game' && key !== 'id' && key !== 'transitions'
        )
        .map(([key, value]) => [key, value.trim() === ''])
    );
    setErrors(newErrors);
    return Object.values(newErrors).every(value => !value);
  };

  const handleCloseForm = async e => {
    e.preventDefault();
    if (!handleForm()) {
      return false;
    }
    setIsLoading(true);
    try {
      if (typeForm === 'AI') {
        await createPreviewGameWithAI(game);
        return;
      }
      createFinalGame(game);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='fixed inset-0 bg-black/50 z-10 flex justify-center items-center'
    >
      <form
        onSubmit={e => handleCloseForm(e)}
        className='w-1/3  bg-white p-4 rounded-md m-4 flex flex-col justify-between'
      >
        <div className='flex justify-between'>
          <h2>Antes de terminar, unos detalles más...</h2>
          <button
            type='button'
            onClick={() => {
              handleSetFinalForm(null), handleSetGame({ category: null });
            }}
          >
            <Icon icon='close'></Icon>
          </button>
        </div>
        <label htmlFor='title' className='block'>
          Título{' '}
          {errors.title && <span className='text-red-400'>*Obligatorio</span>}
        </label>
        <input
          type='text'
          id='title'
          value={game.title}
          onChange={e => handleSetGame({ title: e.target.value })}
          className='block border-slate-400 border-2 rounded-lg p-1'
        />
        <label htmlFor='category'>
          Categoría{' '}
          {errors.category && (
            <span className='text-red-400'>*Obligatorio</span>
          )}
        </label>
        <Categories></Categories>
        <label htmlFor='description'>
          Descripción{' '}
          {errors.description && (
            <span className='text-red-400'>*Obligatorio</span>
          )}
        </label>
        <input
          type='text'
          id='description'
          value={game.description}
          onChange={e => handleSetGame({ description: e.target.value })}
          className='block border-slate-400 border-2 rounded-lg p-1'
        />
        <label htmlFor='autor'>
          Autor{' '}
          {errors.autor && <span className='text-red-400'>*Obligatorio</span>}
        </label>{' '}
        <input
          type='text'
          id='autor'
          value={game.autor}
          onChange={e => handleSetGame({ autor: e.target.value })}
          className='block border-slate-400 border-2 rounded-lg p-1'
        />
        <label htmlFor='dificulty'>
          {`Dificultad ${game.dificulty}`}{' '}
          {errors.dificulty && (
            <span className='text-red-400'>*Obligatorio</span>
          )}
        </label>{' '}
        <div className='mb-2'>
          {[1, 2, 3, 4, 5].map((n, i) => (
            <ButtonDificulty key={i} n={n}></ButtonDificulty>
          ))}
        </div>
        <div className='flex items-center mx-auto'>
          <button
            type='submit'
            className='block  bg-blueSecondary text-slate-200 p-2 rounded-xl mx-4 hover:bg-blue-500 hover:text-black'
          >
            Finalizar juego
          </button>
          {isLoading && <div className='loader'></div>}
        </div>
      </form>
    </motion.div>
  );
};

export default FinalForm;

/* HTML: <div class="loader"></div> */
