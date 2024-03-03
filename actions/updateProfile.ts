"use server"
import * as z from "zod"
import { userDataSchema } from "@/schemas"
import { db } from "@/lib/db"



export const updateProfile = async(values:z.infer<typeof userDataSchema>)=>{
    console.log("function")
const validateFields = userDataSchema.safeParse(values)
if(validateFields.success){
  
    await db.user.update({
        where:{id:validateFields.data.id},
        data:{...validateFields.data}
    })
  
        return {message:"Profile updated"}
    
 
}

}