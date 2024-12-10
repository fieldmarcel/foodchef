import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form submission and page reload

    try {
      const res = await axios.post(
        'http://localhost:5000/api/signup',
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      const data = res.data;

      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message || 'Signup failed');
      }
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong during signup');
      console.error("Error during signup:", error.response?.data?.message || error.message);
   }
   
  };

  return (
    <div className="grid grid-cols-2 pt-0 max-h-screen">
      {/* Image Section */}
      <div className="col-span-1 ">
        <img
          src="/pexels-valeriya-842571.jpg" // Directly using the public folder image
          className="object-cover object-center h-screen"
          alt="Signup visual"
        />
      </div>

      {/* Form Section */}
      <div className="flex items-center justify-center col-span-1 w-full">
        <div className="w-full max-w-sm">
          <form
            className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
            onSubmit={handleSignup}
          >
            <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
              Create your Account
            </div>

            {/* Username Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="username" // Ensure correct name attribute
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            {/* Email Input */}
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>

            {/* Signup Button */}
            <div className="flex items-center justify-between">
              <button
                className="px-4 py-2 rounded text-white inline-block shadow-lg bg-green-500 hover:bg-green-600 focus:bg-green-700"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            {/* Link to Login */}
            <div className="text-xs flex gap-2 mt-2">
              <span>Or</span>
              <Link to="/login">Login to existing account</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;



// import { useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// const Signup = () => {

//   const navigate = useNavigate()

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     const res = await axios.post(
//       "http://localhost:5000/api/signup",
//       {
//         username,
//         email,
//         password,
//       },
//       { withCredentials: true }
//     );

//     const data = await res.data;
//     if (data.success) {
//       toast.success(data.message);
//       navigate("/login")
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-[80vh]">
//       <div className="w-full max-w-md">
//         <form
//           className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
//           onSubmit={handleSignup}
//         >
//           <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
//             Create Account
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-normal mb-2"
//               htmlFor="username"
//             >
//               Username
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               name="username"
//               type="text"
//               required
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
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
//               Sign up
//             </button>
//           </div>
//           <div className="text-xs flex gap-2 mt-2">
//             <span>Or</span>
//             <Link to="/login" className="text-red-500 hover:underline">
//               Login with existing account
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

// export default Signup;