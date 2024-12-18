import React, { useEffect, useState } from 'react'
import { api } from '../constant/api';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CompletedTask = () => {

    const {token} = useSelector((state)=>state.auth)

    const [data,setData] = useState([]);
    // const data =[{
    //     title:"chasnda",
    //     description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid suscipit natus illum quidem assumenda laboriosam fuga. Id deserunt nesciunt quisquam ut amet. Quis quae accusantium maiores fugit illo ullam aspernatur possimus quaerat id quas placeat quo commodi delectus labore itaque numquam dolore doloribus error ea, eius non. Aliquam possimus modi reiciendis doloremque exercitationem."
    // },
    // {
    //     title:"chasnda",
    //     description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid suscipit natus illum quidem assumenda laboriosam fuga. Id deserunt nesciunt quisquam ut amet. Quis quae accusantium maiores fugit illo ullam aspernatur possimus quaerat id quas placeat quo commodi delectus labore itaque numquam dolore doloribus error ea, eius non. Aliquam possimus modi reiciendis doloremque exercitationem."
    // },
    // {
    //     title:"chasnda",
    //     description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid suscipit natus illum quidem assumenda laboriosam fuga. Id deserunt nesciunt quisquam ut amet. Quis quae accusantium maiores fugit illo ullam aspernatur possimus quaerat id quas placeat quo commodi delectus labore itaque numquam dolore doloribus error ea, eius non. Aliquam possimus modi reiciendis doloremque exercitationem."
    // },
    // {
    //     title:"chasnda",
    //     description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid suscipit natus illum quidem assumenda laboriosam fuga. Id deserunt nesciunt quisquam ut amet. Quis quae accusantium maiores fugit illo ullam aspernatur possimus quaerat id quas placeat quo commodi delectus labore itaque numquam dolore doloribus error ea, eius non. Aliquam possimus modi reiciendis doloremque exercitationem."
    // },
    // {
    //     title:"chasnda",
    //     description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid suscipit natus illum quidem assumenda laboriosam fuga. Id deserunt nesciunt quisquam ut amet. Quis quae accusantium maiores fugit illo ullam aspernatur possimus quaerat id quas placeat quo commodi delectus labore itaque numquam dolore doloribus error ea, eius non. Aliquam possimus modi reiciendis doloremque exercitationem."
    // },
    // {
    //     title:"chasnda",
    //     description:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquid suscipit natus illum quidem assumenda laboriosam fuga. Id deserunt nesciunt quisquam ut amet. Quis quae accusantium maiores fugit illo ullam aspernatur possimus quaerat id quas placeat quo commodi delectus labore itaque numquam dolore doloribus error ea, eius non. Aliquam possimus modi reiciendis doloremque exercitationem."
    // }]

    useEffect(()=>{
    
        async function fetchData(){
            try {
                const respocse = await fetch(`${api}/done`,{
                    method:"GET",
                    headers:{
                        "Content-Type":"application/json",
                        "Authorization":`bearer ${token}`
                    }
                })
    
                const data = await respocse.json();
    
                if(!data.success){
                    alert(data.message);
                    return
                }
    
                setData(data.completedTask)
                console.log(data)
            } catch (error) {
                alert("somting went wrong ")
            }
            
        }
        
        fetchData();
    
    },[])


  return (
    <div className='grid grid-cols-2 gap-5 p-4'>
    
     
  
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
  )
}

export default CompletedTask
