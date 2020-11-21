import { Link } from "gatsby"
import React from "react"
import navStyle from "./nav.module.scss"
import logo from "../../static/logo.png"
import { Nav, Navbar } from "react-bootstrap"

const NavBar = () => {
  return (
    <>
      <span className="d-none d-md-block">
        <Navbar variant="light" className={navStyle.navStyle}>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className={navStyle.logo} />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link
                className={navStyle.navItem}
                activeClassName={navStyle.activeNavItem}
                to="/"
              >
                Home
              </Link>
              <Link
                className={navStyle.navItem}
                activeClassName={navStyle.activeNavItem}
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className={navStyle.navItem}
                activeClassName={navStyle.activeNavItem}
                to="/about"
              >
                About Us
              </Link>
              <Link
                className={navStyle.navItem}
                activeClassName={navStyle.activeNavItem}
                to="/contact"
              >
                Contact Us
              </Link>
              {/* <Link
                  className={navStyle.navItem}
                  activeClassName={navStyle.activeNavItem}
                  to="/services"
                >
                What We Do
              </Link> */}
              {/* <Link
                  className={navStyle.navItem}
                  activeClassName={navStyle.activeNavItem}
                  to="/our-team"
                  >
                  Our Team
                </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </span>
      <span className="d-sm-block d-md-none">
        <nav className={"navbar fixed-top navbar-dark bg-primary shadow"}>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" height="30" width="30" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ outline: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/services">
                  What We Do
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/our-team">
                  Our Team
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </span>
    </>
  )
}
export default NavBar
