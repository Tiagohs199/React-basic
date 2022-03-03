import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFactorial(num) {
    const n = parseInt(num)
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFactorial(n - 1) * n
}

function calcRest(n) {
    if (n % 2 === 0) return true
    else return false
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [factorial, setFactorial] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [divsao, setDivisao] = useState(1)


    useEffect(function () {
        setFactorial(calcFactorial(number))
    }, [number])

    useEffect(function () {
        if (factorial > 100000) {
            document.title = "Eita!!"
        } else {
            document.title = "React app"
        }
    }, [factorial])

    useEffect(function () {
        setDivisao(calcRest(number2))
    }, [number2])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title="Exercicio #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{factorial === -1 ? "Nao existe" : factorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <div>
                    <span className="text">Result: </span>
                    <span className="text red">{divsao === false ? "Impar" : "Par"}</span>
                </div>
                <input type="number" className="input"
                    value={number2}
                    onChange={e => setNumber2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseEffect
