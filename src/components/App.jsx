import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './account/LoginPage';
import ProfilePage from './account/ProfilePage';
import HomePage from './home/HomePage';
import Header from './shared/Header';

export default function App() {
  const { progress } = useSelector((state) => state.progress);
  
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <section className="p-3">
          <Route exact path="/"><HomePage /></Route>
          <Route path="/login"><LoginPage /></Route>
          <Route path="/profile"><ProfilePage /></Route>
        </section>
        <div className="loader-wrapper" style={{ display: progress > 0 ? 'block' : 'none' }}>
          <div className="loader-box">
            <div className="loader">Loading ...</div>
          </div>
        </div>
      </div>
    </Router>
  );
}
