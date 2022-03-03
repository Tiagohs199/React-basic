

export  function reducer(state, action){
    switch(action.type){
        case 'numberAdd2': return {...state, number: state.number +2}
        case 'login': return {...state, user: { name: action.name}}
        case 'mult' : return {...state, number2: state.number2 * 7}
        case 'div' : return {...state, number2: state.number2 / 25}
        case 'parseInt' : return {...state, number2: parseInt(state.number2)}
        default: return state
    }
}