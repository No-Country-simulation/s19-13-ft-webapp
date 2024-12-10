import { createContext, useState } from 'react';
import {
  INITIAL_CREATOR,
  INITIAL_DIFICULTY,
  INITIAL_GAME,
} from '../const/initialStates.js';
import generateGame from '../utils/cohere.js';
import Swal from 'sweetalert2';

const CreatorElementsContext = createContext();

const CreatorElementProvider = ({ children }) => {
  const [game, setGame] = useState(INITIAL_GAME);

  const [selectedCreator, setSelectedCreator] = useState(INITIAL_CREATOR);

  const [selectedDificulty, setSelectedDificulty] = useState(INITIAL_DIFICULTY);

  const [previewGame, setPreviewGame] = useState([]);

  const [visibleForm, setVisibleForm] = useState(null);

  // const savedGames = newGame => {
  //   const games = JSON.parse(localStorage.getItem('games')) || [];
  //   const addingLevelArray = [...games, newGame];
  //   const updatedGames = addingLevelArray.map((g, index) => {
  //     return { ...g, id: index + 1 };
  //   });
  //   const findedGame = updatedGames.find(g => g.title === newGame.title);
  //   console.log(findedGame);
  //   Swal.fire({
  //     title: '¡Juego finalizado!',
  //     text: 'El juego se ha creado con éxito. ¿Qué deseas hacer ahora?',
  //     icon: 'success',
  //     showCancelButton: true,
  //     confirmButtonText: 'Ir a jugarlo',
  //     cancelButtonText: 'Volver al inicio',
  //   }).then(result => {
  //     if (result.isConfirmed) {
  //       window.location.href = `/play-game/${findedGame.id}`;
  //     } else {
  //       window.location.href = '/';
  //     }
  //   });
  //   localStorage.setItem('games', JSON.stringify(updatedGames));
  // };

  // const savedGames = newGame => {
  //   console.log('savedGames function called');
  //   const games = JSON.parse(localStorage.getItem('games')) || [];

  //   // Obtiene el último ID y suma 1 para el nuevo juego
  //   const lastId = games.length > 0 ? games[games.length - 1].id : 0;
  //   const newId = lastId + 1;

  //   // Crea el nuevo juego con el ID asignado
  //   const newGameWithId = { ...newGame, id: newId };

  //   const updatedGames = [...games, newGameWithId];

  //   // Buscar el juego recién creado con su ID
  //   const findedGame = updatedGames.find(g => g.id === newId);

  //   console.log(findedGame);

  //   // Mostrar la alerta con SweetAlert
  //   Swal.fire({
  //     title: '¡Juego finalizado!',
  //     text: 'El juego se ha creado con éxito.',
  //     icon: 'success',
  //     showCancelButton: true, // Mantén el botón de cancelación
  //     cancelButtonText: 'Volver al inicio', // Solo el botón "Volver al inicio"
  //   }).then(result => {
  //     if (result.isDismissed) {
  //       // Verifica si el botón de cancelar fue presionado
  //       window.location.href = '/'; // Redirige al inicio
  //     }
  //   });

  //   // Guardar los juegos actualizados en el localStorage
  //   localStorage.setItem('games', JSON.stringify(updatedGames));
  // };

  const savedGames = newGame => {
    const games = JSON.parse(localStorage.getItem('games')) || [];
    const addingLevelArray = [...games, newGame];
    const updatedGames = addingLevelArray.map((g, index) => {
      return { ...g, id: index + 1 };
    });
    const findedGame = updatedGames.find(g => g.title === newGame.title);
    console.log(findedGame);
    Swal.fire({
      title: '¡Juego finalizado!',
      text: 'El juego se ha creado con éxito.',
      icon: 'success',
      showCancelButton: true, // Mantén el botón de cancelación
      cancelButtonText: 'Volver al inicio', // Solo el botón "Volver al inicio"
    }).then(result => {
      if (result.isDismissed) {
        // Verifica si el botón de cancelar fue presionado
        window.location.href = '/'; // Redirige al inicio
      }
    });
    localStorage.setItem('games', JSON.stringify(updatedGames));
  };

  const createFinalGame = (level, gameAI) => {
    const finalGame = { ...level, game: gameAI ? gameAI : previewGame };
    savedGames(finalGame);
    setSelectedCreator(INITIAL_CREATOR);
    setSelectedDificulty(INITIAL_DIFICULTY);
    setPreviewGame([]);
    setVisibleForm(null);
    setGame(INITIAL_GAME);
  };

  const createPreviewGameWithAI = async () => {
    const userPreferences = {
      title: game.title,
      category: game.category,
      autor: game.autor,
      description: game.description,
      dificulty: game.dificulty,
    };

    try {
      const gameGeneratedWithAI = await generateGame(userPreferences);
      if (gameGeneratedWithAI && gameGeneratedWithAI.length > 0) {
        createFinalGame(userPreferences, gameGeneratedWithAI);
      } else {
        console.warn('No se generó ningún juego.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFinalForm = value => {
    switch (value) {
      case 'Final': {
        setVisibleForm('Final');
        return;
      }
      case 'AI': {
        setVisibleForm('AI');
        return;
      }
      case 'default': {
        setVisibleForm(null);
        return;
      }
    }
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

  const handleSetFinalForm = state => {
    setVisibleForm(state);
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
        previewGame,
        setPreviewGame,
        handleFinalForm,
        createFinalGame,
        visibleForm,
        handleSetFinalForm,
        createPreviewGameWithAI,
      }}
    >
      {children}
    </CreatorElementsContext.Provider>
  );
};

export { CreatorElementProvider, CreatorElementsContext };
