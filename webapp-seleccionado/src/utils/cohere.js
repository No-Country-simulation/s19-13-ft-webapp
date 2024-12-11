import { CohereClientV2 } from 'cohere-ai';
import { dificultyLevels } from '../mock/example.js';

const cohere = new CohereClientV2({
  token: import.meta.env.VITE_CHAT_GPT_KEY,
});

const getDificultyOptions = selectedDificulty => {
  const dificultyNumber = Number(selectedDificulty);

  const findedOptions = dificultyLevels.find(
    d => d.dificulty === dificultyNumber
  );
  return findedOptions.options;
};

const generateLevel = async prompt => {
  const selectedDificulty = getDificultyOptions(prompt.dificulty);
  try {
    const systemMessage = `Eres un asistente de juegos que generará un juego de preguntas basado en las especificaciones proporcionadas por el usuario.
 El juego tendrá 10 niveles, y cada nivel debe tener entre 2 a 4 opciones por pregunta.
 Importante: Las opciones de respuesta deben ser plausibles y similares. No incluyas datos obvios que faciliten la elección de la respuesta correcta. tiene que haber una opcion con el atributo "correct" en true, las demas en false, siempre da todas las opciones que te soliciten evita las opciones con prompts vacios, none, undefined
 
    Necesito ${selectedDificulty.twoOptions} preguntas con este formato sin ningun texto extra: 
    
    question: aqui ira la pregunta relacionada con el tema que pide el usuario, máximo de 200 caracteres 

    option 1: aqui ira el texto de la respuesta,(máximo 150 caracteres)
    correct: aqui va un booleano

    option 2: aqui ira el texto de la respuesta, (máximo 150 caracteres) 
    correct: aqui va un booleano

   

==
Necesito ${selectedDificulty.threeOptions} preguntas con este formato sin ningun texto extra: 

   question:aqui ira la pregunta relacionada con el tema que pide el usuario, máximo de 200 caracteres

    option 1: aqui ira el texto de la respuesta, (máximo 150 caracteres) 
    correct: aqui va un booleano

    option 2: aqui ira el texto de la respuesta, (máximo 150 caracteres) 
    correct: aqui va un booleano

    option 3: aqui ira el texto de la respuesta, (máximo 150 caracteres) 
    correct: aqui va un booleano

==
Necesito ${selectedDificulty.fourOptions} preguntas con este formato sin ningun texto extra: 

    question:aqui ira la pregunta relacionada con el tema que pide el usuario, máximo de 200 caracteres 
    option 1: aqui ira el texto de la respuesta, (máximo 150 caracteres) 
    correct: aqui va un booleano

    option 2: aqui ira el texto de la respuesta, (máximo 150 caracteres) 
    correct: aqui va un booleano

    option 3: aqui ira el texto de la respuesta, (máximo 150 caracteres) 
    correct: aqui va un booleano 

    option 4: aqui ira el texto de la respuesta, (máximo 150 caracteres) 
    correct: aqui va un booleano

    los 2 signos igual indican la separacion de niveles 
    Genera una lista de preguntas sobre **${prompt.title}**, con una categoría de **${prompt.category}** teniendo en cuenta la especificacion de ${prompt.description}. `;

    const completion = await cohere.chat({
      model: 'command-r-plus',
      messages: [{ role: 'user', content: systemMessage }],
    });
    return completion;
  } catch (error) {
    console.log('Error: ', error);
    return 'Error al generar la respuesta';
  }
};

const generateGame = async prompt => {
  const game = await generateLevel(prompt).then(response => {
    return response.message.content[0].text;
  });

  const cleanedText = game.replace(/\*\*.*?\*\*/g, '');

  const levels = cleanedText
    .split(/==/)
    .map(level => level.trim())
    .filter(Boolean);

  const questionsByLevels = [];

  levels.forEach(level => {
    const questions = level.split(/question:/).filter(q => q.trim() !== '');

    questions.forEach(q => {
      const trimmedQuestion = q.trim();
      const options = trimmedQuestion.split(/\n+/);

      const questionObject = { question: options[0].trim(), options: [] };

      const optionLines = [];
      const correctLines = [];

      for (let i = 1; i < options.length; i++) {
        const optionLine = options[i].trim();

        if (optionLine.startsWith('option')) {
          optionLines.push(optionLine);
        } else if (optionLine.startsWith('correct')) {
          correctLines.push(optionLine);
        }
      }

      for (let j = 0; j < optionLines.length; j++) {
        const optionMatch = optionLines[j].match(/option \d: (.+)/);
        const correctMatch = correctLines[j]
          ? correctLines[j].match(/correct: (true|false)/)
          : null;

        if (optionMatch) {
          questionObject.options.push({
            option: optionMatch[1].trim(),
            correct: correctMatch ? correctMatch[1] === 'true' : false,
          });
        }
      }

      questionsByLevels.push(questionObject);
    });
  });

  const questionsWithLevels = questionsByLevels
    .map((l, idx) => {
      return { ...l, level: idx + 1 };
    })
    .slice(0, 10);
  console.log(questionsWithLevels.length);
  return questionsWithLevels;
};

export default generateGame;
