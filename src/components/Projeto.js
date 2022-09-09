import styles from './Projeto.module.css'


export const Projeto = (props) => {
    function projectDescription() {
        // A ideia aqui é exibir o projeto um pouco maior junto de uma breve descrição e exibir as tecnologias usadas ao estilo da netflix.
        
    }
    return (
        <div onMouseOver={projectDescription} className={styles.projeto}>
            <a href={props.href}><img src={props.src} alt="" /></a>
        </div>
    )
}