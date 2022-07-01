import React from 'react'
import {BsCart2} from "react-icons/bs";
import { useState } from 'react';
import Products from './Products/Products';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../Usecontext/context';
import CartSlidebar from './Cart/cartSlidebar';
import Link from 'next/link';
import ContextProvider from '../Usecontext/context';
export default function Navbar() {
  const auth= useContext(AuthContext);
  const router = useRouter()
  
  const [showCart , setShowCarts] = useState(false);
  return (
    
    <div className=' '>
          {showCart && <CartSlidebar/>}

    <nav className=' block flex-grow sm:flex sm:items-center  '>
      <>

        <div className='w-full block flex-grow sm:flex sm:items-center '>
         
          <ul className=' p-5 px-10 flex gray-200   bg:block ' >
            <li >
              <a href="#" className='block mt-4 sm:inline text-white  hover:text-red-500  px-3 py-2 rounded-md text-base font-medium ' >
                Home
              </a>
            </li>
            <li>
              <a href="products" className='block mt-4 sm:inline text-white  hover:text-red-500  px-3 py-2 rounded-md text-base font-medium' >
                Products
              </a>
            </li>
            <li>
              <a href="about" className=' mt-4 sm:inline text-white  hover:text-red-500  px-3 py-2 rounded-md text-base font-medium'>
                About
              </a>
            </li>

        </ul>

        </div>
        <img src="https://vanilla-js-store.netlify.app/images/logo-white.svg" className='nav-logo mr-60 ' alt="logo"  />

        <div className="toggle-container mr-20  " >
          <button className="toggle-cart" onClick={()=>setShowCarts(!showCart)}>
            <BsCart2 className='text-black'/>
          </button>
          <span className="cart-item-count r bg-orange-700 rounded-l-xl   ">{auth.countCart}</span>
        </div>
        </>
    </nav> 
    
    </div>
    
  )
} 
