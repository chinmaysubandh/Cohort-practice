import React, { useState } from 'react'
import { AiOutlineTeam } from 'react-icons/ai'
import { GoHome } from 'react-icons/go'
import { MdOutlineAccountCircle, MdOutlineAttachMoney } from 'react-icons/md'
import { VscInfo } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

import { BsChatSquare } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'



const MiniprojectElements = [{
    MiniProjectsList: {
        name: "Mini Projects",
        Projecttoggle: false ,
        path: '/miniprojects',
        minielements: [
            {
                mininame: "Todo App",
                path: "/miniprojects/todoapp"  
            },
            {
                mininame: "Weather App",
                path: "/miniprojects/todoapp"  
            },
            {
                mininame: "Tasks App",
                path: "/miniprojects/todoapp"  
            },
            {
                mininame: "Chat App",
                path: "/miniprojects/todoapp"  
            }
        ]
     }
},]

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const[teamtoggle,setTeamtoggle]=useState(false)
    const[miniProjecttogle,setMiniProjecttogle]=useState(false)
    
    const Toggle = () => {
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }
    
    return (
        <div className='h-full w-full bg-stone-200 rounded flex flex-col justify-between items-center py-1 absolute'>

            <div className='w-full h-[10%] border-b-2 border-stone-400 relative shrink-0 overflow-hidden '>Profile</div>


            <div className=' w-full h-[80%]  flex flex-col overflow-y-scroll gap-0.5'>
                {/* Home /Dashboard */}
                <Link className=' flex items-center justify-start hover:bg-stone-100   mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded '
                    to={'/'}
                    onClick={Toggle}
                ><GoHome /> Dashboard</Link>
                {open == true ? <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-normal rounded ps-4 ' to={'/searchbar'}>- <AiOutlineTeam />SearchBar</Link> : ''}
                {open == true ? <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-normal rounded ps-4 ' to={'/pages'}>- <AiOutlineTeam />Pages</Link> : ''}
                {open == true ? <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-normal rounded ps-4 ' to={'/allposts'}>- <AiOutlineTeam />All Posts</Link> : ''}
                
                


                {/* Accounts */}
                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded '
                    to={'/accounts'}
                ><MdOutlineAccountCircle /> Accounts</Link>


                {/* Team */}
                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded ' to={'/team'}
                onClick={()=>setTeamtoggle(teamtoggle === false ? true : false)}
                ><AiOutlineTeam /> Team</Link>
                {teamtoggle == true ? <div>
                    <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-normal rounded ps-4 ' to={'/team/todo'}>- <BsChatSquare />Chat Rooms</Link>
                    <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-normal rounded ps-4 '>- <AiOutlineTeam />Admins</Link>
                    <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-normal rounded ps-4 '>- <AiOutlineTeam />Employess</Link>
                    <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-normal rounded ps-4 '>- <AiOutlineTeam />Salary</Link>
                    <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-normal rounded ps-4 '>- <AiOutlineTeam />Tax</Link>
                    <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-normal rounded ps-4 '>- <AiOutlineTeam />Settings</Link>
                </div> :''}
                

                {/* Finance */}
                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded   ' to={'/finance'}><MdOutlineAttachMoney /> Finance</Link>
                
                {/* MiniProjects */}
                {MiniprojectElements.map((items, index) => {
                    return <Link key={index} onClick={()=>setMiniProjecttogle(miniProjecttogle === false ? true : false)} className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded ' to={items.MiniProjectsList.path}><GrProjects className=' m-0.5 pe-1' />{items.MiniProjectsList.name}
                    </Link>
                })}
                {MiniprojectElements.map((items, index) => {
                    console.log(items.MiniProjectsList.Projecttoggle);
                    
                    return <div key={index} className='flex flex-col ps-2 px-2'>
                        {miniProjecttogle === true ? items.MiniProjectsList.minielements.map((miniitems, index) => {
                            return <Link to={miniitems.path} key={index}>{miniitems.mininame}</Link>
                        }) :null}

                    </div>
                })}

                
                {/* About */}
                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded '
                    to={'/about'}
                ><VscInfo /> About</Link>

            </div>
            <div className='w-full h-[10%]'>end</div>

        </div>
    )
}

export default SideBar