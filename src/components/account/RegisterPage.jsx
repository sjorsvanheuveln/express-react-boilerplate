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
    console.log('registrationpage', this.props);
    const { isLoggedIn, registrationSucceeded } = this.props;

    if (registrationSucceeded) {
      return (<Redirect to="register-success" />);
    }

    if (isLoggedIn) {
      return (<p>Please log out before registering a new user</p>);
    }

    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4">
            <h1>Register Page</h1>
            <p>This is the register page.</p>
            <hr />

            <Form>
              <FormGroup>
                <Label for="exampleEmail">First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Satoshi"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  placeholder="Nakamoto"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="noreply@schoolofsatoshi.nl"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="yourusername"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  onKeyPress={this.handleKeyPress}
                />
              </FormGroup>
              <Button outline onClick={this.attemptRegister}>Register</Button>
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
