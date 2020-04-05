import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import './App.css'
import Wrapper from './Wrapper'

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
        // console.log(data)
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

  return ( currentInfo ?
    <Container>
      <Wrapper data={ currentInfo } />      
    </Container>
    :
    <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }} />
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
`