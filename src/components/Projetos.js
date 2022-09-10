import { Projeto } from './Projeto'
import styles from './Projetos.module.css'
import imgSignup from '../images/screenshot.jpg'

export const Projetos = () => {
    
    return (
        <section id='projetos'>
            <h3 className={styles.titulo_projetos}>Projetos</h3>
            <div className={styles.container_slider}>
                
                <button className={`${styles.handle} ${styles.left_handle}`}>
                    <div className={styles.text}>&#8249;</div>
                </button>
                <div className={styles.projetos_slider}>
                    <img src="http://via.placeholder.com/220/00FF00?text=1" alt='as'/>
                    <img src="http://via.placeholder.com/220/00FF00?text=2" alt='as'/>
                    <img src="http://via.placeholder.com/230/00FF00?text=3" alt='as'/>
                    <img src="http://via.placeholder.com/240/00FF00?text=4" alt='as'/>
                    <img src="http://via.placeholder.com/250/00FF00?text=5" alt='as'/>
                    <img src="http://via.placeholder.com/260/00FF00?text=6" alt='as'/>
                    <img src="http://via.placeholder.com/270/00FF00?text=7" alt='as'/>
                    <img src="http://via.placeholder.com/280/00FF00?text=8" alt='as'/>
                    <img src="http://via.placeholder.com/290/00FF00?text=9" alt='as'/>
                </div>
                <button className={`${styles.handle} ${styles.right_handle}`}>
                    <div className="text">&#8250;</div>
                </button>
            </div>
            
        </section>
    )
}