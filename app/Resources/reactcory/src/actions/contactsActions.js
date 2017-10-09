import * as types from '../constants/actionTypes';

export function saveContact(contact) {
  return function (dispatch) {
    fetch('http://localhost:8000/contact/add', {
      method: 'POST',
      headers: {
       'Accept': 'application/json',
       'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        message: contact.message
      })
    })
    .then(
        (json) => {

          console.log('parsed json');
          console.log('parsed json', json)
        });
    return dispatch({
      type: types.SAVE_CONTACT,
      contact
    });
  };
}

export function loadContacts(contact) {
  console.log(contact);
  return function (dispatch) {
    fetch('http://localhost:8000/contact/getAll')
    .then(
        (json) => {

          console.log('parsed json');
          console.log('parsed json', json)
    });
    return dispatch({
      type: types.LOAD_CONTACTS,
      contact
    });
  };
}
