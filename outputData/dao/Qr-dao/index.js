"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRDao = void 0;
const QrStringGen_1 = require("./QrStringGen");
const addAttendance_1 = require("./addAttendance");
const checkQrString_1 = require("./checkQrString");
const getAttendanceByStudentId_1 = require("./getAttendanceByStudentId");
const markAbsent_dao_1 = require("./markAbsent.dao");
const updateAttendance_1 = require("./updateAttendance");
exports.QRDao = {
    generateAttendanceQr: QrStringGen_1.generateAttendanceQr,
    addAttendance: addAttendance_1.addAttendanceDao,
    updateAttendance: updateAttendance_1.updateAttendanceDao,
    getAttendanceByStudentId: getAttendanceByStudentId_1.getAttendanceByStudentId,
    checkQrDao: checkQrString_1.checkQrDao,
    markAbsent: markAbsent_dao_1.markAbsentDao,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL1FyLWRhby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBcUQ7QUFDckQsbURBQW1EO0FBQ25ELG1EQUE2QztBQUM3Qyx5RUFBc0U7QUFDdEUscURBQWlEO0FBRWpELHlEQUF5RDtBQUU1QyxRQUFBLEtBQUssR0FBRztJQUNuQixvQkFBb0IsRUFBRSxrQ0FBb0I7SUFDMUMsYUFBYSxFQUFFLGdDQUFnQjtJQUMvQixnQkFBZ0IsRUFBRSxzQ0FBbUI7SUFDckMsd0JBQXdCLEVBQUUsbURBQXdCO0lBQ2xELFVBQVUsRUFBRSwwQkFBVTtJQUN0QixVQUFVLEVBQUUsOEJBQWE7Q0FDMUIsQ0FBQyJ9