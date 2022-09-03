import { Projeto } from './Projeto'
import styles from './Projetos.module.css'
import imgSignup from '../images/screenshot.jpg'

export const Projetos = () => {
    return (
        <section className={styles.secao_projetos} id='projetos'>
            <h3>Projetos</h3>
            <div className={styles.projetos}>
                <Projeto src={imgSignup}/>
                <Projeto src={imgSignup}/>
                <Projeto src={imgSignup}/>
                <Projeto src={imgSignup}/>
            </div>
        </section>
    )
}