import StringCreatorComponent from './StringCreatorComponent.jsx';
import OptionsCreatorComponents from './OptionsCreatorComponent.jsx';

const PanelCreatorComponent = () => {
  return (
    <aside className='bg-green-300 w-1/3 flex flex-col justify-center items-center overflow-y-auto'>
      <StringCreatorComponent></StringCreatorComponent>
      <span>
        <h3 className='mt-2'>Opciones:</h3>
        {[2, 3, 4].map((n, i) => (
          <OptionsCreatorComponents options={n} key={i}>
            {' '}
          </OptionsCreatorComponents>
        ))}
      </span>
    </aside>
  );
};
export default PanelCreatorComponent;
