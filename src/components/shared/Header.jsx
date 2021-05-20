import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <header className="wrapper" style={{ marginBottom: '0px' }}>
      <Navbar color="faded" light style={{ borderBottom: '1px solid black', padding: '2px 20px' }}>
        <NavbarBrand tag={Link} to="/">Express-React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto">
            <NavItem>
              <NavLink tag={Link} to="/account/login">Log In</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
}
