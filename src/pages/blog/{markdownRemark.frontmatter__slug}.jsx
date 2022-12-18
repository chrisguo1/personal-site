import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout";
import Seo from "../../components/seo";

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <Seo title="Blog" keywords={[`Chris`, `Guo`]} />
      <div>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.date}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }`