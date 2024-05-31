"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAttendanceOut = void 0;
const jsonResponse_1 = require("../../utils/jsonResponse");
const logger_1 = require("../../config/logger");
const dao_1 = require("../../dao");
const checkAttendanceOut = async (req, res, next) => {
    try {
        const studentID = res.locals.userId;
        const attendance = await dao_1.dao.qr.getAttendanceByStudentId(studentID);
        if (attendance && attendance.inTime === null) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: `Attendance not recorded before In`,
                title: "Attendance can't marked",
            });
        }
        else if (attendance && attendance.outTime !== null) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: `Attendance already recorded for OUT`,
                title: "Attendance already recorded",
            });
        }
        next();
    }
    catch (error) {
        logger_1.logger.error(error);
        return (0, jsonResponse_1.JsonResponse)(res, {
            status: "error",
            statusCode: 500,
            message: error.message,
            title: "Something went wrong",
        });
    }
};
exports.checkAttendanceOut = checkAttendanceOut;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tBdHRlbmRhbmNlT3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21pZGRsZXdhcmUvYXR0ZW5kYW5jZS9jaGVja0F0dGVuZGFuY2VPdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkRBQXdEO0FBQ3hELGdEQUE2QztBQUM3QyxtQ0FBZ0M7QUFFekIsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLEVBQ3JDLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0IsRUFDbEIsRUFBRTtJQUNGLElBQUk7UUFDRixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxNQUFNLFVBQVUsR0FBRyxNQUFNLFNBQUcsQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEUsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDNUMsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsbUNBQW1DO2dCQUM1QyxLQUFLLEVBQUUseUJBQXlCO2FBQ2pDLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEQsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUscUNBQXFDO2dCQUM5QyxLQUFLLEVBQUUsNkJBQTZCO2FBQ3JDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxFQUFFLENBQUM7S0FDUjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLGVBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsS0FBSyxFQUFFLHNCQUFzQjtTQUM5QixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQztBQW5DVyxRQUFBLGtCQUFrQixzQkFtQzdCIn0=