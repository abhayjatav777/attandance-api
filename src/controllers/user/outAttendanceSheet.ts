import { Request, Response } from "express";
import { dao } from "../../dao";
import { JsonResponse } from "../../utils/jsonResponse";
import { logger } from "../../config/logger";

export const outAttendanceSheet = async (req: Request, res: Response) => {
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

    if (attendanceType === "IN") {
      return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "You are calling wrong API, call IN API",
        title: "Wrong API call",
      });
    }

    const attendance = await dao.attendance.checkAttendance(student._id);

    if (!attendance) {
      return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "Attendance not mark for today",
        title: "Attendance not mark for today",
      });
    }

    const update = await dao.attendance.markAttendanceOut({
      studentID: studentID,
      _id: attendance._id,
      notes: notes,
    });

    if (update.modifiedCount === 0) {
      return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "Attendance not inserted please try again",
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
