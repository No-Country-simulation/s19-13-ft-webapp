import React, { useState } from 'react';

import HeaderImage from '../../../assets/Home-Images/header-image.png'

const HomeHeader = () =>{
    return (
        <>
                {/* Seccion del Header */}
            <div className='flex flex-col items-center justify-center md:flex-row p-8'>
                <picture className=' md:w-2/3 md:h-full'>
                    <img src={HeaderImage} alt=""  />
                </picture>
                <section className='flex flex-col w-1/2 text-center justify-center items-center py-10 gap-y-12 h-full'>
                    <h1 className='text-4xl  font-pangolin'>¿Necesitas mejorar la participación en clase?</h1>
                    <p>El aprendizaje interactivo aumenta la participación y motivación del alumno, permitiendole <strong>retener mejor la información</strong> al involucrarse activamente en el proceso de aprendizaje.</p>
                    <button className='bg-white text-purpleAccent border-purpleAccent border-solid border-2 p-1 rounded-md hover:text-white hover:bg-purpleAccent transition duration-500'>Crear actividad</button>
                </section>
            </div>
        </>
    )
}

export default HomeHeader;
