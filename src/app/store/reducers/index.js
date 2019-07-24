import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import income from './income';
import ni from "./ni"

export const rootReducer = () => combineReducers({
  income,
  ni,
  routing: routerReducer,
});

export default rootReducer();
