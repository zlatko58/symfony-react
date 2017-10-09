import { combineReducers } from 'redux';
import contacts from './contactsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  contacts,
  routing: routerReducer
});

export default rootReducer;
