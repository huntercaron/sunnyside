import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PageLink from '../components/pageLink'

const SectionTitle = ({ title }) => (
  <h2 style={{fontSize: "4rem", marginTop: "4rem"}}>
    {title}
  </h2>
)

const IndexPage = ({ data: { projects: { edges: projects }, blog: { edges: posts }}}) => (
  <Layout>
    <h1>Welcome to your new Gatsby site.</h1>
    
    <SectionTitle title="Projects"/>
    {projects.map(({ node: project }) => 
      <PageLink link={project.fields.slug} title={project.frontmatter.title}/>
    )}

    <SectionTitle title="Blog"/>
    {posts.map(({ node: post }) => 
      <PageLink link={post.fields.slug} title={post.frontmatter.title}/>
    )}

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