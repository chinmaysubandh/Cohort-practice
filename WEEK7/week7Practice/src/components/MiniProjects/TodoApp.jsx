import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TodoApp = () => {
    const [TodoData, setTodoData] = useState([])
    const [Input1, setInput1] = useState('');
    const [Input2, setInput2] = useState('');

    const InputHandle = (e) => {
        e.preventDefault();
        
    }
    
    useEffect(() => {
        const GetData = async () => {
            const temp = await axios.get('https://679a55e3747b09cdccce8867.mockapi.io/Todo')
            setTodoData(temp.data)
        }
        GetData();
    }, [])
    console.log(TodoData);
    
    return (
        <div className='w-full h-full bg-pink-100 flex flex-col justify-start items-center'>
            <div className=' text-3xl font-semibold w-full items-center flex flex-col'>Title</div>
            <div className='flex items-center justify-between'> 

                <input type="text"
                    value={Input1}
                    onChange={(e)=>setInput1(e.target.value)}
                    placeholder='Enter your Details' className='bg-gray-200 px-4 py-2 mx-1 outline-0 rounded-2xl' />
                
                <input type="text"
                    value={Input2}
                    onChange={(e)=>setInput2(e.target.value)}
                    placeholder='Enter your Details' className='bg-gray-200 px-4 py-2 mx-1 outline-0 rounded-2xl' />
                <button className='px-4 py-2 bg-green-300 rounded-2xl hover:bg-green-400'
                onClick={()=>InputHandle}
                >Submit</button>
            </div>
            <div className='grid grid-cols-4 items-center justify-baseline gap-4 py-4 px-4 w-full overflow-y-auto'>
                {TodoData.map((item, index) => {
                    return <div key={item.id} className='w-full bg-emerald-300 px-4 py-2 h-full flex rounded-sm'>
                        <div className='flex flex-col flex-wrap gap-4 w-[80%]'>
                            <h3>{item.Title}</h3>
                            <h3>{item.Description}</h3>
                            <h3>{item.price}</h3>
                        </div>
                        <div className='flex flex-col gap-4 items-center justify-center w-[20%]'>
                            <button className='px-4 py-2 h-10 flex items-center justify-center hover:bg-green-600 w-18 bg-green-500 content-center rounded-2xl'>Edit</button>
                            <button className='px-4 py-2 h-10 flex items-center justify-center hover:bg-red-600 w-18 bg-red-500 content-center rounded-2xl'>Delete</button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TodoApp