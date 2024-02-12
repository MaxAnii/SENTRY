"use server"
import { loginSchema } from "@/schemas"
import * as z from "zod"
import { db } from "@/lib/db"
import bcrypt from "bcrypt"
export const login=async(values:z.infer<typeof loginSchema>)=>{
const validateFields = loginSchema.safeParse(values)
if(!validateFields.success) return {error:"no match"}
const {email,password} = validateFields.data;

const hashedPassword = await bcrypt.hash(password, 10);
const userExits =await  db.user.findUnique({
    where:{
        email,
        password: hashedPassword,
    }
})
if(!userExits) return {error:"Credentails does not match"}
return {success:"Auth"}
}