import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Hero from './Componments/Hero'
import Admindashboard from './Admin/Admindashboard'
import GetDetails from './Admin/Getdetais'
 
 
 
 


const Routing = () => {
  return (
    <>
    <Routes>
      
    <Route path="/" element={<Hero/>} />
       <Route path='/adimdashboard' element={<Admindashboard/>}>
       <Route path='get' element={<GetDetails/>}/>
       </Route>
       </Routes>
    </>
  )
}

export default Routing
 