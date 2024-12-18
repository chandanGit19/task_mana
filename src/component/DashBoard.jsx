import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div className='h-screen w-screen bg-pink-200'>
    <div className='flex flex-col h-[95vh] gap-4 pt-16'>
        <div className='border-3 h-[10vh] rounded-xl p-4 bg-gray-400'>
            <SideBar/>
        </div>

        <div className='border-3 border-black h-[100vh] rounded-xl p-4 overflow-y-auto '>
           <Outlet/>
        </div>

      
    </div>
    </div> 
  )
}

export default DashBoard
