import CreatorComponent from './CreatorComponent.Component';
import { useState, useContext } from 'react';
import PreviewStatic from './PreviewStatic.Component';
import PreviewEdit from './PreviewEdit.Component';
import { CreatorElementsContext } from '../../../../context/CreatorElements.Context';

const PreviewCreatorComponent = () => {
  const { previewGame, setPreviewGame } = useContext(CreatorElementsContext);
  const [editLevelId, setEditLevelId] = useState(null);

  const handleAddLevel = level => {
    setPreviewGame(prev => [...prev, { ...level, id: prev.length + 1 }]);
  };

  const handleEditLevel = (id, key, value) => {
    setPreviewGame(prev =>
      prev.map(l => (l.id === id ? { ...l, [key]: value } : l))
    );
  };

  const handleEditLevelOption = (levelId, optionIndex, key, value) => {
    setPreviewGame(prev =>
      prev.map(level => {
        if (level.id === levelId) {
          const updatedOptions = [...level.options];
          updatedOptions[optionIndex] = {
            ...updatedOptions[optionIndex],
            [key]: value,
          };

          if (key === 'correct' && value) {
            updatedOptions.forEach((opt, idx) => {
              if (idx !== optionIndex) opt.correct = false;
            });
          }

          return { ...level, options: updatedOptions };
        }
        return level;
      })
    );
  };

  const handleEditLevelId = number => {
    setEditLevelId(number);
  };

  const saveLevelChanges = () => {
    setEditLevelId(null);
  };

  const handleDeleteLevel = id => {
    setPreviewGame(prev => {
      const previewGameWithoutLevel = prev.filter(l => l.id !== id);
      const newPreviewGame = previewGameWithoutLevel.map((l, i) => ({
        ...l,
        id: i + 1,
      }));
      return newPreviewGame;
    });
    saveLevelChanges();
  };

  return (
    <div className='bg-white w-2/3 px-auto pt-4 flex flex-col items-center gap-2'>
      {previewGame.length < 10 && (
        <CreatorComponent handleAddLevel={handleAddLevel}></CreatorComponent>
      )}
      <div className='max-h-96 overflow-y-auto w-[95%]'>
        {previewGame.length > 0 &&
          previewGame.map(l => {
            const isEditing = editLevelId === l.id;
            return (
              <div key={l.id}>
                {!isEditing ? (
                  <PreviewStatic
                    l={l}
                    handleEditLevelId={handleEditLevelId}
                  ></PreviewStatic>
                ) : (
                  <PreviewEdit
                    l={l}
                    handleEditLevel={handleEditLevel}
                    handleEditLevelOption={handleEditLevelOption}
                    saveLevelChanges={saveLevelChanges}
                    handleDeleteLevel={handleDeleteLevel}
                  ></PreviewEdit>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PreviewCreatorComponent;
