import { useContext } from "react";
import { MyAppContext } from "./HookContext";

export function HookContextChild() {
    return (
        <div id='c_child'>
            <HookContextGrandChild />
        </div>
    );
}

export function HookContextGrandChild() {
    const { title, lang } = useContext(MyAppContext);
    return (
        <div id="c_child_grand">
            <h2>{title}</h2>
            <p>{lang}</p>
        </div>
    )
}