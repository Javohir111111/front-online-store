import axios from "axios";
import { getCookies, setCookies } from '../../utils/cookies'; 

const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})


async function getRefreshToken(){
    try{
        const refresh_tokenn = getCookies('refresh_token')
        if(!refresh_tokenn){
            throw new Error('Refresh token not found')
        }
        const response = await http.get(`http://store.go-clothes.uz:5555/v1/token/${refresh_tokenn}`)
        const {access_token, refresh_token} = response.data
        setCookies('token', access_token)
        setCookies('refresh_token', refresh_token)
        return access_token
    }catch(error){
        console.log(error)
    }
}


http.interceptors.request.use((config) => {
    const token = getCookies("token")
    if (token) {
        config.headers["Authorization"] = token
    }
    return config
})

http.interceptors.response.use(response => {
    return response
}, async error => {
    if(error.response.status === 401){
        const token = await getRefreshToken()
        if(token){
            error.config.headers["Authorization"] = token
        }else{
            return Promise.reject(error)
        }
    }
    return Promise.reject(error)
})


export default http