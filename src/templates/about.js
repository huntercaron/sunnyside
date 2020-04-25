import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const AboutTemplate = props => {
  const about = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout pageTitle={about.frontmatter.title}>
      <Helmet>
        <title>
          {about.frontmatter.title} | {siteTitle}
        </title>
      </Helmet>

      <div style={{ margin: "0 3rem", maxWidth: "700px" }}>
        <p>{about.frontmatter.description}</p>

        <br />

        <h4>A list field</h4>
        <ul>
          {about.frontmatter.libraries.map((lib, i) => (
            <li key={i}>{lib}</li>
          ))}
        </ul>

        <br />

        <h4>An object list field</h4>
        <ul>
          {about.frontmatter.social.map((link, i) => (
            <li key={i}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <br />

        <h4>Color Field</h4>
        <div
          style={{
            width: "100px",
            height: "100px",
            background: about.frontmatter.color,
          }}
        />
      </div>
    </Layout>
  )
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
