import { Projeto } from './Projeto'
import styles from './Projetos.module.css'
import imgSignup from '../images/signup.jpg'
import imgAndroid from '../images/projeto_android.jpg'
import imgHdAgency from '../images/hdagency.jpg'
import imgemBreve from '../images/embreve2.jpg'
export const Projetos = () => {
    
    return (
        <section id='projetos'>
            <h3 className={styles.titulo_projetos}>Projetos</h3>
            <div className={styles.container_slider}>
                
                <button className={`${styles.handle} ${styles.left_handle}`}>
                    <div className={styles.text}>&#8249;</div>
                </button>
                <div className={styles.projetos_slider}>
                    <Projeto 
                        href={'https://joatancarlos.github.io/hdAgency/'}
                        src={imgHdAgency}
                        alt={'Projeto hdAgency'}
                    />
                    <Projeto 
                        href={'https://joatancarlos.github.io/signup-form/'}
                        src={imgSignup}
                        alt={'Projeto Signup'}
                    />
                    <Projeto 
                        href={'https://joatancarlos.github.io/projeto-android/'}
                        src={imgAndroid}
                        alt={'Projeto Android'}
                    />
                    
                    <Projeto 
                        href={'#'}
                        src={imgemBreve}
                        alt={'Projeto Signup'}
                    />
                    <Projeto 
                        href={'#'}
                        src={imgemBreve}
                        alt={'Projeto Signup'}
                    />
                </div>
                <button className={`${styles.handle} ${styles.right_handle}`}>
                    <div className="text">&#8250;</div>
                </button>
            </div>
            
        </section>
    )
}