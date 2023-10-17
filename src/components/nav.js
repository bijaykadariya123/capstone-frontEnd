import { Link } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import React, {useState} from "react";



function Nav (props){
    const [nav, setNav] = useState(false)
    const handleNav = ()=>{
        setNav(!nav)
    }


    return(
        <div className="flex justify-between items-center h-24 max-w-[1440px] mx-auto px-2 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">Shopify</h1>
            <ul className="flex">
                <li className="p-4"><Link to="/">Home</Link> </li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
                <li className="p-4">About</li>   
            </ul>
            {/* <div onClick={handleNav} style={{cursor:'pointer'}} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={25}/>}
            </div>
            <div  className={!nav? "fixed left-0 top-0 w-[30%] h-0vh  bg-[#000300] ease-in-out duration-120": "fixed left-[-100%]"}>
                <h1 className=" pt-4 pl-2 text-3xl font-bold text-[#00df9a]">Shopify</h1>
                <ul className="pt-15 uppercase">
                    <li className="p-4 border-b border-gray-600" ><Link to="/">Home</Link> </li>
                    <li className="p-4 border-b border-gray-600" >About</li>
                    <li className="p-4 border-b border-gray-600" >Contact</li>
                    <li className="p-4">About</li>   
                </ul>
            </div> */}
 
        </div>
    )
}

export default Nav;

