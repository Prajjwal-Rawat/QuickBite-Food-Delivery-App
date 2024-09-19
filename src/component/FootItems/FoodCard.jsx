import React from 'react'

const FoodCard = ({item}) => {
  return (
    <div>
        <div>
            <img src= {item.image} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
    </div>
  )
}

export default FoodCard
