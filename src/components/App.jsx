import { BrowserRouter as Router, Route } from 'react-router-dom';
import TestComponent from './TestComponent';
import ProfilePage from './ProfilePage';
import Header from './Header';

const App = () => (
  <Router>
    <Header />
    <Route exact path="/"><TestComponent text="hi" /></Route>
    <Route path="/profile"> <ProfilePage username="Sjors" /></Route>
  </Router>
);

export default App;
