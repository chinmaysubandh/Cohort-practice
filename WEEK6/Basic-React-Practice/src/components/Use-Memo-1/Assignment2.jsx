import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

export const OptimizeFilter = () => {
    const [apidata, setApiData] = useState([]);
    const [filtereddata, setFilteredData] = useState('');

    const getData = async () => {
        const dataset = await axios.get('https://fakestoreapi.com/products');
        setApiData(dataset.data)

    }

    useEffect(() => {
        getData();

    }, [filtereddata]);

    const Products = useMemo(() => {
       const dummy= apidata.filter((items) => {
            return items.title.toLowerCase().includes(filtereddata)
       })
        return dummy;
    },[filtereddata,apidata]) 
    console.log(filtereddata.length);
    
    return (
        <div className='items-center bg-gray-900  w-screen text-white placeholder:text-white'>
            <div>
                <div className='flex justify-center items-center'>
                    <input className='border-2 border-gray-700 rounded-2xl placeholder:m-2 mt-2 mb-2 m-4 pt-2 pb-2 ps-6 pe-6' type="text" placeholder='Search'
                        value={filtereddata} onChange={(event) => setFilteredData(event.target.value)}
                    />
                </div>
                <div className='items-center ms-5 me-5 mt-4 scroll-auto overflow-auto gap-2 '>
                    {Products.map((e) => {
                        return (
                            <div
                            className='items-center bg-gray-800 m-2 p-4 rounded-2xl  w-100 '
                                key={e.id}>
                                <h1><span className='font-bold text-2xl'>Tittle :</span>{e.title}</h1>
                                <h3><span className='font-bold text-2xl'>Description :</span>{ e.description }</h3>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
