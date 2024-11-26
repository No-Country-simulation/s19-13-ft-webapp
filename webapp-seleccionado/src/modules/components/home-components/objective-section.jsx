import React, { useState } from 'react';

import ObjetivoImage1 from '../../../assets/Home-Images/objetivo-image-1.png'
import ObjetivoImage2 from '../../../assets/Home-Images/objetivo-image-2.png'


const ObjectiveSection = () => {

    return (
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
    )
}

export default ObjectiveSection