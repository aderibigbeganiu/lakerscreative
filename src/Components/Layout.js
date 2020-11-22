import React, { useEffect } from "react"
import Footer from "./Footer"
import NavBar from "./NavBar"
import { Jumbotron } from "react-bootstrap"
import layoutStyle from "./layout.module.scss"
import { Helmet } from "react-helmet"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const Layout = props => {
  useEffect(() => {
    document.title = `${props.name} · LakersCreative`
  })
  return (
    <div className={layoutStyle.container}>
      <GatsbySeo
        title={props.name}
        titleTemplate="%s • LakersCreative"
        description={`${props.name}`}
        canonical={`https://www.lakerscreative.com/${props.name}`}
        openGraph={{
          type: "website",
          url: `https://www.lakerscreative.com/${props.name}`,
          title: ` ${props.name} LAKERS CREATIVE`,
          description: `${props.name}`,
          images: [
            {
              url: "https://lakerscreative.com/color-logo.png",
              alt: `${props.name} Image Alt`,
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
      </Helmet>
      <Jumbotron className={layoutStyle.layoutJumbotron}>
        <NavBar />
        <h1 className="text-center pt-5 mt-5 text-white">{props.name}</h1>
      </Jumbotron>
      <div className={layoutStyle.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
