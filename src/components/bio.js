/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GitHubIcon from "./../../content/assets/github.svg"
import TwitterIcon from "./../../content/assets/twitter.svg"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  // const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  // const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div class="md:flex bg-gray-100 justify-items-center rounded-xl p-8 md:p-0">
      <div className="md:my-auto">
        <img
          class="block w-32 h-32 rounded-full mx-auto md:mx-2"
          src="https://pbs.twimg.com/profile_images/1311819690528903168/GH9oF9U8_400x400.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="flex justify-center mt-4">
          <a
            href={`https://twitter.com/${social?.twitter || ``}`}
            className="mr-1"
          >
            <TwitterIcon />
          </a>
          <a href={`https://github.com/${social?.github || ``}`}>
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <p class="text-lg font-semibold">
          Passionate about Tech and Programming. I'm a novice programmer who
          started out one year ago, and I created this blog to write about
          interesting things!
        </p>
        <figcaption class="font-medium">
          <div class="text-cyan-600">Ryan Samman</div>
          <div class="text-gray-500">Computer Science Student, FCIT</div>
        </figcaption>
      </div>
    </div>
  )
}

export default Bio
