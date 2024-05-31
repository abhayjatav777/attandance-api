"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentAttendance = void 0;
const mongodb_1 = require("mongodb");
const paginated_middleware_1 = require("../../middleware/paginate/paginated.middleware");
const models_1 = require("../../models");
const aggregationArray = (param) => {
    const stages = [];
    const { date, studentId } = param;
    stages.push({
        $match: {
            studentID: new mongodb_1.ObjectId(studentId),
            status: {
                $ne: "initiate",
            },
        },
    });
    stages.push({
        $sort: {
            createdAt: -1,
        },
    });
    if (date) {
        let startDate = new Date(new Date(date).setHours(0, 0, 0));
        let endDate = new Date(new Date(date).setHours(23, 59, 59, 999));
        stages.push({
            $match: {
                createdAt: {
                    $gte: startDate,
                    $lte: endDate, // ex: 2020-11-25T23:59:59.00Z
                },
            },
        });
    }
    return stages;
};
const getStudentAttendance = async (params) => {
    const { paging } = params;
    return await (0, paginated_middleware_1.paginated)({
        aggregationArray: aggregationArray(params),
        Model: models_1.models.AttendanceSheet,
        paging: paging,
    });
};
exports.getStudentAttendance = getStudentAttendance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R1ZGVudEF0dGVuZGFuY2UuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9hdHRlbmRhbmNlL2dldFN0dWRlbnRBdHRlbmRhbmNlLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBbUM7QUFDbkMseUZBQTJFO0FBQzNFLHlDQUFzQztBQVN0QyxNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBd0IsRUFBbUIsRUFBRTtJQUNyRSxNQUFNLE1BQU0sR0FBb0IsRUFBRSxDQUFDO0lBQ25DLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBRWxDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDVixNQUFNLEVBQUU7WUFDTixTQUFTLEVBQUUsSUFBSSxrQkFBUSxDQUFDLFNBQVMsQ0FBQztZQUNsQyxNQUFNLEVBQUU7Z0JBQ04sR0FBRyxFQUFFLFVBQVU7YUFDaEI7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDVixLQUFLLEVBQUU7WUFDTCxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ2Q7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFJLElBQUksRUFBRTtRQUNSLElBQUksU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFakUsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNWLE1BQU0sRUFBRTtnQkFDTixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLE9BQU8sRUFBRSw4QkFBOEI7aUJBQzlDO2FBQ0Y7U0FDRixDQUFDLENBQUM7S0FDSjtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVLLE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxFQUFFLE1BQXlCLEVBQUUsRUFBRTtJQUN0RSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBRTFCLE9BQU8sTUFBTSxJQUFBLGdDQUFTLEVBQUM7UUFDckIsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQzFDLEtBQUssRUFBRSxlQUFNLENBQUMsZUFBZTtRQUM3QixNQUFNLEVBQUUsTUFBTTtLQUNmLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVJXLFFBQUEsb0JBQW9CLHdCQVEvQiJ9