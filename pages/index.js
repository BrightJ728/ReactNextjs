import Head from 'next/head';
import {BrowserRouter as Router, Route,  Routes, BrowserRouter} from 'react-router-dom';
import Image from 'next/image'
import { Fragment, useState } from 'react';
import {BsCart2} from "react-icons/bs";
import {GoSearch} from "react-icons/go";
import CartSlidebar from '../src/components/Cart/cartSlidebar';
import Home from '../src/components/home';
import Navbar from '../src/components/navbar';
import ContextProvider from '../src/Usecontext/context';
import Link from 'next/link';
export default function Index() {
  

  return (
<>    
   {/* <CartSlidebar/>  */}
    <section className='bg-gradient-to-b hero  text-white '>

      <div className='hero-container text-white  pt-10 m-20 ' >
        <h1 className=' '>Rest, Relax, Unwind</h1>
        <p className='text-white m-6 md:text-sm'>Embrace your choices - we do</p>
        <Link href="./products" className='pl-3 text-9xl bg-black'>Show More</Link>
      </div>

    <div>
    </div>
    </section>



<Home />
</>
    )
}


