/* eslint-disable default-case */
const counterReducer = (state = 0, action) => {
    switch(action.type){
        default:
            return state
        case 'INCREMENT':
            return state +1
        case 'DECREMENT':
            return state -1
    }
}
export default counterReducer;