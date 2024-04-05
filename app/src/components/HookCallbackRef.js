import { useEffect, useRef, useState } from "react";

export default function HookCallbackRef(){
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const callbackRef = elem => elem.focus();
    // const address = useRef(null);

    // useEffect(() => {
    //     if(address.current){
    //         address.current.focus();
    //     }
    // }, [show]);

    return (
        <>
            <div>
                <label htmlFor="name">名前:</label>
                <input type="text" id="name" />
            </div>
            <div>
                <lavel htmlFor="email">メールアドレス:</lavel>
                <input type="text" id="email" />
                <button onClick={handleClick}>拡張表示</button>
            </div>
            {show && (
                <div>
                    <label htmlFor="address">住所:</label>
                    <input type="text" id="address" ref={callbackRef} />
                </div>
            )}
        </>
    );
}