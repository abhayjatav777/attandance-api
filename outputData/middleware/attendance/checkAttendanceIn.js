"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAttendanceIn = void 0;
const jsonResponse_1 = require("../../utils/jsonResponse");
const logger_1 = require("../../config/logger");
const dao_1 = require("../../dao");
const checkAttendanceIn = async (req, res, next) => {
    try {
        const studentID = res.locals.userId;
        const attendance = await dao_1.dao.qr.getAttendanceByStudentId(studentID);
        if (attendance && attendance.status !== "initiate") {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: `Attendance already recorded for IN`,
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
exports.checkAttendanceIn = checkAttendanceIn;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tBdHRlbmRhbmNlSW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZS9hdHRlbmRhbmNlL2NoZWNrQXR0ZW5kYW5jZUluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJEQUF3RDtBQUN4RCxnREFBNkM7QUFDN0MsbUNBQWdDO0FBRXpCLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxFQUNwQyxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCLEVBQ2xCLEVBQUU7SUFDRixJQUFJO1FBQ0YsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDcEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxTQUFHLENBQUMsRUFBRSxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBFLElBQUksVUFBVSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssVUFBVSxFQUFFO1lBQ2xELE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLG9DQUFvQztnQkFDN0MsS0FBSyxFQUFFLDZCQUE2QjthQUNyQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksRUFBRSxDQUFDO0tBQ1I7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixlQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUE1QlcsUUFBQSxpQkFBaUIscUJBNEI1QiJ9