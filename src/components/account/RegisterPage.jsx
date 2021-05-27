import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { register } from '../../redux/auth';

// eslint-disable-next-line react/prefer-stateless-function
class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Satoshi',
      lastName: 'Nakamoto',
      email: 'info@satoshi.com',
      username: 'satoshi',
      password: 'nakamoto',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.attemptRegister = this.attemptRegister.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.currentTarget.id]: e.target.value });
  }

  handleKeyPress(target) {
    if (target.charCode === 13) {
      target.preventDefault();
      this.attemptRegister();
    }
  }

  attemptRegister() {
    const { dispatch } = this.props;
    dispatch(register(this.state));
  }

  render() {
    const { isLoggedIn, registrationSucceeded } = this.props;
    const { firstName, lastName, username, email, password } = this.state;

    if (registrationSucceeded) {
      return (<Redirect to="register-success" />);
    }

    if (isLoggedIn) {
      return (<p>Log eerst uit voordat je een nieuwe user aanmaakt.</p>);
    }

    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4">
            <h1>Register Page</h1>
            <p>This is the register page.</p>
            <hr />

            <Form onKeyPress={this.handleKeyPress}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Satoshi"
                  value={firstName}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Nakamoto"
                  value={lastName}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="noreply@schoolofsatoshi.nl"
                  value={email}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="yourusername"
                  value={username}
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <Button color="primary" outline onClick={this.attemptRegister}>Register</Button>

            </Form>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => (state.auth);
// is this still needed?

export default connect(mapStateToProps)(LoginPage);
