import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './account/LoginPage';
import ProfilePage from './account/ProfilePage';
import HomePage from './home/HomePage';
import Header from './shared/Header';

const App = () => (
  <Router>
    <div className="wrapper">
      <Header />
      <section className="p-3">
        <Route exact path="/"><HomePage /></Route>
        <Route path="/login"><LoginPage /></Route>
        <Route path="/profile"><ProfilePage /></Route>
      </section>
    </div>
  </Router>
);

export default App;
