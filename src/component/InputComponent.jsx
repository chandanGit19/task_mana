import React, { useState } from 'react'
import { api } from '../constant/api';
import { useSelector } from 'react-redux';

const InputComponent = ({setInputs}) => {


    const {token}  =useSelector((state)=>state.auth)
    const [title,setTitle] = useState("");

    const [description ,setDescription] = useState("")


    const submitHandler =async(e)=>{
        e.preventDefault();

        console.log(title,description)

        try {
            const responce =await fetch(`${api}/taskCreate`,{
                method:"POST",
                body:JSON.stringify({title,description}),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`bearer ${token}`
                }
            })

            const data = await responce.json();

            if(!data.success){
                alert(data.success);
                return;
            }

            alert("Task created successfully")
            setTitle("");
            setDescription("");

            setInputs(false);

            console.log(data)
        } catch (error) {
            
        }
    }


  return (
    <div className='absolute top-0 left-0 flex justify-center items-center h-screen w-screen'>
      <div className='w-[50%]   opacity-100 p-4 rounded-md mt-20 bg-gray-500'>
        <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        type='text'
        placeholder='Title'
        name="Title"
        className='px-3 py-2 rounded w-full  outline-none active:outline-none mb-3'
        />

     <textarea
     value={description}
     onChange={(e)=>setDescription(e.target.value)}
     placeholder='Description'
     name="textArea"
     cols="30"
     rows="10"
     className='px-3 py-2 rounded w-full outline-none active:outline-none'
     />
           
           <div className='flex justify-center items-center gap-5'>
            <button
            onClick={submitHandler}
            className='px-6 py-3 rounded-xl mt-5 bg-gray-800 text-white cursor-pointer'>
                Create
            </button>
            <button 
            onClick={()=>setInputs(false)}
            className='px-6 py-3 rounded-xl mt-5  bg-gray-800  text-white cursor-pointer'>
                Cancle
            </button>
           </div>

      </div>
      </div>
  )
}

export default InputComponent
