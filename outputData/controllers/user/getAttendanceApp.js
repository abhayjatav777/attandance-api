"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentAttendance = void 0;
const jsonResponse_1 = require("../../utils/jsonResponse");
const dao_1 = require("../../dao");
const getStudentAttendance = async (req, res) => {
    try {
        const userId = res.locals.userId;
        const { data, pageData } = await dao_1.dao.attendance.getStudentAttendance({
            paging: {
                page: Number(req.query.page),
                itemPerPage: Number(req.query.itemPerPage),
            },
            date: req.query.date,
            studentId: userId,
        });
        return (0, jsonResponse_1.JsonResponse)(res, {
            status: "success",
            statusCode: 200,
            message: "data found",
            title: "data found",
            data: data,
            pageData: pageData,
            extraData: await dao_1.dao.attendance.getStudentAttendanceDetails({
                studentId: userId,
            }),
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
exports.getStudentAttendance = getStudentAttendance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXR0ZW5kYW5jZUFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy91c2VyL2dldEF0dGVuZGFuY2VBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkRBQXdEO0FBQ3hELG1DQUFnQztBQUV6QixNQUFNLG9CQUFvQixHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDeEUsSUFBSTtRQUNGLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2pDLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxTQUFHLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO1lBQ25FLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUM1QixXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQzNDO1lBQ0QsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBYztZQUM5QixTQUFTLEVBQUUsTUFBTTtTQUNsQixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLFNBQVM7WUFDakIsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUUsWUFBWTtZQUNyQixLQUFLLEVBQUUsWUFBWTtZQUNuQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxNQUFNLFNBQUcsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7Z0JBQzFELFNBQVMsRUFBRSxNQUFNO2FBQ2xCLENBQUM7U0FDSCxDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUEvQlcsUUFBQSxvQkFBb0Isd0JBK0IvQiJ9