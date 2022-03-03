import { reducer } from '../reducer/index'
import { numberAdd2 } from './action/number'

const initialState = {
    other: '...',
    user: null,
    number: 0,
    number2: 1
}

export  {
    reducer,
    initialState
}