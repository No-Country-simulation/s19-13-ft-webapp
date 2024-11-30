import React, { useState } from 'react';

import CreateLogo from '../../../assets/Home-Images/creation-logo.png'
import ShareLogo from '.../../../assets/Home-Images/share-logo.png'
import PlayLogo from '../../../assets/Home-Images/play-logo.png'


const HowItWorksSection = () => {
    return (
    <>
        <div className='flex justify-center items-center bg-primaryCyan w-full p-12'>
                <section className='bg-white flex flex-col p-12 rounded-md'>
                    <h1 className='self-center text-center mb-4 font-bold text-4xl'>¿Como Funciona?</h1>
                    <div className='flex flex-col md:flex-row gap-16'>
                        <div className='bg-gray-200 p-4 flex flex-col gap-2  w-60 border-gray-400 shadow-md  justify-center items-center rounded text-center'>
                            <img src={CreateLogo} alt="" className='w-2/4' />
                            <span className='text-purpleAccent font-semibold text-lg'>Crear</span>
                            <p>A partir de nuestra plantilla cree una actividad interactiva.</p>
                        </div>
                        
                        <div className='bg-gray-200 p-4 flex flex-col gap-2  w-60 border-gray-400 shadow-md   justify-center items-center rounded text-center'>
                            <img src={ShareLogo} alt=""  className='w-2/4'/>
                            <span className='text-purpleAccent font-semibold text-lg'>Compartir</span>
                            <p>Comparta con sus alumnos copiando solamente un enlace.</p>
                        </div>

                        <div className='bg-gray-200 p-2 flex flex-col gap-2  w-60 border-gray-400 shadow-md   justify-center items-center rounded text-center'>
                            <img src={PlayLogo} alt="" className='w-2/4' />
                            <span className='text-purpleAccent font-semibold text-lg'>Jugar</span>
                            <p>Juega con tus alumnos en clase o en videollamada. <br />
                            Todas las actividades están disponibles en ordenador, móvil o tableta.</p>
                        </div>
                    </div>
                </section>
            </div>
    </>
    )
}

export default HowItWorksSection
