import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='h-screen  flex'>
      <div className='flex flex-col h-full w-[15%]  bg-green-400 p-2'>ss</div>
      <div className='bg-red-300 w-[85%] '>
        <Outlet/>
      </div>
    </div>
  )
}

export default Dashboard