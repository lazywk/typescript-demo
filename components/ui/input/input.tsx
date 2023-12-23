import React from 'react';

interface InputProps {
    name?: string;
    className?: string;
    style?: React.CSSProperties;
    type: "number" | "text" | "email" | "password";
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    register?: any;
    required?: boolean;
    label?: string;
    error?: {
        isError?: boolean;
        message?: any;
    };
}

const Input: React.FC<InputProps> = ({ name, className, style, type, handleChange, register, required, error, label }) => {
    const commonStyles = "border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 w-full";
    const errorStyles = "border-red-500";

    let inputElement: JSX.Element;
    let dynamicStyles = `${commonStyles}`;

    if (error?.isError) {
        dynamicStyles += ` ${errorStyles}`;
    }

    switch (type) {
        case "number":
            inputElement = (
                <input
                    type="number"
                    name={name}
                    className={`${dynamicStyles}`}
                    style={style}
                    onChange={handleChange}
                    {...register(`${name}`, { required })}
                />
            );
            break;
        case "email":
            inputElement = (
                <input
                    type="email"
                    name={name}
                    className={`${dynamicStyles}`}
                    style={style}
                    onChange={handleChange}
                    {...register(`${name}`, { required })}
                />
            );
            break;
        case "password":
            inputElement = (
                <input
                    type="password"
                    name={name}
                    className={`${dynamicStyles}`}
                    style={style}
                    onChange={handleChange}
                    {...register(`${name}`, { required })}
                />
            );
            break;
        default:
            inputElement = (
                <input
                    type="text"
                    name={name}
                    className={`${dynamicStyles}`}
                    style={style}
                    onChange={handleChange}
                    {...register(`${name}`, { required })}
                />
            );
            break;
    }

    return (
        <div className={className}>
            {label && <label htmlFor={name}>{label}{required && <span className="text-red-500">*</span>}</label>}
            {inputElement}
            {error?.isError && <p className="text-red-500">{error.message}</p>}
        </div>
    );
};

export default Input;
