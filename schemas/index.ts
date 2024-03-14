import * as z from "zod";

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
});

export const registerSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	confrimPassword: z.string().min(8),
});

export const whatsVerificationSchema = z.object({
	phoneNumber: z.string().min(10),
});

export const groupDataSchema = z.object({
	groupName: z.string().min(1),
	warningPerUser: z.string(),
	removeUser: z.string(),
	toleranceLevel: z.string(),
	userId: z.string(),
});

export const userDataSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string().email(),
	phoneNumber: z.string().min(10),
	image: z.string().min(0),
});

export const userPhoneNumberSchema = z.object({
	phoneNumber: z.string().min(10),
});

export const otpDataSchema = z.object({
	otp: z.string().length(6),
});
