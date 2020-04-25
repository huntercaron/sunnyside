import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

export default function ProjectTemplate(props) {
  const project = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Layout location={props.location} pageTitle={project.frontmatter.title}>
      <Helmet>
        <title>
          {project.frontmatter.title} | {siteTitle}
        </title>
      </Helmet>

      <div
        dangerouslySetInnerHTML={{ __html: project.frontmatter.description }}
        style={{ fontSize: '2rem', margin: '0 3rem', maxWidth: '700px' }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '4rem',
          flexWrap: 'wrap',
        }}
      >
        {project.frontmatter.gallery_images.map((image, i) => (
          <Img
            key={i}
            fixed={image.childImageSharp.fixed}
            style={{ margin: '2rem' }}
          />
        ))}
      </div>
    </Layout>
  )
}

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
