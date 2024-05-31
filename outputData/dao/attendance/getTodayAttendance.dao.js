"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodayAttendanceDao = void 0;
const paginated_middleware_1 = require("../../middleware/paginate/paginated.middleware");
const models_1 = require("../../models");
const aggregationArray = (param) => {
    const stages = [];
    const { date } = param;
    stages.push({
        $sort: {
            name: 1,
        },
    });
    if (date != null) {
        let startDate = new Date(new Date(date).setHours(0, 0, 0));
        let endDate = new Date(new Date(date).setHours(23, 59, 59, 999));
        stages.push({
            $match: {
                createdAt: {
                    $gte: startDate,
                    $lte: endDate,
                },
            },
        });
    }
    return stages;
};
const getTodayAttendanceDao = async (params) => {
    const { paging } = params;
    return await (0, paginated_middleware_1.paginated)({
        aggregationArray: aggregationArray(params),
        Model: models_1.models.AttendanceSheet,
        paging: paging,
    });
};
exports.getTodayAttendanceDao = getTodayAttendanceDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VG9kYXlBdHRlbmRhbmNlLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vYXR0ZW5kYW5jZS9nZXRUb2RheUF0dGVuZGFuY2UuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlGQUEyRTtBQUMzRSx5Q0FBc0M7QUFRdEMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEtBQXdCLEVBQW1CLEVBQUU7SUFDckUsTUFBTSxNQUFNLEdBQW9CLEVBQUUsQ0FBQztJQUNuQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDVixLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsQ0FBQztTQUNSO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1FBQ2hCLElBQUksU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFakUsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNWLE1BQU0sRUFBRTtnQkFDTixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsSUFBSSxFQUFFLE9BQU87aUJBQ2Q7YUFDRjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUssTUFBTSxxQkFBcUIsR0FBRyxLQUFLLEVBQUUsTUFBeUIsRUFBRSxFQUFFO0lBQ3ZFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFFMUIsT0FBTyxNQUFNLElBQUEsZ0NBQVMsRUFBQztRQUNyQixnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDMUMsS0FBSyxFQUFFLGVBQU0sQ0FBQyxlQUFlO1FBQzdCLE1BQU0sRUFBRSxNQUFNO0tBQ2YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBUlcsUUFBQSxxQkFBcUIseUJBUWhDIn0=