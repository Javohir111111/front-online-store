// --------- Authorization  -------------

import { ReactNode } from "react";


export interface Signin{
    username: string;
    password: string|number;
}

export interface Signup extends Signin{
    name: string;
    phone: string;
}

export interface ResetPassword{
    email?: string;
    phone?: string|number;
}
interface Verify {
    email: string;
    otp: string
}


export interface Request{
    signup:(data:Signup)=>any,
    verify:(data:Verify)=>any,
    createUser:(data:Signup)=>any,
    signin:(data:Signin)=>any,
    
    // reset:(data:ResetPassword)=>void
}

export interface initialValuesLogin {
    email: string;
    password: string;
}
//-------------------------------------

export interface RequestPosts{
    get:()=>any,
    getById:(id:number)=>any,
    postlike:(id:number|string)=>any,
    create:(data:any)=>any,
    delete:(id:string|number)=>void,
    update:(data:any)=>any
}



export interface PostItem{
    id:number;
    description:string;
    for_gender:string;
    userId:number;
}

export interface CardPropType{
    data:PostItem;
    key:number|string
}


export interface gridPropType{
    children:propType | ReactNode;
    cols:string|number,
    gap:string|number
}



// ------------------------------------



// ------------- React Tsx , JSX Elmenets -------------

export interface propType{
    children: string | any | null
}

export interface sectionPropType{
    children: string | any | null;
    title?: string;
    id?:string | number
}