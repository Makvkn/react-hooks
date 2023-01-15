import React, {useEffect, useState} from 'react';

const UseEffect = () => {

    const [count, setCount] = useState<number>(0)

    const onPrev = () => {
        setCount(prev => prev + 1)
    }

    useEffect(() => {
        console.log(count)

    }, [])

    return (
        <div style={{background: "red", position: "absolute"}}>
            <div>{count}</div>
            <button onClick={onPrev}>Button</button>

        </div>
    );
};

export default UseEffect;