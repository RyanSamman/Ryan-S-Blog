import React from 'react'

import GitHubIcon from './../../static/icons/github.svg'
import TwitterIcon from './../../static/icons/twitter.svg'
import TelegramIcon from './../../static/icons/telegram.svg'
import WebsiteIcon from './../../static/icons/website.svg'
import LinkedInIcon from './../../static/icons/linkedin.svg'
import UnknownIcon from './../../static/icons/unknown.svg'

const Icon = ({ className = "", type, link }) => {
	let icon

	switch (type) {
		case "github": icon = GitHubIcon; break;
		case "twitter": icon = TwitterIcon; break;
		case "telegram": icon = TelegramIcon; break;
		case "website": icon = WebsiteIcon; break;
		case "linkedin": icon = LinkedInIcon; break;
		default: icon = UnknownIcon; break;
	}

	return (
		<a className={className} key={type} href={link} rel="noreferrer" target="_blank">
			<img src={icon} alt="test" />
		</a>
	)
}

export default Icon