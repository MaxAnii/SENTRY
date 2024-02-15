"use server"
import { loginSchema } from "@/schemas"
import * as z from "zod"
import { db } from "@/lib/db"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"


export const login=async(values:z.infer<typeof loginSchema>)=>{
const validateFields = loginSchema.safeParse(values)
if(!validateFields.success) return {error:"no match"}
const {email,password} = validateFields.data;
try {
    await signIn("credentials",{
        email,password,
        redirectTo: DEFAULT_LOGIN_REDIRECT 
 
    })
} catch (error) {
    if (error instanceof AuthError){
        switch(error.type){
            case "CredentialsSignin":
                return {
                    error:"Invalid credentials"
                }
            default:
                return {
                    error:"something went wrong"
                }
        }
    }
    throw error
}

}