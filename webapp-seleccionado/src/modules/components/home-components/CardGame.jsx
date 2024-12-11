import ShowDificulty from '../showDificulty/ShowDificulty.Component';
import { Link } from 'react-router-dom';
const CardGame = ({ level, categories }) => {
  const categoryInfo = categories.find(c => c.text === level.category);
  return (
    <Link to={`/play-game/${level.id}`}>
      <div className='bg-slate-200 max-w-[255px] h-[265px] flex flex-col rounded-md group overflow-hidden hover:scale-110 hover:cursor-pointer transition-scale duration-200 '>
        <div className='relative'>
          <p className='absolute inset-0 text-white p-2  bg-black/70 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
            {level.description}
          </p>
          <img src={categoryInfo.img} alt={`imagen de ${level.category}`} />
        </div>
        <div className='py-1 px-2 flex flex-col gap-1 justify-between flex-grow'>
          <h3 className='font-bold text-sm flex-grow'>{level.title}</h3>
          <h4 className='semibold text-sm'>{level.category}</h4>
          <div className='flex items-center gap-1 w-fit min-h-[48px]'>
            <ShowDificulty
              dificulty={level.dificulty}
              className='semibold'
              size={15}
            ></ShowDificulty>{' '}
            <p className='font-semibold'>{`de ${level.autor}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardGame;
