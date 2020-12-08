import React, { Component } from "react"
import Layout from "../Components/Layout"
import { Col, Row } from "react-bootstrap"
import contactStyle from "./contactStyle.module.scss"
import axios from "axios"

export class contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      message: "",
      isLoading: false,
      response: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(e) {
    const { name, email, message } = this.state
    this.setState({ isLoading: true })
    axios
      .post(`https://backend.lakerscreative.com/contact/`, {
        name,
        email,
        message,
      })
      .then(res => {
        this.setState({
          isLoading: false,
          response: "Message was sent successfuly",
        })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          response: "Message was not sent",
        })
      })
    e.preventDefault()
  }
  render() {
    const { name, email, message, isLoading, response } = this.state
    return (
      <Layout name="Contact">
        <div>
          <b>Get in touch today</b> to learn how your business can grow with the
          right tech solutions.{" "}
          <p>
            Lakers Creative offers custom solutions to businesses of all size
            with a personal touch.
          </p>
        </div>
        <Row>
          <Col md={6}>
            {isLoading && "Sending message..."}
            {response ? (
              <div className="text-center">{response}</div>
            ) : (
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    maxLength="50"
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    maxLength="50"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary form-control">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Col>
          <Col md={6}>
            <div className="m-5">
              <ul className="list-unstyled text-small">
                <li className="">
                  <a
                    className="text-dark"
                    href="tel:+2347047434853"
                    target="blank"
                  >
                    +2347047434853
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-dark"
                    href="mailto:info@lakerscreative.com"
                    target="blank"
                  >
                    info@lakerscreative.com
                  </a>
                </li>
                <li className="">
                  <a
                    className="text-dark"
                    href="https://goo.gl/maps/wvynpGGm28codXdZ6"
                    target="blank"
                  >
                    Shop 3 Block N Joke Plaza Bodija, Ibadan Oyo
                  </a>
                </li>
              </ul>

              <ul className="list-inline">
                <li className="list-inline-item text-primary">
                  <a href="https://twitter.com/lakerscreative/" target="blank">
                    <span className={contactStyle.round}>
                      <i
                        className="fab fa-twitter"
                        style={{ width: "15px" }}
                      ></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item text-primary">
                  <a
                    href="https://www.facebook.com/lakerscreative/"
                    target="blank"
                  >
                    <span className={contactStyle.round}>
                      <i
                        className="fab fa-facebook-f"
                        style={{ width: "15px" }}
                      ></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item text-primary">
                  <a
                    href="https://instagram.com/lakerscreative/"
                    target="blank"
                  >
                    <span className={contactStyle.round}>
                      <i
                        className="fab fa-instagram fa-lg"
                        style={{ width: "15px" }}
                      ></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item text-primary">
                  <a
                    href="https://www.linkedin.com/company/lakers-creative/"
                    target="blank"
                  >
                    <span className={contactStyle.round}>
                      <i
                        className="fab fa-linkedin-in"
                        style={{ width: "15px" }}
                      ></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item text-primary">
                  <a href="https://wa.me/+2347047434853/" target="blank">
                    <span className={contactStyle.round}>
                      <i
                        className="fab fa-whatsapp fa-lg"
                        style={{ width: "15px" }}
                      ></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default contact
