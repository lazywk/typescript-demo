import React from 'react'

export type AuthLayoutProp = {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProp) {

    return (
        <div
            className='container mx-auto'
        >
            {children}
        </div>
    )
}
