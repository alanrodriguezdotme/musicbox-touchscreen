import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import * as _ from 'underscore'

let order = _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const Screensaver = () => {
	let [ index, setIndex ] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			let i = index
			if (i < 9) {
				setIndex(i => i + 1)
			} else {
				setIndex(0)
			}
		}, 6000)

		return () => clearInterval(interval)
	}, [])

	return (
		<Container>
			<img src={ "img/" + order[index] + ".gif" } />
		</Container>
	)
}

export default Screensaver

const fadeOut = keyframes`
	0% { opacity: 0; }
	10% { opacity: 1; }
	90%{ opacity: 1; }
	100% { opacity: 0;}
`

const Container = styled.div`
	width: 480px;
	height: 320px;
	text-align: center;
	animation-name: ${fadeOut};
	animation-duration: 6000ms;
	animation-direction: forwards;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
	/* opacity: 0; */

	img {
		height: 100%;
	}
`
