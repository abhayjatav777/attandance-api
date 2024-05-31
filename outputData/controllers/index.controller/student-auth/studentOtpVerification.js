"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentOtpVerification = void 0;
const jsonResponse_1 = require("../../../utils/jsonResponse");
const logger_1 = require("../../../config/logger");
const dao_1 = require("../../../dao");
const studentOtpVerification = async (req, res) => {
    try {
        const { otp, email } = req.body;
        const user = await dao_1.dao.otp.getOtp(otp);
        if (!user || otp != user?.otp) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "invalid OTP",
                title: "invalid OTP",
            });
        }
        if (user?.otpUsed === true) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "The OTP you provided has already been used and is now expired.",
                title: "Expired OTP",
            });
        }
        const updateStudent = await dao_1.dao.student.updateStudent({
            _id: user?.userId,
            verifyEmail: true,
        });
        await dao_1.dao.otp.updateOtp({
            _id: user?._id,
            otpUsed: true,
        });
        const restToken = await dao_1.dao.student.generateRestToken(user.userId);
        if (!restToken) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "Reset token does not set properly",
                title: "Please try again",
            });
        }
        const student = await dao_1.dao.student.getStudentById(user.userId);
        if (!updateStudent) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "verification failed",
                title: "verification failed",
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 200,
                message: "Verification successful",
                title: "Success",
                data: student?.restToken,
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
exports.studentOtpVerification = studentOtpVerification;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudE90cFZlcmlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9pbmRleC5jb250cm9sbGVyL3N0dWRlbnQtYXV0aC9zdHVkZW50T3RwVmVyaWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhEQUEyRDtBQUMzRCxtREFBZ0Q7QUFDaEQsc0NBQW1DO0FBRzVCLE1BQU0sc0JBQXNCLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUMxRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2hDLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUM3QixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxhQUFhO2dCQUN0QixLQUFLLEVBQUUsYUFBYTthQUNyQixDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxFQUFFLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQ0wsZ0VBQWdFO2dCQUNsRSxLQUFLLEVBQUUsYUFBYTthQUNyQixDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0sYUFBYSxHQUFHLE1BQU0sU0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7WUFDcEQsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUNILE1BQU0sU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDdEIsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHO1lBQ2QsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7UUFFSCxNQUFNLFNBQVMsR0FBRyxNQUFNLFNBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxtQ0FBbUM7Z0JBQzVDLEtBQUssRUFBRSxrQkFBa0I7YUFDMUIsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxNQUFNLE9BQU8sR0FBRyxNQUFNLFNBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2xCLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLHFCQUFxQjtnQkFDOUIsS0FBSyxFQUFFLHFCQUFxQjthQUM3QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsU0FBUztnQkFDakIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUzthQUN6QixDQUFDLENBQUM7U0FDSjtLQUNGO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsZUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsc0JBQXNCO1NBQzlCLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBbkVXLFFBQUEsc0JBQXNCLDBCQW1FakMifQ==