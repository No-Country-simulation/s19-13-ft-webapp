import { CreatorElementsContext } from '../../../../../context/CreatorElements.Context.jsx';
import { useContext } from 'react';
import { motion } from 'motion/react';
const OptionsCreatorComponents = ({ options, handleShowPanel }) => {
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

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <h3 className='px-4 text-slate-200 font-semibold'>{`${dificulty}:`}</h3>
      <div className='flex flex-col  w-full pb-2 px-4'>
        {Array.from({ length: options }).map((_, i) => (
          <button
            className={`p-1 w-full text-left border-black border-solid border-2 rounded-md bg-slate-200`}
            disabled={selectedCreator.optionSelected === true}
            onClick={() => {
              handleSelectedCreator({ optionSelected: true }),
                handleSelectedDificulty({
                  dificulty: dificulty,
                  numberOptions: options,
                }),
                handleShowPanel('optionsPanel');
            }}
            key={i}
          >
            {<p>Respuesta {i + 1}</p>}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default OptionsCreatorComponents;
