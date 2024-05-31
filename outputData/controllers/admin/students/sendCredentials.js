"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendCredentials = void 0;
const dao_1 = require("../../../dao");
const jsonResponse_1 = require("../../../utils/jsonResponse");
const mail_service_1 = require("../../../services/mail.service");
;
const sendCredentials = async (req, res) => {
    try {
        const { _id } = req.body;
        const student = await dao_1.dao.student.getStudentById(_id);
        if (!student) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "student not found",
                title: "student not found",
            });
        }
        const sendEmail = {
            to: student?.email,
            subject: "Login credentials",
            html: `<h3>Login credentials</h3><p>Hii ${student.name} this is your login credentials</p><p><b>User Name: ${student?.rollNumber}</b></p> <p><b>Password: ${student?.password}</b></p>`,
        };
        (0, mail_service_1.SendMail)(sendEmail);
        if (!mail_service_1.SendMail) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "Login credentials not send",
                title: "Login credentials not sent successfully",
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 200,
                message: "Login credentials sent successfully",
                title: "Login credentials sent successfully",
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
exports.sendCredentials = sendCredentials;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZENyZWRlbnRpYWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FkbWluL3N0dWRlbnRzL3NlbmRDcmVkZW50aWFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzQ0FBbUM7QUFDbkMsOERBQTJEO0FBQzNELGlFQUEwRDtBQUUxRCxDQUFDO0FBQ00sTUFBTSxlQUFlLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNuRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDekIsTUFBTSxPQUFPLEdBQUcsTUFBTSxTQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNyRCxJQUFHLENBQUMsT0FBTyxFQUFDO1lBQ1IsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUNyQixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixLQUFLLEVBQUUsbUJBQW1CO2FBQzNCLENBQUMsQ0FBQztTQUNSO1FBRUQsTUFBTSxTQUFTLEdBQUc7WUFDZCxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUs7WUFDbEIsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixJQUFJLEVBQUUsb0NBQW9DLE9BQU8sQ0FBQyxJQUFJLHVEQUF1RCxPQUFPLEVBQUUsVUFBVSw0QkFBNEIsT0FBTyxFQUFFLFFBQVEsVUFBVTtTQUN4TCxDQUFDO1FBRUYsSUFBQSx1QkFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BCLElBQUcsQ0FBQyx1QkFBUSxFQUFDO1lBQ1gsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsNEJBQTRCO2dCQUNyQyxLQUFLLEVBQUUseUNBQXlDO2FBQ2pELENBQUMsQ0FBQztTQUNKO2FBQUk7WUFDTCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUscUNBQXFDO2dCQUM5QyxLQUFLLEVBQUUscUNBQXFDO2FBQzdDLENBQUMsQ0FBQztTQUNKO0tBRUY7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsc0JBQXNCO1NBQzlCLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBNUNXLFFBQUEsZUFBZSxtQkE0QzFCIn0=