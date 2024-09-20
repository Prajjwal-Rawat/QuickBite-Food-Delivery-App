import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodCard = ({ item }) => {
    
  const {cartItem, AddtoCart, RemoveItem} = useContext(StoreContext);
  
  return (
    <div className='flex-auto relative w-full sm:w-1/2 md:w-1/3 lg:w-1/5 bg-slate-200  p-4 shadow-md transition-all duration-700 shadow-black hover:scale-110 '>
      <div>
        <div>
          <img className='w-[100%] rounded-t-[15px]' src={item.image} />
        </div>

        <div className='p-[10px] flex items-center gap-2 justify-between '>
          <h2 className='whitespace-nowrap text-ellipsis font-semibold text-[20px] '>{item.name}</h2>
          <img className='w-[70px]' src={assets.rating_starts} />
          {
            !cartItem[item._id] ? <img className='absolute bottom-[10.7rem] cursor-pointer right-6 ' onClick={() => AddtoCart(item._id)} src={assets.add_icon_white} /> : 
            <div className='absolute bottom-[10.7rem] cursor-pointer right-[1.4rem]  flex gap-2 p-[6px] bg-white rounded-[50px] items-center '>
              <img className='w-[30px]' onClick={() => RemoveItem(item._id)} src={assets.remove_icon_red}/>
              <p>{cartItem[item._id]}</p>
              <img className='w-[30px]' onClick={() => AddtoCart(item._id)} src={assets.add_icon_green}/>
            </div>
          }
        </div>

        <div className='flex flex-col justify-center p-2'>
          <p className='text-[#676767] text-[13px] text-start'>{item.description}</p>
          <p className='text-[22px] font-semibold text-red-300 mt-[10px]'>${item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
