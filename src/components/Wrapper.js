import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { GlobalContext } from '../contexts/GlobalContext'

const Wrapper = () => {
  let { browse, play, addToQueue, getQueue, volumioState, queue } = useContext(GlobalContext)

  useEffect(() => {
    console.log(volumioState)
    console.log(queue)
  }, [ volumioState, queue ]) 

  return (
    <Container>
      <div className="button" onClick={ () => browse() }>Browse</div>
      <div className="play" onClick={ () => play('mnt/INTERNAL/Alicia Keys/1-01 Girl On Fire.mp3') }>Play</div>
      <div className="addToQueue" onClick={ () => addToQueue() }>Add to queue</div>
      <div className="getQueue" onClick={ () => getQueue() }>Get queue</div>      
    </Container>
  )
}

export default Wrapper

const Container = styled.div`
  
`
