import React from 'react'
import styled from 'styled-components'
import { ReactComponent as IconPlay } from './play-solid.svg'
import { ReactComponent as IconPause } from './pause-solid.svg'

const Wrapper = ({ data }) => {
	function renderArtists(artists) {
		let array = artists.split(';')
		return array.join(', ')
	}

	return (
		<Container>
			<ImageWrapper>
				<Image>
					<img src={ "http://musicbox/api/cover.php?t=" + new Date().getTime() } />
				</Image>
				<Status>
					{ data.state === 'play' ?
						<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" className="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#00ff00" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg> 
						:
						<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pause" className="svg-inline--fa fa-pause fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"></path></svg>
					}
				</Status>
			</ImageWrapper>
			<Info>
				<Title>{ data.title }</Title>
				<Artist>{ renderArtists(data.artist) }</Artist>
				<Album>{ data.album }</Album>
			</Info>
		</Container>
	)
}

export default Wrapper

const Container = styled.div`
	width: 480px;
	height: 320px;
	display: flex;
`

const ImageWrapper = styled.div`
	width: 240px;
	height: 100%;	
	padding: 8px;
	display: flex;
	flex-direction: column;
`

const Image = styled.div`
	width: 100%;
	height: 240px;
  background-size: cover;
  background-position: center center;
	background-repeat: no-repeat;
	
	img {
		width: 100%;
		height: 100%;
	}
`

const Status = styled.div`
	width: 100%;
	height: 100%;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: 24px;
	}
`

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
	padding: 8px;
	overflow-x: hidden;
	overflow-y: auto;
`

const Title = styled.div`
	font-size: 24px;
	font-weight: bold;
	line-height: 28px;
	font-family: "Playfair";
`

const Artist = styled.div`
	margin-top: 20px;
	font-size: 16px;
	line-height: 20px;
	font-weight: 600;
	font-family: "Montserrat";
`

const Album = styled.div`
	margin-top: 8px;
	font-size: 14px;
	line-height: 20px;
	font-weight: bold;
	font-family: "Montserrat";
`