import React, { useEffect } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import { Jumbotron } from "react-bootstrap"
import layoutStyle from "./layout.module.scss"

const Layout = props => {
  useEffect(() => {
    document.title = `${props.name} · LakersCreative`
  })
  return (
    <div className={layoutStyle.container}>
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
