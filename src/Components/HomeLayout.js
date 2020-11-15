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
            goals.
            <br />
            We help Businesses and set up Organizations to execute and promote
            their customer experiences using innovation.
          </p>
          <p className="text-center">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Let's Talk
              </Button>
            </Link>
          </p>
        </span>
      </Jumbotron>
      <div className={homeLayoutStyle.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default HomeLayout
