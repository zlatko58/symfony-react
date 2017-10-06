import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/contactsActions';
import ContactsForm from '../components/ContactsForm';

export const ContactsPage = (props) => {
  return (
    <ContactsForm
      saveContacts={props.actions.saveContacts}
      contacts={props.contacts}
    />
  );
};

ContactsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  contacts: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsPage);
