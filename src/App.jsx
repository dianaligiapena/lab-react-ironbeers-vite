import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AllBeers from './components/AllBeers'
import SingleBeer from './components/SingleBeer'
import axios from 'axios'
import RandomBeer from './components/RandomBeer'

function App() {

  const [beers, setBeers] = useState([])

  const fetchData = async () => {
    const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');

    setBeers(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    console.log(beers)
  }, [beers])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<AllBeers beers = { beers } />} />
        <Route path='/beers/:id' element={<SingleBeer beers = { beers } />} />
        <Route path='/random-beer' element={<RandomBeer />} />
      </Routes>
    </div>
  )
}

export default App
