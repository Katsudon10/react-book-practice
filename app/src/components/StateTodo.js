import { useState } from "react";

let maxId=0;

export default function StateTodo() {
    const [title, setTitle] = useState('');
    const [todos, setTodo] = useState([]);

    const handleChangeTodo = e => {
        setTitle(e.target.value);
    };
    const handleClick = () => {
        setTodo([
            // ここで既存のtodoを展開
            ...todos,
            // ここで新しいtodoを追加
            {
                id: ++maxId,
                title: title,
                created: new Date(),
                done: false
            }
        ])
        setTitle('');
    };

    return (
        <div>
            <label>
                やること：
                <input type="text" value={title} onChange={handleChangeTodo} />
            </label>
            <button type="button" onClick={handleClick}>追加</button>

            <hr />

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
};