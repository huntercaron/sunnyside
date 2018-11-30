import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

class AboutTemplate extends React.Component {
  render() {
    const about = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} pageTitle={about.frontmatter.title}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title={`${about.frontmatter.title} | ${siteTitle}`}
        />

        <div style={{margin: "0 3rem", maxWidth: "700px"}}>
          <p>{about.frontmatter.description}</p>

          <h4>A list field: Social</h4>
          <ul>
            {about.frontmatter.social.map(link => 
              <li>
                <a href={link.link}>{link.name}</a>
              </li>
            )}
          </ul>

          <h4>Another list field: Libraries</h4>
          <ul>
            {about.frontmatter.libraries.map(lib => 
              <li>{lib}</li>
            )}
          </ul>


          <h4>Color Field</h4>
          <div
            style={{ width: "100px", height: "100px", background: about.frontmatter.color }}
          />
        </div>
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
      frontmatter {
        title
        description
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