import {SAVE_CONTACT, LOAD_CONTACTS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';


export default function contactsReducer(state = initialState.contacts, action) {
  switch (action.type) {
    case SAVE_CONTACT:
      return objectAssign({}, state, {contacts: action.contacts});
    case LOAD_CONTACTS:
      return objectAssign({}, state, {contacts: action.contacts});

    default:
      return state;
  }
}
