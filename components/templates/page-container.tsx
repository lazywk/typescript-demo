import { RootState } from '@/store'
import useAuth from '@/utils/hooks/useAuth'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from './header'
import Router from 'next/router'
import MainLayout from './main-layout'
import AuthLayout from './auth-layout'
import { privateRoutes } from '@/utils/configs/route.config'

export type PageContainerProp = {
  children: React.ReactNode
}

export default function PageContainer({ children }: PageContainerProp) {

  const { checkSign } = useAuth()
  const { signedIn } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    checkSign()
    if (!privateRoutes.includes(Router.pathname)) {
      Router.push('/login')
    }
  }, [signedIn])


  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-1 lg:px-8">
        {signedIn ? (
          <MainLayout>
            {children}
          </MainLayout>
        ) : (
          <AuthLayout>
            {children}
          </AuthLayout>
        )}
      </div>

    </>

  )
}
