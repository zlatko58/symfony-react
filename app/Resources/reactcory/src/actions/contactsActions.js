import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
export function saveContacts(contact) {
  console.log('set');
  console.log(contact);
  return function (dispatch) {
    fetch('http://localhost:8001/contact/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        message: contact.message
      })
    })
    .then(
        response => response.json(),
        error => console.log('An error occured.', error),
    );
    return dispatch({
      type: types.SAVE_CONTACTS,
      dateModified: getFormattedDateTime(),
      contact
    });
  };
}
