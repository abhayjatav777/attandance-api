"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
const AdminModel_1 = __importDefault(require("./AdminModel"));
const OtpModel_1 = __importDefault(require("./OtpModel"));
const StudentModel_1 = __importDefault(require("./StudentModel"));
const TokenModel_1 = __importDefault(require("./TokenModel"));
const attendanceQrModel_1 = __importDefault(require("./attendanceQrModel"));
const attendanceSheetModel_1 = __importDefault(require("./attendanceSheetModel"));
const settingModel_1 = __importDefault(require("./settingModel"));
exports.models = {
    admin: AdminModel_1.default,
    token: TokenModel_1.default,
    student: StudentModel_1.default,
    otp: OtpModel_1.default,
    attendanceQr: attendanceQrModel_1.default,
    AttendanceSheet: attendanceSheetModel_1.default,
    settingsModel: settingModel_1.default,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUEwQztBQUMxQywwREFBa0M7QUFDbEMsa0VBQThDO0FBQzlDLDhEQUFzQztBQUN0Qyw0RUFBb0Q7QUFDcEQsa0ZBQTBEO0FBQzFELGtFQUEyQztBQUU5QixRQUFBLE1BQU0sR0FBRztJQUNwQixLQUFLLEVBQUUsb0JBQWM7SUFDckIsS0FBSyxFQUFFLG9CQUFVO0lBQ2pCLE9BQU8sRUFBRSxzQkFBZ0I7SUFDekIsR0FBRyxFQUFFLGtCQUFRO0lBQ2IsWUFBWSxFQUFFLDJCQUFpQjtJQUMvQixlQUFlLEVBQUUsOEJBQW9CO0lBQ3JDLGFBQWEsRUFBRSxzQkFBYTtDQUM3QixDQUFDIn0=