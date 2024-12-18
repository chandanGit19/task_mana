import React, { useEffect, useState } from 'react'
import InputComponent from './InputComponent'
import { api } from '../constant/api';
import { Link } from 'react-router-dom';

const Main = () => {

    const [inputs,setInputs] =useState(false);

    const [data,setData] = useState([])

useEffect(()=>{

    async function fetchData(){
        try {
            const respocse = await fetch(`${api}/getTasks`,{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjE4MTc2MjI3NTUxM2JiMTlhMTMwOCIsImlhdCI6MTczNDQ3ODg1MiwiZXhwIjoxNzM0NTY1MjUyfQ.2Soy7gmvpTEa0NpUEWHbA_NoxSTo6kwNjSrlrE4v3DM`
                }
            })

            const data = await respocse.json();

            if(!data.success){
                alert(data.message);
                return
            }

            setData(data.tasks)
            console.log(data)
        } catch (error) {
            alert("somting went wrong ")
        }
        
    }
    
    fetchData();

},[])

  return (
    <>
    <div className='grid grid-cols-2 gap-5 p-4'>


    <div 
        onClick={()=>setInputs(true)}
    className='border flex flex-col justify-center items-center border-black rounded-md p-3 h-full overflow-hidden'>
        <h1 className='text-4xl font-extrabold animate-ping pb-7'>+</h1>
        <button 
        className='px-6 py-3 bg-purple-600 text-black rounded-xl cursor-pointer'>
            Add Task
        </button>
     </div>

      {data && data.map((items, idx) => (
        <Link to={`/task/${items._id}`} key={idx} className='border border-black rounded-md p-3 h-full overflow-hidden'>
          <h3 className='font-bold text-xl mb-2'><span>Title:-</span>{items.title.length >25 ? items.title.substring(0,23)+"...":items.title}</h3>
          <p className=' p-2 rounded '>
            {items.description.length >80 ? items.description.substring(0,80)+"...": items.description}
          </p>
          <div>
            <button className={`px-6 py-3 rounded-xl mt-5 cursor-pointer ${items?.complete ? "bg-green-500":"bg-red-500"}`}>
                {
                    items?.complete ? "Completed" : "Mark completed"
                } 
            </button>
            </div>
        </Link>
      ))}

    </div>
   {
    inputs && <InputComponent setInputs={setInputs}/>
   }


    </>
  )
}

export default Main
