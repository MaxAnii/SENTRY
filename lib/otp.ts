import { v4 as uuidv4 } from "uuid";
import { db } from "./db";
import { auth } from "@/auth";
export const generateOTP = async (phoneNumber: string) => {
	try {
		const existingOTP = await db.verificationToken.findFirst({
			where: {
				phoneNumber: phoneNumber,
			},
		});
		if (existingOTP) {
			await db.verificationToken.delete({
				where: {
					id: existingOTP.id,
				},
			});
		}
		const otp = uuidv4().slice(0, 6);
		const expires = new Date(new Date().getTime() + 3600 * 1000);
		const session = await auth();
		const id = session?.user.id;
		const insertOTP = await db.verificationToken.create({
			data: {
				id,
				phoneNumber,
				token: otp,
				expirers: expires,
			},
		});
		if (insertOTP) {
			return {
				otp,
			};
		}
		return {
			message: "error",
		};
	} catch (error) {}
};
