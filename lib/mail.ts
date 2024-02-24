
import {Resend}  from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendVerificatonEmail = async ( email:string, token:string)=>{
    const confrimLink = `http://localhost:3000/new-verification?token=${token}`
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to:email,
        subject:"confrim your email",
        html:`<p>Click <a href=${confrimLink}>to verifiy email</a></p>`
    })
    console.log("email sent")
}