"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordAdmin = void 0;
const dao_1 = require("../../../dao");
const jsonResponse_1 = require("../../../utils/jsonResponse");
const generateToken_dao_1 = require("../../../dao/token-dao/generateToken.dao");
const mail_service_1 = require("../../../services/mail.service");
const logger_1 = require("../../../config/logger");
const forgotPasswordAdmin = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await dao_1.dao.admin.getProfileByEmail(email);
        if (!user) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "Admin not found",
                title: "Not found",
                data: {},
            });
        }
        const token = await (0, generateToken_dao_1.generateAuthToken)({ userId: user._id }, "1");
        const sendEmail = {
            to: email,
            subject: "For Reset Password",
            html: `<h1>Reset Password</h1><p>Hii ${user.name} Click on the link below to reset your password</p><a href="${process.env.resetLinkBaseUrl}/reset-password?token=${token?.token}">Reset Password</a>`,
        };
        (0, mail_service_1.SendMail)(sendEmail);
        if (!mail_service_1.SendMail) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 200,
                message: "forgot password link not send",
                title: "link not sent successfully",
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 200,
                message: "forgot password link sent successfully",
                title: "link sent successfully",
                data: {
                    token: token?.token,
                    expiresIn: token?.expiryDate,
                    authState: {
                        userId: user._id,
                        name: user.name,
                    },
                },
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
exports.forgotPasswordAdmin = forgotPasswordAdmin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290UGFzc3dvcmRBZG1pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9pbmRleC5jb250cm9sbGVyL2FkbWluLWF1dGgvZm9yZ290UGFzc3dvcmRBZG1pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzQ0FBbUM7QUFDbkMsOERBQTJEO0FBQzNELGdGQUE2RTtBQUM3RSxpRUFBMEQ7QUFDMUQsbURBQWdEO0FBRXpDLE1BQU0sbUJBQW1CLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN2RSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDM0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFHLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLEtBQUssRUFBRSxXQUFXO2dCQUNsQixJQUFJLEVBQUUsRUFBRTthQUNULENBQUMsQ0FBQztTQUNKO1FBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFBLHFDQUFpQixFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVqRSxNQUFNLFNBQVMsR0FBRztZQUNoQixFQUFFLEVBQUUsS0FBSztZQUNULE9BQU8sRUFBRSxvQkFBb0I7WUFDN0IsSUFBSSxFQUFFLGlDQUFpQyxJQUFJLENBQUMsSUFBSSwrREFBK0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IseUJBQXlCLEtBQUssRUFBRSxLQUFLLHNCQUFzQjtTQUN2TSxDQUFDO1FBRUYsSUFBQSx1QkFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyx1QkFBUSxFQUFFO1lBQ2IsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxLQUFLLEVBQUUsNEJBQTRCO2FBQ3BDLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsd0NBQXdDO2dCQUNqRCxLQUFLLEVBQUUsd0JBQXdCO2dCQUMvQixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLO29CQUNuQixTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVU7b0JBQzVCLFNBQVMsRUFBRTt3QkFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUc7d0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtxQkFDaEI7aUJBQ0Y7YUFDRixDQUFDLENBQUM7U0FDSjtLQUNGO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsZUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsc0JBQXNCO1NBQzlCLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBdkRXLFFBQUEsbUJBQW1CLHVCQXVEOUIifQ==