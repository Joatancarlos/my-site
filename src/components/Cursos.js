import styles from './Cursos.module.css'
import { Curso } from './Curso'

import cv from '../images/logo-cv.png'
import rs from '../images/logo-rs.png'
import hashtag from '../images/logo-hashtag-100.jpg'



export const Cursos = () => {
    return (
        <section id='cursos'>
            <div className={styles.secao_cursos}>
                <h3>Cursos</h3>
                <div className={styles.container_curso}>
                    <Curso 
                        img={cv} 
                        alt={"Logo do canal Curso em vídeo do professor Gustavo Guanabara"} 
                        title={'Curso em Vídeo'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, pariatur! Vero, hic aspernatur ipsam laborum consequatur debitis at, optio adipisci corrupti nemo inventore blanditiis suscipit repellat temporibus dolore vel animi?'}
                    />
                    <Curso 
                        img={rs} 
                        alt={"Logo da escola Rocketseat"} 
                        title={'Rocketseat'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, pariatur! Vero, hic aspernatur ipsam laborum consequatur debitis at, optio adipisci corrupti nemo inventore blanditiis suscipit repellat temporibus dolore vel animi?'}
                    />
                    <Curso 
                        img={hashtag} 
                        alt={"Logo da Hastag Treinamentos"} 
                        title={'Hastag Treinamentos'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, pariatur! Vero, hic aspernatur ipsam laborum consequatur debitis at, optio adipisci corrupti nemo inventore blanditiis suscipit repellat temporibus dolore vel animi?'}
                    />
                </div>
            </div>
        </section>
    )
}