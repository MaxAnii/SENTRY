"use server"
import { loginSchema } from "@/schemas"
import * as z from "zod"
export const login=async(values:z.infer<typeof loginSchema>)=>{
const validateFields = loginSchema.safeParse(values)
if(!validateFields) return {error:"no match"}
return {success:"Auth"}
}