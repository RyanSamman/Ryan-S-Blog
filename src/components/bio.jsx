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
    <div className="md:flex bg-gray-100 justify-items-center rounded-xl p-8 md:p-0">
        <img
          src="https://pbs.twimg.com/profile_images/1311819690528903168/GH9oF9U8_400x400.jpg"
          alt=""
          width="384"
          height="512"
        />
          <a
            href={`https://twitter.com/${social?.twitter || ``}`}
          >
            <TwitterIcon />
          </a>
          <a
            href={`https://github.com/${social?.github || ``}`}
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
          Currently a freshman student in FCIT, I created this blog to document
          my programming journey and the projects I create. My strengths are in
          Python and Javascript, however, I plan on diving deeper into Computer
          Science in the coming years.
        </p>
        <figcaption className="font-medium">
          <div className="text-gray-500">Computer Science Student, FCIT</div>
        </figcaption>
      </div>
    </div>
  )
}

export default Bio
