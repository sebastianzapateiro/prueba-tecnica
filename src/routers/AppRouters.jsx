import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DescriptionPokemon from '../components/DescriptionPokemon'
import DescriptionPoemon from '../components/DescriptionPokemon'
import Home from '../components/Home'
import NavBar from '../components/NavBar'

function AppRouters() {
  return (   
    
    <BrowserRouter>
    <NavBar/> 

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon/:name" element={<DescriptionPokemon />} />
        
    </Routes>
</BrowserRouter>
  )
}

export default AppRouters