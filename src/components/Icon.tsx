import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactSVGElement } from "react"

import GitHubIcon from "./../../content/assets/github.svg"
import TwitterIcon from "./../../content/assets/twitter.svg"
import TelegramIcon from "./../../content/assets/telegram.svg"
import WebsiteIcon from "./../../content/assets/website.svg"
import LinkedInIcon from "./../../content/assets/linkedin.svg"
import YoutubeIcon from "./../../content/assets/youtube.svg"
import UnknownIcon from "./../../content/assets/unknown.svg"
import { Social } from "../types"

const Icon: FC<IconTypes> = ({ className = "", type, link }) => {
    let ChosenIcon = UnknownIcon

    const iconMap = {
        "github": GitHubIcon,
        "twitter": TwitterIcon,
        "telegram": TelegramIcon,
        "website": WebsiteIcon,
        "linkedin": LinkedInIcon,
        "youtube": YoutubeIcon,
    } as const

    if (type in iconMap) {
        ChosenIcon = iconMap[type]
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
    type: keyof Social
    link: string
}

export type { IconTypes }
export default Icon
