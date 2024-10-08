import React, { useState } from 'react'
import NavBar from './component/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Footer from './component/Footer'
import SignUp from './component/SignUp-Login/SignUp'

const App = () => {

  const [signUp, setSignUp] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className='flex flex-col min-h-screen'>
        
       {signUp ? <SignUp setSignUp = {setSignUp} setIsLoggedIn = {setIsLoggedIn}/> : <></>} 

      <div className='w-[80%] m-auto flex-grow'>

      <NavBar setSignUp = {setSignUp} isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/checkout' element = {<PlaceOrder/>}/>
      </Routes>

      </div>
      
      <Footer/>

    </div>
  )
}

export default App

