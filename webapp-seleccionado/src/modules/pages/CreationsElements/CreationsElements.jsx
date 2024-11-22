import PanelCreatorComponent from './components/PanelCreatorComponent.jsx';
import PreviewCreatorComponent from './components/PreviewCreatorComponent.jsx';
import { CreatorElementProvider } from '../../../context/CreatorElementsContext.jsx';
import Title from './components/Title.Component.jsx';
const CreationsElements = () => {
  return (
    <section className='flex flex-col w-[1000px] mx-auto h-[600px] gap-2 mt-16 bg-green-400'>
      <CreatorElementProvider>
        <Title></Title>
        <div className='flex gap-2'>
          <PanelCreatorComponent></PanelCreatorComponent>
          <PreviewCreatorComponent></PreviewCreatorComponent>
        </div>
      </CreatorElementProvider>
    </section>
  );
};

export default CreationsElements;
