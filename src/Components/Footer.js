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
            <li className={footerStyle.list}>
              <Link className={footerStyle.link} to="/">
                Home
              </Link>
            </li>
            <li className={footerStyle.list}>
              <Link className={footerStyle.link} to="/blog">
                Blog
              </Link>
            </li>
            <li className={footerStyle.list}>
              <Link className={footerStyle.link} to="/about">
                About Us
              </Link>
            </li>
            <li className={footerStyle.list}>
              <Link className={footerStyle.link} to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md">
          <h5 className="text-uppercase text-white">Connect with us</h5>
          <ul className="list-unstyled text-small">
            <li className={footerStyle.list}>
              <a
                className={footerStyle.link}
                href="https://www.facebook.com/lakerscreative/"
                target="blank"
              >
                {/* <i className="fab fa-facebook-f fa-lg"></i>  */}
                Facebook
              </a>
            </li>
            <li className={footerStyle.list}>
              <a
                className={footerStyle.link}
                href="https://twitter.com/lakerscreative/"
                target="blank"
              >
                {/* <i className="fab fa-twitter fa-lg"></i>  */}
                Twitter
              </a>
            </li>
            <li className={footerStyle.list}>
              <a
                className={footerStyle.link}
                href="https://instagram.com/lakerscreative/"
                target="blank"
              >
                {/* <i className="fab fa-instagram fa-lg"></i>  */}
                Instagram
              </a>
            </li>
            <li className={footerStyle.list}>
              <a
                className={footerStyle.link}
                href="https://www.linkedin.com/company/lakers-creative/"
                target="blank"
              >
                {/* <i className="fab fa-linkedin-in fa-lg"></i>  */}
                Linkedin
              </a>
            </li>
            <li className={footerStyle.list}>
              <a
                className={footerStyle.link}
                href="https://wa.me/+2347047434853/"
                target="blank"
              >
                {/* <i className="fab fa-whatsapp fa-lg"></i>  */}
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md">
          <h5 className="text-uppercase text-white">Contact Us</h5>
          <ul className="list-unstyled text-small">
            <li className={footerStyle.list}>
              <a
                className={footerStyle.link}
                href="tel:+2347047434853"
                target="blank"
              >
                +2347047434853
              </a>
            </li>
            <li className={footerStyle.list}>
              <a
                className={footerStyle.link}
                href="mailto:info@lakerscreative.com"
                target="blank"
              >
                info@lakerscreative.com
              </a>
            </li>
            <li className={footerStyle.list}>
              <a
                className={footerStyle.link}
                href="https://goo.gl/maps/wvynpGGm28codXdZ6"
                target="blank"
              >
                Shop 3 Block N Joke Plaza Bodija, Ibadan Oyo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
