import styles from './Cursos.module.css'
import { Curso } from './Curso'

import cv from '../images/logo-cv.png'
import rs from '../images/logo-rs.png'
import hashtag from '../images/logo-hashtag-100.jpg'
import hdc from '../images/horadecodar.jpg'

// OBS: No texto será inserido o que foi aprendido durante os cursos

export const Cursos = () => {
    return (
        <section id='cursos'>
            <div className={styles.secao_cursos}>
                <h3>Cursos</h3>
                <div className={styles.container_curso}>
                    <Curso 
                        img={cv} 
                        alt={"Logo do canal Curso em Vídeo do professor Gustavo Guanabara"} 
                        title={'Curso em Vídeo'}
                        text={'Através do Curso em Vídeo tive o contato com o HTML5 e CSS3 por meio das mais de 100 aulas divididas em 3 módulos, cerca de 30h de curso e com projetos práticos ao fim de cada um deles.'}
                    />
                    <Curso 
                        img={rs} 
                        alt={"Logo da escola Rocketseat"} 
                        title={'Rocketseat'}
                        text={'Com a Rocketseat me aprofundei mais no conteúdo do Front-end através do Discover, que é um programa prático e gratuito para iniciar no mundo da programação.'}
                    />
                    <Curso 
                        img={hashtag} 
                        alt={"Logo da Hastag Treinamentos"} 
                        title={'Hastag Treinamentos'}
                        text={'O curso Python Impressionador foi meu primeiro contato com uma linguagem de programação na qual pude fazer alguns projetos de automação envolvendo tanto o excel quanto buscar dados na web.'}
                    />
                    <Curso 
                        img={hdc} 
                        alt={"Logo da Hora de Codar"} 
                        title={'Hora de Codar'}
                        text={'Por meio dos cursos disponibilizados pela HDC, eu pude adiquirir os conhecimentos tanto em React.Js e Bootstrap, exemplificados através dos projetos Costs e hDCAgency, respectivamente.'}
                    />
                </div>
            </div>
        </section>
    )
}