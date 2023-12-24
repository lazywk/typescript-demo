import RegisterForm from "@/components/partials/register/register-form";
import useAuth from "@/utils/hooks/useAuth";
import { RegisterFieldtypes } from "@/utils/types/field-types";
import Router from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {

    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const { registerUser } = useAuth()

    const onSubmit = async (values: RegisterFieldtypes) => {
        await registerUser(values)
            .then(resp => resp)
            .catch(err => {
                if (err?.response?.data.toLowerCase().split(' ').includes('email')) {
                    setError("email", { type: "focus", message: err?.response?.data })
                }
                else {
                    setError("password", { type: "focus", message: err?.response?.data })
                }
            })
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            Router.push('/')
        }
    }, [])

    return (
        <div className="container mx-auto flex justify-center items-center flex-col w-[300px] sm:w-[400px] md:w-[500px] pt-[150px]">
            <p className="mb-3 text-2xl text-center">Register</p>
            <RegisterForm onSubmit={handleSubmit(onSubmit)} errors={errors} register={register} />
        </div>
    )
}
