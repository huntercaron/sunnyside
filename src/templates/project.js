import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import get from 'lodash/get'

import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    // const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} pageTitle={post.frontmatter.title}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        <div 
          dangerouslySetInnerHTML={{ __html: post.frontmatter.description }} 
          style={{fontSize: "2rem", margin: "0 3rem", maxWidth: "700px"}}
        />
      
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "4rem", flexWrap: "wrap"}}>
          {post.frontmatter.gallery_images.map(image =>
            <Img fixed={image.childImageSharp.fixed} style={{margin: "2rem"}}/>
          )}
        </div>

 
        
      </Layout>
    )
  }
}

export default BlogPostTemplate

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