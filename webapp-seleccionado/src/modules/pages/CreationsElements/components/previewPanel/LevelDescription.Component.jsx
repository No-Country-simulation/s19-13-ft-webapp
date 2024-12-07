import { motion } from 'motion/react';

const LevelDescription = ({ level, handleLevel }) => {
  return (
    <motion.div
      initial={{ x: -100, scale: 0.5, opacity: 0.5 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      className='border-slate-400 border-2 border-dashed w-full py-2 flex justify-center'
    >
      <input
        className='border-none w-2/3 text-center focus:outline-slate-400'
        type='text'
        value={level.question}
        onChange={e => handleLevel({ question: e.target.value })}
      />
    </motion.div>
  );
};

export default LevelDescription;
