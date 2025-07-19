import { useRecoilValue, useRecoilState } from "recoil";
import TodoList from "./components/TodoList";
import { CountAtom } from "./store/atoms/count";
import Count from "./components/Count";

function App() {
  
  return (
    <div className="bg-stone-300 text-black h-screen w-screen grid grid-cols-32 px-2 py-2 lg:px-4 lg:py-2 gap-1">
      <div className="bg-stone-100 max-md:hidden md:col-span-4 rounded">
        
        
      </div>
      <div className="md:col-span-28 max-md:col-span-32 bg-stone-100 rounded relative grid grid-rows-12 "> 
        <div className="bg-gray-50 my-1 mx-1 rounded row-span-2  ">ss</div>
        <div className="bg-blue-50 my-1 mx-1 rounded row-span-10 overflow-y-auto">ss</div>
      </div>
    </div>
  );
}



export default App;
