import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';

function handleLogin(isLoggedIn, username, logoutClick) {
  if (isLoggedIn) {
    return (
      <div>
        <NavbarText><b>{username}</b> | <a href="/" onClick={logoutClick}>Logout</a></NavbarText>
      </div>
    );
  }
  return (<NavLink tag={Link} to="/login">Log In</NavLink>);
}

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prevState) => !prevState);
  }

  function logoutClick(e) {
    e.preventDefault();
    const { logUserOut } = props;
    logUserOut();
  }

  const { username, isLoggedIn } = props;

  return (
    <Navbar color="light" expand="md" light style={{ borderBottom: '1px solid #eee', padding: '2px 20px' }}>
      <NavbarBrand tag={Link} to="/">Express-React</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            {handleLogin(isLoggedIn, username, logoutClick)}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
