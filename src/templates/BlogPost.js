import React from "react"
import { graphql } from "gatsby"
import Layout from "../Components/Layout"

const BlogPostTemplate = ({ data }) => (
  <Layout name={data.wordpressPost.title}>
    <p>
      Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
    </p>
    <img
      src={data.wordpressPost.featured_media.source_url}
      alt={data.wordpressPost.title}
      style={{ maxHeight: 450 }}
    />
    <div
      style={{ marginTop: 20 }}
      dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
    />
  </Layout>
)
export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      featured_media {
        id
        source_url
      }
    }
  }
`
