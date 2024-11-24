import React, { useState } from 'react';

import HeaderImage from '../../../assets/Home-Images/header-image.png'

import CreateLogo from '../../../assets/Home-Images/creation-logo.png'
import ShareLogo from '.../../../assets/Home-Images/share-logo.png'
import PlayLogo from '../../../assets/Home-Images/play-logo.png'

import CrucigramaLogo from '../../../assets/Home-Images/crucigrama-logo.png'
import PuzzleLogo from '../../../assets/Home-Images/rompecabezas-logo.png'
import TriviaLogo from '../../../assets/Home-Images/trivia-logo.png'
import MemoryLogo from '../../../assets/Home-Images/memoria-logo.png'
import SopaLogo from '../../../assets/Home-Images/sopa-logo.png'

import ObjetivoImage1 from '../../../assets/Home-Images/objetivo-image-1.png'
import ObjetivoImage2 from '../../../assets/Home-Images/objetivo-image-2.png'

const Home = () => {



return (
        <>
                {/* Seccion del Header */}
            <div className='flex flex-row p-8'>
                <picture className=' w-1/2 h-full'>
                    <img src={HeaderImage} alt="" />
                </picture>
                <section className='flex flex-col w1/2 text-center justify-center items-center py-10 gap-y-12 h-full'>
                    <h1 className='text-4xl font-bold'>¿Necesitas mejorar la participación en clase?</h1>
                    <p>El aprendizaje interactivo aumenta la participación y motivación del alumno, permitiendole <strong>retener mejor la información</strong> al involucrarse activamente en el proceso de aprendizaje.</p>
                    <button className='bg-white text-pink-500 border-pink-500 border-solid border-2 p-1 rounded-md hover:text-white hover:bg-pink-500 transition duration-500'>Crear actividad</button>
                </section>
            </div>

                {/* Seccion Como Funciona */}

            <div className='flex justify-center items-center bg-white w-full p-12'>
                <section className='flex flex-col'>
                    <h1 className='text-center m-4 font-bold text-4xl'>¿Como Funciona?</h1>
                    <div className='flex flex-row gap-16'>
                        <div className='bg-gray-200 p-4 flex flex-col gap-2  w-60 border-gray-400  justify-center items-center rounded text-center'>
                            <img src={CreateLogo} alt="" className='w-2/4' />
                            <span className='text-violet-600 font-semibold text-lg'>Crear</span>
                            <p>A partir de nuestra plantilla cree una actividad interactiva.</p>
                        </div>
                        
                        <div className='bg-gray-200 p-4 flex flex-col gap-2  w-60 border-gray-400  justify-center items-center rounded text-center'>
                            <img src={ShareLogo} alt=""  className='w-2/4'/>
                            <span className='text-violet-600 font-semibold text-lg'>Compartir</span>
                            <p>Comparta con sus alumnos copiando solamente un enlace.</p>
                        </div>

                        <div className='bg-gray-200 p-2 flex flex-col gap-2  w-60 border-gray-400  justify-center items-center rounded text-center'>
                            <img src={PlayLogo} alt="" className='w-2/4' />
                            <span className='text-violet-600 font-semibold text-lg'>Jugar</span>
                            <p>Juega con tus alumnos en clase o en videollamada. <br />
                            Todas las actividades están disponibles en ordenador, móvil o tableta.</p>
                        </div>
                    </div>
                </section>
            </div>

                {/* Seccion  */}

            <div className='bg-blue-600'>
                <h1 className='text-center font-bold text-white'>Nuestras Plantillas</h1>

                <section className='grid grid-cols-5 p-8 gap-8 ' >
                    <picture className='flex flex-col justify-center items-center gap-4'>
                        <img src={CrucigramaLogo} alt=""  className=' w-24 h-24'/>
                        <p className='text-white text-center'>Crucigrama</p>
                    </picture>

                    <picture className='flex flex-col justify-center items-center gap-4'>
                        <img src={PuzzleLogo} alt="" className=' w-24 h-24' />
                        <p className='text-white text-center'>Rompecabezas</p>
                    </picture>

                    <picture className='flex flex-col justify-center items-center gap-4'>
                        <img src={TriviaLogo} alt="" className=' w-24 h-24' />
                        <p className='text-white text-center'>Trivia</p>
                    </picture>

                    <picture className='flex flex-col justify-center items-center gap-4'>
                        <img src={MemoryLogo} alt="" className=' w-24 h-24' />
                        <p className='text-white text-center'>Juego de la memoria</p>
                    </picture>

                    <picture className='flex flex-col justify-center items-center gap-4'>
                        <img src={SopaLogo} alt="" className=' w-24 h-24' />
                        <p className='text-white text-center'>Sopa de letras</p>
                    </picture>

                </section>
            </div>

                    {/* Section de Objetivo de la app */}

            <div className='bg-blue-300 flex flex-col p-8'>
                <h1 className='text-center text-3xl font-bold text-white'>¿Porque usar Nombre?</h1>

                <section className='flex flex-col w-full'>

                    <div className='flex flex-row justify-center items-center '>
                        <picture className='w-1/2 '>
                            <img src={ObjetivoImage1} alt="" />
                        </picture>

                        <div className='flex w-2/6 justify-center items-center'>
                            <p>Los juegos son considerados desde hace mucho tiempo herramientas importantes dentro del aprendizaje interactivo. El aprendizaje basado en juegos, como estrategia de formación, permite <strong>desarrollar el compromiso y la motivación</strong> en los alumnos, dos elementos indispensables para el éxito de cualquier programa de educación.</p>
                        </div>
                    </div>

                    <div className='flex flex-row justify-center items-center'>
                        <div className='flex flex-col w-2/6 justify-center items-center gap-8'>
                            <p>Los ejercicios y evaluaciones interactivas son elementos que refuerza el aprendizaje y que al mismo tiempo permiten a los formadores <strong>recoger información</strong> sobre el rendimiento de los alumnos.</p>
                            <button className='bg-pink-500 text-white border-pink-500 border-solid border-2 p-1 rounded-md hover:text-pink-500 hover:bg-white transition duration-500'>Crear actividad</button>
                        </div>
                        <picture className='w-1/2'>
                            <img src={ObjetivoImage2} alt="" />
                        </picture>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;
