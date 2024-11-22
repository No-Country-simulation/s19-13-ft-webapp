const PreviewEdit = ({
  l,
  handleEditLevel,
  handleEditLevelOption,
  saveLevelChanges,
  handleDeleteLevel,
}) => {
  return (
    <>
      <input
        value={l.string}
        onChange={e => handleEditLevel(l.id, 'string', e.target.value)}
        placeholder={l.string}
      ></input>
      <label>{`nivel ${l.id}`}</label>
      {l.options.map((opt, idx) => {
        return (
          <div key={idx}>
            <input
              value={opt.prompt}
              onChange={e =>
                handleEditLevelOption(l.id, idx, 'prompt', e.target.value)
              }
              placeholder={l.string}
            ></input>
            <label htmlFor=''>
              <input
                type='checkbox'
                checked={opt.correct}
                onClick={e => {
                  handleEditLevelOption(l.id, idx, 'correct', e.target.value);
                }}
              />
              {`opcion ${idx + 1}`}
            </label>
          </div>
        );
      })}
      <button onClick={() => saveLevelChanges()}> Guardar cambios</button>
      <button onClick={() => handleDeleteLevel(l.id)}>Eliminar nivel</button>
    </>
  );
};

export default PreviewEdit;
