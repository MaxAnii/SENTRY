"use server";
import { registerSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
export const signup = async (values: z.infer<typeof registerSchema>) => {
	const validateFields = registerSchema.safeParse(values);
	if (!validateFields.success) return { error: "error" };

	const { email, password, confrimPassword } = validateFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);
	const existUser = await db.user.findUnique({
		where: {
			email,
		},
	});
	if (existUser) return { error: "Email already in use" };

	await db.user.create({
		data: {
			email,
			password: hashedPassword,
		},
	});
	// verification token email
	return { success: "auth" };
};
