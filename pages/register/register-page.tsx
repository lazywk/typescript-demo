import RegisterForm from "@/components/partials/register/register-form";
import useAuth from "@/utils/hooks/useAuth";
import { RegisterFieldtypes } from "@/utils/types/field-types";
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
    return (
        <div className="w-full">
            <p className="mb-3 text-2xl text-center">Register</p>
            <RegisterForm onSubmit={handleSubmit(onSubmit)} errors={errors} register={register} />
        </div>
    )
}
