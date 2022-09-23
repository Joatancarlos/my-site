
import {Link} from 'react-scroll'
import { MobileNavigation } from './MobileNavigation'
import  "./NavBar.css"
import { NavLinks } from './NavLinks'
/*
Copiar o componente MobileNavigation e Navlinks
<Link 
    className='nav_logo' 
    to="home" 
    spy={true} 
    smooth={true} 
    offset={-150} 
    duration={500}>Jflix
    onClick={() => props.isMobile && props.closeMobileMenu()}
</Link>*/ 

function NavBar () {
    return (
        <header className='navbar'>
            <Link className='nav_logo' to="home" spy={true} smooth={true} offset={-150} duration={500}>Jflix</Link>
            <nav id='navegacao' >
                <NavLinks/>
            </nav>
            <MobileNavigation/>
        </header>
    )
}

export default NavBar