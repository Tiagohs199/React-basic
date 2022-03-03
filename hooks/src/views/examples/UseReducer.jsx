import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import {initialState, reducer } from  '../../store/index'
import { numberAdd2, login } from '../../store/action'



const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"/>
            <SectionTitle title="Exercicio #01" />
                <div className="center">
                    {state.user ?
                        <span className="text">{state.user.name}</span>
                        : <span className="text">Sem usuario</span>
                    }
                    <span className="text">{state.number}</span>
                    <div>
                        <button className="btn"
                        onClick={() => login(dispatch, 'Tiago')}>Login</button>

                        <button className="btn"
                        onClick={() => numberAdd2(dispatch)}>+2</button>
                    </div>
                </div>
            <SectionTitle title="Exercicio #02" />
                    <div className="center">
                        <span className="text">{state.number2}</span>
                        <div>
                            <button className="btn" 
                            onClick={() => dispatch({type: 'mult'})}>*7</button>
                            <button className="btn"
                            onClick={() => dispatch({type: 'div'})}>/25</button>
                             <button className="btn"
                            onClick={() => dispatch({type: 'parseInt'})}>int</button>
                        </div>
                    </div>
        </div>
    )
}

export default UseReducer
