import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
      <header className='relative'>
        <img src={assets.header_img} className='w-full h-[70vh] object-cover' alt="Header Image" />
        <div className='absolute bottom-4 left-4 sm:bottom-6 sm:left-6 p-4 animate-pulse'>
          <h2 className='text-2xl sm:text-3xl lg:text-6xl text-white font-bold'>
            Order Your <br /> Favourite Food Here
          </h2>
          <p className='text-slate-200 mt-2 text-sm sm:text-base'>
            "Elevate your dining experience with our curated <br /> selection of dishes, crafted to delight your taste buds and fit your lifestyle!"
          </p>
          <button className='mt-4 text-[#747474] font-semibold shadow-lg shadow-black py-2 px-4 bg-white rounded-[50px] active:shadow-none'>
            View Menu
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
