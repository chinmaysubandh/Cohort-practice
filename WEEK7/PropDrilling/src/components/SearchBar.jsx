import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiSearch, BiSearchAlt } from 'react-icons/bi'
import { BsCommand } from 'react-icons/bs'

const SearchBar = () => {
    const [dataset, setDataSet] = useState([]);
    const [input, setInput] = useState('m');
    const [filteredItems, setFilteredItems] = useState([]);

    

    useEffect(() => {
         const GetData =async()=> {
             try {
                 let temp = await axios.get('https://dummyjson.com/products?limit=200')
                 return setDataSet(temp.data.products)
             } catch (error) {
                console.log("There is no data Present",error);
                
             }

        }
        GetData();

    }, [])
    
    useEffect(() => {
        const FilteredData = dataset.filter((item) => {
          return  item.title.toLowerCase().includes(input.toLowerCase())
            
        });
        setFilteredItems(FilteredData)
    },[input,dataset])
    
    
    
  return (
      <div className='h-full w-full relative bg-slate-50 '>
          <div className='flex flex-col items-center relative'>
              <h1 className='text-3xl font-bold'>Search Bar</h1>
              <div className=' w-full h-full py-2 px-4 flex flex-col items-center justify-center'>
                  
                  <div className='bg-slate-200 px-2 py-1 flex items-center justify-center gap-0.5 rounded-2xl h-[20%]'>
                      <span> <BiSearch className='font-bold text-xl text-blue-600'/> </span>
                      <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder='Search' className=' outline-0' />
                      <span className='flex items-center justify-center gap-0.5'> <BsCommand/> / </span>
                  </div> 
                  <div className='h-[80%] bg-amber-200'>
                      Recommendation 
                      {input}
                  </div>
                  
              </div>
              <div className='grid grid-cols-4 col-span-1'>
                  {filteredItems.length === 0 ? (
                      <div>No matching results</div>
                  ) : (
                      filteredItems.map((e) => (
                          <div key={e.id} className=' bg-green-300 m-1 py-2 px-4'>
                              {e.title}
                          </div>
                      ))
                  )}
              </div>
              
              
          </div>
    </div>
  )
}

export default SearchBar