const LevelDescription = ({ level, handleLevel }) => {
  return (
    <div className='border-black border-2 border-dashed w-full py-2 flex justify-center'>
      <input
        className='border-none w-2/3 text-center focus:outline-slate-400'
        type='text'
        value={level.string}
        onChange={e => handleLevel({ string: e.target.value })}
      />
    </div>
  );
};

export default LevelDescription;
