import React, { useState } from "react";
import logo from "../images/my-wallet.png";
import { useContext } from "react"
import { NavbarBrand, Navbar, Nav, NavLink, Container, Modal } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { UsersContext } from "../contexts/UsersContext";
import AddTransaction from "../screens/AddTransactionScreen";

const Header = () => {
  const { logout } = useContext(UsersContext)

  const [show, setShow] = useState(false)

  const handleshow = () => setShow(!show)

  const handleLogout = () => {
    logout();
    <Redirect to="/login" />
  }
  return (
    <>
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
            <Link onClick={handleshow} className="nav-link">
              <NavLink>add transaction</NavLink>
            </Link>
            <Link to="/signin" className="nav-link" onClick={handleLogout}>
              <NavLink>logout</NavLink>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Modal onDoubleClick={handleshow} isOpen={show} className="justify-content-md-center">
        <AddTransaction handleshow={handleshow} />
      </Modal>
    </>
  );
};

export default Header;
