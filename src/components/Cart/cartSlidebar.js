import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const CartSlidebar =()=> {

  const [showCart , setShowCart] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.5)]">
      <div className=" p-10 pl-20 text-black h-full grid grid-rows-[1fr_4fr_1fr] ease-in-out duration-200 fixed top-0 right-0  bg-gray-300 ">
        <div className="absolute">
          <button onClick={()=>setShowCart(!showCart)}><FaTimes  size={30}/></button>
        </div>
        <header>
          <div className="text-2xl">
            <h3>Your Bag</h3>
          </div>
        </header>
        <div className="">Cart Items</div>
        <footer>
          <div className="">
            <h3>Total : $ 0.00</h3>
          </div>
          <div className="">
            <button>Checkout</button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CartSlidebar;