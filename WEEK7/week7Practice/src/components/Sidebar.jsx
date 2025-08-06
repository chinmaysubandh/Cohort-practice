import React, { useState } from 'react'
import { CgFileDocument, CgOrganisation, CgProfile } from 'react-icons/cg';
import { GiThunderBlade } from "react-icons/gi";
import { GrProjects } from 'react-icons/gr';
import { HiOutlineSquaresPlus, HiShoppingBag } from 'react-icons/hi2';
import { IoMdContact } from 'react-icons/io';
import { IoCalendarOutline } from 'react-icons/io5';
import { RiTodoFill } from 'react-icons/ri';
import { TbMessageCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';

// Define menu structure with consistent submenu property
const MenuArray = [
    {
        name: 'Overview',
        submenuToggle: false,
        icon: <HiOutlineSquaresPlus className='text-2xl text-gray-400' />,
        menulink: '/overview',
        submenu: [],
    },
    {
        name: 'Companies',
        submenuToggle: false,
        icon: <CgOrganisation className='text-2xl text-gray-400' />,
        menulink: '/companies',
        submenu: [],
    },
    {
        name: 'Deals',
        submenuToggle: false,
        icon: <HiShoppingBag className='text-2xl text-gray-400' />,
        menulink: '/deals',
        submenu: [],
    },
    {
        name: 'Contacts',
        submenuToggle: false,
        icon: <IoMdContact className='text-2xl text-gray-400' />,
        menulink: '/contacts',
        submenu: [
            {
                subname: 'TodoApp',
                subicon: <RiTodoFill className='text-2xl text-gray-400' />,
                submenulink: '/projects/todoapp',
            },
            {
                subname: 'TodoApp',
                subicon: <RiTodoFill className='text-2xl text-gray-400' />,
                submenulink: '/projects/todoapp',
            },
            {
                subname: 'TodoApp',
                subicon: <RiTodoFill className='text-2xl text-gray-400' />,
                submenulink: '/projects/todoapp',
            },
            {
                subname: 'TodoApp',
                subicon: <RiTodoFill className='text-2xl text-gray-400' />,
                submenulink: '/projects/todoapp',
            },
            {
                subname: 'TodoApp',
                subicon: <RiTodoFill className='text-2xl text-gray-400' />,
                submenulink: '/projects/todoapp',
            },
        ],
    },
    {
        name: 'Calendar',
        submenuToggle: false,
        icon: <IoCalendarOutline className='text-2xl text-gray-400' />,
        menulink: '/calender',
        submenu: [],
    },
    {
        name: 'Messages',
        submenuToggle: false,
        icon: <TbMessageCheck className='text-2xl text-gray-400' />,
        menulink: '/messages',
        submenu: [],
    },
    {
        name: 'Documents',
        submenuToggle: false,
        icon: <CgFileDocument className='text-2xl text-gray-400' />,
        menulink: '/documents',
        submenu: [],
    },
    {
        name: 'Projects',
        submenuToggle: false,
        icon: <GrProjects className='text-2xl text-gray-400' />,
        menulink: '/projects',
        submenu: [
            {
                subname: 'TodoApp',
                subicon: <RiTodoFill className='text-2xl text-gray-400' />,
                submenulink: '/projects/todoapp',
            },
        ],
    },
];

const BottomMenu = [
    {
        name: 'Profile',
        icon: <CgProfile className='text-2xl text-gray-400' />,
        menulink: '/profile',
    },
];

const Sidebar = () => {
    const [menuState, setMenuState] = useState(MenuArray);

    const toggleSubmenu = (index) => {
        setMenuState((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, submenuToggle: !item.submenuToggle } : item
            )
        );
    };

    return (
        <div className='w-full h-[90%] flex flex-col justify-between'>
            {/* Top Menu */}
            <div className='flex flex-col items-start gap-4 px-2 py-8 overflow-y-auto'>
                {menuState.map((item, index) => (
                    <div key={index} className='w-full rounded-md '>
                        <div
                            className='flex items-center justify-between gap-2 py-1 cursor-pointer'
                            onClick={() => toggleSubmenu(index)}
                            role='button'
                            aria-expanded={item.submenuToggle}
                            aria-label={`Toggle ${item.name} submenu`}
                        >
                            <Link
                                to={item.menulink}
                                className='flex items-center gap-2 hover:bg-purple-200 w-full rounded-2xl'
                                
                            >
                                <span className='p-1 rounded-full bg-gray-100'>{item.icon}</span>
                                <span className='hidden text-sm font-semibold text-gray-600 lg:block'>
                                    {item.name}
                                </span>
                            </Link>
                            {item.submenu.length > 0 && (
                                <span
                                    onClick={(e) => {
                                        if (item.submenu.length > 0) {
                                            e.preventDefault(); // Prevent navigation if submenu exists
                                        }
                                    }}
                                    className='text-2xl font-semibold text-gray-800 lg:flex'>
                                    {item.submenuToggle ? '<' : '>'}
                                </span>
                            )}
                        </div>
                        {item.submenuToggle && item.submenu.length > 0 && (
                            <div className='flex flex-col items-start ps-6'>
                                {item.submenu.map((subItem, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        to={`${subItem.submenulink}`}
                                        className='flex items-center gap-2 py-1 text-sm text-gray-600 hover:bg-gray-300 w-full rounded-2xl'
                                    >
                                        <span className='p-1 rounded-full bg-gray-100'>{subItem.subicon}</span>
                                        <span className='hidden lg:block '>{subItem.subname}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Menu */}
            <div className='flex flex-col items-start gap-4 px-2 py-4 border-t border-gray-200 w-full'>
                {BottomMenu.map((item, index) => (
                    <Link
                        key={index}
                        to={item.menulink}
                        className='flex items-center gap-2 py-1 rounded-md hover:bg-purple-200 w-full'
                    >
                        <span className='p-1 rounded-full bg-gray-100'>{item.icon}</span>
                        <span className='hidden text-sm font-semibold text-gray-600 lg:block'>
                            {item.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;