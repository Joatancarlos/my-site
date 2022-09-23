import {Link} from 'react-scroll'
import {motion} from 'framer-motion'

export const NavLinks = () => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (
        <ul className='nav_list'>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.05}}
                className='list_itens'>
                <Link to="home" spy={true} smooth={true} offset={-150} duration={500}>Home</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.10}}
                className='list_itens'>
                <Link to="sobre" spy={true} smooth={true} offset={-60} duration={500}>Sobre</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.20}}
                className='list_itens'>
                <Link to="projetos" spy={true} smooth={true} offset={-60} duration={500}>Projetos</Link>
            </motion.li>
            <motion.li 
                initial={animateFrom}
                animate={animateTo}
                transition={{delay: 0.30}}
                className='list_itens'>
                <Link to="cursos" spy={true} smooth={true} offset={-60} duration={500}>Cursos</Link>
            </motion.li>
        </ul>
    )
}