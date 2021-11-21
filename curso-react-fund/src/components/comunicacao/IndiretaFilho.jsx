


export default props => {

    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar("Jão", 45, true)}>
                Fornecer Informações
            </button>
        </div>
    )
}