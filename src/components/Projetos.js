import { Projeto } from './Projeto'
import styles from './Projetos.module.css'
import imgSignup from '../images/screenshot.jpg'

export const Projetos = () => {
    return (
        <section id='projetos'>
            <div className={styles.secao_projetos}>
                <h3>Projetos</h3>
                <div className={styles.projetos}>
                    <Projeto src={imgSignup}/>
                    <Projeto src={imgSignup}/>
                    <Projeto src={imgSignup}/>
                    <Projeto src={imgSignup}/>
                </div>
            </div>
        </section>
    )
}