import React from 'react'
import { assets } from '../../assets/assets'

const FoodCard = ({ item }) => {
  return (
    <div className='flex-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-slate-200  p-4 shadow-md transition-all duration-700 shadow-black hover:scale-110 '>
      <div>
        <div>
          <img className='w-[100%] rounded-t-[15px]' src={item.image} />
        </div>

        <div className='p-[10px] flex items-center justify-between '>
          <h2 className='font-semibold text-[20px]'>{item.name}</h2>
          <img className='w-[70px]' src={assets.rating_starts} />
        </div>

        <div className='flex flex-col justify-center p-2'>
          <p className='text-[#676767] text-[13px] text-start'>{item.description}</p>
          <p>{item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
