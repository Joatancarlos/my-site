import {Link} from 'react-scroll'
import styles from "./NavBar.module.css"


function NavBar () {
    return (
        <header>
            <nav id='navegacao' className={styles.navbar}>
                <Link className={styles.nav_logo} to="home" spy={true} smooth={true} offset={-150} duration={500}>Jflix</Link>
                <ul className={styles.nav_list}>
                    <li className={styles.list_itens}><Link to="home" spy={true} smooth={true} offset={-150} duration={500}>Home</Link></li>
                    <li className={styles.list_itens}><Link to="sobre" spy={true} smooth={true} offset={-60} duration={500}>Sobre</Link></li>
                    <li className={styles.list_itens}><Link to="projetos" spy={true} smooth={true} offset={-60} duration={500}>Projetos</Link></li>
                    <li className={styles.list_itens}><Link to="cursos" spy={true} smooth={true} offset={-60} duration={500}>Cursos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar