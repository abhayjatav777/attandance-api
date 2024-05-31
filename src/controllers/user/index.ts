import { getStudentAttendance } from "./getAttendanceApp";
import { inAttendanceSheet } from "./inAttendanceSheet";
import { outAttendanceSheet } from "./outAttendanceSheet";

export const userAttendance = {
  inAttendanceSheet: inAttendanceSheet,
  outAttendanceSheet: outAttendanceSheet,
  getStudentAttendance: getStudentAttendance,
};
