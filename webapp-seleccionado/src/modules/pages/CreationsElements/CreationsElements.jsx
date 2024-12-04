import PanelCreatorComponent from './components/panelOptions/PanelCreator.Component.jsx';
import PreviewCreatorComponent from './components/previewPanel/PreviewCreator.Component.jsx';
import { CreatorElementProvider } from '../../../context/CreatorElements.Context.jsx';
import Title from './components/panelOptions/Title.Component.jsx';
import FinalForm from './components/panelOptions/FinalForm.Component.jsx';
import { useContext } from 'react';
import { CreatorElementsContext } from '../../../context/CreatorElements.Context.jsx';

const FinalFormWrapper = () => {
  const { showFinalForm } = useContext(CreatorElementsContext);
  if (showFinalForm.error) {
    return <></>;
  } else if (showFinalForm.finalForm) {
    return <FinalForm></FinalForm>;
  } else {
    return null;
  }
};
const CreationsElements = () => {
  return (
    <div className='flex flex-col w-[1000px] mx-auto min-h-[600px] gap-2 my-4 relative'>
      <CreatorElementProvider>
        <Title></Title>
        <div className='flex gap-2 grow'>
          <PanelCreatorComponent></PanelCreatorComponent>
          <PreviewCreatorComponent></PreviewCreatorComponent>
        </div>
        <FinalFormWrapper></FinalFormWrapper>
      </CreatorElementProvider>
    </div>
  );
};

export default CreationsElements;
