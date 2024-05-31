"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inAttendanceSheet = void 0;
const dao_1 = require("../../dao");
const jsonResponse_1 = require("../../utils/jsonResponse");
const CheckAttendanceStatus_1 = require("../../utils/CheckAttendanceStatus");
const logger_1 = require("../../config/logger");
const inAttendanceSheet = async (req, res) => {
    try {
        const studentID = res.locals.userId;
        const { attendanceType, notes } = req.body;
        const student = await dao_1.dao.student.getStudentById(studentID).exec();
        if (!student) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "student not found",
                title: "student not found",
            });
        }
        const attendance = await dao_1.dao.attendance.checkAttendance(student._id);
        if (attendanceType === "OUT") {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "You are calling wrong API call OUT API",
                title: "Wrong API call",
            });
        }
        const insert = await dao_1.dao.attendance.markAttendanceIn({
            status: await (0, CheckAttendanceStatus_1.CheckAttendanceStatus)(),
            notes,
            name: student.name,
            _id: attendance?._id,
            studentID: student._id.toString(),
        });
        if (!insert) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "Attendance not inserted",
                title: "Attendance not inserted",
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 200,
                message: "Attendance record has been successfully inserted.",
                title: "Attendance Inserted",
            });
        }
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
exports.inAttendanceSheet = inAttendanceSheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5BdHRlbmRhbmNlU2hlZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvdXNlci9pbkF0dGVuZGFuY2VTaGVldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBZ0M7QUFDaEMsMkRBQXdEO0FBQ3hELDZFQUEwRTtBQUMxRSxnREFBNkM7QUFFdEMsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3JFLElBQUk7UUFDRixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDM0MsTUFBTSxPQUFPLEdBQUcsTUFBTSxTQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixLQUFLLEVBQUUsbUJBQW1CO2FBQzNCLENBQUMsQ0FBQztTQUNKO1FBQ0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxTQUFHLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckUsSUFBSSxjQUFjLEtBQUssS0FBSyxFQUFFO1lBQzVCLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLHdDQUF3QztnQkFDakQsS0FBSyxFQUFFLGdCQUFnQjthQUN4QixDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sU0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNuRCxNQUFNLEVBQUUsTUFBTSxJQUFBLDZDQUFxQixHQUFFO1lBQ3JDLEtBQUs7WUFDTCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsR0FBRyxFQUFFLFVBQVUsRUFBRSxHQUFHO1lBQ3BCLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtTQUNsQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxLQUFLLEVBQUUseUJBQXlCO2FBQ2pDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsbURBQW1EO2dCQUM1RCxLQUFLLEVBQUUscUJBQXFCO2FBQzdCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixlQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUF6RFcsUUFBQSxpQkFBaUIscUJBeUQ1QiJ9