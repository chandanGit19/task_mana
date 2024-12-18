import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const {token} = useSelector((state)=>state.auth)

    
  return (
    <div className='fixed inset-x-0 top-2 z-50 h-16 border-none flex justify-between transition-all duration-700 sm:inset-x-6 overflow-hidden'>
      <div className='h-full w-[130px] rounded-2xl overflow-hidden '>
        <img className='h-full w-full object-contain' src='https://i.graphicmama.com/uploads/2019/3/5c81d12ca5c93-Tasks%20Management%20Logo%20Design.jpg' alt='taskmanagement'/>
      </div>
      {
        token &&<Link to="/dashboard" className='px-6 py-3 rounded-xl mt-5  bg-gray-800  text-white cursor-pointer'>Dashboard</Link>
      }
      
    </div>
  )
}

export default NavBar
