import axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import { deleteTodoData, getTodoData, PostTodoData, TodoAppContext } from '../../store/TodoApp/APIOperations';
import { useRecoilState, useRecoilState_TRANSITION_SUPPORT_UNSTABLE, useResetRecoilState } from 'recoil';

const TodoApp = () => {
    const [EditShow, setEditShow] = useRecoilState_TRANSITION_SUPPORT_UNSTABLE(TodoAppContext)
    const [TodoData, setTodoData] = useState([])
    const [Input1, setInput1] = useState('');
    const [Input2, setInput2] = useState('');

    const RID = Math.ceil(Math.random() * 10 + Math.random()) +1;
    console.log(RID);
    
    
    
    const InputHandle = async(e) => {
        e.preventDefault();
        const TodoPost = {
            id : RID +7,
            Title: Input1,
            Description : Input2
        }
        await PostTodoData(TodoPost)
        setTodoData([...TodoData, TodoPost])

    }

    const GetData = async () => {
        const temp = await getTodoData()
        setTodoData(temp.data)
    }

    useEffect(() => {

        GetData();
    }, [])
   


    const DeleteTodo = async (id) => {
        try {
            await deleteTodoData(id)
            setTodoData((prev) => prev.filter((item) => item.id !== id))
        } catch (error) {

        }

    }

    return (
        <div className='w-full h-full bg-pink-100 flex flex-col justify-start items-center relative'>
           
            <div className=' text-3xl font-semibold w-full items-center flex flex-col'>Title</div>
            <div className='flex items-center justify-between py-4'>

                <input type="text"
                    value={Input1}
                    onChange={(e) => setInput1(e.target.value)}
                    placeholder='Enter your Details' className='bg-gray-200 px-4 py-2 mx-1 outline-0 rounded-2xl' />

                <input type="text"
                    value={Input2}
                    onChange={(e) => setInput2(e.target.value)}
                    placeholder='Enter your Details' className='bg-gray-200 px-4 py-2 mx-1 outline-0 rounded-2xl' />
                {Input1}&{Input2}
                <button className='px-4 py-2 bg-green-300 rounded-2xl hover:bg-green-400'
                    onClick={ InputHandle}
                >Submit</button>
            </div>
            <div className='flex flex-col items-center justify-baseline gap-4 py-4 px-4 w-full overflow-y-auto'>
                {EditShow === true ? <EditCard /> : null}



                {TodoData.map((item, index) => {

                    return <div key={item.id} className=' bg-emerald-300 px-4 py-2 w-[98%]  flex justify-between  rounded-sm relative'>
                        
                        <div className='flex flex-col items-start justify-evenly gap-4 px-4 py-2'>
                            <p className='text-2xl font-bold'>{index +1}</p>
                            <h3>{item.Title}</h3>
                            <h3 className='flex flex-wrap text-justify'>{item.Description}</h3>
                            <h3>${item.price}</h3>
                        </div>
                        <div className='flex flex-col gap-4 items-center justify-center  px-4'>
                            <button className='px-4 py-2  flex items-center justify-center hover:bg-green-600  bg-green-500 content-center rounded-2xl'
                                onClick={() => setEditShow(EditShow === false && item.id == item.id ? true : false)}
                            >Edit</button>
                            <button className='px-4 py-2  flex items-center justify-center hover:bg-red-600  bg-red-500 content-center rounded-2xl'
                                onClick={() => DeleteTodo(item.id)}
                            >Delete</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TodoApp

export const EditCard = memo(() => {
    const[CancleEdit,setCancleEdit]=useRecoilState_TRANSITION_SUPPORT_UNSTABLE(TodoAppContext)

    return <div className=' h-2/5 absolute top-20  z-40 rounded-2xl bg-slate-200 flex flex-col items-center justify-between py-4 px-2'>
        <h4>Edit Post</h4>
        <div className='flex flex-col items-center justify-center gap-4'>
            <h3>Title:</h3>
            <h3>Description : </h3>
        </div>
        <div className='flex items-center justify-center gap-4'>
            <button className='flex items-center justify-center px-4 py-2 rounded-2xl bg-green-400 hover:bg-green-600'>Submit</button>
            <button className='flex items-center justify-center px-4 py-2 rounded-2xl bg-red-400 hover:bg-red-600'
             onClick={()=>setCancleEdit(CancleEdit === true && false)}
            >Cancle</button>
        </div>

    </div>
})