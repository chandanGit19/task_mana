import React, { useEffect, useState } from 'react'
import { api } from '../constant/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Task = () => {
    const {token} = useSelector((state)=>state.auth);

    const navigate = useNavigate()

    const {id} = useParams();
    console.log(id)
  const [title,setTitle] = useState("");
  
      const [description ,setDescription] = useState("")

      const [data,setData] = useState("")






      const submitHandlerH =async(e)=>{
              e.preventDefault();
      
              console.log(title,description)
      
              try {
                  const responce =await fetch(`${api}/update/${id}`,{
                      method:"PUT",
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
      
                  alert(data.message)  
                  
                  
      
      
                  console.log(data)
              } catch (error) {
                  
              }
          }










  
  
      const submitHandler =async()=>{
  
          console.log(title,description)
  
          try {
              const responce =await fetch(`${api}/task/${id}`,{
                  method:"GET",
                  headers:{
                      "Content-Type":"application/json",
                      "Authorization":`bearer ${token}`
                  }
              })
  
              const data = await responce.json();
  
              console.log(data)

              if(!data.success){
                  alert(data.success);
                  return;
              }

           setTitle(data.task.title)  ;
           setDescription(data.task.description)
           setData(data.task)
  
            //   console.log(data)
          } catch (error) {
              
          }
      }

      const deleteTask =async()=>{
  
        console.log(title,description)

        try {
            const responce =await fetch(`${api}/deleteTask/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`bearer ${token}`
                }
            })

            const data = await responce.json();

            console.log(data)

            if(!data.success){
                alert(data.success);
                return;
            }

        

         alert(data.message)
         navigate("/dashboard")
          //   console.log(data)
        } catch (error) {
            
        }
    }


      const markDone =async()=>{
  
        console.log(title,description)

        try {
            const responce =await fetch(`${api}/completed/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`bearer ${token}`
                }
            })

            const data = await responce.json();

            console.log(data)

            if(!data.success){
                alert(data.success);
                return;
            }

         setData({...data,complete:!data.complete})

         alert(data.message)
          //   console.log(data)
        } catch (error) {
            
        }
    }


  

      useEffect(()=>{
 
        submitHandler();

      },[])

  
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
              onClick={markDone}
              className={`px-6 py-3 rounded-xl mt-5 bg-gray-800 text-white cursor-pointer ${data.complete ? "bg-green-400":"bg-red-400"}`}>
                  {data.complete ? "Mark uncompleted":"Mark completed"}
              </button>
              <button 
              onClick={submitHandlerH}
              className='px-6 py-3 rounded-xl mt-5  bg-gray-800  text-white cursor-pointer'>
                  update
              </button>
              <button
              onClick={deleteTask}
              className='px-6 py-3 rounded-xl mt-5  bg-gray-800  text-white cursor-pointer'>
                  Delete
              </button>
             </div>
  
        </div>
        </div>
    )
}

export default Task
