import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import ProductPage from './components/ProductsPage'


function App() {
  

  return (
    <div className='bg-stone-50 h-screen w-screen flex flex-col items-center'>
      <NavBar />
      <ProductPage/>
      
    </div>
  )
}

export default App
