import { Link } from "gatsby"
import React from "react"
import Logo from "../../static/logo.png"
import footerStyle from "./footer.module.scss"

const Footer = () => {
  return (
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
            <a
              className="text-white m-1"
              href="https://www.facebook.com/lakerscreative/"
              target="blank"
            >
              <li>
                <i className="fab fa-facebook-f fa-lg"></i> Facebook
              </li>
            </a>
            <a
              className="text-white m-1"
              href="https://twitter.com/lakerscreative/"
              target="blank"
            >
              <li>
                <i className="fab fa-twitter fa-lg"></i> Twitter
              </li>
            </a>
            <a
              className="text-white m-1"
              href="https://instagram.com/lakerscreative/"
              target="blank"
            >
              <li>
                <i className="fab fa-instagram fa-lg"></i> Instagram
              </li>
            </a>
            <a
              className="text-white m-1"
              href="https://www.linkedin.com/company/lakers-creative/"
              target="blank"
            >
              <li>
                <i className="fab fa-linkedin-in fa-lg"></i> Linkedin
              </li>
            </a>
            <a
              className="text-white m-1"
              href="https://wa.me/+2347047434853/"
              target="blank"
            >
              <li>
                <i className="fab fa-whatsapp fa-lg"></i> Whatsapp
              </li>
            </a>
          </ul>
        </div>
        <div className="col-12 col-md">
          <h5 className="text-uppercase text-white">Contact Us</h5>
          <ul className="list-unstyled text-small">
            <a
              className="text-white m-1"
              href="tel:+2347047434853"
              target="blank"
            >
              <li>+2347047434853</li>
            </a>
            <a
              className="text-white m-1"
              href="mailto:info@lakerscreative.com"
              target="blank"
            >
              <li>info@lakerscreative.com</li>
            </a>
            <a
              className="text-white m-1"
              href="https://goo.gl/maps/wvynpGGm28codXdZ6"
              target="blank"
            >
              <li>Shop 3 Block N Joke Plaza Bodija, Ibadan Oyo</li>
            </a>
          </ul>
        </div>
      </div>
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"
      ></script>
    </footer>
  )
}

export default Footer
