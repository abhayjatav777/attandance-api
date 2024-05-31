"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markInitiateAttendance = void 0;
const logger_1 = require("../../../config/logger");
const jsonResponse_1 = require("../../../utils/jsonResponse");
const dao_1 = require("../../../dao");
const createInitiateAttendance = (student) => {
    return new Promise(async (resolve, reject) => {
        try {
            const todayAttendance = await dao_1.dao.attendance.checkAttendance(student._id);
            if (!todayAttendance) {
                await dao_1.dao.attendance.initiateEmptyAttendance({
                    name: student.name,
                    studentID: student._id,
                });
            }
            resolve();
        }
        catch (error) {
            reject(error);
        }
    });
};
const markInitiateAttendance = async (req, res) => {
    try {
        const students = await dao_1.dao.student.getAllStudentList({ blocked: false });
        const createAttendancePromises = students.map((student) => createInitiateAttendance(student));
        const results = await Promise.allSettled(createAttendancePromises);
        const successfulResults = results.filter((result) => result.status === "fulfilled");
        if (res) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 200,
                message: "Attendance creation completed",
                title: "Attendance Creation",
                data: successfulResults,
            });
        }
    }
    catch (error) {
        logger_1.logger.error(error);
        console.log("Mark initiate attendance Cron Error", error);
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
exports.markInitiateAttendance = markInitiateAttendance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya0luaXRpYXRlQXR0ZW5kYW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9pbmRleC5jb250cm9sbGVyL2Nyb24vbWFya0luaXRpYXRlQXR0ZW5kYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtREFBZ0Q7QUFDaEQsOERBQTJEO0FBQzNELHNDQUFtQztBQUduQyxNQUFNLHdCQUF3QixHQUFHLENBQUMsT0FBc0IsRUFBaUIsRUFBRTtJQUN6RSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDM0MsSUFBSTtZQUNGLE1BQU0sZUFBZSxHQUFHLE1BQU0sU0FBRyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTFFLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3BCLE1BQU0sU0FBRyxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDM0MsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJO29CQUNsQixTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUc7aUJBQ3ZCLENBQUMsQ0FBQzthQUNKO1lBRUQsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2Y7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVLLE1BQU0sc0JBQXNCLEdBQUcsS0FBSyxFQUFFLEdBQWEsRUFBRSxHQUFjLEVBQUUsRUFBRTtJQUM1RSxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxTQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFekUsTUFBTSx3QkFBd0IsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDeEQsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQ2xDLENBQUM7UUFFRixNQUFNLE9BQU8sR0FBRyxNQUFNLE9BQU8sQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUVuRSxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQ3RDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FDMUMsQ0FBQztRQUVGLElBQUksR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsU0FBUztnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLCtCQUErQjtnQkFDeEMsS0FBSyxFQUFFLHFCQUFxQjtnQkFDNUIsSUFBSSxFQUFFLGlCQUFpQjthQUN4QixDQUFDLENBQUM7U0FDSjtLQUNGO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsZUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTFELElBQUksR0FBRyxFQUFFO1lBQ1AsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sSUFBSSx1QkFBdUI7Z0JBQ2pELEtBQUssRUFBRSxzQkFBc0I7YUFDOUIsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtBQUNILENBQUMsQ0FBQztBQXBDVyxRQUFBLHNCQUFzQiwwQkFvQ2pDIn0=