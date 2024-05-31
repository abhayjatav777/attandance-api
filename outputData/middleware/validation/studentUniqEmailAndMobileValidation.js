"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStudentAlreadyExists = void 0;
const jsonResponse_1 = require("../../utils/jsonResponse");
const logger_1 = require("../../config/logger");
const dao_1 = require("../../dao");
const checkStudentAlreadyExists = async (req, res, next) => {
    try {
        const { email, mobile } = req.body;
        const user = await dao_1.dao.student.userByMobileAndEmail(email, mobile);
        if (user) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "User already exists with this email / mobile",
                title: "User already exists",
            });
        }
        next();
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
exports.checkStudentAlreadyExists = checkStudentAlreadyExists;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudFVuaXFFbWFpbEFuZE1vYmlsZVZhbGlkYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZS92YWxpZGF0aW9uL3N0dWRlbnRVbmlxRW1haWxBbmRNb2JpbGVWYWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJEQUF3RDtBQUN4RCxnREFBNkM7QUFDN0MsbUNBQWdDO0FBRXpCLE1BQU0seUJBQXlCLEdBQUcsS0FBSyxFQUM1QyxHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCLEVBQ2xCLEVBQUU7SUFDRixJQUFJO1FBQ0YsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ25DLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBRyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbkUsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSw4Q0FBOEM7Z0JBQ3ZELEtBQUssRUFBRSxxQkFBcUI7YUFDN0IsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLEVBQUUsQ0FBQztLQUNSO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsZUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsc0JBQXNCO1NBQzlCLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBMUJXLFFBQUEseUJBQXlCLDZCQTBCcEMifQ==