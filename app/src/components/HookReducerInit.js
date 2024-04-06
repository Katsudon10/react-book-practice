import { func } from "prop-types";
import { useReducer } from "react";

function initCounter(init) {
    console.log('initCounter is called');
    return {
        count: Math.floor(Math.random() * (init + 1))
    }
}

export default function HookReducerInit({init}) {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
              case 'update':
                return { count: state.count + 1 };
              default:
                return state;
            }
        },
        init, //initCounterに渡す引数
        initCounter
    );

    const handleClick = () => {
        dispatch({ type: 'update' });
    };
    return (
        <>
          <button onClick={handleClick}>カウント</button>
          <p>{state.count}回、クリックされました。</p>
        </>
    );
}