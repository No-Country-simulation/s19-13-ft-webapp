export const INITIAL_CREATOR = {
  textSelected: false,
  optionSelected: false,
};

export const INITIAL_DIFICULTY = {
  dificulty: '',
  numberOptions: 0,
};

export const INITIAL_NIVEL = {
  level: 0,
  question: '',
  options: [
    {
      option: '',
      correct: false,
    },
  ],
};

export const INITIAL_GAME = {
  id: '',
  title: '',
  category: '',
  autor: '',
  description: '',
  // transitions: '',
  dificulty: '',
  game: [],
};
