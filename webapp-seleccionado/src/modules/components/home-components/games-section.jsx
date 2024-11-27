import React, { useState } from 'react';

import CrucigramaLogo from '../../../assets/Home-Images/crucigrama-logo.png'
import PuzzleLogo from '../../../assets/Home-Images/rompecabezas-logo.png'
import TriviaLogo from '../../../assets/Home-Images/trivia-logo.png'
import MemoryLogo from '../../../assets/Home-Images/memoria-logo.png'
import SopaLogo from '../../../assets/Home-Images/sopa-logo.png'

const GameSection = () =>{

    return (
        <div className='bg-blue-600'>
                <h1 className='text-center font-bold text-white'>Nuestras Plantillas</h1>

                <section className='grid grid-rows-5 p-8 gap-8 md:grid-cols-5 md:grid-rows-2  ' >
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
    )
}

export default GameSection
