import { attendanceQR } from "./attendanceQR";
import { getAttendance } from "./getAttendance";
import { settingsControllers } from "./settings";
import { studentController } from "./students";

export const adminControllers = {
  student: studentController,
  QR: attendanceQR,
  attendance: getAttendance,
  settings: settingsControllers,
};
