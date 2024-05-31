import { updateAttendanceDao } from "../Qr-dao/updateAttendance";
import { checkAttendance } from "./checkAttendance.dao";
import { getAllStudentAttendance } from "./getAllAttendance.dao";
import { getStudentAttendance } from "./getStudentAttendance.dao";
import { getStudentAttendanceDetails } from "./getStudentAttendanceDetails.dao";
import { getTodayAttendanceDao } from "./getTodayAttendance.dao";
import { initiateEmptyAttendanceDao } from "./initiateEmptyAttendance.dao";
import { markAttendanceInDao } from "./markAttendanceIn.dao";
import { markAttendanceOutDao } from "./markAttendanceOut.dao";

export const attendanceDao = {
  getAllStudentAttendance: getAllStudentAttendance,
  getStudentAttendance: getStudentAttendance,
  getStudentAttendanceDetails: getStudentAttendanceDetails,
  checkAttendance: checkAttendance,
  initiateEmptyAttendance: initiateEmptyAttendanceDao,
  getTodayAttendance: getTodayAttendanceDao,
  updateDao: updateAttendanceDao,
  markAttendanceIn: markAttendanceInDao,
  markAttendanceOut: markAttendanceOutDao,
};
