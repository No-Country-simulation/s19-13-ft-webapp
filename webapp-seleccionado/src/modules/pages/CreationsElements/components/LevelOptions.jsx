const LevelOptions = ({
  options,
  numberOptions,
  handleLevelOptions,
  inputSelected,
}) => {
  if (!options || options.length === 0) return null;
  return (
    <div className='border-blue-500 border-2'>
      {Array.from({ length: numberOptions }).map((_, i) => (
        <div key={i}>
          <input
            type='text'
            // value={options[i]?.prompt || ''}
            onChange={e => handleLevelOptions(i, 'prompt', e.target.value)}
          />
          <label htmlFor=''>
            <input
              type='checkbox'
              checked={inputSelected === i}
              onChange={e => handleLevelOptions(i, 'correct', e.target.checked)}
            />
            Correcta
          </label>
        </div>
      ))}
    </div>
  );
};
export default LevelOptions;
