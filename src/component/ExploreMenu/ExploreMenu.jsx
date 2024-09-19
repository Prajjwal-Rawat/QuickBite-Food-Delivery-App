import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div>
        <div className='flex flex-col gap-[20px]'>
            <h1 className='text-2xl text-[#262626] font-semibold'>Explore Our Menu</h1>
            <p className='max-w-[60%] text-[#4b4949]'>"Satisfy Your Cravings—Browse Our Menu and Find Your Flavor! With a diverse selection of mouthwatering dishes crafted to delight every palate</p>
        </div>
       <div className='flex justify-between items-center gap-[30px] text-center my-[20px] overflow-x-scroll '>
        {
            menu_list.map((item, index) => 
              <div key={index}>
                <img src={item.menu_image} />
                <p>{item.menu_name}</p>
              </div>
            )
        }
       </div>
       <hr className='h-1 bg-slate-400'/>
    </div>
  )
}

export default ExploreMenu
