import { Form, useActionData } from "react-router-dom";

export default function BookFormPage() {
    const errors = useActionData();
    return (
        <Form method="POST" noValidate>
            <ul>
                {errors?.map((msg) => (
                    <li key={msg}>{msg}</li>
                ))}
            </ul>
            <div>
                <label htmlFor="title">署名：</label><br />
                <input type="text" id="title" name="title" />
            </div>
            <div>
                <label htmlFor="price">価格：</label><br />
                <input type="number" id="price" name="price" />円
            </div>
            <div>
                <label htmlFor="published">刊行日：</label><br />
                <input type="date" id="published" name="published" />
            </div>
            <div>
                <button type="submit">登録</button>
            </div>
        </Form>
    )
};