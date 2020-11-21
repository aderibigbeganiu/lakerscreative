import React, { useEffect } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
import { Button, Jumbotron } from "react-bootstrap"
import homeLayoutStyle from "./homelayout.module.scss"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const HomeLayout = props => {
  useEffect(() => {
    document.title = `${props.name} · LakersCreative`
  })
  return (
    <div className={homeLayoutStyle.container}>
      <GatsbySeo
        title="Home"
        titleTemplate="%s • LakersCreative"
        description="Lakers Creative is the team that is going to help you achieve your technological goals. We are here to help Businesses and Organisations to execute and promote their customer experience using innovative tech solutions."
        canonical="https://www.lakerscreative.com/"
        openGraph={{
          type: "website",
          url: "https://www.lakerscreative.com/",
          title: "LAKERS CREATIVE",
          description:
            "Lakers Creative is the team that is going to help you achieve your technological goals. We are here to help Businesses and Organisations to execute and promote their customer experience using innovative tech solutions.",
          images: [
            {
              url: "https://lakerscreative.com/color-logo.png",
              alt: "Og Image Alt",
            },
          ],
        }}
      />
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
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
