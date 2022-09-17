
import NavBar from '../components/NavBar.js'
import ApreInicial from '../components/ApreInicial.js'

import { Footer } from '../components/Footer.js'
import { SobreMim } from '../components/SobreMim'
import { Projetos } from '../components/Projetos'
import { Cursos } from '../components/Cursos'

export const Home = () => {
    return(
        <>
            <NavBar/>
            <main>
                <ApreInicial /> 
                <SobreMim />
                <Projetos />
                <Cursos />  
            </main>
            <Footer />
        </>
)
}