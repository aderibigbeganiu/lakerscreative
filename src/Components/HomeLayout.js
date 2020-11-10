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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            sit et lectus cum. Lectus tristique malesuada nibh nec morbi
            tristique. Imperdiet tempus amet, congue arcu amet at enim nulla
            arcu. Eget morbi tempus sollicitudin amet urna nisi.
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
