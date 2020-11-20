import React, { useState, useEffect } from 'react';

export default function (data) {
    const num = 1
    let [count, setCount] = useState(()=>num*2)

    useEffect(() => {
        
    })

    return (
        <>
            <div>{count}</div>
            <button onClick={() => { setCount(count + data) }}>cont{data}</button>
        </>
    )

}