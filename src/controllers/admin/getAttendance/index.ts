import { allStudentAttendance } from "./allStudentAttendance";
import { getTodayAttendance } from "./getTodayAttendance";
import { studentAttendance } from "./studentAttendance";

export const getAttendance = {
  allStudentAttendance: allStudentAttendance,
  studentAttendance: studentAttendance,
  getTodayAttendance: getTodayAttendance,
};
