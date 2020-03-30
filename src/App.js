import React from 'react'
import GlobalContextProvider, { GlobalContext } from './contexts/GlobalContext'
import Wrapper from './components/Wrapper'

function App() {

  return (
    <GlobalContextProvider>
      <Wrapper />
    </GlobalContextProvider>
  )
}

export default App