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
        className="global-wrapper rounded-2xl shadow-inner"
        style={{
          marginBottom: -50,
          backgroundColor: "rgba(255,255,255,0.98)",
          border: "4px solid #000",
        }}
      >
        <main>{children}</main>
      </div>

      <BottomWave />
    </>
  )
}

export default Layout
