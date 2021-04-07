import React from "react"
import GitHubIcon from "./../../content/assets/github.svg"
import TwitterIcon from "./../../content/assets/twitter.svg"
import SocialIcons from "./SocialIcons"

const Bio = () => {


  return (
    <div className="md:flex bg-gray-100 justify-items-center rounded-xl p-8 md:p-0">
      <div className="md:my-auto md:ml-8 content-center">
        <img
          className="block w-32 h-32 rounded-full mx-auto"
          src="https://pbs.twimg.com/profile_images/1311819690528903168/GH9oF9U8_400x400.jpg"
          alt=""
          width="384"
          height="512"
        />
      </div>
      <div className="pt-4 md:p-8 text-center md:text-left space-y-4">
        <p className="text-lg font-semibold mb-4">
          Currently a freshman student in FCIT, I created this blog to document
          my programming journey and the projects I create. My strengths are in
          Python and Typescript, however, I plan on diving deeper into Computer
          Science in the coming years.
                </p>
        <figcaption className="font-medium">
          <div className="text-blue-800">Ryan Samman</div>
          <div className="text-gray-500">Computer Science Student, FCIT</div>
          <div
            style={{ width: "fit-content" }}
            className="mx-auto md:mx-0 mt-2"
          >
            <SocialIcons social={{
              twitter: "https://twitter.com/Ryan_Samman_",
              github: "https://github.com/RyanSamman",
              website: "https://ryansamman.com/",
              linkedin: "https://www.linkedin.com/in/Ryan-Samman/",
              telegram: "https://t.me/RyanSamman",
            }} />
          </div>
        </figcaption>
      </div>
    </div>
  )
}

export default Bio
