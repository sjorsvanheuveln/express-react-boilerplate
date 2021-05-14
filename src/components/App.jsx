import { BrowserRouter as Router, Route } from 'react-router-dom';
import TestComponent from './TestComponent';
import ProfilePage from './ProfilePage';
import Navbar from './Navbar';
// import Header from './Header';

const App = () => (
  <Router>
    <Navbar />
    {/*<Header />*/}
    <div style={{ paddingTop: '10px' }}>
      <Route exact path="/"><TestComponent text="test the reactness" /></Route>
      <Route path="/profile"><ProfilePage username="Sjors" /></Route>
    </div>
  </Router>
);

export default App;
