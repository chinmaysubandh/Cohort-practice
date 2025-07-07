import React, { useEffect, useRef } from 'react'

export const Assignmentref1 = () => {
    const focusstate = useRef();
    const clickfun = () => {
        focusstate.current.focus();

    }

    useEffect(() => {
        focusstate.current.focus();
    }, [focusstate])
    return (
        <div>
            <input ref={focusstate} id='fucusid' className='bg-gray-900 border placeholder:text-emerald-800' type="text" placeholder='Focuser' />
            <button onClick={() => clickfun()}>focus</button>
        </div>
    )
}
