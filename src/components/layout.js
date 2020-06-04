import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "ress/dist/ress.min.css"
import "./layout.css"
import Header from "./header"

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    const unloadBlocker = e => {
      if (window.location.href.includes("instant.forestry.io")) {
        // Cancel the event
        e.preventDefault() // If you prevent default behavior in Mozilla Firefox prompt will always be shown
        // Chrome requires returnValue to be set
        e.returnValue = ""
      }
    }

    window.addEventListener("beforeunload", unloadBlocker)

    return () => {
      window.removeEventListener("beforeunload", unloadBlocker)
    }
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content="sample" />
        <meta name="keywords" content="sample, something" />
      </Helmet>

      <Header siteTitle={data.site.siteMetadata.title} pageTitle={pageTitle} />

      <div>{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
