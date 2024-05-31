import { Request, Response } from "express";
import { dao } from "../../dao";
import { JsonResponse } from "../../utils/jsonResponse";
import { CheckAttendanceStatus } from "../../utils/CheckAttendanceStatus";
import { logger } from "../../config/logger";

export const inAttendanceSheet = async (req: Request, res: Response) => {
  try {
    const studentID = res.locals.userId;
    const { attendanceType, notes } = req.body;
    const student = await dao.student.getStudentById(studentID).exec();

    if (!student) {
      return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "student not found",
        title: "student not found",
      });
    }
    const attendance = await dao.attendance.checkAttendance(student._id);

    if (attendanceType === "OUT") {
      return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "You are calling wrong API call OUT API",
        title: "Wrong API call",
      });
    }

    const insert = await dao.attendance.markAttendanceIn({
      status: await CheckAttendanceStatus(),
      notes,
      name: student.name,
      _id: attendance?._id,
      studentID: student._id.toString(),
    });

    if (!insert) {
      return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "Attendance not inserted",
        title: "Attendance not inserted",
      });
    } else {
      return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        message: "Attendance record has been successfully inserted.",
        title: "Attendance Inserted",
      });
    }
  } catch (error: any) {
    logger.error(error);
    return JsonResponse(res, {
      status: "error",
      statusCode: 500,
      message: error.message,
      title: "Something went wrong",
    });
  }
};
