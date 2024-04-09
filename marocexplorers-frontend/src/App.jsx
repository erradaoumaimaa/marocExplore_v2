import { useState } from 'react'
import './App.css'
import Routes from './routes/Router'
import AuthProvider from 'src/providers/AuthProvider'

function App() {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}

export default App
