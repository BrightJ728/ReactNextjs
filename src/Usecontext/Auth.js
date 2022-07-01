import React, { useContext } from "react";

import { AuthContext } from "./context";
const Auth = () => {
// Now all the data stored in the context can
// be accessed with the auth variable
const auth = useContext(AuthContext);
console.log(auth.count);
return (
	<div>
          <span className="cart-item-count r bg-orange-700 rounded-l-xl text-white mr-10 ">{auth.count}</span>


	<button onClick={auth.login}>Click To Login</button>
	</div>
);
};
export default Auth;

