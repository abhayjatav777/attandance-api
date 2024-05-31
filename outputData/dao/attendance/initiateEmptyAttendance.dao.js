"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiateEmptyAttendanceDao = void 0;
const models_1 = require("../../models");
const initiateEmptyAttendanceDao = (student) => {
    return models_1.models.AttendanceSheet.create({
        inTime: null,
        name: student.name,
        studentID: student.studentID,
        notes: null,
        outTime: null,
        status: "initiate",
    });
};
exports.initiateEmptyAttendanceDao = initiateEmptyAttendanceDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdGlhdGVFbXB0eUF0dGVuZGFuY2UuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9hdHRlbmRhbmNlL2luaXRpYXRlRW1wdHlBdHRlbmRhbmNlLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFFL0IsTUFBTSwwQkFBMEIsR0FBRyxDQUN4QyxPQUFxRCxFQUNyRCxFQUFFO0lBQ0YsT0FBTyxlQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxNQUFNLEVBQUUsSUFBSTtRQUNaLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtRQUNsQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVM7UUFDNUIsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtRQUNiLE1BQU0sRUFBRSxVQUFVO0tBQ25CLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVhXLFFBQUEsMEJBQTBCLDhCQVdyQyJ9