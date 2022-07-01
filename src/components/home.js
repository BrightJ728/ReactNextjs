import React, { useContext } from 'react'
import Image from 'next/image'
import {BsCart2} from "react-icons/bs";
import {GoSearch} from "react-icons/go";
import { useState } from 'react';
import data from '../../src/data/data'
import { AuthContext } from '../Usecontext/context';
import ContextProvider from '../Usecontext/context';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Home =()=> {
    const [item, setData]=useState(data);
    const auth=useContext(AuthContext)
    const router =useRouter()

    const handleSearch = (data) => {
        router.push({
  pathname: `products/${data.id}`,
   query:data
});

      
    };




  return (
    <div> 
       <h1 className='text-4xl justify-center text-center mb-20 mt-20' >/Featured</h1>


      {item.slice(0,3).map((data)=>{
        const {id, name, name_id, price, image, description}=data;

        return(
        <article key={id} className = "products ml-3  inline-block sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Image src={image} width={400} height={300} className=" image mr-0.5 md:w-6/12 sm:w-4/4 lg:w-2/5 " />
                <div className='align-center'>
                    <h4>{name}</h4>
                    <p>{name_id}</p>
                   {price && <p> ${price} </p>}
                </div>


                <div className='product-icons '>
             <button onClick={() => handleSearch(data)} className='product-icon'><i className='GoSearch'><GoSearch/></i></button>
              
              
              <button onClick={auth.increment} className='product-icon' ><i><BsCart2/></i></button>

                </div>

                {/* <Link href=""></Link> */}
                  </article>

            

        )
            
      })}
    </div>
  )
  
}

export default Home;
