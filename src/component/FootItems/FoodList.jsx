import React, { useContext } from 'react'
import FoodCard from './FoodCard'
import { StoreContext } from '../../context/StoreContext'

const FoodList = ({ category }) => {

   const { food_list } = useContext(StoreContext);

   return (
      <div>
         <div className='mt-[30px]'>
            <h2 className='font-semibold text-2xl'>Top Dishes Near You</h2>
         </div>

         <div className='flex flex-wrap gap-[30px] mt-[30px] justify-center'>
            {food_list.map((item) => {
               if (category === "All" || category === item.category)
                  return <FoodCard item={item} key={item.id} />
            })}
         </div>
      </div>
   )
}

export default FoodList