import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import "ress/dist/ress.min.css"
import "./layout.css"
import Header from "./header"

const Layout = ({ children, pageTitle = "" }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="description" content="sample" />
        <meta name="keywords" content="sample, something" />
      </Helmet>

      <Header siteTitle={data.site.siteMetadata.title} pageTitle={pageTitle} />

      {children}
    </>
  )
}

export default Layout
