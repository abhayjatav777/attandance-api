import { Request, Response } from "express";
import { JsonResponse } from "../../../utils/jsonResponse";
import { logger } from "../../../config/logger";
import { dao } from "../../../dao";

export const markAbsent = async (req?: Request, res?: Response) => {
  try {
    const students = await dao.student.getAllStudentList({});

    const resolved = await Promise.all(
      students.map(async (student) => {
        const attendance = await dao.attendance.checkAttendance(student._id);

        if (
          attendance &&
          !attendance.inTime &&
          attendance.status === "initiate"
        ) {
          return await dao.qr.markAbsent(attendance._id.toString());
        }

        return null; // Return null for students not meeting the condition
      })
    );

    // Filter out null values before sending the response
    const validResults = resolved.filter((result) => result !== null);

    if (res) {
      return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        message: "Attendance inserted",
        title: "Attendance inserted",
        data: validResults,
      });
    }
  } catch (error: any) {
    logger.error(error);
    console.log("Absent Cron Error", error);

    if (res) {
      return JsonResponse(res, {
        status: "error",
        statusCode: 500,
        message: error.message || "Internal Server Error",
        title: "Something went wrong",
      });
    }
  }
};
