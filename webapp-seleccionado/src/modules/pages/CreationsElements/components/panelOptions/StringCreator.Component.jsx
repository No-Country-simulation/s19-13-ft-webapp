import { useContext, useState } from 'react';
import { CreatorElementsContext } from '../../../../../context/CreatorElements.Context.jsx';
import { Icon } from '../../../../components/Icon/Icon.Component.jsx';
import '../../styles/custom.Styles.css';
const StringCreatorComponent = () => {
  const { selectedCreator, handleSelectedCreator } = useContext(
    CreatorElementsContext
  );
  const [textVisible, setTextVisible] = useState(false);
  return (
    <div className=' w-full h-16 relative'>
      {textVisible && (
        <div className='custom-button pb-4 bg-white rounded-tl-md rounded-tr-md rounded-br-md p-4 h-20 z-10 right-[0%] translate-x-[110%] bottom-0'>
          <p className='text-blueSecondary font-semibold'>
            Describe aquí los acertijos de forma clara y sin ambigüedades.
          </p>
        </div>
      )}
      <button
        onClick={() => {
          handleSelectedCreator({ textSelected: true }),
            handleSelectedCreator({ optionSelected: false });
        }}
        disabled={selectedCreator.textSelected === true}
        className={`p-4 w-full text-lg flex items-center justify-center gap-2 ${
          selectedCreator.textSelected
            ? 'text-slate-200 bg-blueSecondary animate-bg'
            : 'bg-white  text-blueSecondary animate-bg'
        }  `}
        onMouseEnter={() => {
          setTextVisible(true);
        }}
        onMouseLeave={() => {
          setTextVisible(false);
        }}
      >
        {!selectedCreator.textSelected && <Icon icon={'plus'}></Icon>}
        Agregar consigna
      </button>
    </div>
  );
};

export default StringCreatorComponent;
