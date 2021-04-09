import React from "react"

import { Link } from "gatsby"
import SEO from "../components/SEO"
import NavBar from "../components/NavBar"

import TopWave from "./../../content/assets/topwave.svg"
import BottomWave from "./../../content/assets/bottomwave.svg"

const BlogIndex = () => {
  return (
    <div style={{ height: "100vh", overflowY: "hidden" }}>
      <SEO title="Home" />
      <TopWave />
      <NavBar />
      <div style={{ minHeight: "60vh", width: "100%", paddingTop: "10vh", color: "#FFF", textAlign: "center" }}>
        <h1 className="text-white glow">
          <Link to="/blog">Blog</Link>
        </h1>
        <h1 className="text-white glow">
          <a target="_blank" href="https://github.com/RyanSamman">
            Projects
          </a>
        </h1>
        <h1 className="text-white glow">
          <a target="_blank" href="https://twitter.com/Ryan_Samman_">
            Contact
          </a>
        </h1>
      </div>

      <BottomWave />
    </div>
  )
}

export default BlogIndex