"use server";
import * as z from "zod";
import { db } from "@/lib/db";
import { groupDataSchema, UpdategroupDataSchema } from "@/schemas";
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

export const deleteGroup = async (groupId: string) => {
  try {
    const data = await db.group.delete({
      where: {
        id: groupId,
      },
    });
    if (data) return { message: "Group deleted" };
  } catch (error) {}
};

export const updateGroupDetails = async (
  values: z.infer<typeof UpdategroupDataSchema>,
) => {
  try {
    
    const validateFields = UpdategroupDataSchema.safeParse(values);
    if (!validateFields.success) return { message: "no match" };
    const { id } = validateFields.data;
    const data = await db.group.update({
      where: {
        id,
      },
      data: {
        ...validateFields.data,
      },
    });
    if (data) return { message: "Group Updated Successfully" };
    return { message: "something went wrong" };
  } catch (error) {}
};
