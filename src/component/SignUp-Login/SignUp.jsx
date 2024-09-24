import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const SignUp = ({setSignUp, setIsLoggedIn}) => {

    const [title, setTitle] = useState('Sign Up');
    const [formData, setFormData] = useState({Name: '', Email: '', password: '', policy: false});

    


    function ToggleTitle(){
        if(title === 'Sign Up'){
            setTitle('Login')
        }else{
            setTitle('Sign Up');
        }
    }
    
    function HandleChange(event){
        const {name, value, checked, type} = event.target;

        setFormData(prev => {
            return{
                ...prev,
                [name]: type === 'checkbox' ? checked : value 
            }
        })
    }


    function HandleSubmit(event){
        event.preventDefault();

        console.log('Form Details are saved');
        
        setIsLoggedIn(true);
        setSignUp(false);

    }

  return (
    <div className='fixed z-10 w-full h-full bg-[#0a0a0aae] flex'>
        <form onSubmit={HandleSubmit} className='flex flex-col w-[500px] text-[#121212c4] gap-[25px] bg-[#e0cfcf94] py-[25px] px-[30px] rounded-[8px] text-[14px] justify-center m-auto'>
             <div className='flex justify-between'>
                <h2 className='text-2xl font-bold underline text-black'>{title}</h2>
                <img className='w-[30px] h-[30px] cursor-pointer hover:bg-white rounded-full p-2' onClick={() => setSignUp(false)}
                src={assets.cross_icon}/>
             </div>
             
             
             <div className={`${title === 'Sign Up' ? 'flex flex-col gap-1' : 'hidden'}`}>
                
                <label htmlFor="Name" className='text-[17px] font-semibold'>Enter Your Name:</label>
                <input className='w-full p-3 rounded-[8px] bg-slate-700 text-white'
                required 
                type="text"
                placeholder='Your name'
                name='Name'
                id='Name'
                onChange={HandleChange}
                value={formData.Name}/>

             </div>

             <div className='flex flex-col gap-1'>
                
               <label htmlFor="Email" className='text-[17px] font-semibold'>Enter Your Email:</label>
                <input className='w-full p-3 rounded-[8px] bg-slate-700 text-white'
                required 
                type='email'
                placeholder='Your email'
                name='Email'
                id='Email'
                onChange={HandleChange}
                value={formData.Email}/>

             </div>

             <div className='flex flex-col gap-1'>

               <label htmlFor="password" className='text-[17px] font-semibold'>Enter Password:</label>
                <input className='w-full p-3 rounded-[8px] bg-slate-700 text-white'
                required 
                type='password'
                placeholder='Password'
                name='password'
                id='password'
                onChange={HandleChange}
                value={formData.password}/>

             </div>

             <button className='bg-yellow-300 hover:shadow-lg text-black hover:bg-yellow-400  active:scale-95 active:shadow-none py-2 rounded-[8px] font-semibold text-[17px]'> {title === 'Sign Up' ? "Create Account" : "Login" } </button>

             <div className='flex gap-2'>
                <input type='checkbox'
                required 
                name="policy" 
                id="checkbox"
                onChange={HandleChange}
                checked ={formData.policy}/>

                <label htmlFor="checkbox">By continuing, I agree to the terms of use & privacy policy.</label>
             </div>

             <p className='text-[15px]'>{title === 'Sign Up' ? "Already have account?" : "Create a new account? "} <span className='font-bold cursor-pointer' onClick={ToggleTitle}>Click Here</span> </p>
        </form>
    </div>
  )
}

export default SignUp