import { Link } from "gatsby"
import React from "react"
import Logo from "../../static/logo.png"
import footerStyle from "./footer.module.scss"

const Footer = () => {
  return (
    <div>
      <footer className={footerStyle.footer}>
        <div className="row">
          <div className="col-12 col-md text-center">
            <Link to="/">
              <img
                className="mt-5 mb-3"
                src={Logo}
                alt="logo"
                width="40"
                height="40"
              />
            </Link>
            <h3 className="d-block mb-3 text-white">Lakers Creative</h3>
          </div>
          <div className="col-12 col-md">
            <h5 className="text-uppercase text-white">Useful Links</h5>
            <ul className="list-unstyled text-small">
              <Link className="text-white m-1" to="/about">
                <li>About</li>
              </Link>
              <Link className="text-white m-1" to="/services">
                <li>Services</li>
              </Link>
              <Link className="text-white m-1" to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="col-12 col-md">
            <h5 className="text-uppercase text-white">Connect with us</h5>
            <ul className="list-unstyled text-small">
              <Link
                className="text-white m-1"
                to="https://www.facebook.com/lakerscreative/"
                target="blank"
              >
                <li>
                  <i className="fab fa-facebook-f fa-lg"></i> Facebook
                </li>
              </Link>
              <Link
                className="text-white m-1"
                to="https://twitter.com/lakerscreative/"
                target="blank"
              >
                <li>
                  <i className="fab fa-twitter fa-lg"></i> Twitter
                </li>
              </Link>
              <Link
                className="text-white m-1"
                to="https://instagram.com/lakerscreative/"
                target="blank"
              >
                <li>
                  <i className="fab fa-instagram fa-lg"></i> Instagram
                </li>
              </Link>
              <Link
                className="text-white m-1"
                to="https://www.linkedin.com/company/lakers-creative/"
                target="blank"
              >
                <li>
                  <i className="fab fa-linkedin-in fa-lg"></i> Linkedin
                </li>
              </Link>
              <Link
                className="text-white m-1"
                to="https://wa.me/+2347047434853/"
                target="blank"
              >
                <li>
                  <i className="fab fa-whatsapp fa-lg"></i> Whatsapp
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-12 col-md">
            <h5 className="text-uppercase text-white">Contact Us</h5>
            <ul className="list-unstyled text-small">
              <Link
                className="text-white m-1"
                href="tel:+2347047434853"
                target="blank"
              >
                <li>+2347047434853</li>
              </Link>
              <a
                className="text-white m-1"
                href="mailto:info@lakerscreative.com"
                target="blank"
              >
                <li>info@lakerscreative.com</li>
              </a>
              <Link
                className="text-white m-1"
                to="https://goo.gl/maps/wvynpGGm28codXdZ6"
                target="blank"
              >
                <li>Shop 3 Block N Joke Plaza Bodija, Ibadan Oyo</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
