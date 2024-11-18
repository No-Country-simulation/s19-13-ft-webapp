import { useState } from 'react';
const CreationsElements = () => {
  const [game, setGame] = useState({
    title: '',
    category: '',
    autor: '',
    description: '',
    transitions: '',
    game: [],
  });

  return (
    <aside className='flex w-[1000px] mx-auto h-[500px] gap-2'>
      <div className='bg-green-300 w-1/3 flex flex-col justify-center items-center p-4'>
        <div className='flex flex-col justify-center  items-center border-2 border-slate-400 rounded-xl'>
          <p className='py-4'>
            Describe aquí los acertijos de forma clara y sin ambigüedades.
          </p>
          <button className='bg-white px-8 py-4 w-1/2 border-red-500 border-solid border-2 rounded-xl'>
            Agregar consigna
          </button>
        </div>
      </div>
      <div className='bg-red-300 w-2/3 '></div>
    </aside>
  );
};

export default CreationsElements;
