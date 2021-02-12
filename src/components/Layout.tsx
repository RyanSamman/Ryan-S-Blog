import React from "react"

import NavBar from "./NavBar"

import TopWave from "./../../content/assets/topwave.svg"
import BottomWave from "./../../content/assets/bottomwave.svg"

const Layout = ({ children }) => {
  return (
    <>
      <TopWave />
      <header>
        <NavBar />
      </header>
      <div
        className="global-wrapper rounded-2xl shadow-inner mb-2"
        style={{
          backgroundColor: "#FFF",
          border: "4px solid #000",
        }}
      >
        <main>{children}</main>
      </div>
      <div style={{ width: "100%", overflow: "hidden", position: "relative", zIndex: -1 }}>
        <BottomWave />
      </div>
    </>
  )
}

export default Layout
