const LevelOptions = ({
  options,
  numberOptions,
  handleLevelOptions,
  inputSelected,
}) => {
  if (!options || options.length === 0) return null;
  return (
    <div className='my-2 w-full grid grid-cols-2 gap-2 '>
      {Array.from({ length: numberOptions }).map((_, i) => (
        <div
          key={i}
          className={`flex items-center gap-4 p-2 ${
            inputSelected === i ? 'border-green-500' : 'border-red-500'
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
            onChange={e => handleLevelOptions(i, 'prompt', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};
export default LevelOptions;
