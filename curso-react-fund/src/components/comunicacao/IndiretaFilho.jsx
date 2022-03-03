


export default props => {
    const min = 50
    const max = 70
    const gerarIdade =() => parseInt(Math.random() * (max -min))

    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar("Jão", gerarIdade, true)}>
                Fornecer Informações
            </button>
        </div>
    )
}