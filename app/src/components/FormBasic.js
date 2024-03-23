import {useForm} from 'react-hook-form';

export default function FormBasic() {
    const defaultValues = {
        name: 'John Doe',
        email: 'aaa@exampe.com',
        gender: 'male',
        memo: ''
    };
    const {register, handleSubmit, formState:{errors,isDirty,isValid}} = useForm({defaultValues});

    const onSubmit = (data) => {
        console.log(data);
    }

    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onSubmit, onerror)}>
            <div>
                <label htmlFor="name">名前</label><br />
                <input type="text" id='name' {...register('name',{
                    required: '名前は必須です',
                    maxLength: {value: 20, message: '名前は20文字以内です'}
                })} />
                <div>{errors.name?.message }</div>
            </div>
            <div>
                <label htmlFor='gender'>性別 </label><br />
                <label>
                    <input type='radio' value='male' {...register('gender',{
                        required: '性別は必須です'
                    })} /> 男性
                </label>
                <label htmlFor='gender'>
                    <input type='radio' value='female' {...register('gender',{
                        required: '性別は必須です'
                    })} /> 女性
                </label>
                <div>{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor='email'>メールアドレス</label><br />
                <input type='email' id='email' {...register('email',{
                    required: 'メールアドレスは必須です',
                    pattern: {
                        value: /([a-z\d+\-.]+)@([a-z\d\-.]+)\.([a-z]+)/,
                        message: 'メールアドレスの形式が正しくありません'
                    }
                })} />
                <div>{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor='memo'>メモ</label><br />
                <textarea id='memo' {...register('memo',{
                    required: 'メモは必須です',
                    minLength: {value: 10, message: 'メモは10文字以上です'},
                    validate: {
                        ng: (value,formValues) => {
                            const ngs = ['暴力','死','グロ','殺す'];
                            for (const ng of ngs){
                                if(value.includes(ng)){
                                    return `${ng}はNGワードです`;
                                }
                            }
                            return true;
                        }
                    }
                })} />
                <div>{errors.memo?.message}</div>
            </div>
            <div>
                <button type='submit' disabled={!isDirty || !isValid}>送信</button>
            </div>
        </form>
    );
};