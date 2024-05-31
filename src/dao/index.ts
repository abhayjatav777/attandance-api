import { QRDao } from "./Qr-dao";
import { adminDao } from "./admin-dao";
import { attendanceDao } from "./attendance";
import { otpDao } from "./otp-dao";
import { settingsDao } from "./settings-dao";
import { studentDao } from "./student-dao";
import { tokenDao } from "./token-dao";

export const dao = {
  admin: adminDao,
  token: tokenDao,
  student: studentDao,
  otp: otpDao,
  qr: QRDao,
  attendance: attendanceDao,
  settings: settingsDao,
};
