
import React, { useState, useEffect,useLayoutEffect } from "react";
import Auth from "./Auth";
import Navbar from "../components/navbar";
import Product from "../../pages/products";
import CartSlidebar from "../components/Cart/cartSlidebar";
export  const AuthContext = React.createContext({countCart:0,increment:()=>{}});

const ContextProvider = (props) => {
//using the state to dynamicallly pass the values to the context

const [countCart, setCount] = useState(0);

 const increment=()=>{
 
    setCount(countCart + 1);


    
  
};

 
useLayoutEffect(() => {
  if (sessionStorage.getItem('state')) {
    setCount(parseInt(sessionStorage.getItem('state')))
  } else {
    sessionStorage.setItem('state', countCart.toString())
  }
}, [])
useEffect(() => {
  sessionStorage.setItem('state', countCart.toString())
}, [countCart])
return (
	<AuthContext.Provider value={{ countCart: countCart, increment:increment }}>
      {props.children}
	</AuthContext.Provider>
);
};
export default ContextProvider;