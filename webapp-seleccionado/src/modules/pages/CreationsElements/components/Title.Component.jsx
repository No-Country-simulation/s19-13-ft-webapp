import { useContext } from 'react';
import { CreatorElementsContext } from '../../../../context/CreatorElementsContext';

const Title = () => {
  const { handleSetGame, game } = useContext(CreatorElementsContext);
  return (
    <div className='w-full rounded-lg shadow-md bg-gray-100 h-12 flex justify-center items-center'>
      <input
        className=' font-semibold text-center text-xl w-2/3 rounded-md bg-gray-100 focus:outline-slate-400'
        type='text'
        value={game.title}
        onChange={e => handleSetGame({ title: e.target.value })}
      />
    </div>
  );
};
export default Title;
