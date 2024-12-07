import { Icon } from '../Icon/Icon.Component';
const ShowDificulty = ({ dificulty, className = '', size = 25 }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < dificulty);
  return (
    <div className={`flex gap-1 ${className}`}>
      {stars.map((s, i) => (
        <div key={i}>
          {s === true ? (
            <Icon icon='star-violet' size={size}></Icon>
          ) : (
            <Icon icon='star-empty' size={size}></Icon>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowDificulty;
