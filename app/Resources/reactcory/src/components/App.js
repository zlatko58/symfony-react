/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/contactsActions';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import '../styles/App.css';

import Form from "./Form";
import Table from "./Table";
injectTapEventPlugin();


class App extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: []
        };
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Form
                        saveContacts={this.props.actions.saveContact}
                        onSubmit={submission =>
                          this.setState({
                            data: [...this.state.data, submission]
                          })}
                    />
                    <br />
                    <br />
                    <Table
                        data={this.state.data}
                        header={[
                          {
                            name: "Name",
                            prop: "name"
                          },
                          {
                             name: "Email",
                             prop: "email"
                          },
                          {
                            name: "Message",
                            prop: "message"
                          }
                        ]}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

App.propTypes = {
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
)(App);
