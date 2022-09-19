import { Projeto } from './Projeto'
import './Projetos.css'
import imgSignup from '../images/signup.jpg'
import imgAndroid from '../images/projeto_android.jpg'
import imgHdAgency from '../images/hdagency.jpg'
import imgemBreve from '../images/embreve2.jpg'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'
export const Projetos = () => {
    

    return (
        <section id='projetos'>
            <h3 className='titulo_projetos'>Projetos</h3>
            <div className='container_slider'>
                
                <button className='handle left_handle unvisible'>
                    <div className='text'>&#8249;</div>
                </button>
                <div className='projetos_slider'>
                    <Projeto 
                        href={'https://joatancarlos.github.io/hdAgency/'}
                        src={imgHdAgency}
                        alt={'Projeto hdAgency'}
                    />
                    <Projeto 
                        href={'https://joatancarlos.github.io/signup-form/'}
                        src={imgSignup}
                        alt={'Projeto Signup'}
                    />
                    <Projeto 
                        href={'https://joatancarlos.github.io/projeto-android/'}
                        src={imgAndroid}
                        alt={'Projeto Android'}
                    />
                    
                    <Projeto 
                        href={'#'}
                        src={imgemBreve}
                        alt={'Projeto Signup'}
                    />
                    
                </div>
                <button  className='handle right_handle unvisible'>
                    <div className="text">&#8250;</div>
                </button>
            </div>
            
        </section>
    )
}