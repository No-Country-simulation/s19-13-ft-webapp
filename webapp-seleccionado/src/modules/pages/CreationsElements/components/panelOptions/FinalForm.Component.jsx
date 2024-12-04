import { useState, useContext } from 'react';
import { CreatorElementsContext } from '../../../../../context/CreatorElements.Context';
import ButtonDificulty from './ButtonDificulty.Component';
const FinalForm = () => {
  const { game, handleSetGame, createFinalGame } = useContext(
    CreatorElementsContext
  );
  const [errors, setErrors] = useState({
    id: false,
    title: false,
    category: false,
    autor: false,
    description: false,
    transitions: false,
    dificulty: false,
  });

  const handleForm = () => {
    const newErrors = Object.fromEntries(
      Object.entries(game)
        .filter(([key]) => key !== 'game' && key !== 'id')
        .map(([key, value]) => [key, value.trim() === ''])
    );
    setErrors(newErrors);
    return Object.values(newErrors).every(value => !value);
  };

  const handleCloseForm = e => {
    e.preventDefault();
    if (!handleForm()) {
      return false;
    }
    createFinalGame(game);
  };

  return (
    <div className='fixed inset-0 bg-black/50 z-10 flex justify-center items-center'>
      <form
        onSubmit={e => handleCloseForm(e)}
        className='w-1/3 h-96 bg-white p-4 rounded-md m-4 flex flex-col justify-between'
      >
        <h2>Antes de terminar, unos detalles más...</h2>
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
        <input
          type='text'
          id='category'
          value={game.category}
          onChange={e => handleSetGame({ category: e.target.value })}
          className='block border-slate-400 border-2 rounded-lg p-1'
        />
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
        <button
          type='sumbit'
          className='block mx-auto bg-blueSecondary text-slate-200 p-2 rounded-xl'
        >
          Finalizar juego
        </button>
      </form>
    </div>
  );
};

export default FinalForm;
