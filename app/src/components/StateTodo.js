import { useState } from "react";
import './StateTodo.css';

let maxId=0;

export default function StateTodo() {
    const [title, setTitle] = useState('');
    const [todos, setTodo] = useState([]);
    const [desc, setDesc] = useState(true);

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

    const handleDone = e => {
        setTodo(todos.map(todo => {
            if (todo.id === Number(e.target.dataset.id)) {
                return {
                    ...todo,
                    done: true
                };
            }else{
                return todo;
            }
        }))
    };

    const handleRemove = e => {
        setTodo(todos.filter(todo =>
            todo.id !==Number(e.target.dataset.id)
        ));
    };

    const handleSort = () => {
        const sorted = [...todos];
        sorted.sort((a,b)=>{
            if(desc){
                return a.created.getTime() - b.created.getTime();
            }else{
                return b.created.getTime() - a.created.getTime();
            }
        })
        setDesc(!desc);
        setTodo(sorted);
    };

    return (
        <div>
            <label>
                やること：
                <input type="text" value={title} onChange={handleChangeTodo} />
            </label>
            <button type="button" onClick={handleClick}>追加</button>
            <button type="button" onClick={handleSort}>並び替え({desc ? '↑' : '↓'})</button>
            <hr />

            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.done ? 'done' : ''}>
                        {todo.title}
                        <button 
                            type="button" 
                            onClick={handleDone}
                            data-id={todo.id} // ここでidを設定することでe.target.dataset.idで取得できる
                        >
                                済</button>
                                <button 
                            type="button" 
                            onClick={handleRemove}
                            data-id={todo.id} // ここでidを設定することでe.target.dataset.idで取得できる
                        >
                                削除</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};