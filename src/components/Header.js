import React from "react";
import logo from "../images/my-wallet.png";
import { NavbarBrand, Navbar, Nav, NavLink, Container } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <NavbarBrand>
          <Link to="/home">
            <img src={logo} alt="logo" style={{ height: 50 }} />
          </Link>
        </NavbarBrand>
        <Nav>
          <Link to="/home" className="nav-link">
            <NavLink>Overview</NavLink>
          </Link>
          <Link to="/home/addtransactions" className="nav-link">
            <NavLink>add transaction</NavLink>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
