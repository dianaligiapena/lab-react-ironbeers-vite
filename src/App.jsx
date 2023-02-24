import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllBeers from './components/AllBeers'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers />} />
      </Routes>
    </div>
  )
}

export default App
