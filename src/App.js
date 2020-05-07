import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import './App.css'
import Wrapper from './Wrapper'
import Screensaver from './Screensaver'

let apiUrl = 'http://musicbox/api/'
// let apiUrl = 'http://localhost/api/'

function App() {
  let [ currentInfo, setCurrentInfo ] = useState(null)

  useEffect(() => {
    getPlayerInfo()
    setInterval(getPlayerInfo, 3000)
  }, [])

  function getPlayerInfo() {
    window.$.ajax({
      url: apiUrl + 'player.php'
    }).success(data => {
      if (data) {
        console.log(data)
        let { artist, title, album, duration, state, file } = data
        let newData = { artist, title, album, duration, state, file }

        if (!currentInfo) {
          setCurrentInfo(newData)
        } else if (data.title !== currentInfo.title) {
          console.log({data})
          setCurrentInfo(newData)
        } 

      } else {
        setCurrentInfo(null)
      }
    })
  }

  return (
    <Container>
      { currentInfo && currentInfo.title ? 
        <Wrapper data={ currentInfo } />
        :
        <Screensaver />
      }
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  overflow: hidden;
`