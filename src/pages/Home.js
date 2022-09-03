import NavBar from '../components/NavBar.js'
import Main from '../components/Main.js'
import styles from './Home.modules.css'
import { Footer } from '../components/Footer.js'

export const Home = () => {
    return(
        <div className={styles.top}>
            <NavBar/>
            <Main />
            <Footer />
        </div>
)
}