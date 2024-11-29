import { createContext, useState } from 'react';
import {
  INITIAL_CREATOR,
  INITIAL_DIFICULTY,
  INITIAL_GAME,
} from '../const/initialStates.js';

const CreatorElementsContext = createContext();

const CreatorElementProvider = ({ children }) => {
  //Estado general del juego
  const [game, setGame] = useState(INITIAL_GAME);

  //Selector de opciones
  const [selectedCreator, setSelectedCreator] = useState(INITIAL_CREATOR);

  const [selectedDificulty, setSelectedDificulty] = useState(INITIAL_DIFICULTY);

  const [previewGame, setPreviewGame] = useState([]);

  const [showFinalForm, setShowFinalForm] = useState({
    finalForm: false,
    error: false,
  });

  const savedGames = newGame => {
    const games = JSON.parse(localStorage.getItem('games')) || [];
    const updatedGames = [...games, newGame];
    localStorage.setItem('games', JSON.stringify(updatedGames));
  };

  const createFinalGame = level => {
    const finalGame = { ...level, game: previewGame };
    savedGames(finalGame);
    setSelectedCreator(INITIAL_CREATOR);
    setSelectedDificulty(INITIAL_DIFICULTY);
    setGame(INITIAL_GAME);
    setPreviewGame([]);
    setShowFinalForm({ finalForm: false });
  };

  const handleFinalForm = () => {
    if (previewGame.length === 0) {
      setShowFinalForm({ finalForm: false, error: true });
      return;
    }
    setShowFinalForm({ finalForm: true, error: false });
    return;
  };

  const handleSelectedDificulty = param => {
    setSelectedDificulty(prev => ({ ...prev, ...param }));
  };

  const handleSelectedCreator = param => {
    setSelectedCreator(prev => ({ ...prev, ...param }));
  };

  const handleSetGame = param => {
    setGame(prev => ({ ...prev, ...param }));
  };

  // console.log('contexto', game);
  return (
    <CreatorElementsContext.Provider
      value={{
        handleSelectedCreator,
        selectedCreator,
        selectedDificulty,
        handleSelectedDificulty,
        handleSetGame,
        game,
        previewGame,
        setPreviewGame,
        showFinalForm,
        handleFinalForm,
        createFinalGame,
      }}
    >
      {children}
    </CreatorElementsContext.Provider>
  );
};

export { CreatorElementProvider, CreatorElementsContext };
