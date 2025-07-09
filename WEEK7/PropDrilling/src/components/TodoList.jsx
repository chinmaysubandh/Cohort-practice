import React, { useState } from 'react'

const TodoList = () => {
  const [todo, setTodo] = useState([{
    id: 1,
    title: "ak;ljdf",
    description: "dess mdss djdjdjs dsljfl;selkfj sdlkfhalsdhfkjadhfkjahdjkfh djahfkjasjdhf",
    markdone:false
  }])
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const isDone = (id) => {
    
  }

  const Handler = (e) => {
e.preventDefault()
    const data = {
      id: todo.length+1,
      title,
      description,
      markdone:false

    }
    setTodo([...todo, data])
    setTitle('')
    setDescription('')

  }
  
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <form onSubmit={Handler} className=' flex px-2 py-2 my-2 mx-2 '>
        <input required type="text" placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input required type="text" placeholder='Add Description' value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type='submit' className=' bg-indigo-900 px-4 py-2 my-2 mx-2 rounded-2xl text-white font-semibold'>Add</button>
      </form>
      
      
      <div>
        <div>
          {todo.map((e) => (
            <div key={e.id} className={`grid grid-cols-12 py-2 px-4 my-2 gap-8 items-center ${e.markdone == true ? 'bg-green-800':'bg-gray-800'} rounded-3xl`}  >
              <input className='col-span-2' type="checkbox" onClick={()=>setTodo(markdone==false ? true :false)} />
              <div className='col-span-8'>
                <h1>Title{e.title}</h1>
                <h3>Description:{e.description}</h3>
              </div>
              
              <button className='px-4 py-2 bg-red-900 col-span-2 text-white font-semibold rounded-4xl' onClick={()=>{}}>{e.markdone == true?"remove":"Delete"}</button>

            </div>
          ))}
        </div>
        
      </div>
    </div>
  )
  
  
}

export default TodoList