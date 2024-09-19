import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div>
        <div className='flex flex-col gap-[20px]'>
            <h1 className='text-2xl text-[#262626] font-semibold'>Explore Our Menu</h1>
            <p className='max-w-[60%] text-[#4b4949]'>"Satisfy Your Cravings—Browse Our Menu and Find Your Flavor! With a diverse selection of mouthwatering dishes crafted to delight every palate</p>
        </div>
       <div className='flex justify-between items-center gap-[30px] text-center my-[20px]'>
        {
            menu_list.map((item, index) => 
              <div key={index} onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}>
                <img className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-all duration-[0.2s] ${category === item.menu_name ? "border-4 p-1 border-red-500" : ''}`} 
                src={item.menu_image} />
                <p className='mt-[10px] text-[#747474] cursor-pointer font-semibold hover:text-black'>{item.menu_name}</p>
              </div>
            )
        }
       </div>
       <hr className='h-[2px] bg-slate-300 m-[10px]'/>
    </div>
  )
}

export default ExploreMenu
