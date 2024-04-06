import { useRecoilState, useResetRecoilState } from "recoil";
import { counterAtom } from "../store/atom";

export default function RecoilCounter() {
    const [counter, setCounter] = useRecoilState(counterAtom);

    const handleClick = () => {
        setCounter((prev) => prev + 1);
    }

    return (
        <>
            <button onClick={handleClick}>Increment</button>
            <button onClick={useResetRecoilState(counterAtom)}>Reset</button>
            <p>Counter: {counter}</p>
        </>
    );
}