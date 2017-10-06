import { SAVE_CONTACTS } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function contactsReducer(state = initialState.contacts, action) {
  let newState;

  switch (action.type) {
    case SAVE_CONTACTS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {dateModified: action.dateModified});
    default:
      return state;
  }
}
