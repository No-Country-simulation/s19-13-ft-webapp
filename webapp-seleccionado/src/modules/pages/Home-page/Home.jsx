import HeaderImage from '../../../assets/Home-Images/header-image.png';
import CreateLogo from '../../../assets/Home-Images/creation-logo.png';
import ShareLogo from '../../../assets/Home-Images/share-logo.png';
import PlayLogo from '../../../assets/Home-Images/play-logo.png';
import CrucigramaLogo from '../../../assets/Home-Images/crucigrama-logo.png';
import PuzzleLogo from '../../../assets/Home-Images/rompecabezas-logo.png';
import TriviaLogo from '../../../assets/Home-Images/trivia-logo.png';
import MemoryLogo from '../../../assets/Home-Images/memoria-logo.png';
import SopaLogo from '../../../assets/Home-Images/sopa-logo.png';
import ObjetivoImage1 from '../../../assets/Home-Images/objetivo-image-1.png';
import ObjetivoImage2 from '../../../assets/Home-Images/objetivo-image-2.png';
import { Link } from 'react-router-dom';
import TriviaGrid from '../../components/home-components/TriviaGalery';

const Home = () => {
  return (
    <>
      {/* Seccion del Header */}
      <div className='flex flex-row p-8 bg-white'>
        <picture className='w-1/2'>
          <img src={HeaderImage} alt='' />
        </picture>
        <section className='flex flex-col w-1/2 text-end justify-center items-end py-10 gap-y-12 h-full'>
          <h1 className='text-6xl font-Pangolin'>
            ¿Necesitas mejorar la participación en clase?
          </h1>
          <p className='font-Roboto text-2xl'>
            El aprendizaje interactivo aumenta la participación y motivación del
            alumno, permitiéndole <strong>retener mejor la información</strong>{' '}
            al involucrarse activamente en el proceso de aprendizaje.
          </p>
          <Link to='crear-juego' className='w-full flex justify-center'>
            <button className='bg-white text-RosadoC border-RosadoC border-solid border-2 p-2 rounded-md hover:text-white hover:bg-RosadoC transition duration-500 text-2xl font-Roboto'>
              Crear actividad
            </button>
          </Link>
        </section>
      </div>
      {/*Seccion de Categorias */}
      <section className='mt-8 w-4/5 mx-auto'>
        <div className='bg-white font-Roboto py-5'>
          <h1 className='text-6xl text-center'>Trivia</h1>
          <p className='text-center'>
            Actividades creadas de nuestros usuarios
          </p>
        </div>

        <TriviaGrid></TriviaGrid>
      </section>

      {/* Seccion Como Funciona */}

      <div className='flex justify-center items-center bg-white p-12 drop-shadow max-w-fit mx-auto relative z-10 mb-[-100px] mt-40'>
        <section className='flex flex-col'>
          <h1 className='text-center m-4 font-Roboto text-6xl mb-14 drop-shadow'>
            ¿Como funciona?
          </h1>
          <div className='flex flex-row gap-16'>
            <div className='bg-Gris p-4 flex flex-col gap-2  w-60 border-gray-400  justify-center items-center rounded-2xl text-center shadow-custom'>
              <img src={CreateLogo} alt='' className='w-2/4' />
              <span className='text-RosadoC font-semibold text-2xl'>Crear</span>
              <p className='font-Roboto text-black'>
                A partir de nuestra plantilla cree una actividad interactiva.
              </p>
            </div>

            <div className='bg-Gris p-4 flex flex-col gap-2  w-60 border-gray-400  justify-center items-center  text-center  rounded-2xl shadow-custom'>
              <img src={ShareLogo} alt='' className='w-2/4' />
              <span className='text-RosadoC font-semibold text-2xl'>
                Compartir
              </span>
              <p className='font-Roboto text-black'>
                Comparta con sus alumnos copiando solamente un enlace.
              </p>
            </div>

            <div className='bg-Gris p-2 flex flex-col gap-2  w-60 border-gray-400  justify-center items-center  rounded-2xl text-center shadow-custom'>
              <img src={PlayLogo} alt='' className='w-2/4' />
              <span className='text-RosadoC font-semibold text-2xl'>Jugar</span>
              <p className='font-Roboto text-black'>
                Juega con tus alumnos en clase o en videollamada. <br />
                Todas las actividades están disponibles en ordenador, móvil o
                tableta.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Seccion  */}
      <Link to='Plantillas'>
        <div className='bg-AzulM h-40rem flex flex-col justify-end'>
          <div className='mb-32'>
            <h1 className='text-center text-5xl text-white font-Roboto mb-10 drop-shadow-md'>
              Nuestras plantillas
            </h1>

            <section className='grid grid-cols-5 p-8 gap-8 '>
              <picture className='flex flex-col justify-center items-center gap-4'>
                <img src={CrucigramaLogo} alt='' className=' w-28 ' />
                <p className='text-white text-center'>Crucigrama</p>
              </picture>

              <picture className='flex flex-col justify-center items-center gap-4'>
                <img src={PuzzleLogo} alt='' className=' w-28' />
                <p className='text-white text-center'>Rompecabezas</p>
              </picture>

              <picture className='flex flex-col justify-center items-center gap-4'>
                <img src={TriviaLogo} alt='' className=' w-28' />
                <p className='text-white text-center'>Trivia</p>
              </picture>

              <picture className='flex flex-col justify-center items-center gap-4'>
                <img src={MemoryLogo} alt='' className=' w-28' />
                <p className='text-white text-center'>Juego de la memoria</p>
              </picture>

              <picture className='flex flex-col justify-center items-center gap-4'>
                <img src={SopaLogo} alt='' className=' w-28' />
                <p className='text-white text-center'>Sopa de letras</p>
              </picture>
            </section>
          </div>
        </div>
      </Link>

      {/* Section de Objetivo de la app */}

      <div className=' flex flex-col p-8'>
        <h1 className='text-center text-4xl  text-white font-Roboto mb-10'>
          ¿Porque usar Nombre?
        </h1>

        <section className='flex flex-col w-full font-Roboto'>
          <div className='flex flex-row justify-center items-center '>
            <picture className='w-1/2 '>
              <img src={ObjetivoImage1} alt='' />
            </picture>

            <div className='flex w-2/6 justify-center items-center'>
              <p>
                Los juegos son considerados desde hace mucho tiempo herramientas
                importantes dentro del aprendizaje interactivo. El aprendizaje
                basado en juegos, como estrategia de formación, permite{' '}
                <strong>desarrollar el compromiso y la motivación</strong> en
                los alumnos, dos elementos indispensables para el éxito de
                cualquier programa de educación.
              </p>
            </div>
          </div>

          <div className='flex flex-row justify-center items-center'>
            <div className='flex flex-col w-2/6 justify-center items-center gap-8'>
              <p>
                Los ejercicios y evaluaciones interactivas son elementos que
                refuerza el aprendizaje y que al mismo tiempo permiten a los
                formadores <strong>recoger información</strong> sobre el
                rendimiento de los alumnos.
              </p>
              <button className='bg-RosadoC text-white border-RosadoC border-solid border-2 p-1 rounded-md hover:text-RosadoC hover:bg-white transition duration-500'>
                Crear actividad
              </button>
            </div>
            <picture className='w-1/2'>
              <img src={ObjetivoImage2} alt='' />
            </picture>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
