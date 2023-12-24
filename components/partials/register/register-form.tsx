import React from 'react';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import ActionLink from '@/components/ui/ActionLink';

type Props = {
    onSubmit: any,
    errors: any,
    register: any
}


const RegisterForm = ({ onSubmit, register, errors }: Props) => {

    const onFinish = async (event: React.FormEvent) => {
        event.preventDefault()
        onSubmit?.()
    };

    return (
        <div className="login-form w-full">
            <form onSubmit={onFinish} className='flex flex-col item-center'>
                <Input
                    className='w-full mb-4'
                    type='text'
                    register={register}
                    name='username'
                    required={true}
                    error={errors?.username && { message: errors?.username.message, isError: true }}
                />

                <Input
                    className='w-full mb-4'
                    type='email'
                    register={register}
                    name='email'
                    required={true}
                    error={errors?.email && { message: errors?.email.message, isError: true }}
                />

                <Input
                    className='w-full mb-4'
                    type='password'
                    register={register}
                    name='password'
                    required={true}
                    error={errors?.password && { message: errors?.password.message, isError: true }}
                />

                <Button type='submit' label='Register' />
                <ActionLink path='/login' className='mx-auto py-2'>Back to Login</ActionLink>
            </form>
        </div>
    );
}

export default RegisterForm;