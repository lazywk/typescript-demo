import MainLayout from "@/components/templates/main-layout";
import { RootState } from "@/store";
import Router from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function HomePage() {
  const { signedIn } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      Router.push('/login')
    }
  }, [signedIn])

  return (
    <MainLayout>
      <div>
        <p>Home Page</p>
      </div>
    </MainLayout>
  )
}
