import { useEffect, useState } from "react";
import './HookTimer.css';

export default function HookTimer() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={count<0 ? 'warn' : ''}>
            現在のカウント: {count}
        </div>
    )
}