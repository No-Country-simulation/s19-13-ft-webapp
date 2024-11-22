import { useState, useContext } from 'react';
import { CreatorElementsContext } from '../../../../context/CreatorElementsContext';
import {
  INITIAL_CREATOR,
  INITIAL_DIFICULTY,
  INITIAL_NIVEL,
} from '../../../../const/initialStates';
import LevelDescription from './LevelDescription';
import LevelOptions from './LevelOptions';
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

  const { string, options } = level;
  const validOptionCorrect = options.some(o => o.correct);
  const validPrompt = options.every(o => o.prompt.trim() !== '');
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
      setLevel(prev => {
        prev.options.forEach((_, index) => {
          handleLevelOptions(index, 'prompt', ''); // Resetear el prompt
          handleLevelOptions(index, 'correct', false); // Resetear el correct
        });
        return { ...prev };
      });
    } else {
      handleLevel({ string: '' });
      handleSelectedCreator(INITIAL_CREATOR);
      handleSelectedDificulty(INITIAL_DIFICULTY);
    }
  };

  return (
    <div className='w-full h-32 bg-white rounded-md flex flex-col justify-center items-center'>
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
      <div className='flex-grow' />
      <div>{error && <p className='text-red-500'>{error}</p>}</div>
      <div>
        <button
          className='mx-2'
          onClick={() => {
            handleReset('softReset');
          }}
        >
          Quitar opciones
        </button>
        <button
          className='mx-2'
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </button>
        <button className='mx-2' onClick={() => handlePreview()}>
          Agregar historia
        </button>
      </div>
    </div>
  );
};

export default CreatorComponent;
