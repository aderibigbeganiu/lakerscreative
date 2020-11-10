import React from "react"
import { Card, CardDeck, Row, Col } from "react-bootstrap"
import HomeLayout from "../Components/HomeLayout"
import Detailed from "../../static/detailed.png"
import Proffesionality from "../../static/proffesionality.png"
import customersSatisfaction from "../../static/customers-satisfaction.png"
import indexStyle from "./index.module.scss"

const Home = () => {
  return (
    <HomeLayout name="Home">
      <h1 className={indexStyle.heading1Text}>Our Advantage</h1>
      <CardDeck className="py-5">
        <Card className={indexStyle.card}>
          <Card.Img
            className="text-center"
            variant="top"
            src={Detailed}
            style={{
              width: "100px",
              height: "100px",
              margin: "auto",
              paddingTop: "5px",
            }}
          />
          <Card.Body className="text-center">
            <Card.Title>Detailed</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit
              nulla.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={indexStyle.card}>
          <Card.Img
            className="text-center"
            variant="top"
            src={Proffesionality}
            style={{
              width: "100px",
              height: "100px",
              margin: "auto",
              paddingTop: "5px",
            }}
          />
          <Card.Body className="text-center">
            <Card.Title>Proffesionality</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit
              nulla.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={indexStyle.card}>
          <Card.Img
            className="text-center"
            variant="top"
            src={customersSatisfaction}
            style={{
              width: "100px",
              height: "100px",
              margin: "auto",
            }}
          />
          <Card.Body className="text-center">
            <Card.Title>Customers Satisfaction</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit
              nulla.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <h1 className={indexStyle.heading1Text}>Our working process</h1>
      <Row className="pt-5 ">
        <Col className="">
          <span className={indexStyle.RoundCard}>
            <span className={indexStyle.text}>1</span>
          </span>
        </Col>
        <Col className="">
          <span className={indexStyle.RoundCard}>
            <span className={indexStyle.text}>2</span>
          </span>
        </Col>
        <Col className="">
          <span className={indexStyle.RoundCard}>
            <span className={indexStyle.text}>3</span>
          </span>
        </Col>
      </Row>
      <Row xs={1} md={2} className="py-5">
        <Col>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.268831519224!2d3.9073954144246628!3d7.435476713952857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed43c0f5926f%3A0x791f7aae1acb1cd8!2sLakers%20Creative!5e0!3m2!1sen!2sng!4v1604435092154!5m2!1sen!2sng"
            width="100%"
            height="300"
            frameborder="0"
          ></iframe>
        </Col>
        <Col className="pt-5">
          <h1 className={indexStyle.heading1Text}>Our Location</h1>
          <p className="text-center">
            Shop 3, Block N, Joke Plaza, Bodija, Ibadan Oyo State, Nigeria.
          </p>
        </Col>
      </Row>
    </HomeLayout>
  )
}

export default Home
