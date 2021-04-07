import React from "react"

import NavBar from "./NavBar"

import TopWave from "./../../content/assets/topwave.svg"
import BottomWave from "./../../content/assets/bottomwave.svg"

interface LayoutPropTypes {
  children: React.ReactNode 
}

function Layout({ children }: LayoutPropTypes) {
  return (
    <>
      <TopWave />
      <header>
        <NavBar />
      </header>
      <div
        className="global-wrapper rounded-2xl shadow-inner mb-20"
        style={{
          backgroundColor: "#FFF",
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
