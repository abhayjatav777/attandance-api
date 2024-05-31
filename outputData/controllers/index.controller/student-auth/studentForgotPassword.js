"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forgotPasswordStudent = void 0;
const dao_1 = require("../../../dao");
const jsonResponse_1 = require("../../../utils/jsonResponse");
const mail_service_1 = require("../../../services/mail.service");
const logger_1 = require("../../../config/logger");
const forgotPasswordStudent = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await dao_1.dao.student.getProfileByEmail(email);
        if (!user) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "user not found",
                title: "Not found",
                data: {},
            });
        }
        const otp = await dao_1.dao.otp.generateOtp({ userId: user._id });
        const sendEmail = {
            to: email,
            subject: "For Reset Password",
            html: `<h1>Reset Password</h1><p>Hii ${user.name} this is your OTP for verification</p><h3>${otp?.otp}</h3>`,
        };
        (0, mail_service_1.SendMail)(sendEmail);
        if (!mail_service_1.SendMail) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "forgot password link not send",
                title: "link not sent successfully",
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 200,
                message: "OTP has been sent successfully.",
                title: "OTP sent",
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
exports.forgotPasswordStudent = forgotPasswordStudent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudEZvcmdvdFBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2luZGV4LmNvbnRyb2xsZXIvc3R1ZGVudC1hdXRoL3N0dWRlbnRGb3Jnb3RQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxzQ0FBbUM7QUFDbkMsOERBQTJEO0FBRTNELGlFQUEwRDtBQUMxRCxtREFBZ0Q7QUFHekMsTUFBTSxxQkFBcUIsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3pFLElBQUk7UUFDRixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUMzQixNQUFNLElBQUksR0FBRyxNQUFNLFNBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLGdCQUFnQjtnQkFDekIsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLElBQUksRUFBRSxFQUFFO2FBQ1QsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxNQUFNLEdBQUcsR0FBRyxNQUFNLFNBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE1BQU0sU0FBUyxHQUFHO1lBQ2hCLEVBQUUsRUFBRSxLQUFLO1lBQ1QsT0FBTyxFQUFFLG9CQUFvQjtZQUM3QixJQUFJLEVBQUUsaUNBQWlDLElBQUksQ0FBQyxJQUFJLDZDQUE2QyxHQUFHLEVBQUUsR0FBRyxPQUFPO1NBQzdHLENBQUM7UUFDRixJQUFBLHVCQUFRLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEIsSUFBSSxDQUFDLHVCQUFRLEVBQUU7WUFDYixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSwrQkFBK0I7Z0JBQ3hDLEtBQUssRUFBRSw0QkFBNEI7YUFDcEMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDLEtBQUssRUFBRSxVQUFVO2FBQ2xCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixlQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUE5Q1csUUFBQSxxQkFBcUIseUJBOENoQyJ9