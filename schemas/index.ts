import * as z from "zod"

export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(8)
})


export const registerSchema = z.object({
    email:z.string().email(),
    password:z.string().min(8),
    confrimPassword:z.string().min(8)
}).refine((data)=>data.confrimPassword === data.password,{
    message:"Password don't match",
    path:["confirm"]
})


export const groupDataSchema = z.object({
    groupName:z.string().min(1),
    warning:z.string(),
    remove:z.string(),
    toleranceLevel:z.string()
})