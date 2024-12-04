import { Icon } from '../Icon/Icon.Component';
const ShowDificulty = ({ dificulty }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < dificulty);
  return (
    <div className='flex gap-2'>
      {stars.map((s, i) => (
        <div key={i}>
          {s === true ? (
            <Icon icon='star-violet'></Icon>
          ) : (
            <Icon icon='star-empty'></Icon>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowDificulty;
