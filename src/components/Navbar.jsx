import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"

const Navbar = () => {

  const isAuth= useSelector((state)=>state.auth.isAuth);
  return (
    <nav className='flex justify-between fixed top-0 w-full bg-white px-4 py-4 shadow-sm z-10 h-16'>
      <Link to='/' className='title text-xl font-bold text-green-400'>Chef2You</Link>    
      
      
      <div className='navi  flex gap-7 text-md justify-center items-center text-gray-600'>
     {isAuth &&(
      <Link to="/favourites">Favourites</Link>)}
      
        <Link to="/about">About</Link>
        {isAuth ?(
           <Link  to="/logout">Logout</Link>
        )  :  ( <Link to="/login">Login</Link> )}
       
        {/* <Link to="/signup">Signup</Link> */}
       


      </div>
    </nav>
  );
}

export default Navbar;
