import './Projeto.css'

export const Projeto = (props) => {
    return (
        <a className='link_projetos' href={props.href} target={'blank'}>
            <img src={props.src} alt={props.alt} />
        </a>
        
    )
}