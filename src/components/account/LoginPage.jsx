import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { unwrapResult } from '@reduxjs/toolkit';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/auth';

// eslint-disable-next-line react/prefer-stateless-function
class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'satoshi',
      password: 'nakamoto',
      status: 'unknown',
      redirect: false,
    };

    this.attemptLogin = this.attemptLogin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      target.preventDefault();
      this.attemptLogin();
    }
  }

  attemptLogin() {
    const { dispatch } = this.props;
    const { username, password } = this.state;
    const userData = { username, password };
    dispatch(login(userData)).then(unwrapResult)
      .then((result) => {
        if (result.firstName) { this.setState({ redirect: true }); }
      });
  }

  render() {
    const { progress } = this.props;
    const { username, password, status, redirect } = this.state;
    const responseColor = status === 'Success' ? 'green' : 'red';

    if (redirect) { return (<Redirect to="/" />); }

    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4">
            <h1>Login Page</h1>
            <p>This is the login page.</p>
            <Form onKeyPress={this.handleKeyPress}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="noreply@schoolofsatoshi.nl"
                  value={username}
                  onChange={this.handleEmailChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password"
                  value={password}
                  onChange={this.handlePasswordChange}
                />
              </FormGroup>
              <Button outline onClick={this.attemptLogin}>Log In</Button>
            </Form>
          </div>
        </div>

        <hr />

        <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4">
            <h3>Login Status</h3>
            <p style={{ color: responseColor }}>{status}</p>
          </div>
        </div>

        <hr />

        <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4">
            <p>Progress: <b>{progress}</b></p>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => (state.progress);
// can I get rid of the whole mappingState things using useState()

export default connect(mapStateToProps)(LoginPage);
