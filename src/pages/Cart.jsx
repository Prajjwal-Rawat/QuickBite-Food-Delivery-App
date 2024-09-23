import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { NavLink } from 'react-router-dom';

const Cart = () => {

       
  const { food_list, cartItem, RemoveItem, CartTotalAmount } = useContext(StoreContext);



  if (Object.keys(cartItem).length <= 0) {
    return (
      <div className='flex flex-col items-center m-[50px] gap-2'>

        <img className='w-[20rem]' src="https://media.giphy.com/media/d2ItDZZumUI6Y/giphy.gif?cid=790b7611g1lj88viz6rqe3ptzq4a9voe1o1vytmiyvokr3yv&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
        <h2 className='text-2xl font-bold'>Opps!</h2>
        <p className='text-slate-500 leading-7 tracking-wider'> Your cart is Empty</p>
        <p className='text-slate-500 leading-7 tracking-wider' >Feeling Hungry! Don't worry our delicious dishes here for you</p>

        <NavLink to='/'>

          <button
            className='bg-yellow-400 w-[20rem] text-slate-800 p-3 rounded-md font-bold mt-3 hover:scale-105 active:scale-95 transition-all duration-300'>
            Explore QuickBite
          </button>

        </NavLink>
      </div>
    )
  }

  return (
    <div className='lg:m-[50px] m-[20px]'>

      <div className=' grid'>

        <div className='grid grid-flow-col grid-cols-5  ml-[10px] text-gray-400'>
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p className='ml-3'>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {
          food_list.map((item) => {
            
            if (cartItem[item._id] > 0) {
              return (
                <div key={item._id}>
                  <div className='my-[10px] grid grid-flow-col grid-cols-5 space-x-[-13px]'>
                    <img className='w-[50px]' src={item.image} />
                    <p className='whitespace-nowrap'>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${cartItem[item._id] * item.price}</p>
                    <p onClick={() => RemoveItem(item._id)} className='cursor-pointer hover:bg-slate-300 rounded-full flex items-center justify-center w-[20px] h-[20px] '>x</p>
                  </div>
                  <hr />
                </div>
              )
            }
          })
        }

        <div className='flex lg:gap-[12rem] lg:flex-row flex-col-reverse gap-3'>

          <div className='flex flex-col lg:w-[500px] gap-2 mt-[40px]'>
            <h2 className='text-2xl font-bold mb-2'>Total Cart</h2>
            <div className='flex justify-between'>
              <p>Sub-Total</p>
              <p>${CartTotalAmount()}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <p>Delivery Fee</p>
              <p>${20}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
              <p>Total</p>
              <p>${CartTotalAmount() + 20}</p>
            </div>
            <button className='bg-red-500 p-2 rounded-md w-[200px] lg:w-[300px] mt-3 text-white font-bold shadow-md active:shadow-none shadow-black'>Proceed To Checkout</button>

          </div>

          <div className='mt-[50px] md:flex md:justify-start md:flex-col'>
            <h2>If you have a promo code, Enter it here</h2>

            <div className='flex bg-slate-300 rounded-md mt-[10px] justify-between items-center'>

              <input className='bg-transparent uppercase outline-none text-center w-[300px]'
                type="text"
                placeholder='promo code' />
              <button className='bg-black text-white py-[8px] px-[15px] rounded-[4px] active:scale-95'>Submit</button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
