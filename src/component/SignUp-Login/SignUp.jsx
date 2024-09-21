import React, { useState } from 'react'
import { assets } from '../../assets/assets';

const SignUp = ({setSignUp}) => {

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
    }

  return (
    <div>
        <form onSubmit={HandleSubmit}>
             <div>
                <h2>{title}</h2>
                <img onClick={() => setSignUp(false)}
                src={assets.cross_icon}/>
             </div>

             <div>
                
                <label htmlFor="Name">Enter Your Name:</label>
                <input
                required 
                type="text"
                placeholder='Your Name'
                name='Name'
                id='Name'
                onChange={HandleChange}
                value={formData.Name}/>

             </div>

             <div>
                
               <label htmlFor="Email">Enter Your Email:</label>
                <input
                required 
                type='email'
                placeholder='Your Email'
                name='Email'
                id='Email'
                onChange={HandleChange}
                value={formData.Email}/>

             </div>

             <div>

               <label htmlFor="password">Enter Password:</label>
                <input
                required 
                type='password'
                placeholder='Password'
                name='password'
                id='password'
                onChange={HandleChange}
                value={formData.password}/>

             </div>

             <button> {title === 'Sign Up' ? "Create Account" : "Login" } </button>

             <div>
                <input type='checkbox'
                required 
                name="policy" 
                id="checkbox"
                onChange={HandleChange}
                checked ={formData.policy}/>

                <label htmlFor="checkbox">By continuing, I agree to the terms of use & privacy policy.</label>
             </div>

             <p>{title === 'Sign Up' ? "Already have account?" : "Create a new account? "} <span onClick={ToggleTitle}>Click Here</span> </p>
        </form>
    </div>
  )
}

export default SignUp