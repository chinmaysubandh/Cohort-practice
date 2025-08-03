import React from 'react'
import { CgFileDocument, CgOrganisation, CgProfile } from 'react-icons/cg';
import { GiThunderBlade } from "react-icons/gi";
import { HiOutlineSquaresPlus, HiShoppingBag } from 'react-icons/hi2';
import { IoMdContact } from 'react-icons/io';
import { IoCalendarOutline } from 'react-icons/io5';
import { TbMessageCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const MenuArray = [
    {
        name: "Overview",
        icon: <HiOutlineSquaresPlus className='text-2xl rounded-full text-gray-400' />,
        menulink: '/overview',
        
    },
    {
        name: "Companies",
        icon: <CgOrganisation className='text-2xl rounded-full text-gray-400' />
,
        menulink: '/companies',
        
    },
    {
        name: "Deals",
        icon: <HiShoppingBag className='text-2xl rounded-full text-gray-400' />,
        menulink: '/deals',
        submenu: []
    },
    {
        name: "Contacts",
        icon: <IoMdContact className='text-2xl rounded-full text-gray-400' />,
        menulink: '/contacts',
        
    },
    {
        name: "Calender",
        icon: <IoCalendarOutline className='text-2xl rounded-full text-gray-400' />,
        menulink: '/calender',
        
    },
    {
        name: "Messages",
        icon: <TbMessageCheck className='text-2xl rounded-full text-gray-400' />,
        menulink: '/messages',
        submenu: []
    },
    {
        name: "Documents",
        icon: <CgFileDocument className='text-2xl rounded-full text-gray-400' />,
        menulink: '/documents',
        submenu: []
    },
    
]
const BottmMenu = [{
    name: "Profile",
    icon: '',
    menulink: '/profile',
    
},]





const Sidebar = () => {
    return <div className=' w-full h-[90%] flex flex-col justify-between'>
        {/* Top */}
        <div className='flex flex-col items-start justify-start gap-4 pb-4 pt-1 px-2  overflow-y-auto scroll-auto py-8'>
            {MenuArray.map((items, index) => {
                return <Link key={index} to={items.menulink} className='hover:bg-purple-100 py-1 w-full rounded-md'>
                    <div className='flex items-center justify-between gap-2'>
                        <div className='flex items-center gap-1 justify-start'>
                            {items.icon}
                            <span className=' hidden lg:block'>{items.name}</span>
                        </div>
                        <div className=' items-center hidden lg:flex text-2xl justify-center font-semibold text-gray-300'> {items.submenu ? ">" : null} </div>
                    </div>
                </Link>
           })}

            
        </div>
        {/* Botttom */}
        <div>
            Bottom
        </div>
    </div>
}

export default Sidebar