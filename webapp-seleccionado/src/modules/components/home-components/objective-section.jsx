import React, { useState } from 'react';

import ObjetivoImage1 from '../../../assets/Home-Images/objetivo-image-1.png'
import ObjetivoImage2 from '../../../assets/Home-Images/objetivo-image-2.png'


const ObjectiveSection = () => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className='w-full fill-primaryCyan bg-secondaryBlue' viewBox="0 0 1440 320 ">
                    <path   d="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
            <div className='bg-primaryCyan flex flex-col p-8'>
                <h1 className='text-center text-3xl font-bold text-white'>¿Porque usar Nombre?</h1>

                <section className='flex flex-col w-full'>

                    <div className='flex flex-col justify-center items-center md:flex-row '>
                        <picture className='w-full md:w-1/2 '>
                            <img src={ObjetivoImage1} alt="" />
                        </picture>

                        <div className='flex flex-col w-full justify-center text-center gap-8 md:w-2/6'>
                            <p>Los juegos son considerados desde hace mucho tiempo herramientas importantes dentro del aprendizaje interactivo. El aprendizaje basado en juegos, como estrategia de formación, permite <strong>desarrollar el compromiso y la motivación</strong> en los alumnos, dos elementos indispensables para el éxito de cualquier programa de educación.</p>
                        </div>
                    </div>

                    <div className='flex flex-col-reverse justify-center items-center md:flex-row'>
                        <div className='flex flex-col w-full justify-center items-center text-center gap-8 md:w-2/6'>
                            <p className='w-full'>Los ejercicios y evaluaciones interactivas son elementos que refuerza el aprendizaje y que al mismo tiempo permiten a los formadores <strong>recoger información</strong> sobre el rendimiento de los alumnos.</p>
                            <button className='bg-purpleAccent text-white border-purpleAccent border-solid border-2 p-1 rounded-md hover:text-purpleAccent hover:bg-white transition duration-500 md:w-1/2'>Crear actividad</button>
                        </div>
                        <picture className='w-full md:w-1/2'>
                            <img src={ObjetivoImage2} alt="" />
                        </picture>
                    </div>
                </section>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-full fill-primaryCyan bg-white' viewBox="0 0 1440 320">
                <path  d="M0,160L60,176C120,192,240,224,360,208C480,192,600,128,720,133.3C840,139,960,213,1080,240C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
    )
}

export default ObjectiveSection
