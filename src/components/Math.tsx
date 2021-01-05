import React from 'react'
import { BlockMath } from 'react-katex'

const Math = ({ className, math, children }) => (
	<div className={className}>
		<BlockMath
			math={math}
			errorColor={'#cc0000'}
		>
			{children}
		</BlockMath>
	</div>
)

export default Math