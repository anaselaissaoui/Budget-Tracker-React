import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../Data/Users.json";
import LoginImg from "../Assets/Background-login.jpg";

function Login(){
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


function handleSubmit(event) {
    event.preventDefault();
    const userArray = Array.from(userData.users);
    const user = userArray.find((user) => user.username === username && user.password === password);

    if (user) {
      navigate("/Dashboard?username=" + username); 
        console.log("done");
    } else {
      alert("Invalid login credentials");
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img  className="w-full h-screen object-cover" src={LoginImg} alt="" />
      </div>
      <div className='bg-bg-tracker flex flex-col justify-center'>
        <form  onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-zinc-50 p-8 px-8'>
            <h2 className='text-4xl dark:text-black font-bold text-center'>Sign In</h2>
            <h6 className=' dark:text-zinc-300 mb-3  text-left'>Welcome back! Please enter your details</h6>
            <div  className='flex flex-col text-gray-400 py-2'>
                <label>Username</label>
                <input className='rounded-lg bg-white p-2  focus:outline-mainColor ' type="text" value={username} onChange={(e) => setUsername(e.target.value)}  />
            </div>
            <div className='flex flex-col text-gray-400 py-2'>
                <label>Password</label>
                <input className='p-2 rounded-lg bg-white  focus:outline-mainColor ' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
           
            <button className='w-full my-5 py-2 bg-mainColor shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-bColor font-semibold rounded-lg' type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );}
 export default Login