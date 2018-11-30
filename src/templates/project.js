import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/layout'

class ProjectTemplate extends React.Component {
  render() {
    const project = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = project.excerpt

    return (
      <Layout location={this.props.location} pageTitle={project.frontmatter.title}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${project.frontmatter.title} | ${siteTitle}`}
        />

        <div 
          dangerouslySetInnerHTML={{ __html: project.frontmatter.description }} 
          style={{fontSize: "2rem", margin: "0 3rem", maxWidth: "700px"}}
        />
      
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "4rem", flexWrap: "wrap"}}>
          {project.frontmatter.gallery_images.map(image =>
            <Img fixed={image.childImageSharp.fixed} style={{margin: "2rem"}}/>
          )}
        </div>

      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
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
        description
        gallery_images {
          childImageSharp {
            fixed(width: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`