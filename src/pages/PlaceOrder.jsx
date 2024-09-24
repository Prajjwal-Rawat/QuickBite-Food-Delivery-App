import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/StoreContext'

const PlaceOrder = () => {

  const { CartTotalAmount } = useContext(StoreContext);

  const [delieveryData, setDelieveryData] = useState({firstName: '', lastName: '', email: '', street: '', cityName: '', stateName: '', zipCode: '', CountryName: '', phoneNo: '' })


  function HandleChange(event) {
    const {name, value} = event.target;

    setDelieveryData((prev) => {
      return{
        ...prev,
        [name]: value
      }
    })
  }


  function SubmitDelieveryData(){
    console.log('Delievery Data Detail is ');
    console.log(delieveryData);
  }

  return (
      <div className='lg:flex lg:m-[80px] mt-[30px] mb-[30px]  w-fit gap-[9rem] justify-between'>

        <form className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold'>Delivery Information</h2>

          <div className='flex mt-2 text-slate-900 gap-5'>

            <div>
              <label htmlFor="firstName">First Name:</label>
              <input className='bg-slate-300 p-2 w-full rounded-md mt-1'
                type="text"
                name="firstName"
                placeholder='First Name'
                onChange={HandleChange}
                id="firstName"
                value={delieveryData.firstName}/>
            </div>

            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input className='bg-slate-300 p-2 w-full rounded-md mt-1'
                type="text"
                name="lastName"
                placeholder='Last Name'
                onChange={HandleChange}
                id="lastName"
                value={delieveryData.lastName}/>

            </div>

          </div>

          <div className='flex flex-col'>
            <label htmlFor="email">Email Address</label>
            <input className='bg-slate-300 p-2 rounded-md mt-1 '
              type='email'
              name='email'
              placeholder='Email Address'
              onChange={HandleChange}
              id='email'
              value={delieveryData.email}/>
          </div>

          <div>
            <label htmlFor="street">Street Address</label>
            <input className='bg-slate-300 p-2 w-full rounded-md mt-1'
              type="text"
              name="street"
              placeholder='Street'
              id="street"
              onChange={HandleChange}
              value={delieveryData.street}/>
          </div>

          <div className='flex gap-5'>

            <div>
              <label htmlFor="cityAddress">City</label>
              <input className='bg-slate-300 p-2 w-full rounded-md mt-1'
                type="text"
                name="cityName"
                id="cityAddress"
                list='city'
                placeholder='City'
                onChange={HandleChange}
                value={delieveryData.cityName}/>

              <datalist id='city' >

                <option value='Mumbai' />
                <option value='Delhi' />
                <option value='Bengaluru' />
                <option value='Chennai' />

              </datalist>
            </div>


            <div>
              <label htmlFor="stateAddress">State</label>
              <input className='bg-slate-300 p-2 w-full rounded-md mt-1'
                type="text"
                name="stateName"
                id="stateAddress"
                list='state'
                placeholder='State'
                onChange={HandleChange}
                value={delieveryData.stateName}/>

              <datalist id='state' >

                <option value='Maharashtra' />
                <option value='Delhi' />
                <option value='Karnataka' />
                <option value='Tamil Nadu' />

              </datalist>
            </div>

          </div>

          <div className='flex gap-5'>

            <div>

              <label htmlFor="zipCode">ZIP Code:</label>
              <input className='bg-slate-300 p-2 w-full rounded-md mt-1'
                type='number'
                name="zipCode"
                id="zipCode"
                placeholder='eg.110078'
                onChange={HandleChange}
                value={delieveryData.zipCode} />

            </div>

            <div>

              <label htmlFor="Country">Country</label>
              <input className='bg-slate-300 p-2 w-full rounded-md mt-1'
                type="text"
                name="CountryName"
                id="Country"
                list='country'
                placeholder='Country'
                onChange={HandleChange}
                value={delieveryData.CountryName}/>

              <datalist id='country' >

                <option value='India' />
                <option value='United States' />
                <option value='Canada' />
                <option value='Russia' />

              </datalist>

            </div>

          </div>

            <div className='flex flex-col'>
               <label htmlFor="phoneNumber">Phone Number</label>
               <input className='bg-slate-300 p-2 w-full rounded-md mt-1'
               type='number' 
               name="phoneNo"
               placeholder='eg-0291929932' 
               id="phoneNumber"
               onChange={HandleChange}
               value={delieveryData.phoneNo} />
            </div>

        </form>

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
          <button onClick={SubmitDelieveryData}
            className='bg-red-500 p-2 rounded-md w-[200px] lg:w-[300px] mt-3 text-white font-bold shadow-md active:shadow-none shadow-black'>
            Proceed To Payment
          </button>

        </div>
      </div>
  )
}

export default PlaceOrder
