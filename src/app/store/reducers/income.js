/**
 * Create a reducer to handle SET_INCOME action.
 */
export default (state = null, action) => {
  switch (action.type) {
    case 'SET_INCOME':
      return action.income;
    default:
      return state;
  }
};
