import LoginForm from "@/components/partials/login/login-form";
import AuthLayout from "@/components/templates/auth-layout";
import useAuth from "@/utils/hooks/useAuth";
import { LoginFieldtypes } from "@/utils/types/field-types";
import { useForm } from "react-hook-form";

export default function LoginPage() {

    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const { loginUser } = useAuth()

    const onSubmit = async (values: LoginFieldtypes) => {
        await loginUser(values)
            .then(resp => resp)
            .catch(err => {
                if (err?.response?.data.toLowerCase().split(' ').includes('user')) {
                    setError("email", { type: "focus", message: err?.response?.data })
                }
                else {
                    setError("password", { type: "focus", message: err?.response?.data })
                }
            })
    }

    return (
        <AuthLayout>
            <p className="mb-3 text-2xl">Login</p>
            <LoginForm onSubmit={handleSubmit(onSubmit)} errors={errors} register={register} />
        </AuthLayout>
    )
}
