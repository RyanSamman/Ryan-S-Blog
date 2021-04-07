import * as React from 'react'
import { Social } from '../types'
import Icon from './Icon'

export interface SocialIconsTypes {
    social: Social
}

export default function SocialIcons({ social }: SocialIconsTypes) {
    return (
        <>
            {Object.entries(social).map(([t, l]) => {
                return (
                    <Icon
                        className="mr-1"
                        key={t}
                        type={t as keyof Social}
                        link={l!}
                    />
                )
            })}
        </>
    )
}