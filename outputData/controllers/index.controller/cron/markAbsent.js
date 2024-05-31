"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markAbsent = void 0;
const jsonResponse_1 = require("../../../utils/jsonResponse");
const logger_1 = require("../../../config/logger");
const dao_1 = require("../../../dao");
const markAbsent = async (req, res) => {
    try {
        const students = await dao_1.dao.student.getAllStudentList({});
        const resolved = await Promise.all(students.map(async (student) => {
            const attendance = await dao_1.dao.attendance.checkAttendance(student._id);
            if (attendance &&
                !attendance.inTime &&
                attendance.status === "initiate") {
                return await dao_1.dao.qr.markAbsent(attendance._id.toString());
            }
            return null; // Return null for students not meeting the condition
        }));
        // Filter out null values before sending the response
        const validResults = resolved.filter((result) => result !== null);
        if (res) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 200,
                message: "Attendance inserted",
                title: "Attendance inserted",
                data: validResults,
            });
        }
    }
    catch (error) {
        logger_1.logger.error(error);
        console.log("Absent Cron Error", error);
        if (res) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 500,
                message: error.message || "Internal Server Error",
                title: "Something went wrong",
            });
        }
    }
};
exports.markAbsent = markAbsent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya0Fic2VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9pbmRleC5jb250cm9sbGVyL2Nyb24vbWFya0Fic2VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4REFBMkQ7QUFDM0QsbURBQWdEO0FBQ2hELHNDQUFtQztBQUU1QixNQUFNLFVBQVUsR0FBRyxLQUFLLEVBQUUsR0FBYSxFQUFFLEdBQWMsRUFBRSxFQUFFO0lBQ2hFLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLFNBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFekQsTUFBTSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNoQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUM3QixNQUFNLFVBQVUsR0FBRyxNQUFNLFNBQUcsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVyRSxJQUNFLFVBQVU7Z0JBQ1YsQ0FBQyxVQUFVLENBQUMsTUFBTTtnQkFDbEIsVUFBVSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQ2hDO2dCQUNBLE9BQU8sTUFBTSxTQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDM0Q7WUFFRCxPQUFPLElBQUksQ0FBQyxDQUFDLHFEQUFxRDtRQUNwRSxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYscURBQXFEO1FBQ3JELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQztRQUVsRSxJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLEtBQUssRUFBRSxxQkFBcUI7Z0JBQzVCLElBQUksRUFBRSxZQUFZO2FBQ25CLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixlQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEMsSUFBSSxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxJQUFJLHVCQUF1QjtnQkFDakQsS0FBSyxFQUFFLHNCQUFzQjthQUM5QixDQUFDLENBQUM7U0FDSjtLQUNGO0FBQ0gsQ0FBQyxDQUFDO0FBN0NXLFFBQUEsVUFBVSxjQTZDckIifQ==