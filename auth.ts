import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import {PrismaAdapter} from "@auth/prisma-adapter"
import { db } from "@/lib/db"
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks:{
  // used this callback to added the user Id in the session token, we can also added custom feilds (Ansar)
    async session({token,session}) {
     if (token.sub && session.user){
      
        session.user.id = token.sub
      }
      return session 
    },
    async jwt({token, user, profile}) {
      // we can fetch data from db and assign it to token and we can added to the session token
      // token.custom = data.userName
      console.log({user:user},{profile:profile})
      return token
    }
  },
  adapter:PrismaAdapter(db),
  session:{strategy:"jwt"},
  ...authConfig,
})