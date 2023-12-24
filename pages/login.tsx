import LoginForm from "@/components/partials/login-form";
import useAuth from "@/utils/hooks/useAuth";
import { LoginFieldtypes } from "@/utils/types/field-types";
import Router from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const { loginUser } = useAuth();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            Router.push('/');
        }
    }, []);

    const onSubmit = async (values: LoginFieldtypes) => {
        try {
            const response = await loginUser(values);
            Router.push('/');
        } catch (error: any) {
            if (error?.response?.data.toLowerCase().includes('user')) {
                setError("email", { type: "focus", message: error?.response?.data });
            } else {
                setError("password", { type: "focus", message: error?.response?.data });
            }
        }
    };

    return (
        <div className="container mx-auto flex justify-center items-center flex-col w-[300px] sm:w-[400px] md:w-[500px] pt-[150px]">
            <p className="mb-3 text-2xl text-center">Login</p>
            <LoginForm onSubmit={handleSubmit(onSubmit)} errors={errors} register={register} />
        </div>
    );
}
