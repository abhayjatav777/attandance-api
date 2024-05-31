"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminControllers = void 0;
const attendanceQR_1 = require("./attendanceQR");
const getAttendance_1 = require("./getAttendance");
const settings_1 = require("./settings");
const students_1 = require("./students");
exports.adminControllers = {
    student: students_1.studentController,
    QR: attendanceQR_1.attendanceQR,
    attendance: getAttendance_1.getAttendance,
    settings: settings_1.settingsControllers,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYWRtaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaURBQThDO0FBQzlDLG1EQUFnRDtBQUNoRCx5Q0FBaUQ7QUFDakQseUNBQStDO0FBRWxDLFFBQUEsZ0JBQWdCLEdBQUc7SUFDOUIsT0FBTyxFQUFFLDRCQUFpQjtJQUMxQixFQUFFLEVBQUUsMkJBQVk7SUFDaEIsVUFBVSxFQUFFLDZCQUFhO0lBQ3pCLFFBQVEsRUFBRSw4QkFBbUI7Q0FDOUIsQ0FBQyJ9