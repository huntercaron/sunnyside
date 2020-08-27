import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ProjectTemplate = props => {
  const project = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout pageTitle={project.frontmatter.title}>
      <Helmet>
        <title>
          {project.frontmatter.title} | {siteTitle}
        </title>
      </Helmet>

      <p>{project.frontmatter.description}</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "4rem",
          flexWrap: "wrap",
        }}
      >
        {project.frontmatter.gallery_images.map((image, i) => (
          <Img
            key={i}
            fixed={image.childImageSharp.fixed}
            style={{ margin: "2rem" }}
          />
        ))}
      </div>
    </Layout>
  )
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
