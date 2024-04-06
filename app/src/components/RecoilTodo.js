import { useRecoilState, useRecoilValue } from "recoil";
import { todoAtom, todoLastIdSelector } from "../store/atom";
import { useState } from "react";
import './StateTodo.css';

export default function RecoilTodo() {
    const [title, setTitle] = useState('');
    const [todo, setTodo] = useRecoilState(todoAtom);
    const maxId = useRecoilValue(todoLastIdSelector);

    const handleChangeTitle = e => setTitle(e.target.value);

    const handleAdd = () => {
        setTodo([
            ...todo,
            {
                id: maxId + 1,
                title,
                isDone: false,
            },
        ]);
    }

    const handleRemove = e => {
        setTodo(todo.filter(item => item.id !== Number(e.target.dataset.id)));
    };

    return (
        <div>
            <label>
                やること
                <input type="text" value={title} onChange={handleChangeTitle} />
            </label>
            <button type="button" onClick={handleAdd}>追加</button>
            <hr />
            <ul>
                {todo.map(item => (
                    <li key={item.id}>
                        <input type="checkbox" checked={item.isDone} />
                        <span>{item.title}</span>
                        <button type="button" data-id={item.id} onClick={handleRemove}>削除</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
