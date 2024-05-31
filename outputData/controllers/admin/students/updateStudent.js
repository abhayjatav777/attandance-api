"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudent = void 0;
const dao_1 = require("../../../dao");
const jsonResponse_1 = require("../../../utils/jsonResponse");
const updateStudent = async (req, res) => {
    try {
        const { email, mobile, _id, name } = req.body;
        const update = await dao_1.dao.student.updateStudent({
            email,
            mobile,
            _id,
            name,
        });
        if (update.modifiedCount === 0) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "data not update",
                title: "data not update",
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 201,
                message: "student updated successfully",
                title: "Data updated",
            });
        }
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
exports.updateStudent = updateStudent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlU3R1ZGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hZG1pbi9zdHVkZW50cy91cGRhdGVTdHVkZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHNDQUFtQztBQUNuQyw4REFBMkQ7QUFFcEQsTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNqRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUd4QyxDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxTQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztZQUM3QyxLQUFLO1lBQ0wsTUFBTTtZQUNOLEdBQUc7WUFDSCxJQUFJO1NBQ0wsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxNQUFNLENBQUMsYUFBYSxLQUFLLENBQUMsRUFBRTtZQUM5QixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLEtBQUssRUFBRSxpQkFBaUI7YUFDekIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSw4QkFBOEI7Z0JBQ3ZDLEtBQUssRUFBRSxjQUFjO2FBQ3RCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsc0JBQXNCO1NBQzlCLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBcENXLFFBQUEsYUFBYSxpQkFvQ3hCIn0=