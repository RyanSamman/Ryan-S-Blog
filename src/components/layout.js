import React from "react"

import NavBar from "./../components/NavBar"

import TopWave from "./../../content/assets/topwave.svg"
import BottomWave from "./../../content/assets/bottomwave.svg"

const Layout = ({ children }) => {
  return (
    <>
      <TopWave />
      <header className="mb-10">
        <NavBar />
      </header>
      <div
        className="global-wrapper border-black border-4 rounded-md shadow-inner"
        style={{ marginBottom: -50, backgroundColor: "rgba(255,255,255,0.98)" }}
      >
        <main>{children}</main>
      </div>

      <BottomWave />
    </>
  )
}

export default Layout
