import { useState } from 'react'
import { AiOutlineTeam } from 'react-icons/ai'
import { GoHome } from 'react-icons/go'
import { MdOutlineAccountCircle, MdOutlineAttachMoney } from 'react-icons/md'
import { VscInfo } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { TodoOpenHandle } from '../store/atoms/TodoOpen'

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [openHandle,setOpenHandler]=useRecoilState(TodoOpenHandle)

    const Toggle = () => {
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    const TodoHandle = () => {
        if (openHandle == false) {
            setOpenHandler(true)
        }
        else {
            setOpenHandler(false)
        }
    }
    return (
        <div className='h-full w-full bg-stone-200 rounded flex flex-col justify-between items-center py-1'>

            <div className='w-full h-[10%] border-b-2 border-stone-400 '>Profile</div>


            <div className=' w-full h-[80%]  flex flex-col overflow-y-scroll gap-0.5'>
                <Link className=' flex items-center justify-start hover:bg-stone-100   mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded '
                    to={'/'}
                ><GoHome /> Home</Link>

                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded '
                    to={'/accounts'}
                ><MdOutlineAccountCircle /> Accounts</Link>


                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded ' to={'/team'}
                onClick={Toggle}
                ><AiOutlineTeam /> Team</Link>
                {open == true ? <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-normal rounded ps-4 'onClick={TodoHandle}>- <AiOutlineTeam />TodoList</Link> :''}
                

                <Link className='  hover:bg-stone-100 flex items-center justify-start  mt-0.5 mx-0.5 px-0.5 py-0.5
               font-semibold rounded   ' to={'finance'}><MdOutlineAttachMoney /> Finance</Link>
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