"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { groupDataSchema } from "@/schemas";
import { auth } from "@/auth";

export const addNewGroup = async (values: z.infer<typeof groupDataSchema>) => {
  try {
    const validateFields = groupDataSchema.safeParse(values);
    if (!validateFields.success) return { message: "no match" };
    const { groupName, warningPerUser, removeUser, toleranceLevel, userId } =
      validateFields.data;

    const groupAlreadyExists = await db.group.findFirst({
      where: {
        groupName,
        userId,
      },
    });
    if (groupAlreadyExists)
      return { message: "This Group is already protected" };
    const addGroup = await db.group.create({
      data: {
        groupName,
        warningPerUser,
        removeUser,
        toleranceLevel,
        userId,
      },
    });
    if (addGroup) return { message: "Group is added." };
    return { message: "Something went wrong please try again !!" };
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getGroupList = async () => {
  try {
    const session = await auth();
    const groupList = await db.group.findMany({
      where: {
        userId: session?.user.id,
      },
    });
    return groupList;
  } catch (error: any) {
    console.log(error.message);
  }
};
