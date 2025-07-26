import axios from 'axios';
import { useEffect, useState } from 'react'


const Card = ({ ID, Title, Description }) => {
  return (
    <div className='m-1 py-1 px-2 bg-stone-200 flex ' >
      <h1 className='p-1 rounded-full  border-gray-950'>{ID}</h1>
      <h2>{Title}</h2>
      

    </div>
  )
}

const Paggination = () => {
  const [dataset, setDataset] = useState([]);
  const [Page, setPage] = useState(0);

  useEffect(() => {
    async function getdata() {
      let temp = await axios.get('https://dummyjson.com/products?limit=200')
      return setDataset(temp.data.products)


    }
    getdata();
  }, [])
  
  const PAGE_Size = 10;
  const Total_pages = Math.ceil(dataset.length / PAGE_Size)
  const Start = Page * PAGE_Size;
  const End = Start + PAGE_Size
  console.log(Total_pages);

  
  

  return (
    <div className='w-full h-full absolute   '>
      
      <div className='   grid-rows-12  '>
        <div className=' row-span-2'>

          {[...Array(Total_pages).keys()].map((items, index) => {
            return <span className='p-1 m-1 border-1 cursor-pointer ' onClick={() => {
              setPage(index)
            }} key={index}>{items}</span>

          })}
        </div>


        <div className='row-span-10 overflow-y-scroll'>
          {dataset.slice(Start, End).map(item => <Card key={item.id} ID={item.id} Title={item.title} Description={item.description} />
          )}
        </div>

      </div>
    </div>
   
  )
}

export default Paggination

