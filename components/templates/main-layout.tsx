import React from 'react'

export type MainLayoutProp = {
  children: React.ReactNode
}


export default function MainLayout({ children }: MainLayoutProp) {


  return (
    <>
      <div className='container mx-auto'>
        {children}
      </div>
    </>
  )
}
