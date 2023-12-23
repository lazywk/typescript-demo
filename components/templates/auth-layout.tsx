import React from 'react'

export type AuthLayoutProp = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProp) {
    return (
        <div className='container mx-auto px-4 h-screen flex justify-center items-center flex-col'>
            {children}
        </div>
    )
}
