const PreviewStatic = ({ l, handleEditLevelId }) => {
  return (
    <>
      <h3>{l.string}</h3>
      <label>{`nivel ${l.id}`}</label>
      {l.options.map((opt, idx) => {
        return (
          <div key={idx}>
            <p>{opt.prompt}</p>
            <label htmlFor=''>
              <input type='checkbox' checked={opt.correct} readOnly />
              {`opcion ${idx + 1}`}
            </label>
          </div>
        );
      })}
      <button
        onClick={() => {
          handleEditLevelId(l.id);
        }}
      >
        Editar nivel
      </button>
    </>
  );
};

export default PreviewStatic;
