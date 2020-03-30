import React, { createContext, useState, useEffect } from 'react'
import io from 'socket.io-client'

let socket = io.connect('http://192.168.1.171:3000')

export const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
  let [ volumioState, setVolumioState ] = useState(null)
  let [ queue, setQueue ] = useState([])

  useEffect(() => {
    // send initial commands
    socket.emit('getState', '')
    socket.emit('getQueue', '')
    socket.emit('browseLibrary', { uri: 'playlists' })

    socket.on('pushState', data => { setVolumioState(data) })

    socket.on('pushBrowseLibrary', data => {
      console.log(data)
    })

    socket.on('pushQueue', data => {
      if (data.navigation) {
        setQueue(data.navigation.lists[0].items)
      }
    })
  }, [])

  const browse = () => {
    socket.emit('browseLibrary', { uri: 'playlists/Strong Songs'})
  }

  const addToQueue = uri => {
    socket.emit('addToQueue', { uri })
  }

  const play = uri => {
    socket.emit('removeFromQueue', { value: 0 })
    addToQueue(uri)
    socket.emit('play', { value: 0 })
  }

  function getQueue() {
    socket.emit('getQueue', '')
  }

  return (
    <GlobalContext.Provider value={
      {
        volumioState, setVolumioState,
        browse,
        addToQueue,
        play,
        queue,
        getQueue
      }
    }>
      { props.children }
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
