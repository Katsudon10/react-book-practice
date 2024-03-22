import { useState } from "react";

export default function StateForm() {

    const [form, setForm] = useState({
        name: '山田太郎',
        age: 18
    });

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const show = () => {
        console.log(`名前: ${form.name}, 年齢: ${form.age}`);
    };


    return (
        <form>
            <div>
                <label htmlFor="name">名前：</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleForm} />
                {/* ここのnameとsetFormのe.target.nameが連動している */}
                {/* inputのidとlabelのhtmlForが連動している */}
            </div>
            <div>
                <label htmlFor="age">年齢：</label>
                <input type="number" id="age" name="age" value={form.age} onChange={handleForm} />
            </div>
            <div>
                <button type="button" onClick={show}>送信</button>
            </div>
            <p>こんにちは {form.name} ({form.age}歳)</p>
        </form>
    );
}