import  {  useEffect } from 'react';

const Toast = ({ newGame, onClose }) => {
    const backgroundImageStyle = {
        backgroundImage: 'url(Trofeo.svg)',
        backgroundPosition: 'bottom left',
        backgroundSize: '400px 400px'
      };
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Cierra el mensaje después de 3 segundos
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
    <div
      className="w-10/12 h-5/6 bg-no-repeat  bg-AzulM text-white flex flex-col items-center justify-center"
      style={backgroundImageStyle}
    >
      <h1 className="font-Pangolin text-6xl text-center">¡Felicitaciones!</h1>
      <p className="font-Roboto text-center">
        Tu lógica y paciencia están en otro nivel ¿Listo para resolver otro desafío?
      </p>
      <div className="text-center mt-10">{newGame}</div>
    </div>
  </div>

  );
};
export default Toast