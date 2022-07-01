import React, { useState } from "react";
import Auth from "../../src/Usecontext/Auth";
import { AuthContext } from "../../src/Usecontext/context";
import Navbar from "../../src/components/navbar";
import Product from "../products";
const App = () => {
//using the state to dynamicallly pass the values to the context


const [count, setCount] = useState(9);
const login=()=>{

    setCount(count + 1);
    
  
};
return (
	<React.Fragment>
	<AuthContext.Provider value={{ count: count, login: login }}>
	
	</AuthContext.Provider>
	</React.Fragment>
);
};
export default App;
