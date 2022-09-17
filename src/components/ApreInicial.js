import './ApreInicial.css'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import imgProgramadorTop from '../images/programador-top-gray-500.png'

function ApreInicial () {
    return (
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
    )
}

export default ApreInicial