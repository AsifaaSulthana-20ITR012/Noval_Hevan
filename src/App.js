import React from 'react'
import Search from './books/App.jsx'
import  Navbar  from './navbar/Navbar.jsx'
import {  Route, Routes } from 'react-router-dom';
import Home from "./Home/SlideShow.jsx";
import Explore from './explore/Explore.jsx';

export default function App() {

  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
       <Route path='/search' element={<Search/>}/>
    
      </Routes>
    </div>
  )
}
