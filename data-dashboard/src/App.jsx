import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <>
      <div>
        <h1>Data Dashboard for Breweries</h1>
        <Card></Card>
      </div>
    </>
  )
}

export default App
