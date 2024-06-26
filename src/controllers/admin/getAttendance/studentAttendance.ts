import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse";
import { dao } from "../../../dao";

export const studentAttendance = async (req: Request, res: Response) => {
  try {
    const studentId = req.query.studentId as string;

    const { data, pageData } = await dao.attendance.getStudentAttendance({
      paging: {
        page: Number(req.query.page),
        itemPerPage: Number(req.query.itemPerPage),
      },
      date: req.query.date as string,
      studentId: studentId,
    });

    const studentDetails = await dao.attendance.getStudentAttendanceDetails({
      studentId,
    });

    return JsonResponse(res, {
      status: "success",
      statusCode: 200,
      message: "data found",
      title: "data found",
      data: data,
      pageData: pageData,
      extraData: studentDetails,
    });
  } catch (error: any) {
    return JsonResponse(res, {
      status: "error",
      statusCode: 500,
      message: error.message,
      title: "Something went wrong",
    });
  }
};
