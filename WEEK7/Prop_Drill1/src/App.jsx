import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useRecoilState } from 'recoil'
import { CountAtom } from './store/atoms/CountAttom'


function App() {
  const [count, setCount] = useRecoilState(CountAtom)

  return (
    <div className='h-screen w-screen px-4 py-2 bg-gray-950 items-center text-white'>
      <span className=''>
        {count}
      </span>
    </div>
  )
}

export default App
