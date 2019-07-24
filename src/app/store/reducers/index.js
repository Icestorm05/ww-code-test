import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import income from './income';
import ni from './ni';

export default combineReducers({
  income,
  ni,
  routing: routerReducer
});
