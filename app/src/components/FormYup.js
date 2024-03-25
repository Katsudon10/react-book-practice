import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    name :yup
        .string()
        .label('名前')
        .required('${label}は必須です')
        .max(20,'${label}は20文字以内で入力してください'),

    gender : yup
        .string()
        .label('性別')
        .required('${label}は必須です'),
    email : yup
        .string()
        .label('メールアドレス')
        .required('${label}の形式が正しくありません'),
    memo : yup
        .string()
        .label('メモ')
        .required('${label}は必須です')
        .min(10,'${label}は10文字以上で入力してください')
});

export default function FormYup() {
    const defaultValues = {
        name: 'John Doe',
        email: 'aaa@exampe.com',
        gender: 'male',
        memo: ''
    };
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);

    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onSubmit, onerror)} noValidate>
            <div>
                <label htmlFor="name">名前</label><br />
                <input type="text" id='name' {...register('name')} />
                <div>{errors.name?.message}</div>
            </div>
            <div>
                <label htmlFor='gender'>性別</label><br />
                <label>
                    <input type='radio' value="male" {...register('gender')} /> 男性
                </label>
                <label>
                    <input type='radio' value="female" {...register('gender')} /> 女性
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor='email'>メールアドレス</label><br />
                <input type='email' id='email' {...register('email')} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor='memo'>メモ</label><br />
                <textarea id='memo' {...register('memo')} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type='submit'>送信</button>
            </div>
        </form>
    );
}