import { Request, Response } from "express";
import { dao } from "../../../dao";
import { JsonResponse } from "../../../utils/jsonResponse";

export const ActiveInactiveUser = async (req: Request, res: Response) => {
  try {
    const { _id } = req.body;
    const user = await dao.student.getStudentById(_id).exec();
    if (!user) {
      JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "Student not found",
        title: "student not found",
      });
    }

    const updated = await dao.student.updateBlockState(
      _id,
      Boolean(user?.blocked)
    );

    if (updated.modifiedCount > 0) {
      JsonResponse(res, {
        status: "success",
        statusCode: 200,
        message: "User updated successfully",
        title: "User updated",
      });
    } else {
      JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "Something went wrong on updating",
        title: "User not updated",
      });
    }
  } catch (error: any) {
    return JsonResponse(res, {
      status: "error",
      statusCode: 500,
      message: error.message,
      title: "Something went wrong",
    });
  }
};
