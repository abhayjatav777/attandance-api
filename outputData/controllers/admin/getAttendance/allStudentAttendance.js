"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allStudentAttendance = void 0;
const jsonResponse_1 = require("../../../utils/jsonResponse");
const dao_1 = require("../../../dao");
const allStudentAttendance = async (req, res) => {
    try {
        const { data, pageData } = await dao_1.dao.attendance.getAllStudentAttendance({
            paging: {
                page: Number(req.query.page),
                itemPerPage: Number(req.query.itemPerPage),
            },
            date: req.query.date,
        });
        return (0, jsonResponse_1.JsonResponse)(res, {
            status: "success",
            statusCode: 200,
            message: "data found",
            title: "data found",
            data: data,
            pageData: pageData,
        });
    }
    catch (error) {
        return (0, jsonResponse_1.JsonResponse)(res, {
            status: "error",
            statusCode: 500,
            message: error.message,
            title: "Something went wrong",
        });
    }
};
exports.allStudentAttendance = allStudentAttendance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsU3R1ZGVudEF0dGVuZGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYWRtaW4vZ2V0QXR0ZW5kYW5jZS9hbGxTdHVkZW50QXR0ZW5kYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4REFBMkQ7QUFDM0Qsc0NBQW1DO0FBRTVCLE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN4RSxJQUFJO1FBQ0YsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLFNBQUcsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDdEUsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQzVCLFdBQVcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDM0M7WUFDRCxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjO1NBQy9CLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsU0FBUztZQUNqQixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsc0JBQXNCO1NBQzlCLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBekJXLFFBQUEsb0JBQW9CLHdCQXlCL0IifQ==