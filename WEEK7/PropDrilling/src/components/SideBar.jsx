import React from 'react'
import { AiOutlineTeam } from 'react-icons/ai'
import { CiHome } from 'react-icons/ci'
import { GoHome } from 'react-icons/go'
import { MdAccountCircle, MdOutlineAccountCircle, MdOutlineAttachMoney } from 'react-icons/md'
import { RiMoneyRupeeCircleFill } from 'react-icons/ri'
import { VscInfo } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className='h-full w-full bg-stone-200 rounded flex flex-col justify-between items-center py-1'>
            <div className=' w-full h-[90%]  flex flex-col'>
                <Link className=' flex items-center justify-start hover:bg-stone-100   mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded '
                    to={'/'}
                ><GoHome /> Home</Link>

                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded '
                    to={'/accounts'}
                ><MdOutlineAccountCircle/> Accounts</Link>


                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded ' to={'/team'}><AiOutlineTeam/> Team</Link>

                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded   ' to={'finance'}><MdOutlineAttachMoney/> Finance</Link>
                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded '
                    to={'/about'}
                ><VscInfo/> About</Link>

            </div>
            <div>end</div>

        </div>
    )
}

export default SideBar