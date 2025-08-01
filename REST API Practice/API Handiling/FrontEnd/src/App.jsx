import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [Products, setProducts] = useState([])
  const [error, setError] = useState(false)



  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/products')
        console.log(response.data)

        setProducts(response.data)
      } catch (error) {
        setError(true)
      }
    })()
  }, [])

  return (
    <>
      <h1>

        Number of Products:{Products.length}
      </h1>
      <div>
        <h1>dfsdf{Products.name}</h1>
      </div>
    </>
  )
}

export default App
