import React from "react";
import TextField from "material-ui/TextField";
import PropTypes from 'prop-types';
import RaisedButton from "material-ui/RaisedButton";

class Form extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            name: "",
            nameError: "",
            email: "",
            emailError: "",
            message: "",
            messageError: ""
        };

        this.change = this.change.bind(this);
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


  change(e) {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validate() {
    let isError = false;
    const errors = {
      nameError: "",
      emailError: "",
      messageError: ""
    };

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(this.state.email)) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    if (this.state.name.length > 100) {
      isError = true;
      errors.nameError = "Name is too long.";
    }

    if (this.state.message.length > 1000) {
      isError = true;
      errors.messageError = "Message is too long.";
    }

    if (this.state.email.trim().length === 0) {
      isError = true;
      errors.emailError = "Email is required.";
    }

    if (this.state.message.trim().length === 0) {
      isError = true;
      errors.messageError = "Message is required.";
    }

    this.setState(errors);

    return isError;
  }

  onSubmit(e) {
    e.preventDefault();

    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      this.props.saveContacts(this.state);
      // clear form
      this.setState({
          name: "",
          nameError: "",
          email: "",
          emailError: "",
          message: "",
          messageError: ""
      });
    }
  }

  render() {
    return (
      <form>
        <TextField
          name="name"
          hintText="Name"
          floatingLabelText="Name"
          value={this.state.name}
          onChange={e => this.change(e)}
          errorText={this.state.nameError}
        />
        <br />
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
        />
        <br />
        <TextField
          name="message"
          hintText="Message"
          floatingLabelText="Message"
          value={this.state.message}
          onChange={e => this.change(e)}
          errorText={this.state.messageError}
          multiLine={true}
          style={{textAlign: 'left'}}
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}

const { func, shape, string } = PropTypes;

Form.propTypes = {
    saveContacts: func.isRequired,
    contacts: shape({
        name: string,
        email: string,
        message: string
    }).isRequired
};

export default Form;
