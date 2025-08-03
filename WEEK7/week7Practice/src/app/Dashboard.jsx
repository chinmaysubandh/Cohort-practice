import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import { CgProfile } from 'react-icons/cg'

const Dashboard = () => {
  return (
    <div className='min-h-screen   flex h-screen overflow-y-hidden'>
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] border border-e-gray-200 flex flex-col justify-start items-center  h-full ">
        {/* Profile  */}
                    <div className='flex flex-row gap-2 items-center py-4  w-full  justify-center h-[10%] '>
                        <CgProfile className='text-2xl bg-black text-white rounded-full' />
                        <h2 className='text-xl font-semibold hidden lg:block'>Chinmay</h2>
        
                    </div>
        <Sidebar/>

      </div>
      {/* Right */}
      <div className='className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-amber-400  overflow-y-scroll flex flex-col border border-s-gray-100 "'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard