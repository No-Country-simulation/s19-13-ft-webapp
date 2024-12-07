import { motion } from 'motion/react';

const LevelOptions = ({
  options,
  numberOptions,
  handleLevelOptions,
  inputSelected,
}) => {
  if (!options || options.length === 0) return null;
  return (
    <motion.div
      initial={{ x: -100, scale: 0.5, opacity: 0.5 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      className='my-2 w-full grid grid-cols-2 gap-2 '
    >
      {Array.from({ length: numberOptions }).map((_, i) => (
        <div
          key={i}
          className={`flex items-center gap-4 p-2 ${
            inputSelected === i ? 'border-green-400' : 'border-red-400'
          }  border-2`}
        >
          <input
            className='w-8 h-8 scale-120'
            type='checkbox'
            checked={inputSelected === i}
            onChange={e => handleLevelOptions(i, 'correct', e.target.checked)}
          />
          <input
            className='focus:outline-slate-400 h-8 w-full'
            type='text'
            onChange={e => handleLevelOptions(i, 'option', e.target.value)}
          />
        </div>
      ))}
    </motion.div>
  );
};
export default LevelOptions;
