"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceDao = void 0;
const updateAttendance_1 = require("../Qr-dao/updateAttendance");
const checkAttendance_dao_1 = require("./checkAttendance.dao");
const getAllAttendance_dao_1 = require("./getAllAttendance.dao");
const getStudentAttendance_dao_1 = require("./getStudentAttendance.dao");
const getStudentAttendanceDetails_dao_1 = require("./getStudentAttendanceDetails.dao");
const getTodayAttendance_dao_1 = require("./getTodayAttendance.dao");
const initiateEmptyAttendance_dao_1 = require("./initiateEmptyAttendance.dao");
const markAttendanceIn_dao_1 = require("./markAttendanceIn.dao");
const markAttendanceOut_dao_1 = require("./markAttendanceOut.dao");
exports.attendanceDao = {
    getAllStudentAttendance: getAllAttendance_dao_1.getAllStudentAttendance,
    getStudentAttendance: getStudentAttendance_dao_1.getStudentAttendance,
    getStudentAttendanceDetails: getStudentAttendanceDetails_dao_1.getStudentAttendanceDetails,
    checkAttendance: checkAttendance_dao_1.checkAttendance,
    initiateEmptyAttendance: initiateEmptyAttendance_dao_1.initiateEmptyAttendanceDao,
    getTodayAttendance: getTodayAttendance_dao_1.getTodayAttendanceDao,
    updateDao: updateAttendance_1.updateAttendanceDao,
    markAttendanceIn: markAttendanceIn_dao_1.markAttendanceInDao,
    markAttendanceOut: markAttendanceOut_dao_1.markAttendanceOutDao,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL2F0dGVuZGFuY2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsaUVBQWlFO0FBQ2pFLCtEQUF3RDtBQUN4RCxpRUFBaUU7QUFDakUseUVBQWtFO0FBQ2xFLHVGQUFnRjtBQUNoRixxRUFBaUU7QUFDakUsK0VBQTJFO0FBQzNFLGlFQUE2RDtBQUM3RCxtRUFBK0Q7QUFFbEQsUUFBQSxhQUFhLEdBQUc7SUFDM0IsdUJBQXVCLEVBQUUsOENBQXVCO0lBQ2hELG9CQUFvQixFQUFFLCtDQUFvQjtJQUMxQywyQkFBMkIsRUFBRSw2REFBMkI7SUFDeEQsZUFBZSxFQUFFLHFDQUFlO0lBQ2hDLHVCQUF1QixFQUFFLHdEQUEwQjtJQUNuRCxrQkFBa0IsRUFBRSw4Q0FBcUI7SUFDekMsU0FBUyxFQUFFLHNDQUFtQjtJQUM5QixnQkFBZ0IsRUFBRSwwQ0FBbUI7SUFDckMsaUJBQWlCLEVBQUUsNENBQW9CO0NBQ3hDLENBQUMifQ==