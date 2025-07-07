import React, { useRef, useState } from 'react'

//create a component that tracks and displays the number of times that has been rerendered.
//use useRef to create a varaible that persists accross renders without causing addition renders whent it changes.

const Assignmentref2 = () => {
  const [count, setCount] = useState(0);
  const RenderClick = useRef(0);
  const Handler = () => {
    setCount(count + 1);

  };
   RenderClick.current = RenderClick.current + 1
  return (
    <div>
      <p>Number of Times page Re-rendered {RenderClick.current}</p>
      <button  className='rounded-2xl bg-slate-900 text-white border-2 px-4 py-2 mt-2' onClick={Handler}>Click Me</button>
    </div>
  )
}

export default Assignmentref2