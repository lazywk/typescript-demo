import { loginSuccess, logoutSuccess } from "@/store/auth"
import { useDispatch } from "react-redux"
import { LoginFieldtypes, RegisterFieldtypes } from "../types/field-types"
import api from "../api"
import endpoints from "../api/endpoints"
import { AxiosResponse } from "axios"
import { setUser } from "@/store/user"
import Router from "next/router"

interface User {
  username: string;
  email: string;
}

export default function useAuth() {
  const dispatch = useDispatch()

  const checkSign = (): void => {
    const changeSession = (): void => {
      const storedToken: string | null = localStorage.getItem('token');
      const storedUser: string | null = localStorage.getItem('user');

      if (storedToken) {
        dispatch(loginSuccess({ token: storedToken }));

        if (storedUser) {
          const parsedUser: User = JSON.parse(storedUser);
          dispatch(setUser(parsedUser));
        }
      } else {
        dispatch(logoutSuccess());
      }
    };

    changeSession()
  }

  const registerUser = async (values: RegisterFieldtypes): Promise<AxiosResponse<any> | null> => {
    try {
      const response = await api.post(endpoints.register, values)
      const { user, accessToken } = response.data
      dispatch(setUser(user))
      dispatch(loginSuccess({ token: accessToken }))
      localStorage.setItem('token', accessToken)
      localStorage.setItem('user', JSON.stringify({ username: user.username, email: user.email }))
      Router.push('/')

      return response;
    } catch (error: any) {
      return Promise.reject(error)
    }
  }

  const loginUser = async (values: LoginFieldtypes): Promise<AxiosResponse<any> | null> => {
    try {
      const response = await api.post(endpoints.login, values)
      const { user, accessToken } = response.data
      dispatch(setUser(user))
      dispatch(loginSuccess({ token: accessToken }))
      localStorage.setItem('token', accessToken)
      localStorage.setItem('user', JSON.stringify({ username: user.username, email: user.email }))
      Router.push('/')


      return response;
    } catch (error: any) {
      return Promise.reject(error)
    }
  }


  return { checkSign, registerUser, loginUser }
}
