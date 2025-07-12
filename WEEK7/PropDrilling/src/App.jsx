import { useRecoilValue, useRecoilState } from "recoil";
import TodoList from "./components/TodoList";
import { CountAtom } from "./store/atoms/count";

function App() {
  return (
    <div className="bg-gray-950 text-white h-screen w-screen flex items-center justify-center">
      <div className="bg-gray-900 sm:mx-16 max-sm:mx-4 lg:mx-24 h-full w-full items-center">
        <Count />
        <TodoList/>
      </div>
    </div>
  );
}

function Count() {
  return (
    <div className="flex flex-col items-center justify-center">
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  
  const count = useRecoilValue(CountAtom);
  console.log(count);

  return <div>
    {count}
  </div>;
}

function Buttons() {
   
  const [count, setCount] = useRecoilState(CountAtom);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        className="px-4 py-2 rounded-sm mx-2 text-center text-2xl bg-blue-900 h-10 w-32"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        className="px-4 py-2 rounded-sm mx-2 text-center text-2xl bg-blue-900 h-10 w-32"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
