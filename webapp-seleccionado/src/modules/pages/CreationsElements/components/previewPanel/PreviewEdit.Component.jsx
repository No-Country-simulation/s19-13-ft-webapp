import { Icon } from '../../../../components/Icon/Icon.Component.jsx';
const PreviewEdit = ({
  l,
  handleEditLevel,
  handleEditLevelOption,
  saveLevelChanges,
  handleDeleteLevel,
}) => {
  return (
    <div className='w-full min-h-52 p-2 bg-white rounded-md flex flex-col justify-between items-center border-2 border-blueSecondary mb-2'>
      <div className='flex justify-between w-full px-4 py-1'>
        <label>{`Nivel ${l.level}`}</label>
        <div className='gap-2 flex'>
          <button onClick={() => saveLevelChanges()}>
            <Icon icon='ok'></Icon>
          </button>
          <button onClick={() => handleDeleteLevel(l.level)}>
            <Icon icon='delete'></Icon>
          </button>
        </div>
      </div>
      <div className='border-black border-2 border-dashed w-full py-2 flex justify-center'>
        <input
          value={l.question}
          className='text-center w-2/3 focus:outline-none border-2 border-slate-200'
          onChange={e => handleEditLevel(l.level, 'question', e.target.value)}
          placeholder={l.question}
        ></input>
      </div>
      <div className='my-2 w-full grid grid-cols-2 gap-2 '>
        {l.options.map((opt, idx) => {
          return (
            <div
              key={idx}
              className={`flex items-center gap-4 p-2 ${
                opt.correct ? 'border-green-500' : 'border-red-500'
              }  border-2`}
            >
              <input
                type='checkbox'
                className='w-8 h-8 scale-120'
                checked={opt.correct}
                onChange={e => {
                  handleEditLevelOption(
                    l.level,
                    idx,
                    'correct',
                    e.target.checked
                  );
                }}
              />
              <input
                value={opt.option}
                onChange={e =>
                  handleEditLevelOption(l.level, idx, 'option', e.target.value)
                }
              ></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreviewEdit;
