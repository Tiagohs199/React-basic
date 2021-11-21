import IndiretaFilho from "./IndiretaFilho"

let nome = '?'
let idade = 0
let nerd = false

function fornecerInfo(nomeP, idadeP, nerdP) {
    nome = nomeP
    idade = idadeP
    nerd = nerdP

    console.log(nomeP,idadeP,nerdP)
}
export default props => {
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInfo}></IndiretaFilho>
        </div>
    )
}