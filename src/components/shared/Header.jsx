import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function handleLogin(isLoggedIn, username, logoutClick) {
  if (isLoggedIn) {
    return (
      <>
        <NavItem><NavLink className="pr-1" tag={Link} to="/profile"><b style={{ color: 'indigo' }}>{username}</b> | </NavLink></NavItem>
        <NavItem><NavLink className="pl-0" tag={Link} to="/" onClick={logoutClick}>Logout</NavLink></NavItem>
      </>
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
            { handleLogin(isLoggedIn, username, logoutClick) }
        </Nav>
      </Collapse>
    </Navbar>
  );
}
