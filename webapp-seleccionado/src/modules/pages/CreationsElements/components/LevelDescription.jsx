const LevelDescription = ({ level, handleLevel }) => {
  return (
    <div className='border-red-600 border-2'>
      <input
        type='text'
        value={level.string}
        onChange={e => handleLevel({ string: e.target.value })}
      />
    </div>
  );
};

export default LevelDescription;
