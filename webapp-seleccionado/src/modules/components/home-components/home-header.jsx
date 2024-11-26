import React, { useState } from 'react';

import HeaderImage from '../../../assets/Home-Images/header-image.png'

const HomeHeader = () =>{
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
        </>
    )
}

export default HomeHeader;