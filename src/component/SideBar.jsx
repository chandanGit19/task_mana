import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { resetAuth } from '../store/slices'
import { useDispatch } from 'react-redux'

const SideBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center h-full '>
      <div className='border-r-2 h-full border-white px-3'>
        <h2 className='text-xl font-semibold'>
            userName
        </h2>
      </div>
      <div className='flex gap-4  '>
       <Link to='/dashboard' className='px-5 py-3 cursor-pointer shadow-lg'>
        All Task
       </Link>
       <Link to='/dashboard/completed' className='px-5 py-3 cursor-pointer shadow-lg'>
          Completes Task
       </Link>
      </div>

          <div 
          onClick={()=>{
            dispatch(resetAuth());
            navigate("/")
          }}
          >
            Log Out
          </div>




    </div>
  )
}

export default SideBar
