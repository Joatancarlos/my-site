import styles from './Main.module.css'
import { SobreMim } from './SobreMim'
import { Projetos } from './Projetos'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import { Cursos } from './Cursos'
import imgProgramadorTop from '../images/programador-top-gray-500.png'

function Main () {
    return (
        <main>
            <section className={styles.container_top} id='home'>
                <div className={styles.apre_ini}>
                    <p className={styles.p_nome}>
                        Olá, eu sou <br />
                        <span className={styles.netflix}>Joatan Feitosa.</span> <br />
                        Desenvolvedor Front-End.
                    </p>
                    <div className={styles.botoes}>
                        <a 
                            href="https://www.linkedin.com/in/joatan-carlos-farias-feitosa-54a928220/" 
                            target={'blank'}
                            className={styles.botao_lin}> 
                            <i><BsLinkedin/></i> 
                            LinkedIn
                        </a>
                        <a 
                            href="https://github.com/joatancarlos" 
                            target={'blank'}
                            className={styles.botao_git}> 
                            <i><FaGithubSquare/></i> 
                            Github
                        </a>
                    </div>
                </div>
                <div className={styles.image_top}>
                    <img src={imgProgramadorTop} alt="Ilustração de um programador web desenvolvido pelo site freepik" />
                </div>
            </section>
            <SobreMim />
            <Projetos />
            <Cursos />
            
        </main>
    )
}

export default Main