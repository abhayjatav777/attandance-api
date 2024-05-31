"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.outAttendanceSheet = void 0;
const dao_1 = require("../../dao");
const jsonResponse_1 = require("../../utils/jsonResponse");
const logger_1 = require("../../config/logger");
const outAttendanceSheet = async (req, res) => {
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
        if (attendanceType === "IN") {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "You are calling wrong API, call IN API",
                title: "Wrong API call",
            });
        }
        const attendance = await dao_1.dao.attendance.checkAttendance(student._id);
        if (!attendance) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "Attendance not mark for today",
                title: "Attendance not mark for today",
            });
        }
        const update = await dao_1.dao.attendance.markAttendanceOut({
            studentID: studentID,
            _id: attendance._id,
            notes: notes,
        });
        if (update.modifiedCount === 0) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "Attendance not inserted please try again",
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
exports.outAttendanceSheet = outAttendanceSheet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0QXR0ZW5kYW5jZVNoZWV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIvb3V0QXR0ZW5kYW5jZVNoZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1DQUFnQztBQUNoQywyREFBd0Q7QUFDeEQsZ0RBQTZDO0FBRXRDLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN0RSxJQUFJO1FBQ0YsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDcEMsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQzNDLE1BQU0sT0FBTyxHQUFHLE1BQU0sU0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLG1CQUFtQjtnQkFDNUIsS0FBSyxFQUFFLG1CQUFtQjthQUMzQixDQUFDLENBQUM7U0FDSjtRQUVELElBQUksY0FBYyxLQUFLLElBQUksRUFBRTtZQUMzQixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSx3Q0FBd0M7Z0JBQ2pELEtBQUssRUFBRSxnQkFBZ0I7YUFDeEIsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLFNBQUcsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxLQUFLLEVBQUUsK0JBQStCO2FBQ3ZDLENBQUMsQ0FBQztTQUNKO1FBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxTQUFHLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO1lBQ3BELFNBQVMsRUFBRSxTQUFTO1lBQ3BCLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRztZQUNuQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztRQUVILElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsMENBQTBDO2dCQUNuRCxLQUFLLEVBQUUseUJBQXlCO2FBQ2pDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsbURBQW1EO2dCQUM1RCxLQUFLLEVBQUUscUJBQXFCO2FBQzdCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixlQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUFoRVcsUUFBQSxrQkFBa0Isc0JBZ0U3QiJ9