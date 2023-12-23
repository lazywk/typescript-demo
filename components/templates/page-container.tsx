import useAuth from '@/utils/hooks/useAuth'
import React, { useEffect } from 'react'

export type PageContainerProp = {
    children: React.ReactNode
}

export default function PageContainer({ children }: PageContainerProp) {

    const { checkSign } = useAuth()


    useEffect(() => {
      checkSign()
    }, [])

    

    return children
}
