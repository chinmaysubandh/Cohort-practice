import { useRecoilValue, useRecoilState } from "recoil";
import TodoList from "./components/TodoList";
import { CountAtom } from "./store/atoms/count";
import Count from "./components/Count";

function App() {
  
  return (
    <div className="bg-gray-950 text-white h-screen w-screen flex items-center justify-center">
      <div className="bg-gray-900 sm:mx-16 max-sm:mx-4 lg:mx-24 h-full w-full items-center">
        <Count/>
        <TodoList/>
      </div>
    </div>
  );
}



export default App;
