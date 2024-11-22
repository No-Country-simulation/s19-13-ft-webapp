import { createContext, useState } from 'react';
import { INITIAL_CREATOR, INITIAL_DIFICULTY } from '../const/initialStates.js';

const CreatorElementsContext = createContext();

const CreatorElementProvider = ({ children }) => {
  //Estado general del juego
  const [game, setGame] = useState({
    title: 'Escribir un título',
    category: '',
    autor: '',
    description: '',
    transitions: '',
    dificulty: '',
    game: [],
  });

  //Selector de opciones
  const [selectedCreator, setSelectedCreator] = useState(INITIAL_CREATOR);

  const [selectedDificulty, setSelectedDificulty] = useState(INITIAL_DIFICULTY);
  const handleSelectedDificulty = param => {
    setSelectedDificulty(prev => ({ ...prev, ...param }));
  };
  const handleSelectedCreator = param => {
    setSelectedCreator(prev => ({ ...prev, ...param }));
  };

  const handleSetGame = param => {
    setGame(prev => ({ ...prev, ...param }));
  };
  return (
    <CreatorElementsContext.Provider
      value={{
        handleSelectedCreator,
        selectedCreator,
        selectedDificulty,
        handleSelectedDificulty,
        handleSetGame,
        game,
      }}
    >
      {children}
    </CreatorElementsContext.Provider>
  );
};

export { CreatorElementProvider, CreatorElementsContext };
