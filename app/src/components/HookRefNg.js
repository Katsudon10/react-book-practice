import { useState } from 'react';

export default function HookRefNg() {
    let id = null;
    const [count, setCount] = useState(0);

    const handleStart = () => {
        if(id === null){
            id = setInterval(() => {
                setCount(count => count + 1);
            }, 1000);
        }
    };

    const handleEnd = () => {
        clearInterval(id);
        id = null;
    };

    return (
        <>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleEnd}>End</button>
            <p>{count}秒経過</p>
        </>
    )
};