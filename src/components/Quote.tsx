import React, { FC } from "react"
import { Social } from "../types"
import SocialIcons from './../components/SocialIcons'

const Quote: FC<QuotePropTypes> = ({
  name,
  title,
  quote,
  social = {},
  children,
}) => (
  <div className="md:flex bg-gray-100 rounded-xl p-0 mb-5 pb-4 md:pb-0">
    <div className="pt-3 md:p-8 text-center md:text-left">
      <blockquote>
        <p className="text-lg font-semibold">{quote || children}</p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-blue-800">{name}</div>
        <div className="text-gray-500">{title}</div>
        <div className="my-1">
          <SocialIcons social={social}/>
        </div>
      </figcaption>
    </div>
  </div>
)

type QuotePropTypes = {
  name: string
  title: string
  quote?: string
  children?: React.ReactNode
  social: Social
}

export default Quote
