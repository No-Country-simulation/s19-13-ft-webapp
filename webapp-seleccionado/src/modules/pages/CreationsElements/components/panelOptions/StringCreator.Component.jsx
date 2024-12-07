import { useContext } from 'react';
import { CreatorElementsContext } from '../../../../../context/CreatorElements.Context.jsx';
import { Icon } from '../../../../components/Icon/Icon.Component.jsx';
import '../../styles/custom.Styles.css';
const StringCreatorComponent = () => {
  const { selectedCreator, handleSelectedCreator } = useContext(
    CreatorElementsContext
  );

  return (
    <div className=' w-full h-16 relative'>
      <button
        onClick={() => {
          handleSelectedCreator({ textSelected: true }),
            handleSelectedCreator({ optionSelected: false });
        }}
        disabled={selectedCreator.textSelected === true}
        className={`p-4 w-full text-lg flex items-center justify-center gap-2 'bg-white  text-blueSecondary 
         
            hover:text-slate-200 hover:bg-blueSecondary 
            
          `}
      >
        {!selectedCreator.textSelected && <Icon icon={'plus'}></Icon>}
        Agregar consigna
      </button>
    </div>
  );
};

export default StringCreatorComponent;
