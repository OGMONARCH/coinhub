import React from 'react'
import { Header, Navbar } from './component' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
      <Route path="/" element={ <Header/> }/>
   </Routes>
   </BrowserRouter>
  )
}

export default App