import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './account/LoginPage';
import HomePage from './home/HomePage';
import Header from './shared/Header';

const App = () => (
  <Router>
    <Header />
    <section className="p-3">
      <Route exact path="/"><HomePage /></Route>
      <Route path="/account/login"><LoginPage username="Sjors" /></Route>
    </section>
  </Router>
);

export default App;
