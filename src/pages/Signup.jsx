import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../constant/api';
import { useDispatch ,useSelector } from 'react-redux';
import { setToken } from '../store/slices';


const Signup = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

      const {token} = useSelector((state)=>state.auth);

    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const submitHandler =async(e)=>{
        e.preventDefault();
        console.log(userName,email,password)
         try {
                    const data = await fetch(`${api}/signUp`,{
                        method:"POST",
                        body:JSON.stringify({userName,email:email,password:password}),
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
    <div className='p-7 h-screen w-screen flex justify-center items-center overflow-hidden '>
    <div>
     <form onSubmit={submitHandler}>

   <h3>What's your name</h3>
   <div className='flex gap-4 '>
     <input
     type='text'
     value={userName}
     onChange={(e)=>setUserName(e.target.value)}
     className='bg-[#eeee] w-full mb-7 rounded px-4 py-2 border   text-lg placeholder:text-base '
     placeholder='Jone'
     />
     
   </div>


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
   >Sign-Up</button>
   </form>
   <p className='text-center'>Alredy have account?
   <Link to="/login" className='text-blue-500 font-semibold px-2'>login</Link>
   </p>
    </div>

 </div>
  )
}

export default Signup
