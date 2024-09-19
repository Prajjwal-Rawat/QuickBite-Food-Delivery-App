import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
       <header className='relative'>
        <img src={assets.header_img} />
        <div className=' absolute  bottom-20 px-12'>
        <h2 className='text-6xl text-white'>Order Your <br/> Favourite Food Here</h2>
        <p className='text-slate-200 mt-2'>"Elevate your dining experience with our curated <br/> selection of dishes, crafted to delight your taste buds and fit your lifestyle!"</p>
        <button className='mt-4 text-[#747474] font-semibold shadow-lg shadow-black py-2 px-4 bg-white rounded-[50px] active:shadow-none'>View Menu</button>
        </div>
       </header>
    </div>
  )
}

export default Header
