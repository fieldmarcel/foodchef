import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';  // Make sure axios is imported
import { toast } from 'react-hot-toast';  // If you are using toast for notifications
import {useDispatch} from "react-redux"
import{login, setUser} from "../../redux/slices/authSlice"
import Img from '../../public/pexels-brigitte-tohm-36757-239581.jpg'
const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
   const navigate = useNavigate();
const dispatch= useDispatch();



  const handleLogin = async (e) => {
    e.preventDefault(); 

   
      const res = await axios.post(
        "http://localhost:5000/api/login",
        {
          email,
          password,
        },
        {
          withCredentials: true, 
          // withCredentials: true means the request will include cookies, 
          // which is necessary if 
          // you're using sessions or authentication mechanisms that require 
          // them (like JWT or session tokens).
        }
      );
//in fetch we write res.json
      const data = await res.data;
      if (data.success) {
        toast.success(data.message);  // Ensure toast is configured
        // navigate("/home");  // R redirected to the /home page using navigate("/home").
       
         dispatch(login(true));
         dispatch(setUser(data.user)) ;
         navigate("/");
      }
    
  };
  

  return (
    <div className="grid grid-cols-2 mt-0 pt-0 max-h-screen">

      <div className='col-span-1 h-full'>
  {/* Image section */}
        <img
        src={Img}
        className="object-cover object-center h-screen"
        alt="Login visual"
      />
      </div>
     

      <div className="flex items-center justify-center col-span-1 w-full ">
        <div className="w-full max-w-sm">
          <form
            className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
            onSubmit={handleLogin}
          >
            <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
              Sign in to continue
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  // Fixed onChange handler
                placeholder="Email"
              />
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}  // Fixed onChange handler
                placeholder="Password"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 rounded text-white inline-block shadow-lg bg-green-500 hover:bg-green-600 focus:bg-green-700"
                type="submit"
              >
                Sign In
              </button>
            </div>

            <div className="text-xs flex gap-2 mt-2">
              <span>Or</span>
              <Link to="/signup">Create an account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import axios from "axios";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login, setUser } from "../../redux/slices/authSlice";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await axios.post(
//       "http://localhost:5000/api/login",
//       {
//         email,
//         password,
//       },
//       { withCredentials: true }
//     );

//     const data = await res.data;
//     if (data.success) {
//       toast.success(data.message);
//       dispatch(login());
//       dispatch(setUser(data.user));
//       navigate("/");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-[80vh]">
//       <div className="w-full max-w-md">
//         <form
//           className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
//           onSubmit={handleLogin}
//         >
//           <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
//             Login
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-normal mb-2"
//               htmlFor="username"
//             >
//               Email
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               name="email"
//               type="email"
//               required
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               className="block text-gray-700 text-sm font-normal mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               type="password"
//               placeholder="Password"
//               name="password"
//               required
//               autoComplete="false"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               className="px-4 py-2 rounded text-white inline-block shadow-lg bg-red-500 hover:bg-red-600 focus:bg-red-700"
//               type="submit"
//             >
//               Sign In
//             </button>
//           </div>
//           <div className="text-xs flex gap-2 mt-2">
//             <span>Or</span>
//             <Link to="/signup" className="text-red-500 hover:underline">
//               Create an account
//             </Link>
//           </div>
//         </form>
//         <p className="text-center text-gray-500 text-xs">
//           &copy;2023 Homechef. All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;