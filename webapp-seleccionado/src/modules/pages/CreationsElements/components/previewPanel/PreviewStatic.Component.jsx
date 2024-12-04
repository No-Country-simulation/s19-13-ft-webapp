import { Icon } from '../../../../components/Icon/Icon.Component';
const PreviewStatic = ({ l, handleEditLevelId }) => {
  return (
    <div className='w-full min-h-52 p-2 bg-white rounded-md flex flex-col justify-between items-center border-2 border-blueSecondary mb-2'>
      <div className='flex justify-between w-full px-4 py-1'>
        <label>{`Nivel ${l.level}`}</label>
        <button
          onClick={() => {
            handleEditLevelId(l.id);
          }}
        >
          <Icon icon='edit'></Icon>
        </button>
      </div>
      <h3 className='border-black border-2 border-dashed w-full py-2 flex justify-center'>
        {l.string}
      </h3>
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
                className='w-8 h-8 scale-120'
                type='checkbox'
                checked={opt.correct}
                readOnly
              />
              <p>{opt.prompt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreviewStatic;
