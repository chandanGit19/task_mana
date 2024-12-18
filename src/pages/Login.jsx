import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../constant/api';
import { useDispatch ,useSelector } from 'react-redux';
import { setToken } from '../store/slices';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {token} = useSelector((state)=>state.auth);


    const [password,setPassword] =useState("");

    const [email,setEmail] = useState("")

    const submitHandler=async(e)=>{
        e.preventDefault();
        console.log(email,password)
        try {
            const data = await fetch(`${api}/login`,{
                method:"POST",
                body:JSON.stringify({email:email,password:password}),
                headers:{
                    'Content-Type': 'application/json',
                }
            })

            const response = await data.json();

            
            if(!response.success){
                alert(response.message);
                return
            }
             
            dispatch(setToken(response.token))
            localStorage.setItem("token",JSON.stringify(response.token))
            console.log(response)
        } catch (error) {
            alert("someThing went wrong")
        }

    }

    useEffect(()=>{
        if(token){
            navigate("/")
            
        }
    })

  return (
    <div className='p-7 h-screen w-screen flex justify-center items-center overflow-hidden'>
       <div>
        <form onSubmit={submitHandler}>
      <h3 className='text-xl font-semibold mb-2'>
        What's your Email
      </h3>

      <input
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      className='bg-[#eeee] rounded mb-7 px-4 py-2 border w-full  text-lg placeholder:text-base '
       required type='email' placeholder='example@gmail.com'/>
      <h3 className='text-xl font-semibold  mb-2'>Enter Password</h3>


      <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      className='bg-[#eeee] mb-7 rounded px-4 py-2 border w-full  text-lg placeholder:text-base '
      required type='password' placeholder='password'/>

      <button
      type='submit'
      className='bg-[#111] mb-3 rounded px-4 py-2  w-full text-white text-lg placeholder:text-base '
      >Login</button>
      </form>
      <p className='text-center'>New here?
      <Link to="/signup" className='text-blue-500 font-semibold'>Create new Account</Link>
      </p>
       </div>

    </div>
  )
}

export default Login
