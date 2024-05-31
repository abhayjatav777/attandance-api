"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attendanceQuery = void 0;
const controllers_1 = require("../../controllers");
const checkAttendanceIn_1 = require("../../middleware/attendance/checkAttendanceIn");
const checkValidQr_1 = require("../../middleware/attendance/checkValidQr");
const checkAttendanceOut_1 = require("../../middleware/attendance/checkAttendanceOut");
const attendanceQuery = (router) => {
    router.post("/in-attendance-Sheet", checkAttendanceIn_1.checkAttendanceIn, checkValidQr_1.checkQr, controllers_1.controllers.userAttendance.inAttendanceSheet);
    router.post("/out-attendance-Sheet", checkAttendanceOut_1.checkAttendanceOut, checkValidQr_1.checkQr, controllers_1.controllers.userAttendance.outAttendanceSheet);
    router.get("/get-attendance", controllers_1.controllers.userAttendance.getStudentAttendance);
};
exports.attendanceQuery = attendanceQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ZW5kYW5jZS5xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdXNlci9hdHRlbmRhbmNlLnF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1EQUFnRDtBQUNoRCxxRkFBa0Y7QUFDbEYsMkVBQW1FO0FBQ25FLHVGQUFvRjtBQUU3RSxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQ1Qsc0JBQXNCLEVBQ3RCLHFDQUFpQixFQUNqQixzQkFBTyxFQUNQLHlCQUFXLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUM3QyxDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FDVCx1QkFBdUIsRUFDdkIsdUNBQWtCLEVBQ2xCLHNCQUFPLEVBQ1AseUJBQVcsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQzlDLENBQUM7SUFDRixNQUFNLENBQUMsR0FBRyxDQUNSLGlCQUFpQixFQUNqQix5QkFBVyxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FDaEQsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWpCVyxRQUFBLGVBQWUsbUJBaUIxQiJ9