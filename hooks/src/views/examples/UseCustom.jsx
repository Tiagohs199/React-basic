import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {

const [count, inc, dec] = useCounter(10)
const url = 'http://localhost:8080/switch'
const response = useFetch(url)

function showState(states) {
    return states.map(state => <li className='text2' key={state.name}>{state.id}={state.name}-{state.modelo}</li>)
}

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"/>

            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => inc(1)}>+1</button>
                    <button className="btn" onClick={() => dec(1)}>-1</button>
                </div>
            </div>    
            <SectionTitle title="Exercicio #02"/>
            <div className="center">

                <ul>
                    {response.data ? showState(response.data): false }
                </ul>




            </div>
        </div>
    )
}

export default UseRef
