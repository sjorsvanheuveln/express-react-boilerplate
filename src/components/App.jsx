import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from './account/LoginPage';
import RegisterPage from './account/RegisterPage';
import ProfilePage from './account/ProfilePage';
import HomePage from './home/HomePage';
import Header from './shared/Header';
import { checkSession, logout } from '../redux/auth';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.attemptLogout = this.attemptLogout.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(checkSession());
  }

  attemptLogout() {
    const { dispatch } = this.props;
    dispatch(logout());
  }

  render() {
    const { progress, auth } = this.props;
    const { isLoggedIn, username } = auth;

    return (
      <Router>
        <div className="wrapper">
          <Header isLoggedIn={isLoggedIn} username={username} logUserOut={this.attemptLogout} />
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

export default connect(mapStateToProps)(App);
