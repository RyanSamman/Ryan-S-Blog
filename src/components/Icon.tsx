import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactSVGElement } from "react"

import GitHubIcon from "./../../content/assets/github.svg"
import TwitterIcon from "./../../content/assets/twitter.svg"
import TelegramIcon from "./../../content/assets/telegram.svg"
import WebsiteIcon from "./../../content/assets/website.svg"
import LinkedInIcon from "./../../content/assets/linkedin.svg"
import UnknownIcon from "./../../content/assets/unknown.svg"

const Icon: FC<IconTypes> = ({ className = "", type, link }) => {
    let ChosenIcon: any

    switch (type) {
        case "github":
            ChosenIcon = GitHubIcon
            break
        case "twitter":
            ChosenIcon = TwitterIcon
            break
        case "telegram":
            ChosenIcon = TelegramIcon
            break
        case "website":
            ChosenIcon = WebsiteIcon
            break
        case "linkedin":
            ChosenIcon = LinkedInIcon
            break
        default:
            ChosenIcon = UnknownIcon
            break
    }

    return (
        <a
            className={className}
            key={type}
            href={link}
            rel="noreferrer"
            target="_blank"
        >
            <ChosenIcon />
        </a>
    )
}

type IconTypes = {
    className?: string
    type: "github" | "twitter" | "telegram" | "website" | "linkedin"
    link: string
}

export type { IconTypes }
export default Icon
