import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import './Navbar.css'
const Navbar = () => {
    const {quantity}= useSelector((store)=>{
       return store.cartReducer.cartQuantity 
    })
    return (
        <div className='navbar'>
           <Link to="/">Home</Link>
           <Link to="/user">User</Link>
           <Link to="/cart">
           <div className="cart_container">
                  <FaCartShopping fontSize="large"/>
                  <div className="cart_quantity">
                    {quantity}
                    </div>
                     
           
           </div></Link>
          
        </div>
    );
};

export default Navbar;