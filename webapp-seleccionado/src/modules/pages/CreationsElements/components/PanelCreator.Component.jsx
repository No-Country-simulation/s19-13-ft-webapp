import StringCreatorComponent from './StringCreator.Component.jsx';
import OptionsCreatorComponents from './OptionsCreator.Component.jsx';
import { useState, useContext } from 'react';
import TransitionsPanel from './TransitionsPanel.Component.jsx';
import { CreatorElementsContext } from '../../../../context/CreatorElements.Context.jsx';
import { Icon } from '../../../components/Icon/Icon.Component.jsx';

const PanelCreatorComponent = () => {
  const { handleFinalForm } = useContext(CreatorElementsContext);

  const [showPanel, setShowPanel] = useState({
    optionsPanel: false,
    transitionsPanel: false,
  });

  const handleShowPanel = key => {
    setShowPanel(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    // ver como resolver el tema del overflow antes estaba esta propiedad: overflow-y-auto
    <aside className='bg-slate-200  w-1/3 flex flex-col justify-between items-center'>
      <div className='flex flex-col justify-start items-center'>
        <StringCreatorComponent></StringCreatorComponent>
        <div className='relative w-full'>
          <button
            className={`flex gap-2 justify-center items-center  w-full h-16 text-lg ${
              showPanel.optionsPanel
                ? ' bg-blueSecondary text-slate-200'
                : ' text-blueSecondary  bg-slate-200'
            }`}
            onClick={() => {
              handleShowPanel('optionsPanel');
            }}
          >
            {showPanel.optionsPanel ? (
              <Icon icon='options-selected'></Icon>
            ) : (
              <Icon icon='options'></Icon>
            )}
            Respuestas
            {showPanel.optionsPanel ? (
              <Icon icon='arrow-down'></Icon>
            ) : (
              <Icon icon='arrow-up'></Icon>
            )}
          </button>
          {showPanel.optionsPanel && (
            <div className='absolute w-full p-2 bg-blueSecondary'>
              {[2, 3, 4].map((n, i) => (
                <OptionsCreatorComponents
                  options={n}
                  key={i}
                  handleShowPanel={handleShowPanel}
                >
                  {' '}
                </OptionsCreatorComponents>
              ))}
            </div>
          )}
        </div>
        <button
          className={`${
            showPanel.transitionsPanel
              ? 'text-slate-200  bg-blueSecondary'
              : 'text-blueSecondary  bg-slate-200'
          } flex gap-2 justify-center items-center  w-full h-16 text-lg`}
          onClick={() => handleShowPanel('transitionsPanel')}
        >
          {showPanel.transitionsPanel ? (
            <Icon icon='settings-selected'></Icon>
          ) : (
            <Icon icon='settings'></Icon>
          )}
          Configuración
          {showPanel.transitionsPanel ? (
            <Icon icon='arrow-down'></Icon>
          ) : (
            <Icon icon='arrow-up'></Icon>
          )}
        </button>
        {showPanel.transitionsPanel && <TransitionsPanel></TransitionsPanel>}
      </div>
      <button
        className='text-slate-200 bg-blueSecondary rounded-full w-32 h-16 text-lg'
        onClick={() => {
          handleFinalForm();
        }}
      >
        Finalizar
      </button>
    </aside>
  );
};
export default PanelCreatorComponent;
