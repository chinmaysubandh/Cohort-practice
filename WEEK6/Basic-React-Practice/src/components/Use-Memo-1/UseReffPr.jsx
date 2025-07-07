import React, { useEffect, useRef, useState } from 'react'

export const UseReffPr = () => {
    const [webValue, setWEbValue] = useState(10);
    const divRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            divRef.current.innerHTML = 23000;
        }, 3000);

    }, [])
    return (
        <div >
            Your Current Due Tax is :<span ref={divRef}>{webValue}</span>
        </div>
    )
}
