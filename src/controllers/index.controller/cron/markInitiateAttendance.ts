import { Request, Response } from "express";
import { logger } from "../../../config/logger";
import { JsonResponse } from "../../../utils/jsonResponse";
import { dao } from "../../../dao";
import { TStudentModel } from "../../../types/models/student-model";

const createInitiateAttendance = (student: TStudentModel): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const todayAttendance = await dao.attendance.checkAttendance(student._id);

      if (!todayAttendance) {
        await dao.attendance.initiateEmptyAttendance({
          name: student.name,
          studentID: student._id,
        });
      }

      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export const markInitiateAttendance = async (req?: Request, res?: Response) => {
  try {
    const students = await dao.student.getAllStudentList({ blocked: false });

    const createAttendancePromises = students.map((student) =>
      createInitiateAttendance(student)
    );

    const results = await Promise.allSettled(createAttendancePromises);

    const successfulResults = results.filter(
      (result) => result.status === "fulfilled"
    );

    if (res) {
      return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        message: "Attendance creation completed",
        title: "Attendance Creation",
        data: successfulResults,
      });
    }
  } catch (error: any) {
    logger.error(error);
    console.log("Mark initiate attendance Cron Error", error);

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
