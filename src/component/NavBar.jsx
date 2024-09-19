import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const NavBar = () => {
    
    

    return (
        <div>
            <nav className='flex items-center py-[20px] justify-between'>
                <h1 className='cursor-pointer flex flex-col items-center font-bold text-red-400'>QuickBite <p>Eat your Cravings</p></h1>
                <div className='flex gap-[20px] text-[#49557e] text-[18px]'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                    <NavLink to='/menu'>
                        Menu
                    </NavLink>
                    <NavLink to='/mobileapp'>
                        Mobile App
                    </NavLink>
                    <NavLink to='/contactus'>
                        Contact Us
                    </NavLink>
                </div>

                <div className='flex gap-[40px] items-center cursor-pointer'>
                    <img src={assets.search_icon} />
                    <div className='relative'>
                        <img src={assets.basket_icon} />
                        <div className='min-w-[10px] min-h-[10px] bg-red-500 rounded-full  right-[-8px] bottom-7 absolute'></div>
                    </div>
                    <button className='bg-transparent text-[16px] text-[#49557e] shadow-lg py-[10px] border-red-300 rounded-[50px] transition-all duration-[0.4s] border px-[30px] hover:bg-[#fff4f2] active:shadow-none'>
                    Sign In
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default NavBar