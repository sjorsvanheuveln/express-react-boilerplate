import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" style={{ marginRight: '40px' }}><Link to="/">Expasdfasdfress-React</Link></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link no-link"><Link to="/test">Home</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link no-link"><Link to="/profile">Profile</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link"><Link to="/pricing">Pricing</Link></a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
