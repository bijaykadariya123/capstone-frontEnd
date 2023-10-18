import { Link } from "react-router-dom";
// import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
// import React, {useState} from "react";



function Nav (props){
    return(
        // <div className="flex justify-between items-center h-24 max-w-[1640px] mx-auto px-2 text-white">
        <div className="flex justify-between items-center h-14 ">
            <h1 className=" shopify w-full text-3xl font-bold text-[#00df9a]"><Link to="/">Shopify</Link></h1>
            <ul className="flex">
                <li className="navBarright p-4">Login</li>
                <li className="navBarright p-4">Cart</li>
                <li className="navBarright p-4">About </li>
            </ul>
        </div>
    )
}

export default Nav;

