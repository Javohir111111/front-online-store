import http from "../config";
import { Request } from "@interface";

export const auth:Request={
    signup: (data)=> http.post("/register",data),
    verify: (data)=> http.post(`/verify?email=${data.email}&otp=${data.otp}`), 
    createUser: (data)=> http.post("/user",data),
    signin: (data)=> http.post("/login",data),
}