import './Cursos.css'

export const Curso = (props) => {
    return (
        <div className='curso'>
            <img src={props.img} alt={props.alt} />
            <h4>{props.title}</h4>
            <p>{props.text}</p>
         </div>
    )
}