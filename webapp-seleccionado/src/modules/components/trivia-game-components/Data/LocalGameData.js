export const saveGameData = (gameData) => {
  try {
    localStorage.setItem('triviaGameData', JSON.stringify(gameData));
    return true;
  } catch (error) {
    console.error('Error guardando los archivos del juego:', error);
    return false;
  }
};

export const loadGameData = () => {
  try {
    const data = localStorage.getItem('triviaGameData');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error cargando los archivos del juego:', error);
    return null;
  }
};
