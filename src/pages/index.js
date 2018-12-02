import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import PageLink from '../components/pageLink'

const SectionTitle = ({ title }) => (
  <h2 style={{fontSize: "4rem", marginTop: "4rem"}}>
    {title}
  </h2>
)

const IndexPage = ({ data: { projects: { edges: projects }, blog: { edges: posts }}}) => (
  <Layout>
    <h1 style={{maxWidth: "500px"}}>A <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> boilerplate using <a href="https://forestry.io/" target="_blank" rel="noopener noreferrer">Forestry</a> as a headless CMS.</h1>
    <h1 style={{maxWidth: "500px"}}>Find it on <a href="https://github.com/huntercaron/sunnyside" target="_blank" rel="noopener noreferrer">github</a>.</h1>

    <SectionTitle title="Projects"/>
    {projects.map(({ node: project }) => 
      <PageLink key={project.id} link={project.fields.slug} title={project.frontmatter.title}/>
    )}

    <SectionTitle title="Blog"/>
    {posts.map(({ node: post }) => 
      <PageLink key={post.id} link={post.fields.slug} title={post.frontmatter.title}/>
    )}

    <Link to="/about">
      <SectionTitle title="About &rarr;"/>
    </Link>

  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    projects: allMarkdownRemark(filter: { fields: { slug: { regex: "/projects/" }}}) {
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

    blog: allMarkdownRemark(filter: { fields: { slug: { regex: "/posts/" }}}) {
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