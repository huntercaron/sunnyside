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
      
        {post.frontmatter.gallery_images.map(image =>
          <Img fixed={image.childImageSharp.fixed}/>
        )}
        
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