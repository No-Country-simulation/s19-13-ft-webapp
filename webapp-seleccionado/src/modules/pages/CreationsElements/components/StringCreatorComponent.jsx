import { useContext } from 'react';
import { CreatorElementsContext } from '../../../../context/CreatorElementsContext.jsx';
const StringCreatorComponent = () => {
  const { selectedCreator, handleSelectedCreator } = useContext(
    CreatorElementsContext
  );
  return (
    <div className='flex flex-col justify-center p-4 items-center border-2 border-slate-400 rounded-xl'>
      <p className='pb-4'>
        Describe aquí los acertijos de forma clara y sin ambigüedades.
      </p>
      <button
        onClick={() => {
          handleSelectedCreator({ textSelected: true }),
            handleSelectedCreator({ optionSelected: false });
        }}
        disabled={selectedCreator.textSelected === true}
        className='bg-white p-4 w-2/3 border-red-500 border-solid border-2 rounded-xl'
      >
        Agregar consigna
      </button>
    </div>
  );
};

export default StringCreatorComponent;
