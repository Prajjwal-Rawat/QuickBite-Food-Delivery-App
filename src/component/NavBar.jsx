import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Link } from 'react-scroll'
import { StoreContext } from '../context/StoreContext'


const NavBar = ({ setSignUp, isLoggedIn, setIsLoggedIn }) => {


    const { cartItem } = useContext(StoreContext);


    return (
        <div className='border-b border-slate-300'>
            <nav className='flex  items-center py-[20px] justify-between'>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'inactive' : '')}>
                    <h1 className='w-1/2 text-[12px] lg:w-full lg:text-xl cursor-pointer flex flex-col items-center font-bold text-red-400'>QuickBite <p>Eat your Cravings</p></h1>
                </NavLink>




                <div className='hidden md:flex lg:flex gap-[20px] text-[#49557e] text-[18px]'>
                    <NavLink to='/' >
                        Home
                    </NavLink>

                    <Link activeClass='active' spy={true}
                        className='cursor-pointer' to="explore-menu" smooth={true} duration={500}>
                        Menu
                    </Link>

                    <Link activeClass='active' spy={true}
                        className='cursor-pointer' to="mobile-app" smooth={true} duration={500} >
                        Mobile App
                    </Link>

                    <Link className='cursor-pointer' to='contact-us-detail' smooth={true} duration={500}>
                        Contact Us
                    </Link>
                </div>

                <div className='gap-[20px] flex lg:gap-[40px] items-center cursor-pointer'>
                    <img src={assets.search_icon} className='w-[20px] md:w-[30px]' />
                    <div className='relative'>
                        <NavLink to='/cart'>
                            <img src={assets.basket_icon} className='w-[20px]  md:w-full' />
                            <div className={`${Object.keys(cartItem).length ? 'min-w-[10px] min-h-[10px] bg-red-500 rounded-full  right-[-8px] bottom-7 absolute' : 'hidden'}`}></div>
                        </NavLink>
                    </div>
                    <div className='flex gap-2'>

                        <button onClick={() => isLoggedIn ? setIsLoggedIn(false) : setSignUp(true)}
                            className='py-[7px] text-[10px] px-[20px]  bg-transparent lg:text-[16px] text-[#49557e] shadow-lg lg:py-[10px] border-red-300 rounded-[50px] transition-all duration-[0.4s] border lg:px-[30px] hover:bg-[#fff4f2] active:shadow-none'>
                            {isLoggedIn ? 'LogOut' : 'SignUp'}
                        </button>

                        <button className={`${isLoggedIn ? 'py-[7px] text-[10px] px-[20px]  bg-transparent lg:text-[16px] text-[#49557e] shadow-lg lg:py-[10px] border-red-300 rounded-[50px] transition-all duration-[0.4s] border lg:px-[30px] hover:bg-[#fff4f2] active:shadow-none' : 'hidden'}`}>
                            My Profile
                        </button>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default NavBar