import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] py-[20px] px-[8vw]  pt-[80px]'>
       <div className='w-[100%] flex justify-between items-center'>
          <div className='w-[40%] flex flex-col gap-4'>

            <h1 className='text-4xl font-bold text-red-500'>QuickBite</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adi
            pisicing elit. Exercitationem beatae nostrum iste cupiditate! 
            Quos quaerat quidem laudantium dicta porro iure aspernatur ab? 
            Minus aliquam molestias libero, obcaecati harum temporibus distinctio.</p>
            <div className='flex gap-2 mt-2 animate-bounce hover:animate-none w-[20%]'>
                <img className='text-black cursor-pointer' src={assets.facebook_icon} />
                <img className='text-black cursor-pointer' src={assets.twitter_icon}  />
                <img className='text-black cursor-pointer' src={assets.linkedin_icon} />
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <h2 className='text-3xl font-bold'>Company</h2>
             <NavLink to='/'>
                Home
             </NavLink>
             <NavLink to='/aboutus'>
                About us
             </NavLink>
             <NavLink to='/delivery'>
                Delivery
             </NavLink>
             <NavLink to='/policy'>
                Privacy Policy
             </NavLink>
          </div>

          <div className='flex flex-col gap-5'>
            <h2 className='text-3xl font-bold'>Get In Touch</h2>
            <ul className='mb-14'>
                <li>+9-130-343-7890</li>
                <NavLink to='mailto:prajjwalrawat48@gmail.com'>
                 prajjwalrawat48@gmail.com
                </NavLink>
            </ul>
          </div>
       </div>
       < hr  className='w-[100%] h-[1px] m-[10px] bg-white '/>
       <p className='mt-2'>Copyright 2024 © QuickBite.com - All RIght Reserved</p>
    </div>
  )
}

export default Footer
