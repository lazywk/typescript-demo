import RegisterForm from "@/components/partials/register-form";
import useAuth from "@/utils/hooks/useAuth";
import { RegisterFieldtypes } from "@/utils/types/field-types";
import Router from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const { registerUser } = useAuth();

    const onSubmit = async (values: RegisterFieldtypes) => {
        try {
            const response = await registerUser(values);
            Router.push('/');
        } catch (error: any) {
            const errorMessage = error?.response?.data.toLowerCase();
            if (errorMessage.includes('email')) {
                setError("email", { type: "focus", message: error?.response?.data });
            } else {
                setError("password", { type: "focus", message: error?.response?.data });
            }
        }
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {
            Router.push('/');
        }
    }, []);

    return (
        <div className="container mx-auto flex justify-center items-center flex-col w-[300px] sm:w-[400px] md:w-[500px] pt-[150px]">
            <p className="mb-3 text-2xl text-center">Register</p>
            <RegisterForm onSubmit={handleSubmit(onSubmit)} errors={errors} register={register} />
        </div>
    );
}
