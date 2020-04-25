import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout location={props.location} pageTitle={post.frontmatter.title}>
      <Helmet>
        <title>
          {post.frontmatter.title} | {siteTitle}
        </title>
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
      }
    }
  }
`
