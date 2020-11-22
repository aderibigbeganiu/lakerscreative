import { Link } from "gatsby"
import React from "react"
import navStyle from "./nav.module.scss"
import logo from "../../static/logo.png"
import { Nav, Navbar } from "react-bootstrap"

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      fixed="top"
      variant="dark"
      className={navStyle.shadow}
    >
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" height="30" width="30" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={{ outline: "none" }}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Link className="nav-link" to="/" activeClassName="active">
            Home
          </Link>
          <Link className="nav-link" to="/blog" activeClassName="active">
            Blog
          </Link>
          <Link className="nav-link" to="/about" activeClassName="active">
            About Us
          </Link>
          <Link className="nav-link" to="/contact" activeClassName="active">
            Contact Us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default NavBar
