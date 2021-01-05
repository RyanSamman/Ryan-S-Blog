import * as React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import Skeleton from 'react-loading-skeleton'

const Tweet: React.FC<PropTypes> = ({ id, height = 500 }) => {
	return (
		<center>
			<TwitterTweetEmbed
				tweetId={id}
				placeholder={<Skeleton height={height} />}
			/>
		</center>
	)
}

type PropTypes = {
	id: string
	height: number
}

export default Tweet