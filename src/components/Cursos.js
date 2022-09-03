//import stylesC from './Cursos.module.css'
import { Projeto } from './Projeto'
import stylesP from './Projetos.module.css'

import cvmod1 from '../images/cvmodulo1.webp'
import cvmod2 from '../images/cvmodulo2.jpg'
import cvmod3 from '../images/cvmodulo3.jpg'
import crhdc from '../images/cursoreacthdc.jpg'
//import cbshdc from '../images/cursobshdc.jpg'

export const Cursos = () => {
    return (
        <section className={stylesP.secao_projetos} id='cursos'>
            <h3>Cursos</h3>
            <div className={stylesP.projetos}>
                <Projeto src={cvmod1} />
                <Projeto src={cvmod2}/>
                <Projeto src={cvmod3}/>
                <Projeto src={crhdc}/>
            </div>
        </section>
    )
}