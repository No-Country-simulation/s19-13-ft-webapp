import { Card, CardContent } from "../../components/Plantillas/templatesCard";


export default function Templates() {
  const games = [
    {
      title: "Trivia",
      icon: <img src="A1.png" alt="" />,
      description: "Juego de preguntas y respuestas de múltiple choice. Es perfecto para aprender",
    },
    {
      title: "Flash card",
      icon: 
     <img src="A2.png" alt="" className="w-24" />,
      
      description: "Por un lado tienen una pregunta o concepto, y por el otro, la respuesta.",
    },
    {
      title: "Rompecabezas",
      icon: <img src="A3.png" alt="" />
      ,
      description: "Debes unir piezas para formar una imagen completa. ¡Es ideal para estimular la mente!",
    },
    {
      title: "Juego de la memoria",
      icon: <img src="A4.png" alt="" />,
      description: "Consiste en encontrar pares de cartas idénticas volteándolas de dos a dos",
    },
    {
      title: "Crucigrama",
      icon: <img src="A5.png" alt="" />,
      description: "Llenar un cuadro con palabras cruzadas, basándote en pistas o definiciones",
    },
    {
      title: "Sopa de letras",
      icon: <img src="A6.png" alt="" />,
      description: "Debes encontrar palabras ocultas dentro de un cuadro lleno de letras",
    },
    {
      title: "Concurso de preguntas",
      icon: <img src="A7.png" alt="" />,
      description: "Es como la trivia pero con temporizador y sin poder retroceder",
    },
  ];

  return (
    <div>


<div className="max-w-6xl mx-auto bg-white py-12 flex flex-col items-center">
       
      <h1 className="text-4xl text-center text-black mb-2 font-Pangolin drop-shadow">Nuestras plantillas</h1>
      <div className="flex flex-wrap justify-center">
        {games.map((game) => (
          <Card key={game.title}>
            <CardContent>
              <div className="flex flex-col items-center text-center w-60 h-56 rounded border stroke-black border-solid opacity-100 border-black p-2">
                {game.icon}
                <h2 className="text-xl font-semibold mb-1 font-Roboto text-AzulM">{game.title}</h2>
                <p className="text-sm text-black font-Roboto">{game.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
    </div>
   
    </div>
    

  );
}