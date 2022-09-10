import styles from './Projeto.module.css'


export const Projeto = (props) => {
    return (
        <div className={styles.projeto}>
            <a href={props.href} target={'blank'}>
                <img src={props.src} alt="" />
            </a>
        </div>
    )
}