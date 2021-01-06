import React from "react"

import { Link } from "gatsby"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"

import TopWave from "./../../content/assets/topwave.svg"
import BottomWave from "./../../content/assets/bottomwave.svg"

const BlogIndex = () => {
  return (
    <>
      <SEO title="Home" />
      <TopWave />
      <NavBar />
      <div style={{ minHeight: "60vh", paddingTop: "10vh", color: "#FFF" }}>
        <center>
          <h1 className="text-white glow">
            <Link to="/blog">Blog</Link>
          </h1>
          <h1 className="text-white glow">
            <Link target="_blank" to="https://github.com/RyanSamman">
              Projects
            </Link>
          </h1>
          <h1 className="text-white glow">
            <Link target="_blank" to="https://twitter.com/Ryan_Samman_">
              Contact
            </Link>
          </h1>
        </center>
      </div>

      <BottomWave height="300" />
    </>
  )
}

export default BlogIndex
