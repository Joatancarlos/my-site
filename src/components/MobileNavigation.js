import './NavBar.css'
import {CgMenu} from 'react-icons/cg'
import {CgClose} from 'react-icons/cg'
import { useState } from 'react'
import {NavLinks} from './NavLinks'
export const MobileNavigation = () => {
    const [open, setOpen] = useState(false)
    
    const hamburgerIcon = <CgMenu className='Hamburguer' size='40px' onClick={() => setOpen(!open)} />
    const closeIcon = <CgClose className='Hamburguer' size='40px' onClick={() => setOpen(!open)} />
    return(
        <nav className='MobileNavigation'>
             {open ? closeIcon : hamburgerIcon}
             {open && <NavLinks />}
        </nav>
    )
}