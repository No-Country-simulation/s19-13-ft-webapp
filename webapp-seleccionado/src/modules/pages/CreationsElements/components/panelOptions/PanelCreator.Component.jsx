import StringCreatorComponent from './StringCreator.Component.jsx';
import OptionsCreatorComponents from './OptionsCreator.Component.jsx';
import { useState, useContext } from 'react';
import TransitionsPanel from './TransitionsPanel.Component.jsx';
import { CreatorElementsContext } from '../../../../../context/CreatorElements.Context.jsx';
import { Icon } from '../../../../components/Icon/Icon.Component.jsx';
import { motion } from 'motion/react';

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
    <aside className='bg-white  w-1/3 flex flex-col justify-between items-center pb-2'>
      <div className='flex flex-col justify-start items-center w-full'>
        <StringCreatorComponent></StringCreatorComponent>
        <div className='relative w-full'>
          <button
            className={`flex gap-2 justify-center items-center  w-full h-16 text-lg   hover:text-slate-200 hover:bg-blueSecondary ${
              showPanel.optionsPanel
                ? ' bg-blueSecondary text-white'
                : ' text-blueSecondary  bg-white'
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
            <motion.div
              initial='hidden'
              animate='visible'
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }, // Establece el retardo entre cada hijo
                },
              }}
              className='absolute w-full p-2 bg-blueSecondary'
            >
              {[2, 3, 4].map((n, i) => (
                <OptionsCreatorComponents
                  options={n}
                  key={i}
                  handleShowPanel={handleShowPanel}
                >
                  {' '}
                </OptionsCreatorComponents>
              ))}
            </motion.div>
          )}
        </div>
        <button
          className={`${
            showPanel.transitionsPanel
              ? 'text-white  bg-blueSecondary'
              : 'text-blueSecondary  bg-white'
          } flex gap-2 justify-center items-center  w-full h-16 text-lg   hover:text-slate-200 hover:bg-blueSecondary `}
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
        <button
          onClick={() => {
            handleFinalForm('AI');
          }}
          className='flex gap-2 justify-center items-center  w-full h-16 text-lg text-blueSecondary  bg-white   hover:text-slate-200 hover:bg-blueSecondary '
        >
          Generar juego con IA
        </button>
      </div>
      <button
        className='text-white bg-blueSecondary rounded-full w-32 h-16 text-lg'
        onClick={() => {
          handleFinalForm('Final');
        }}
      >
        Finalizar
      </button>
    </aside>
  );
};
export default PanelCreatorComponent;
