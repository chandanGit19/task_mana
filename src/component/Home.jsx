import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
    <div className='h-screen w-screen backked flex justify-center items-center'>
      <div className="flex flex-col gap-16">
        <div className=' text-center p-3  '>
        <h1 className=' font-normal md:font-extrabold text-2xl md:text-5xl mb-6 md:mb-10  '>Effortless Task Management for Busy Lives</h1>
        <h3 className=' font-[700] text-2xl md:text-4xl'>Plan It. Do It. Win It</h3>
        </div>
        <div className='flex justify-center gap-14 md:gap-48'>

          <Link to="signup" className='font-normal md:font-bold text-2xl md:px-16 border-2  outline-none px-8 rounded-xl md:py-6 py-2  hover:bg-gradient-to-r from-pink-500 hover:to-orange-500'>
            Try-It
          </Link>

          <Link to="/login"  className='font-normal md:font-bold text-2xl md:px-16 border-none outline-none  px-8 py-2 rounded-xl md:py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-orange-500'>
            Log-In
          </Link>

        </div>

      </div>
     
    </div>

      <div className=' w-screen mt-12 px-5 py-16 '>
        <div className='flex justify-between items-center md:flex-row flex-col gap-5 '>
          <div className=' h-fit md:h-[50vh] w-fit md:w-1/2 rounded-2xl overflow-hidden px-4 py-6 relative'>
            <h3 className='text-3xl font-serif font-[700]'>
              Work Smart With
            </h3>
            <p className='my-6 text-gray-800'>
            Whether you’re working solo or leading a team, we’re here to make task management simple. Prioritize, collaborate, 
            and meet deadlines with tools that keep everything in one place. Say goodbye to chaos and hello to productivity.
            </p>

            <p className='mt-28 text-3xl font-semibold '>
             <b>·</b> Turn To-Do Into Done
            </p>

          </div>
          <div className='bg-gray-500 h-[50vh] w-full md:w-1/2 rounded-3xl overflow-hidden'>

      <img className='h-full w-screen object-cover' src='https://img.freepik.com/free-photo/international-day-education-student-attending-school-anime-style_23-2151066320.jpg' alt='StudingPoto'/>

          </div>

        </div>

        <div className='flex justify-center gap-14 md:gap-28 mt-36'>


        <Link to="/login"  className='font-normal md:font-bold text-2xl md:px-16 border-none outline-none  px-8 py-2 rounded-xl md:py-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-orange-500'>
            Log-In
          </Link>

          <Link to="signup" className='font-normal md:font-bold text-2xl md:px-16 border-2  outline-none px-8 rounded-xl md:py-6 py-2  hover:bg-gradient-to-r from-pink-500 hover:to-orange-500'>
            Try-It
          </Link>

         

        </div>
        
      </div>





    </div>
  )
}

export default Home
