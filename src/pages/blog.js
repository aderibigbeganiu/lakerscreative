import React from "react"
import Layout from "../Components/Layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Card, CardDeck } from "react-bootstrap"

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
      {data.allWordpressPost.nodes.length >= 1 ? (
        <CardDeck>
          {data.allWordpressPost.nodes.map(post => (
            <Card key={post.id}>
              <Link
                to={post.slug}
                style={{ textDecoration: "none", color: "#000000" }}
              >
                <Card.Img
                  variant="left"
                  src={post.featured_media.source_url}
                  height="150"
                  width="100%"
                />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>
                    <div
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    ></div>
                    <small>
                      Written by {post.author.name} on {post.date}
                    </small>
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          ))}
        </CardDeck>
      ) : (
        ""
      )}
    </Layout>
  )
}

export default Blog
