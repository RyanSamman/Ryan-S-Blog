import React from "react"
import { Link, graphql } from "gatsby"
import { Frontmatter, Mdx, Site } from './../../graphql-types'

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Tweet from './../components/Tweet'

const BlogIndex = ({ data }: BlogProps) => {
  const posts = data.allMdx.nodes

  return (
    <>
      <Layout>
        <SEO title="My Blog Posts" />
        <h1 className="mt-0">My Blog Posts</h1>
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={"/blog" + post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter?.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
        <h4>More blog posts planned in the future!</h4>
        <Tweet id="1335155439122718726" />
        <Bio />
      </Layout>
    </>
  )
}

export default BlogIndex

type MdxQuery = Mdx & {
  frontmatter: Frontmatter,
  fields: {
    slug: string
  }
}

type BlogProps = {
  data: {
    frontmatter: Frontmatter
    site: Site
    allMdx: {
      nodes: MdxQuery[]
    }
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
