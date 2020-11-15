import React from "react"
import Layout from "../Components/Layout"
import { Col, Row } from "react-bootstrap"

const contact = () => {
  return (
    <Layout name="Contact">
      <Row>
        <Col className="p-5 bg-secondary">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary form-control">Submit</button>
            </div>
          </form>
        </Col>
        <Col>
          <div className="m-5">Hi</div>
        </Col>
      </Row>
    </Layout>
  )
}

export default contact
