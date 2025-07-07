import { useContext, useState } from "react"
import { DataContext } from "./context/Context";

function App() {
  const [count, setCount] = useState(10);

  return (
    <div>
      <DataContext.Provider value={{count,setCount}}>
        <Count count={count} setCount={setCount} />
      </DataContext.Provider>
      
    </div>
  )
}

function Count({setCount }) {
  return <div>
    <CountRenderer  />
    <Buttons  setCount={setCount} />
  </div>
}

function CountRenderer() {
 const {count} = useContext(DataContext);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const {count,setCount}=useContext(DataContext)
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App