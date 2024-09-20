import React from 'react'
import { assets } from '../../assets/assets'

const FoodCard = ({ item }) => {
  return (
    <div className='flex-auto w-1/5 bg-slate-200  p-4 shadow-md transition-all duration-700 shadow-black hover:scale-110 '>
      <div>
        <div>
          <img src={item.image} />
        </div>

        <div>
          <h2>{item.name}</h2>
          <img src={assets.rating_starts} />
        </div>

        <div>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
