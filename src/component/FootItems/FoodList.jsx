import React, { useContext } from 'react'
import FoodCard from './FoodCard'
import { StoreContext } from '../../context/StoreContext'

const FoodList = ({category}) => {

   const {food_list} = useContext(StoreContext);

  return (
    <div>
       <div className= "flex w-full flex-wrap">
        {food_list.map((item) => {
            if(category === "All" || category === item.category)
           return <FoodCard item = {item} key={item.id}/>
        })}
       </div>
    </div>
  )
}

export default FoodList