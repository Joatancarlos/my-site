import styles from './SobreMim.module.css'
import profileImage from '../images/joatan.jpg'

import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {DiBootstrap} from 'react-icons/di'

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
                             <i><AiFillHtml5/></i>
                        </li>
                        <li className={styles.list_itens}>
                            <i><DiCss3/></i>
                        </li>
                        <li className={styles.list_itens}>
                            <i> <SiJavascript/> </i>
                        </li>
                        <li className={styles.list_itens}>
                            <i> <DiReact/> </i>
                        </li>
                        <li className={styles.list_itens}>
                            <i> <DiBootstrap/></i>
                        </li>
                    </ul>
                </div>
                <div className={styles.text}>
                    <h2>Sobre mim</h2>
                    <p> Me chamo <strong>Joatan</strong>, futuro dev front-end.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto explicabo commodi, at quam accusamus quia illo. Sapiente tempora amet facilis hic aliquam ratione odio placeat fugiat cupiditate, animi corporis expedita?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi omnis quis consequuntur quod, recusandae debitis vel, illo et quisquam, earum ab non excepturi itaque esse deleniti minus atque exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit sit laboriosam quasi voluptatem expedita. Odit voluptate nobis assumenda debitis pariatur labore, ipsa esse saepe accusamus architecto sit alias consectetur?
                    </p>
                </div>
            </div>
        </section>
    )
}
