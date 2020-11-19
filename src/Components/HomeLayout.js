import React, { useEffect } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Jumbotron } from "react-bootstrap"
import homeLayoutStyle from "./homelayout.module.scss"
import { Link } from "gatsby"

const HomeLayout = props => {
  useEffect(() => {
    document.title = `${props.name} · LakersCreative`
  })
  return (
    <div className={homeLayoutStyle.container}>
      <Jumbotron className={homeLayoutStyle.homelayoutJumbotron}>
        <NavBar />
        <span className={homeLayoutStyle.heroDisplay}>
          <h1 className={homeLayoutStyle.heroTitle}>Lakers Creative</h1>
          <p className={homeLayoutStyle.heroText}>
            Lakers Creative is the team that is going to help you achieve your
            technological goals. We are here to help Businesses and
            Organisations to execute and promote their customer experience using
            innovative tech solutions.
          </p>
          <p className="text-center">
            <Link to="/contact" className="mx-2">
              <Button variant="primary" size="lg">
                Let's Talk
              </Button>
            </Link>
            {/* <a href="tel:+2347047434853" className="mx-2">
              <Button variant="secondary" size="lg">
                Call Us | +2347047434853
              </Button>
            </a> */}
          </p>
        </span>
      </Jumbotron>
      <div className={homeLayoutStyle.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default HomeLayout
