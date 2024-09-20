import React from 'react'
import NavBar from './component/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='w-[80%] m-auto flex-grow'>

      <NavBar/>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/order' element = {<PlaceOrder/>}/>
      </Routes>

      </div>
      
      <Footer/>

    </div>
  )
}

export default App

