import { useState } from "react"
import Mega from "./Mega.css";

export default props => {

    function gerarNumeros(qtde) {

        const numeros = Array(qtde).fill(0)
            .reduce((acc) => {
                const novoNumero = geraAleatorio(1, 60, acc)
                return [...acc, novoNumero]
            }, [])
            .sort((n1,n2) => n1 -n2)
            return numeros
    }

    function geraAleatorio(min, max, array) {

        const aleatorio = parseInt(Math.random() * (max - min)) + min
        return array.includes(aleatorio) ?
            geraAleatorio(min, max, array) :
            aleatorio
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const [numeros, setNumeros] = useState(gerarNumeros(qtde))
    
    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de numeros</label>
                <input
                min="6"
                max="17"
                type="number" value={qtde}
                onChange={e => {
                    setQtde(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                }}></input>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar numeros</button>
        </div>
    )
}