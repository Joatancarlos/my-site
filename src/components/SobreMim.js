import styles from './SobreMim.module.css'
import profileImage from '../images/joatan.jpg'

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
            <div className={styles.secao_sobre_mim}>
                <div className={styles.profile}>
                    <div className={styles.image}>
                        <img src={profileImage} alt="" />
                    </div>
                    <h2 className={styles.name_title}>Joatan Feitosa</h2>
                    <ul className={styles.tech_list}>
                        <li className={styles.list_itens}>
                             <i><DiHtml5/></i>
                        </li>
                        <li className={styles.list_itens}>
                            <i><DiCss3/></i>
                        </li>
                        <li className={styles.list_itens}>
                            <i> <DiJavascript1/> </i>
                        </li>
                        <li className={styles.list_itens}>
                            <i> <DiReact/> </i>
                        </li>
                        <li className={styles.list_itens}>
                            <i> <DiBootstrap/></i>
                        </li>
                        <li className={styles.list_itens}>
                            <i> <DiPython/></i>
                        </li>
                    </ul>
                </div>
                <div className={styles.text}>
                    <h2>Sobre mim</h2>
                    <p> Olá! Atualmente estou em busca da minha primeira experiência profissional na programação com foco no  Front-End. Meus primeiros contatos com a programação foram através de eventos gratuitos os quais me despertaram a curiosidade para entender o que era um programador. Desde então, decidi estudar por conta própia através de cursos gratuitos esse universo que é a programação, decidindo, assim, seguir no Front-end. E é por meio deste site que venho lhe mostrar um pouco do conhecimento que foi acumulado ao longo do tempo. Divirta-se!!!
                    </p>
                </div>
            </div>
             
        </section>
    )
}
