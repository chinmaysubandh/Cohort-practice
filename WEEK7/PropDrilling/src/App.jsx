import { useRecoilValue, useRecoilState } from "recoil";
import TodoList from "./components/TodoList";
import { CountAtom } from "./store/atoms/count";
import Count from "./components/Count";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import About from "./pages/About";
import SideBar from "./components/SideBar";
import Team from "./pages/Team";
import Finance from "./pages/Finance";

function App() {


  return (
    <div className="bg-stone-300 text-black h-screen w-screen grid grid-cols-32 px-2 py-2 lg:px-4 lg:py-2 gap-1">
      <div className="bg-stone-100 max-md:hidden md:col-span-4 rounded-2xl">
       <SideBar></SideBar>

      </div>
      <div className="md:col-span-28 max-md:col-span-32 bg-stone-100 rounded relative grid grid-rows-12 ">
        <div className="bg-gray-50 my-1 mx-1 rounded row-span-2  ">ss</div>
        <div className="bg-blue-50 my-1 mx-1 rounded row-span-10 overflow-y-auto">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/accounts' element={<Accounts />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
            <Route path="/finance" element={<Finance/>} />

          </Routes>
        </div>
      </div>
    </div>
  );
}



export default App;
