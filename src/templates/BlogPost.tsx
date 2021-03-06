import React from "react"
import { Link, graphql } from "gatsby"
import { Mdx, Site, Frontmatter, ReadingTime } from './../../graphql-types'

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Disqus } from "gatsby-plugin-disqus"
import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

// Global MDX components
import { InlineMath } from "react-katex"
import YouTube from "../components/YouTube"
import Gist from "react-gist"
import Tweet from "../components/Tweet"
import Math from "../components/Math"
import Quote from "../components/Quote"

const globalMDXComponents = {
  MDXProvider,
  MDXRenderer,
  InlineMath,
  YouTube,
  Tweet,
  Math,
  Gist,
  Quote,
}

const BlogPostTemplate = ({ data }: BlogPostProps) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteURL = data.site.siteMetadata?.siteUrl! + post.fields?.slug!
  const { previous, next } = data

  const disqusConfig = {
    url: `${siteURL}`,
    identifier: post.id,
    title: siteTitle,
  }

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title!}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>
            {post.frontmatter.date} - {post.fields.readingTime.text}
          </p>
        </header>
        <MDXProvider components={globalMDXComponents}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Disqus config={disqusConfig} />
    </Layout>
  )
}

export default BlogPostTemplate

type MdxQuery = Mdx & {
  frontmatter: Frontmatter,
  fields: {
    slug: string,
    readingTime: ReadingTime
  }
}

type BlogPostProps = {
  data: {
    mdx: MdxQuery
    site: Site
    previous: MdxQuery
    next: MdxQuery
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        readingTime {
          text
        }
        slug
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
