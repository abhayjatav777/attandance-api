import { generateAttendanceQr } from "./QrStringGen";
import { addAttendanceDao } from "./addAttendance";
import { checkQrDao } from "./checkQrString";
import { getAttendanceByStudentId } from "./getAttendanceByStudentId";
import { markAbsentDao } from "./markAbsent.dao";

import { updateAttendanceDao } from "./updateAttendance";

export const QRDao = {
  generateAttendanceQr: generateAttendanceQr,
  addAttendance: addAttendanceDao,
  updateAttendance: updateAttendanceDao,
  getAttendanceByStudentId: getAttendanceByStudentId,
  checkQrDao: checkQrDao,
  markAbsent: markAbsentDao,
};
