import { CreatorElementsContext } from '../../../../../context/CreatorElements.Context';

import { useContext } from 'react';
const ButtonDificulty = ({ n }) => {
  const { game, handleSetGame } = useContext(CreatorElementsContext);

  return (
    <button
      type='button'
      className={`${
        game.dificulty == n
          ? 'bg-slate-200 text-blueSecondary border-black border-2'
          : 'bg-blueSecondary text-slate-200'
      } mx-2 px-4 rounded-lg hover:bg-blue-500 hover:text-black transition-all ease-in`}
      onClick={() => handleSetGame({ dificulty: n.toString() })}
    >
      {n}
    </button>
  );
};

export default ButtonDificulty;
