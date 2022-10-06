import './Projeto.css'

export const Projeto = (props) => {
    return (
        <a href={props.href} target={'blank'}>
            <img className='link_projetos' src={props.src} alt={props.alt} />
        </a>
        
    )
}