"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { generateOTP } from "@/lib/otp";
import { otpDataSchema, userPhoneNumberSchema } from "@/schemas";
import { auth } from "@/auth";
import { getOtpById } from "@/verification-token";
import { sendOtp } from "@/lib/sendOtpViaWhatsApp";

export const createOTP = async (
  values: z.infer<typeof userPhoneNumberSchema>,
) => {
  try {
    const validateField = userPhoneNumberSchema.safeParse(values);
    if (validateField.success) {
      const { phoneNumber } = validateField.data;
      const phoneNumberExisting = await db.user.findFirst({
        where: {
          phoneNumber,
        },
      });
      if (phoneNumberExisting) {
        return { message: "Phone number already exists" };
      }
      const data = await generateOTP(phoneNumber);
      if (data?.otp) {
        const response = await sendOtp(phoneNumber, data.otp);
        console.log(response);
        if (response === 200)
          return {
            message: "OTP sent successfully",
          };
        return {
          message: "Something went wrong please try again!!!",
        };
      }
      return {
        message: "Something went wrong please try again!",
      };
    }
  } catch (error: any) {
    console.log(error.message);
  }
};

export const verifyOTP = async (values: z.infer<typeof otpDataSchema>) => {
  try {
    const validateField = otpDataSchema.safeParse(values);
    if (validateField.success) {
      const { otp } = validateField.data;
      const session = await auth();
      const id = session?.user.id;
      if (!id) return;
      const data = await getOtpById(id);
      if (data) {
        const hasExpired = new Date(data.expirers) < new Date();
        if (hasExpired) {
          return { message: "OTP expired" };
        }
        if (otp === data.token) {
          await db.user.update({
            where: {
              id,
            },
            data: {
              phoneNumber: data.phoneNumber,
            },
          });
          await db.verificationToken.delete({
            where: {
              id,
            },
          });
          return {
            message: "Phone number updated",
          };
        } else {
          return { message: "Wrong OTP" };
        }
      }
    }
    return { message: "Something went wrong" };
  } catch (error) {}
};
