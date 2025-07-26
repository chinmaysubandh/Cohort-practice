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
import { useState } from "react";
import Paggination from "./components/Paggination";
import AllPosts from "./components/AllPosts";

function App() {



  return (
    <div className="bg-stone-300 text-black h-screen w-screen grid grid-cols-32 px-2 py-2 lg:px-4 lg:py-2 gap-1">
      <div className="bg-stone-100 max-md:hidden md:col-span-4 rounded-2xl">
        <SideBar></SideBar>

      </div>
      <div className="md:col-span-28 max-md:col-span-32 bg-stone-100 rounded relative grid grid-rows-14 ">
        <div className="bg-gray-200 my-1 mx-1 rounded row-span-2   ">ss</div>
        <div className="bg-stone-100 my-1 mx-1 rounded row-span-12 relative ">
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/pages' element={<Paggination />} />
            <Route path='/accounts' element={<Accounts />} />
            <Route path='/about' element={<About />} />
            <Route path='/team' element={<Team />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/team/todo" element={<TodoList />} />
            <Route path="/allposts" element={<AllPosts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}



export default App;
