export default props => {
    return (
        <div>
            <span>{props.texto} </span>
            <span>{props.numero} </span>
            <span>{props.bool ? 'Verdade' : 'Falso'}</span>

        </div>
    )
}