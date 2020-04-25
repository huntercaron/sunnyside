import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import 'ress/dist/ress.min.css'
import './layout.css'
import Header from './header'

const Layout = ({ children, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content="sample" />
          <meta name="keywords" content="sample, something" />
        </Helmet>

        <Header
          siteTitle={data.site.siteMetadata.title}
          pageTitle={pageTitle}
        />

        <div>{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
