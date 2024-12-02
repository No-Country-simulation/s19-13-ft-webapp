import { useState, useContext } from 'react';
import { CreatorElementsContext } from '../../../../context/CreatorElements.Context';
import {
  INITIAL_CREATOR,
  INITIAL_DIFICULTY,
  INITIAL_NIVEL,
} from '../../../../const/initialStates';
import LevelDescription from './LevelDescription.Component';
import LevelOptions from './LevelOptions.Component';
const CreatorComponent = ({ handleAddLevel }) => {
  //extraccion del contexto
  const {
    selectedCreator,
    selectedDificulty,
    handleSelectedCreator,
    handleSelectedDificulty,
  } = useContext(CreatorElementsContext);

  //inicializado de estados
  const [level, setLevel] = useState(INITIAL_NIVEL);
  const [error, setError] = useState('');
  const [inputSelected, setInputSelected] = useState(-1);

  //manejador de estados

  const handleLevel = param => {
    setLevel(prev => ({ ...prev, ...param }));
  };

  const handleLevelOptions = (index, key, value) => {
    setLevel(prev => {
      const updatedOptions = [...prev.options];
      while (updatedOptions.length <= index) {
        updatedOptions.push({ prompt: '', correct: false });
      }
      while (updatedOptions.length > selectedDificulty.numberOptions) {
        updatedOptions.pop();
      }
      updatedOptions[index] = {
        ...updatedOptions[index],
        [key]: value,
      };

      if (key === 'correct' && value) {
        setInputSelected(index);
      }

      if (key === 'correct' && value) {
        updatedOptions.forEach((option, i) => {
          if (i !== index) {
            option.correct = false;
          }
        });
      }
      return { ...prev, options: updatedOptions };
    });
  };

  //funcion para el sumbit del nivel

  const handlePreview = () => {
    const { string, options } = level;
    const validOptionCorrect = options.some(o => o.correct);
    const validPrompt = options.every(
      o => typeof o.prompt === 'string' && o.prompt.trim() !== ''
    );
    if (string.trim() === '') {
      setError('Debes agregar una consigna valida');
    } else if (!validPrompt) {
      setError('Las opciones tienen que tener valores validos');
    } else if (!validOptionCorrect) {
      setError('Debes de elegir al menos una opcion correcta');
    } else {
      handleAddLevel(level);
      setError(null);
      handleSelectedCreator(INITIAL_CREATOR);
      handleSelectedDificulty(INITIAL_DIFICULTY);
      setLevel(INITIAL_NIVEL);
      setInputSelected(-1);
    }
  };

  const handleReset = action => {
    if (action === 'softReset') {
      handleSelectedDificulty(INITIAL_DIFICULTY);
      handleSelectedCreator({ optionSelected: false });
      setError(null);
      setLevel(prev => {
        const newOptions = prev.options.map((_, index) => {
          handleLevelOptions(index, 'prompt', ''); // Resetear el prompt
          handleLevelOptions(index, 'correct', false); // Resetear el correct
        });
        return { ...prev, newOptions };
      });
    } else {
      handleLevel({ string: '' });
      handleSelectedCreator(INITIAL_CREATOR);
      handleSelectedDificulty(INITIAL_DIFICULTY);
      setError(null);
    }
  };

  return (
    <div className='w-[95%] shadow-lg min-h-52 p-2 bg-white rounded-md flex flex-col justify-between items-center border-2 border-black'>
      {selectedCreator.textSelected === true && (
        <LevelDescription
          level={level}
          handleLevel={handleLevel}
        ></LevelDescription>
      )}
      {selectedCreator.optionSelected === true && (
        <LevelOptions
          options={level.options}
          numberOptions={selectedDificulty.numberOptions}
          handleLevelOptions={handleLevelOptions}
          inputSelected={inputSelected}
        ></LevelOptions>
      )}

      <div className='mb-2'>
        {error && <p className='text-red-500'>{error}</p>}
      </div>
      <div>
        <button
          className='mx-2 bg-blueButton font-semibold p-2 rounded-lg'
          onClick={() => {
            handleReset('softReset');
          }}
        >
          Quitar opciones
        </button>
        <button
          className='mx-2 bg-blueButton font-semibold p-2 rounded-lg'
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </button>
        <button
          className='mx-2 bg-blueButton font-semibold p-2 rounded-lg'
          onClick={() => handlePreview()}
        >
          Agregar historia
        </button>
      </div>
    </div>
  );
};

export default CreatorComponent;
