import { useEffect, useState } from "react";
import axios from 'axios'

const ProductPage = () => {
    const [dataset, setDataset] = useState([]);
    const FetchData = async() => {
        const datafetched =await axios.get('http://localhost:5000/products')
        setDataset(datafetched.data.Products)
    }
    useEffect(() => {
        FetchData()
    }, [])
    console.log(dataset);

    return <div className="w-full h-full bg-stone-300">
        <div className="flex flex-col items-center justify-between gap-4 w-full py-4">
            <div className="flex justify-evenly items-center gap-4 w-full">
                <input type="text" placeholder="Enter Product Name" />
                <input type="text" placeholder="Enter Product Description" />
                <input type="text" placeholder="Enter Product Price" />
            </div>
            <div className="flex items-center justify-center gap-8"> 
                <button className="px-8 py-1 bg-green-400 rounded-xl hover:scale-105 hover:duration-500 hover:bg-green-500">Add</button>
                <button>Cancel</button>
            </div>
        </div>

    </div>
}

export default ProductPage;