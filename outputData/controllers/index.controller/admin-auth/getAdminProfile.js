"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminProfile = void 0;
const jsonResponse_1 = require("../../../utils/jsonResponse");
const logger_1 = require("../../../config/logger");
const dao_1 = require("../../../dao");
const getAdminProfile = async (req, res) => {
    try {
        const userId = res.locals.userId;
        const user = await dao_1.dao.admin.getProfileById(userId);
        if (user) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 200,
                message: "user profile",
                title: "user profile",
                data: {
                    name: user.name,
                    email: user.email,
                    mobile: user.mobile,
                },
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "User not found",
                title: "Something went wrong",
            });
        }
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
exports.getAdminProfile = getAdminProfile;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWRtaW5Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2luZGV4LmNvbnRyb2xsZXIvYWRtaW4tYXV0aC9nZXRBZG1pblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOERBQTJEO0FBQzNELG1EQUFnRDtBQUNoRCxzQ0FBbUM7QUFFNUIsTUFBTSxlQUFlLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNuRSxJQUFJO1FBQ0YsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDakMsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFHLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxJQUFJLElBQUksRUFBRTtZQUNSLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxjQUFjO2dCQUN2QixLQUFLLEVBQUUsY0FBYztnQkFDckIsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtvQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7b0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtpQkFDcEI7YUFDRixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixLQUFLLEVBQUUsc0JBQXNCO2FBQzlCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixlQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUFqQ1csUUFBQSxlQUFlLG1CQWlDMUIifQ==