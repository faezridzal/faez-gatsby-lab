import React from "react"
import Layout from "../../components/layout"
import { PageTitle } from "../../components/page-title"
import { graphql } from "gatsby"

export default function Article({ data }) {
  console.log(data)
  const article = data.markdownRemark
  return (
    <Layout>
      <PageTitle>{article.frontmatter.title}</PageTitle>
      <div
        dangerouslySetInnerHTML={{
          __html: article.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      excerpt
      timeToRead
      html
      frontmatter {
        id
        title
        slug
      }
    }
  }
`
