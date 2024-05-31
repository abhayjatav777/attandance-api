"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStudentAttendance = void 0;
const paginated_middleware_1 = require("../../middleware/paginate/paginated.middleware");
const models_1 = require("../../models");
const aggregationArray = (param) => {
    const stages = [];
    const { date } = param;
    stages.push({
        $sort: {
            _id: 1,
        },
    });
    if (date != null) {
        let inputDate = new Date(date);
        // Set the start date to the first day of the month
        let startDate = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1, 0, 0, 0);
        // Set the end date to the last day of the month
        let lastDay = new Date(inputDate.getFullYear(), inputDate.getMonth() + 1, 0);
        let endDate = new Date(lastDay.getFullYear(), lastDay.getMonth(), lastDay.getDate(), 23, 59, 59, 999);
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
const getAllStudentAttendance = async (params) => {
    const { paging } = params;
    return await (0, paginated_middleware_1.paginated)({
        aggregationArray: aggregationArray(params),
        Model: models_1.models.AttendanceSheet,
        paging: paging,
    });
};
exports.getAllStudentAttendance = getAllStudentAttendance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsQXR0ZW5kYW5jZS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL2F0dGVuZGFuY2UvZ2V0QWxsQXR0ZW5kYW5jZS5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUZBQTJFO0FBQzNFLHlDQUFzQztBQVF0QyxNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBd0IsRUFBbUIsRUFBRTtJQUNyRSxNQUFNLE1BQU0sR0FBb0IsRUFBRSxDQUFDO0lBQ25DLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7SUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNWLEtBQUssRUFBRTtZQUNMLEdBQUcsRUFBRSxDQUFDO1NBQ1A7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDaEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsbURBQW1EO1FBQ25ELElBQUksU0FBUyxHQUFHLElBQUksSUFBSSxDQUN0QixTQUFTLENBQUMsV0FBVyxFQUFFLEVBQ3ZCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFDcEIsQ0FBQyxFQUNELENBQUMsRUFDRCxDQUFDLEVBQ0QsQ0FBQyxDQUNGLENBQUM7UUFFRixnREFBZ0Q7UUFDaEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQ3BCLFNBQVMsQ0FBQyxXQUFXLEVBQUUsRUFDdkIsU0FBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFDeEIsQ0FBQyxDQUNGLENBQUM7UUFDRixJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FDcEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUNyQixPQUFPLENBQUMsUUFBUSxFQUFFLEVBQ2xCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFDakIsRUFBRSxFQUNGLEVBQUUsRUFDRixFQUFFLEVBQ0YsR0FBRyxDQUNKLENBQUM7UUFFRixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsTUFBTSxFQUFFO2dCQUNOLFNBQVMsRUFBRTtvQkFDVCxJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsT0FBTztpQkFDZDthQUNGO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFSyxNQUFNLHVCQUF1QixHQUFHLEtBQUssRUFBRSxNQUF5QixFQUFFLEVBQUU7SUFDekUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUUxQixPQUFPLE1BQU0sSUFBQSxnQ0FBUyxFQUFDO1FBQ3JCLGdCQUFnQixFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUMxQyxLQUFLLEVBQUUsZUFBTSxDQUFDLGVBQWU7UUFDN0IsTUFBTSxFQUFFLE1BQU07S0FDZixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFSVyxRQUFBLHVCQUF1QiwyQkFRbEMifQ==