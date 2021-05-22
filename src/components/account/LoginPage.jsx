import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { on, off } from '../../redux/progress';

// eslint-disable-next-line react/prefer-stateless-function
class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'drFreeze',
      password: '21million',
      status: 'unknown',
    };

    this.attemptLogin = this.attemptLogin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  async attemptLogin() {
    const { username, password } = this.state;
    const userData = { username, password };
    const { on: progressOn, off: progressOff } = this.props;

    progressOn();
    const loginResponse = await fetch(
      'api/authentication/login',
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      },
    );

    console.log('attempt', loginResponse);
    this.setState({ status: loginResponse.status === 200 ? 'Success' : 'Failed' });
    progressOff();
  }

  render() {
    const { progress } = this.props;
    const { username, password, status } = this.state;
    const responseColor = status === 'Success' ? 'green' : 'red';

    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4">
            <h1>Login Page</h1>
            <p>This is the login page, {username}.</p>
            <Form>
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
const mapDispatchToProps = { on, off };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
