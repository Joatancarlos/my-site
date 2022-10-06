import { Projeto } from './Projeto'
import './Projetos.css'
import imgSignup from '../images/signup.jpg'
import imgAndroid from '../images/projeto_android.jpg'
import imgHdAgency from '../images/hdagency.jpg'
import imgemBreve from '../images/embreve2.jpg'

export const Projetos = () => {
    const whatHandle = (event) => {
        let handle
        if (event.target.matches(".handle")) {
        handle = event.target
        } else {
        handle = event.target.closest(".handle")
        }
        if (handle != null) onHandleClick(handle)
    }
    
    const onHandleClick = (handle) => {
        const slider = document.querySelector('.projetos_slider')
        const buttons = document.getElementsByTagName('button')
        const sliderIndex = parseInt(
            getComputedStyle(slider).getPropertyValue("--slider-index") 
          ) 
        const itensPorTela = parseInt(
        getComputedStyle(slider).getPropertyValue("--items-per-screen")
        )
        const imagens = document.querySelectorAll('.link_projetos').length

        const indice = Math.ceil(imagens/itensPorTela)
        
        if (handle.classList[1] === "left_handle") {
            if(sliderIndex === 0 ) {
                buttons[0].style.visibility = 'hidden'
            } else {
                slider.style.setProperty("--slider-index", sliderIndex - 1)
                if (sliderIndex === 1) {
                buttons[0].style.visibility = 'hidden'
                }
            }
        }

        if (handle.classList[1] === "right_handle") {
            if (sliderIndex + 1 >= indice) {
              slider.style.setProperty("--slider-index", 0)
              buttons[0].style.visibility = 'hidden'
            } else {
              slider.style.setProperty("--slider-index", sliderIndex + 1)
              buttons[0].style.visibility = 'visible'
            }
        }
        
    }
    return (
        //ATENÇÃO: NÃO ALTERAR A ORDEM DAS CLASSES DOS BOTÕES, POIS O IF DEPENDE DA POSIÇÃO DELES

        <section onClick={whatHandle} id='projetos'>
            <h3  className='titulo_projetos'>Projetos ok</h3>
            <div className='container_slider'>
                <button className='handle left_handle unvisible'>
                    <div className='flecha'>&#8249;</div>
                </button>
                <div className='projetos_slider'>
                    <Projeto 
                        href={'https://joatancarlos.github.io/hdAgency/'}
                        src={imgHdAgency}
                        alt={'Projeto hdAgency'}
                    />
                    <Projeto 
                        href={'https://joatancarlos.github.io/signup-form/'}
                        src={imgSignup}
                        alt={'Projeto Signup'}
                    />
                    <Projeto 
                        href={'https://joatancarlos.github.io/projeto-android/'}
                        src={imgAndroid}
                        alt={'Projeto Android'}
                    />
                    
                    <Projeto 
                        href={'#'}
                        src={imgemBreve}
                        alt={'Projeto Signup'}
                    />
                    <Projeto 
                        href={'#'}
                        src={imgemBreve}
                        alt={'Projeto Signup'}
                    />
                    <Projeto 
                        href={'#'}
                        src={imgemBreve}
                        alt={'Projeto Signup'}
                    />
                    
                </div>
                <button className='handle right_handle'>
                    <div className="flecha">&#8250;</div>
                </button>
            </div>
            
        </section>
    )
}