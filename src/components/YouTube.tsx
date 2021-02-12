import React from "react"

const YouTube = ({ id }) => (
  <div className="video-container">
    <iframe
      title={id}
      width="100%"
      height="calc(100% * 0.5625)"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen={true}
    />
  </div>
)

export default YouTube
