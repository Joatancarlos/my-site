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
                        text={'Através do Curso em Vídeo, tive contato com o HTML5 e CSS3. Foram 30 horas distribuídas em 3 módulos somando mais de 100 aulas, incluindo projetos práticos ao final de cada um deles.'}
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
                        text={'No curso Python Impressionador, foi onde tive meu primeiro contato com uma linguagem de programação. Nele pude fazer alguns projetos de automação envolvendo tanto Excel quanto a busca de dados na Web.'}
                    />
                    <Curso 
                        img={hdc} 
                        alt={"Logo da Hora de Codar"} 
                        title={'Hora de Codar'}
                        text={'Mediante cursos disponibilizados pela HDC, eu pude adquirir conhecimentos de React.Js e de Bootstrap, exemplificados pelos projetos Costs e hDCAgency, respectivamente.'}
                    />
                </div>
            </div>
        </section>
    )
}