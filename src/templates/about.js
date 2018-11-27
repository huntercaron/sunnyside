import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'

class AboutTemplate extends React.Component {
  render() {
    const about = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    // const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} pageTitle={about.frontmatter.title}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={`${about.frontmatter.title} | ${siteTitle}`}
        />

        <h1>TEST</h1>
        
        <div
          style={{ width: "100px", height: "100px", background: about.frontmatter.color }}
        />
      </Layout>
    )
  }
}

export default AboutTemplate

export const pageQuery = graphql`
  query AboutPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        color
        libraries
        social {
          name
          link
        }
      }
    }
  }
`