import './Main.css'
import { SobreMim } from './SobreMim'
import { Projetos } from './Projetos'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import { Cursos } from './Cursos'
import imgProgramadorTop from '../images/programador-top-gray-500.png'

function Main () {
    return (
        <main>
            <section className="container_top" id='home'>
                <div className="apre_ini">
                    <div className="p_nome">
                        <p>
                            Olá, eu sou <br />
                            <span className="netflix">Joatan Feitosa.</span> <br />
                            Desenvolvedor Front-End.
                        </p>
                    </div>
                    <div className="botoes">
                        <a 
                            href="https://www.linkedin.com/in/joatan-carlos-farias-feitosa-54a928220/" 
                            target={'blank'}
                            className="botao_lin"> 
                            <i><BsLinkedin/></i> 
                            LinkedIn
                        </a>
                        <a 
                            href="https://github.com/joatancarlos" 
                            target={'blank'}
                            className="botao_git"> 
                            <i><FaGithubSquare/></i> 
                            Github
                        </a>
                    </div>
                </div>
                <div className="image_top">
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