import { useContext } from 'react';
import { CreatorElementsContext } from '../../../../context/CreatorElements.Context';

const Title = () => {
  const { handleSetGame } = useContext(CreatorElementsContext);
  return (
    <div className='w-full flex-col rounded-lg py-2 shadow-md bg-white min-h-16 flex justify-center items-center'>
      <input
        className={`font-semibold text-center text-xl w-2/3 rounded-md bg-white focus:outline-slate-400`}
        type='text'
        placeholder='Escribe un titulo'
        onChange={e => handleSetGame({ title: e.target.value })}
      />
    </div>
  );
};
export default Title;
