import { Router } from "express";
import { controllers } from "../../controllers";
import { checkAttendanceIn } from "../../middleware/attendance/checkAttendanceIn";
import { checkQr } from "../../middleware/attendance/checkValidQr";
import { checkAttendanceOut } from "../../middleware/attendance/checkAttendanceOut";

export const attendanceQuery = (router: Router) => {
  router.post(
    "/in-attendance-Sheet",
    checkAttendanceIn,
    checkQr,
    controllers.userAttendance.inAttendanceSheet
  );
  router.post(
    "/out-attendance-Sheet",
    checkAttendanceOut,
    checkQr,
    controllers.userAttendance.outAttendanceSheet
  );
  router.get(
    "/get-attendance",
    controllers.userAttendance.getStudentAttendance
  );
};
