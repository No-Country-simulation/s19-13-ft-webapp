import { CreatorElementsContext } from '../../../../context/CreatorElementsContext.jsx';
import { useContext } from 'react';
const OptionsCreatorComponents = ({ options }) => {
  const { selectedCreator, handleSelectedCreator, handleSelectedDificulty } =
    useContext(CreatorElementsContext);
  let dificulty = '';
  switch (options) {
    case 2:
      dificulty = 'Facil';
      break;
    case 3:
      dificulty = 'Medio';
      break;
    case 4:
      dificulty = 'Dificil';
      break;
    default:
      dificulty = 'Desconocido';
      break;
  }
  const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-orange-500'];
  return (
    <>
      <h3>{dificulty}</h3>
      <div className='flex gap-2 h-20 border-black border-2 w-full my-2'>
        {Array.from({ length: options }).map((_, i) => (
          <button
            className={`p-2 w-full border-red-500 border-solid border-2 rounded-xl ${colors[i]}`}
            disabled={selectedCreator.optionSelected === true}
            onClick={() => {
              handleSelectedCreator({ optionSelected: true }),
                handleSelectedDificulty({
                  dificulty: dificulty,
                  numberOptions: options,
                });
            }}
            key={i}
          >
            {<p>opción {i + 1}</p>}
          </button>
        ))}
      </div>
    </>
  );
};

export default OptionsCreatorComponents;
