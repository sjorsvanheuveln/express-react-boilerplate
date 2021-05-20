import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <Navbar color="light" expand="md" light style={{ borderBottom: '1px solid #eee', padding: '2px 20px' }}>
      <NavbarBrand tag={Link} to="/">Express-React</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/login">Log In</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
