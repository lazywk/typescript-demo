import React from 'react'

export type AuthLayoutProp = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProp) {

    return (
        <div
            className='container mx-auto flex justify-center items-center flex-col w-[300px] sm:w-[400px] md:w-[500px] pt-[150px]'
        >
            {children}
        </div>
    )
}
