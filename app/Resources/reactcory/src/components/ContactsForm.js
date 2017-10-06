import React from 'react';
import PropTypes from 'prop-types';
import ContactsTextInput from './ContactsTextInput';

class ContactsForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      contacts: {
        name: '',
        email: '',
        message: '',
      }
    }

    this.save = this.save.bind(this);
    this.handleNameInputText = this.handleNameInputText.bind(this);
    this.handleEmailInputText = this.handleEmailInputText.bind(this);
    this.handleMessageInputText = this.handleMessageInputText.bind(this);
  }

  componentWillMount() {
    console.log('props')
    console.log(this.props.contacts)
    if (this.props.contacts) {
      this.setState({ contacts: this.props.contacts });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ contacts: nextProps.contacts });
  }

  save() {
    console.log('from form')
    console.log(this.state.contacts)
    this.props.saveContacts(this.state.contacts);
  }

  handleNameInputText(name, value) {
    const newContact = Object.assign({}, this.state.contacts, {
      name: value,
    });
    this.setState({ contacts: newContact });
    return value;
  }

  handleEmailInputText(name, value) {
    const newContact = Object.assign({}, this.state.contacts, {
      email: value,
    });
    this.setState({ contacts: newContact });
    return value;
  }

  handleMessageInputText(name, value) {
    const newContact = Object.assign({}, this.state.contacts, {
      message: value,
    });
    this.setState({ contacts: newContact });
    return value;
  }

  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><ContactsTextInput name="name" onChange={this.handleNameInputText} value={this.state.contacts.name}/>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="email">Email</label></td>
              <td><ContactsTextInput name="email" onChange={this.handleEmailInputText} value={this.state.contacts.email}/>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="message">Message</label></td>
              <td><ContactsTextInput name="message" onChange={this.handleMessageInputText} value={this.state.contacts.message} />
              </td>
            </tr>
          </tbody>
        </table>

        <hr/>

        <input type="submit" value="Save" onClick={this.save}/>
      </div>
    );
  }
}
const { func, shape, string } = PropTypes;

ContactsForm.propTypes = {
  saveContacts: func.isRequired,
  contacts: shape({
    name: string,
    email: string,
    message: string
  }).isRequired
};

export default ContactsForm;
