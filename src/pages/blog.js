import React from "react"
import Layout from "../Components/Layout"
import { graphql, Link, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost {
        nodes {
          id
          title
          slug
          excerpt
          content
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            source_url
          }
          author {
            name
          }
        }
      }
    }
  `)
  return (
    <Layout name="Blog">
      <ul class="list-unstyled">
        {data.allWordpressPost.nodes.map(post => (
          <Link
            to={post.slug}
            style={{ textDecoration: "none", color: "#000000" }}
            key={post.id}
          >
            <li class="media">
              <img
                src={post.featured_media.source_url}
                class="align-self-start mr-3"
                alt={post.title}
                height="100"
                width="100"
              />
              <div class="media-body">
                <h5 class="mt-0">{post.title}</h5>
                <small>
                  Written by {post.author.name} on {post.date}
                </small>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog
