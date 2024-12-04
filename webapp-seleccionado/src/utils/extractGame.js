export const extractGame = id => {
  const games = JSON.parse(localStorage.getItem('games')) || [];
  return games.find(g => g.id === id);
};
