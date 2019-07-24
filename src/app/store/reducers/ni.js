/**
 * Create a reducer to handle CALC_NI, SET_NI and SET_ERR actions.
 */
export default (state = { loading: false, value: { prev: 0.00, curr: 0.00 }, err: false }, action) => {
    switch (action.type) {
        case 'CALC_NI':
            return { ...state, err: false, loading: true };
        case 'SET_NI':
            return { ...state, err: false, value: action.ni, loading: false };
        case 'SET_ERR':
            return { ...state, err: action.err, loading: false };
        default:
            return state
    }
}
