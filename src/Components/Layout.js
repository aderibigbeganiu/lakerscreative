import React, { useEffect } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
import { Jumbotron } from "react-bootstrap"
import layoutStyle from "./layout.module.scss"
import { Helmet } from "react-helmet"

const Layout = props => {
  useEffect(() => {
    document.title = `${props.name} · LakersCreative`
  })
  return (
    <div className={layoutStyle.container}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
          crossorigin="anonymous"
        />
      </Helmet>
      <Jumbotron className={layoutStyle.layoutJumbotron}>
        <NavBar />
        <h1 className="text-center pt-5 text-white">{props.name}</h1>
      </Jumbotron>
      <div className={layoutStyle.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
