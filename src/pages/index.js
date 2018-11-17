import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data: { allMarkdownRemark: { edges: posts }}}) => (
  <Layout>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
    {posts.map(({ node: post }) => 
      <div>
        <Link to={post.fields.slug}>{post.frontmatter.title} &rarr;</Link>
      </div>
    )}

  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`