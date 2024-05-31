"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dao = void 0;
const Qr_dao_1 = require("./Qr-dao");
const admin_dao_1 = require("./admin-dao");
const attendance_1 = require("./attendance");
const otp_dao_1 = require("./otp-dao");
const settings_dao_1 = require("./settings-dao");
const student_dao_1 = require("./student-dao");
const token_dao_1 = require("./token-dao");
exports.dao = {
    admin: admin_dao_1.adminDao,
    token: token_dao_1.tokenDao,
    student: student_dao_1.studentDao,
    otp: otp_dao_1.otpDao,
    qr: Qr_dao_1.QRDao,
    attendance: attendance_1.attendanceDao,
    settings: settings_dao_1.settingsDao,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGFvL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFpQztBQUNqQywyQ0FBdUM7QUFDdkMsNkNBQTZDO0FBQzdDLHVDQUFtQztBQUNuQyxpREFBNkM7QUFDN0MsK0NBQTJDO0FBQzNDLDJDQUF1QztBQUUxQixRQUFBLEdBQUcsR0FBRztJQUNqQixLQUFLLEVBQUUsb0JBQVE7SUFDZixLQUFLLEVBQUUsb0JBQVE7SUFDZixPQUFPLEVBQUUsd0JBQVU7SUFDbkIsR0FBRyxFQUFFLGdCQUFNO0lBQ1gsRUFBRSxFQUFFLGNBQUs7SUFDVCxVQUFVLEVBQUUsMEJBQWE7SUFDekIsUUFBUSxFQUFFLDBCQUFXO0NBQ3RCLENBQUMifQ==