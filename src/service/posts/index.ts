import { request } from "../config";
import { RequestPosts } from "@interface";

const posts:RequestPosts={
    get: ()=> request.get("/products?page=1&limit=10"),
    getById: (id)=> request.get(`/product/${id}`),
    create: (data)=> request.post("/create",data),
    delete: (id)=> request.delete(`/delete/${id}`),
    update: (data)=> request.put("/update", data),
}

export default posts;