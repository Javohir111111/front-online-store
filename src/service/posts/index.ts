import  http  from "../config";
import { RequestPosts } from "@interface";

const posts:RequestPosts={
    get: ()=> http.get("/products?page=1&limit=10"),
    postlike: (id)=> http.post(`/like/${id}`),
    getById: (id)=> http.get(`/product/${id}`),
    create: (data)=> http.post("/create",data),
    delete: (id)=> http.delete(`/delete/${id}`),
    update: (data)=> http.put("/update", data),
}

export default posts;