import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const SectionTitle = ({ title }) => (
  <h2 style={{ marginTop: "4rem" }}>{title}</h2>
)

const PageLink = ({ link, title }) => (
  <div
    style={{
      marginLeft: "3rem",
      lineHeight: 1.2,
    }}
  >
    <Link to={link}>{title} &rarr;</Link>
  </div>
)

const LinkOut = ({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {" "}
    {text}{" "}
  </a>
)

const IndexPage = props => {
  const {
    data: {
      projects: { edges: projects },
      blog: { edges: posts },
    }
  } = props

  return (
    <Layout>
      <h1 style={{ maxWidth: "450px" }}>
        A <LinkOut href="https://www.gatsbyjs.org/" text="Gatsby" />
        boilerplate using{" "}
        <LinkOut href="https://forestry.io/" text="Forestry" />
        as a CMS.
      </h1>

      <h1 style={{ maxWidth: "500px" }}>
        Find it on
        <LinkOut
          href="https://github.com/huntercaron/sunnyside"
          text="Github"
        />
      </h1>

      <SectionTitle title="Projects" />
      {projects.map(({ node: project }) => (
        <PageLink
          key={project.id}
          link={project.fields.slug}
          title={project.frontmatter.title}
        />
      ))}

      <SectionTitle title="Blog" />
      {posts.map(({ node: post }) => (
        <PageLink
          key={post.id}
          link={post.fields.slug}
          title={post.frontmatter.title}
        />
      ))}

      <Link to="/about">
        <SectionTitle title="About &rarr;" />
      </Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    projects: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/projects/" } } }
    ) {
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

    blog: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/posts/" } } }
    ) {
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
