import { useRecoilValue, useRecoilState } from "recoil";
import TodoList from "./components/TodoList";
import { CountAtom } from "./store/atoms/count";
import Count from "./components/Count";

function App() {
  
  return (
    <div className="bg-gray-950 text-white h-screen w-screen grid grid-cols-12 lg:px-8 lg:py-2 gap-1">
      <div className="bg-gray-900 col-span-2">
        <select name="" id="">
          
          <select name="" id="">
            <option value="">option1</option>
            <option value="">option1</option>
            <option value="">option1</option>
            <option value="">option1</option>
            <option value="">option1</option>
            <option value="">option1</option>
          </select>
          <select name="" id="">
            <option value="">option1</option>
            <option value="">option1</option>
            <option value="">option1</option>
            <option value="">option1</option>
            <option value="">option1</option>
            <option value="">option1</option>
          </select>
        </select>
        
      </div>
      <div className="col-span-10 bg-gray-900"> main bar
       
      </div>
    </div>
  );
}



export default App;
