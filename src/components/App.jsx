import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from './account/LoginPage';
import RegisterPage from './account/RegisterPage';
import ProfilePage from './account/ProfilePage';
import HomePage from './home/HomePage';
import Header from './shared/Header';
import { sessionCheckSuccess, sessionCheckFailure, logoutSuccess } from '../redux/auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.checkSession = this.checkSession.bind(this);
    this.logUserOut = this.logout.bind(this);
  }

  componentDidMount() {
    this.checkSession();
  }

  async checkSession() {
    const { sessionCheckSuccessAction, sessionCheckFailureAction } = this.props;

    await fetch(
      'api/authentication/checksession',
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    ).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return null;
    }).then((json) => {
      if (json.username) {
        sessionCheckSuccessAction(json);
      } else {
        sessionCheckFailureAction();
      }
    }).catch((err) => {
      sessionCheckFailureAction(err);
    });
  }

  async logout() {
    const { logoutSuccessAction } = this.props;
    await fetch(
      'api/authentication/logout',
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    ).then((res) => {
      if (res.status === 200) {
        return logoutSuccessAction();
      }
      return null;
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { progress, auth } = this.props;
    const { isLoggedIn, username } = auth;

    return (
      <Router>
        <div className="wrapper">
          <Header isLoggedIn={isLoggedIn} username={username} logUserOut={this.logUserOut} />
          <section className="p-3">
            <Route exact path="/"><HomePage /></Route>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/register"><RegisterPage /></Route>
            <Route path="/profile"><ProfilePage /></Route>
          </section>
          <div className="loader-wrapper" style={{ display: progress.progress > 0 ? 'block' : 'none' }}>
            <div className="loader-box">
              <div className="loader">Loading ...</div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({ progress: state.progress, auth: state.auth });
const mapDispatchToProps = {
  sessionCheckSuccessAction: sessionCheckSuccess,
  sessionCheckFailureAction: sessionCheckFailure,
  logoutSuccessAction: logoutSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
