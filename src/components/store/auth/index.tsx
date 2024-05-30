import http from "@config";
import { create } from "zustand";
import { Request } from "../../interface/auth";
import { setCookies } from "@cookie";


const useAuthStore = create <Request> (() => ({
    Login: async (payload) => {
        try{
            const response = await http.post('/login', payload)
            if(response.status === 200){
                setCookies('token', response.data.access_token)
                setCookies('refresh_token', response.data.refresh_token)
                setCookies('first_name', response.data.first_name)
            }
            return response
        }catch(err){
            return err
        }
    },
    Register: async (payload) => {
        try{
            const response = await http.post('/register', payload)
            return response
        }catch(err){
            return err
        }
    },
    ForgotPassword: async (payload) => {
        const response = await http.post(`/forgot/${payload.email}`)
        return response
    },
    ResetPassword: async (payload) => {
        const response = await http.post(`/reset-password`, payload)
        return response
    },
    RefreshToken: async (payload) => {
        const response = await http.post(`/token/${payload}`)
        return response
    },
    VerifyCode: async (payload) => {
       try{
        const response = await http.post(`/verify?email=${payload.email}&otp=${payload.otp}`)
        return response
       }catch(err){
        return err
       }
    }
}))


export default useAuthStore;