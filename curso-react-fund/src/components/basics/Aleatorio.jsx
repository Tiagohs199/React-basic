

export default props => {

    const result = props.min + (Math.random() * (props.max - props.min));
    
    const resul = Math.round(result)
    return (

    
    <strong> { resul } </strong> 

    )
}