import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div id='mobile-app' className='flex items-center justify-center mt-[100px] text-[3vw] text-center font-bold'>
      <div className='w-[10rem] lg:w-full'>
        <p>For Better Experience Download <br/> QuickBite App</p>
        <div className=' w-fit m-auto flex flex-wrap items-center justify-center gap-5 mt-10 cursor-pointer mb-[50px] '>
            <img className='hover:scale-105' src={assets.play_store}  />
            <img className='hover:scale-105' src={assets.app_store}  />
        </div>
      </div>
    </div>
  )
}

export default AppDownload
