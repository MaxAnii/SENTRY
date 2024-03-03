import * as z from "zod"

export const loginSchema = z.object({
    email:z.string().email(),
    password:z.string().min(8)
})


export const registerSchema = z.object({
    email:z.string().email(),
    password:z.string().min(8),
    confrimPassword:z.string().min(8)
})

export const whatsVerificationSchema= z.object({
    phoneNumber:z.string().min(10)
})

export const groupDataSchema = z.object({
    groupName:z.string().min(1),
    warning:z.string(),
    remove:z.string(),
    toleranceLevel:z.string()
})

export const userDataSchema = z.object({
    id:z.string(),
    name: z.string().min(0),
    email:z.string().email().min(0),
    phoneNumber:z.string().min(0),
    image:z.string().min(0),
})