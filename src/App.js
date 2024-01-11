import React from 'react'
import { Header } from './component' 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
      {/* <Route path="/" element={ <Header/> }/> */}
   </Routes>
   </BrowserRouter>
  )
}

export default App