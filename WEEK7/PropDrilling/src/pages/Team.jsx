import React, { useState } from 'react'
import TodoList from '../components/TodoList'
import { useRecoilValue } from 'recoil'
import { TodoOpenHandle } from '../store/atoms/TodoOpen'

const Team = () => {
  const openTodo =useRecoilValue(TodoOpenHandle)
  return (
    <div className='w-full h-full bg-fuchsia-200'>Team
      {openTodo == true ? <TodoList />:''}
    </div>
  )
}

export default Team