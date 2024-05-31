"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdminAlreadyExists = void 0;
const jsonResponse_1 = require("../../utils/jsonResponse");
const logger_1 = require("../../config/logger");
const dao_1 = require("../../dao");
const checkAdminAlreadyExists = async (req, res, next) => {
    try {
        const { email, mobile } = req.body;
        const user = await dao_1.dao.admin.adminByMobileOrEmail(email, mobile);
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
exports.checkAdminAlreadyExists = checkAdminAlreadyExists;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW5VbmlxRW1haWxBbmRNb2JpbGVWYWxpZGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21pZGRsZXdhcmUvdmFsaWRhdGlvbi9hZG1pblVuaXFFbWFpbEFuZE1vYmlsZVZhbGlkYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkRBQXdEO0FBQ3hELGdEQUE2QztBQUM3QyxtQ0FBZ0M7QUFFekIsTUFBTSx1QkFBdUIsR0FBRyxLQUFLLEVBQzFDLEdBQVksRUFDWixHQUFhLEVBQ2IsSUFBa0IsRUFDbEIsRUFBRTtJQUNGLElBQUk7UUFDRixNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbkMsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFHLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNqRSxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLDhDQUE4QztnQkFDdkQsS0FBSyxFQUFFLHFCQUFxQjthQUM3QixDQUFDLENBQUM7U0FDSjtRQUNELElBQUksRUFBRSxDQUFDO0tBQ1I7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixlQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUExQlcsUUFBQSx1QkFBdUIsMkJBMEJsQyJ9