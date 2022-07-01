import React, {useEffect, useState} from "react";
import Products from "../../src/components/Products/Products";
import Link from "next/link";
import Header from "../../src/components/Prod-header";
function Product() {
  
    

/* 
useEffect(()=>{
  data =data
} ) */


  return (
    <>

    <Header />
      
      
  <Products   />
        </>
  )
}

export default Product;