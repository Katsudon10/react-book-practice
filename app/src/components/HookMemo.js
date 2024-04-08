import { useMemo, useCallback, useState } from 'react';
import { MyButton, MyCounter } from './HookMemoChild';

const sleep = (time) => {
    const now = Date.now();
    while(Date.now()-now < time);
};

export default function HookMemo() {
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    const increment = useCallback(() => setCount1(c => c+1),[]);
    const decrement = useCallback(() => setCount2(c => c-1),[]);

    const heavyProcess = useMemo(() => {
        sleep(1000);
        return count1+100;
    }, [count1]);

    return (
        <>
            <div>
                <MyButton id="btn1" handleClick={increment}>Increment</MyButton>
                <MyCounter id="counter1" value={count1} />
                {heavyProcess}
            </div>
            <div>
                <MyButton id="btn2" handleClick={decrement}>Decrement</MyButton>
                <MyCounter id="counter2" value={count2} />
            </div>
        </>
    )
}