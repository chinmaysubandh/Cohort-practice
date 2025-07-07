import React, { memo } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Navbar = memo(() => {
  const navigate = useNavigate();
  const Handler = () => {
    navigate('/dashboard')
  }
  const ClickerHandle = () => {
    alert("up key is pressed")
  }
  return (
    <div>
      <nav className=' bg-blend-saturation absolute top-4 left-0 right-0 py-2 px-4 mx-auto text-white 
      max-sm:mx-4 sm:mx-8 md:mx-12 lg:mx-16 2xl:mx-32 
      flex justify-center items-center max-h-16   rounded-l-full rounded-r-full  '>
        <div className='flex  px-4 h-16 w-26'>
          <img className=' rounded-full w-full h-full' src="https://static.vecteezy.com/system/resources/previews/007/968/291/non_2x/dark-night-moon-with-mysterious-man-for-hacker-logo-design-vector.jpg" alt="" />
        </div>
        <div className=' flex w-full justify-end gap-4 px-4 max-sm:gap-2 sm:gap-4 md:gap-8 lg:gap-16'>
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/about">About</Link>
          <Link to="/settings">Profile</Link>
          <button onClick={Handler}>Dashboard</button>
          

        </div>




      </nav>

    </div>
    
    
  )
})
