import styles from './Footer.module.css'

export const Footer = ()=> {
    return (
        <footer className={styles.footer}>
            <p>Desenvolvido por <a href="w">Joatan Feitosa</a> &copy; | Ilustração do programador <a href="https://storyset.com/technology">Technology illustrations by Storyset</a></p>
        </footer>
    )
}