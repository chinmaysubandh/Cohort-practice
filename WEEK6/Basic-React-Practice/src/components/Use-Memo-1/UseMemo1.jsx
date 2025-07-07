import React, { useMemo, useState } from 'react'

export const UseMemo1 = () => {
    const [factvalue, setFactValue] = useState(0);
    const [factresult, setFactResult] = useState();

    const result = useMemo(() => {
        let countvalue = 1;
        for (let i = 1; i <= factvalue; i++) {
            countvalue = countvalue * i;
        }
        return countvalue;
    }, [factvalue])


    return (
        <div>
            <input className='border-2 rounded  ' type='number' placeholder='Enter Value'
                value={factvalue} onChange={(e) => setFactValue(e.target.value)}
            />
            <h1>Entered Number is :{factvalue}</h1>
            <h1>Factorial of Number is{result}</h1>
        </div>
    )
}
