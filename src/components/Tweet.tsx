import * as React from "react"
import { TwitterTweetEmbed } from "react-twitter-embed"
import Skeleton from "react-loading-skeleton"

const Tweet: React.FC<PropTypes> = ({ id, height = 500 }) => {
    return (
        <TwitterTweetEmbed
            tweetId={id}
            placeholder={<Skeleton height={height} />}
        />
    )
}

type PropTypes = {
    id: string
    height?: number
}

export default Tweet
