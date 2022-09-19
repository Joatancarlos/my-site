import './SobreMim.css'
import profileImage from '../images/joatan.jpeg'

import {DiHtml5} from 'react-icons/di'
import {DiCss3} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {DiBootstrap} from 'react-icons/di'
import {DiPython} from 'react-icons/di'


//Me chamo <strong>Joatan</strong>, futuro dev front-end.

export const SobreMim = () => {
    return (
        <section id='sobre'>
            <div className="secao_sobre_mim">
                <div className='profile'>
                    <div className='image'>
                        <img src={profileImage} alt="" />
                    </div>
                    <h2 className='name_title'>Joatan Feitosa</h2>
                    <ul className='tech_list'>
                        <li className='list_itens'>
                             <i><DiHtml5/></i>
                        </li>
                        <li className='list_itens'>
                            <i><DiCss3/></i>
                        </li>
                        <li className='list_itens'>
                            <i> <DiJavascript1/> </i>
                        </li>
                        <li className='list_itens'>
                            <i> <DiReact/> </i>
                        </li>
                        <li className='list_itens'>
                            <i> <DiBootstrap/></i>
                        </li>
                        <li className='list_itens'>
                            <i> <DiPython/></i>
                        </li>
                    </ul>
                </div>
                <div className='text'>
                    <h2>Sobre mim</h2>
                    <p> Olá! Atualmente, estou em busca da minha primeira experiência profissional na programação, com foco no Front-End. Meus primeiros contatos com a área foram através de eventos gratuitos que me despertaram a curiosidade para entender o que é um programador. Desde então, decidi estudar por conta própria, esse universo que é a programação, optando, assim, seguir no Front-End. E é por meio deste site que venho mostrar um pouco do meu conhecimento adquirido ao longo do tempo. Divirta-se!
                    </p>
                </div>
            </div>
             
        </section>
    )
}
