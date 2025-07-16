import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CountAtom, EvenCount } from "../store/atoms/count";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Count() {
    const [data, setData] = useState([])
    console.log(data);
    const setdata =async () => {
        const datasett = await axios.get('https://679a55e3747b09cdccce8867.mockapi.io/Todo');
        setData(datasett.data)
    }
    useEffect(() => {
        setdata();        

    }, [])
   
    
    return (
        <div className="flex flex-col items-center justify-center">
            <CountRenderer />
            <Buttons />
        </div>
    );
}

function CountRenderer() {

    const count = useRecoilValue(CountAtom);
    const even = useRecoilValue(EvenCount);


    return <div>
        {count}
        <h1 className="max-h-5 w-auto">Even number {even }</h1>
    </div>;
}

function Buttons() {

    const setCount = useSetRecoilState(CountAtom);

    return (
        <div className="flex flex-col items-center gap-4">
            <button
                className="flex px-4 py-2 rounded-sm mx-2 items-center  text-2xl bg-blue-900 h-10 w-32"
                onClick={() => {
                    setCount(count => count+1)
                }}
            >
                Increase
            </button>

            <button
                className="flex items-center px-4 py-2 rounded-sm mx-2  text-2xl bg-blue-900 h-10 w-32"
                onClick={() => {
                    setCount(count => count -1)
                }}
            >
                Decrease
            </button>
        </div>
    );
}