import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function FormMui() {
    const defaultValues = {
        name: '名無権兵衛',
        email: 'admin@example.com',
        gender: 'male',
        memo: ''
    };

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues });
    const onSubmit = data => console.log(data);
    const onError = errors => console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <div>
                <TextField label="名前" margin='normal' 
                    {...register('name',{
                        required: '名前は必須です',
                        maxLength: { 
                            value: 20, 
                            message: '名前は20文字以内です' 
                        }
                    })}
                    error={'name' in errors}
                    helperText={errors.name?.message} />
            </div>
            <div>
                <FormControl>
                    <FormLabel component={"legend"}>性別：</FormLabel>
                    <RadioGroup name='gender'>
                        <FormControlLabel value='male' control={<Radio />} label='男性'
                            {...register('gender',{
                                required: '性別は必須です'
                            })}
                        />
                        <FormControlLabel value='female' control={<Radio />} label='女性'
                            {...register('gender',{
                                required: '性別は必須です'
                            })}
                        />
                    </RadioGroup>
                    <FormHelperText error={'gender' in errors}>
                        {errors.gender?.message}
                    </FormHelperText>
                </FormControl>
            </div>
            <div>
                <TextField type='email' label='メールアドレス' margin='normal'
                    {...register('email',{
                        required: 'メールアドレスは必須です',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'メールアドレスの形式が正しくありません'
                        }
                    })}
                    error={'email' in errors}
                    helperText={errors.email?.message} />
            </div>
            <div>
                <TextField label='メモ' margin='normal' multiline
                    {...register('memo',{
                        minLength: {
                            value: 10,
                            message: 'メモは10文字以上です'
                        }
                    })}
                    error={'memo' in errors}
                    helperText={errors.memo?.message} />
            </div>
            <div>
                <Button type='submit' variant='contained'>送信</Button>
            </div>
        </form>
    )
}