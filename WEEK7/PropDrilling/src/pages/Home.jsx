import React from 'react'
import Paggination from '../components/Paggination'
import { useRecoilValue } from 'recoil'
import { PagginationToggle } from '../store/atoms/Toggles'
import { Route, Routes } from 'react-router-dom'

const Home = () => {
  const open = useRecoilValue(PagginationToggle)
  return (
    <div className=' h-full w-full '>
       <h1>Home Dashboard</h1>


    </div>
  )
}

export default Home