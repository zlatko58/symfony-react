import React from 'react';
import PropTypes from 'prop-types';

const ContactsTextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <input
      className="small"
      type="text"
      placeholder={props.placeholder}
      onChange={handleChange}
      value={props.value}/>
  );
};

const { string, func, number, oneOfType } = PropTypes;

ContactsTextInput.propTypes = {
  name: string.isRequired,
  placeholder: string,
  onChange: func.isRequired,
  value: oneOfType([
    string,
    number
  ])
};

export default ContactsTextInput;
