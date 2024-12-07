export const example = {
  title: 'titleExample',
  category: 'categoryExample',
  autor: 'PlayClass',
  description: 'descriptionExample',
  transitions: '',
  dificulty: 'dificultyExample',
  game: [
    {
      level: 1,
      string: 'exampleQuestion',
      options: [
        { prompt: 'exampleResponse', correct: true },
        { prompt: 'exampleResponse', correct: false },
      ],
    },
    {
      level: 2,
      string: 'exampleQuestion',
      options: [
        { prompt: 'exampleResponse', correct: true },
        { prompt: 'exampleResponse', correct: false },
        { prompt: 'exampleResponse', correct: false },
      ],
    },
    {
      level: 3,
      string: 'exampleQuestion',
      options: [
        { prompt: 'exampleResponse', correct: true },
        { prompt: 'exampleResponse', correct: false },
        { prompt: 'exampleResponse', correct: false },
        { prompt: 'exampleResponse', correct: false },
      ],
    },
  ],
};

export const dificultyLevels = [
  {
    dificulty: 1,
    options: { twoOptions: 7, threeOptions: 2, fourOptions: 1 },
  },
  {
    dificulty: 2,
    options: { twoOptions: 5, threeOptions: 3, fourOptions: 2 },
  },
  {
    dificulty: 3,
    options: { twoOptions: 3, threeOptions: 4, fourOptions: 3 },
  },
  {
    dificulty: 4,
    options: { twoOptions: 2, threeOptions: 4, fourOptions: 4 },
  },
  {
    dificulty: 5,
    options: { twoOptions: 0, threeOptions: 4, fourOptions: 6 },
  },
];
