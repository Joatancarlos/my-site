import {Link} from 'react-scroll'
import  "./NavBar.css"


function NavBar () {
    return (
        <header>
            <nav id='navegacao' className='navbar'>
                <Link className='nav_logo' to="home" spy={true} smooth={true} offset={-150} duration={500}>Jflix</Link>
                <ul className='nav_list'>
                    <li className='list_itens'><Link to="home" spy={true} smooth={true} offset={-150} duration={500}>Home</Link></li>
                    <li className='list_itens'><Link to="sobre" spy={true} smooth={true} offset={-60} duration={500}>Sobre</Link></li>
                    <li className='list_itens'><Link to="projetos" spy={true} smooth={true} offset={-60} duration={500}>Projetos</Link></li>
                    <li className='list_itens'><Link to="cursos" spy={true} smooth={true} offset={-60} duration={500}>Cursos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar