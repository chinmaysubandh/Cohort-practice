
import TodoList from "./components/TodoList";


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
import SearchBar from "./components/SearchBar";

function App() {



  return (
    <div className="bg-stone-300 text-black h-screen w-screen grid grid-cols-32  px-2 py-2 lg:px-4 lg:py-2 gap-1 absolute overflow-hidden">
      <div className="bg-stone-100 max-md:hidden md:col-span-4 rounded-2xl relative">
        <SideBar></SideBar>

      </div>
      <div className="md:col-span-28 max-md:col-span-32 bg-stone-100 rounded  relative  ">
        
        <div className="bg-stone-100 my-1 mx-1 rounded h-full ">
          <Routes>
            {/* /HOme */}
            <Route path='/' element={<Home />} />
            <Route path="/allposts" element={<AllPosts />} />
            <Route path="/searchbar" element={<SearchBar />} />

            <Route path='/pages' element={<Paggination />} />
            {/* Accounts */}
            <Route path='/accounts' element={<Accounts />} />
            <Route path='/about' element={<About />} />
            {/* team */}
            <Route path='/team' element={<Team />} />
            <Route path="/team/todo" element={<TodoList />} />
            {/* Finance */}
            <Route path="/finance" element={<Finance />} />


          </Routes>
        </div>
      </div>
    </div>
  );
}



export default App;
