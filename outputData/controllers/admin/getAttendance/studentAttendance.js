"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentAttendance = void 0;
const jsonResponse_1 = require("../../../utils/jsonResponse");
const dao_1 = require("../../../dao");
const studentAttendance = async (req, res) => {
    try {
        const studentId = req.query.studentId;
        const { data, pageData } = await dao_1.dao.attendance.getStudentAttendance({
            paging: {
                page: Number(req.query.page),
                itemPerPage: Number(req.query.itemPerPage),
            },
            date: req.query.date,
            studentId: studentId,
        });
        const studentDetails = await dao_1.dao.attendance.getStudentAttendanceDetails({
            studentId,
        });
        return (0, jsonResponse_1.JsonResponse)(res, {
            status: "success",
            statusCode: 200,
            message: "data found",
            title: "data found",
            data: data,
            pageData: pageData,
            extraData: studentDetails,
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
exports.studentAttendance = studentAttendance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudEF0dGVuZGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYWRtaW4vZ2V0QXR0ZW5kYW5jZS9zdHVkZW50QXR0ZW5kYW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw4REFBMkQ7QUFDM0Qsc0NBQW1DO0FBRTVCLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNyRSxJQUFJO1FBQ0YsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFtQixDQUFDO1FBRWhELE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxTQUFHLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO1lBQ25FLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUM1QixXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBYztZQUM5QixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQUM7UUFFSCxNQUFNLGNBQWMsR0FBRyxNQUFNLFNBQUcsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7WUFDdEUsU0FBUztTQUNWLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsU0FBUztZQUNqQixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLGNBQWM7U0FDMUIsQ0FBQyxDQUFDO0tBQ0o7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsc0JBQXNCO1NBQzlCLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBbENXLFFBQUEsaUJBQWlCLHFCQWtDNUIifQ==