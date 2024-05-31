"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudent = void 0;
const dao_1 = require("../../../dao");
const jsonResponse_1 = require("../../../utils/jsonResponse");
const mail_service_1 = require("../../../services/mail.service");
const addStudent = async (req, res) => {
    try {
        const { email, name, mobile, password } = req.body;
        const rollNumber = await dao_1.dao.student.addRollNo(name);
        const data = await dao_1.dao.student.getProfileByEmail(email).exec();
        if (data) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "student already exists",
                title: "Data not inserted",
            });
        }
        const inserted = await dao_1.dao.student.addStudent({
            email,
            name,
            mobile,
            rollNumber,
            password,
        });
        if (!inserted) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "student not added",
                title: "Data not inserted",
                data: {},
            });
        }
        else {
            const sendEmail = {
                to: email,
                subject: "Login credentials",
                html: `<h3>Login credentials</h3><p>Hii ${name} this is your login credentials</p><p><b>User Name: ${rollNumber}</b></p> <p><b>Password: ${password}</b></p>`,
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
                    message: "student added and Login credentials sent successfully",
                    title: "Data inserted and Login credentials sent successfully",
                });
            }
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
exports.addStudent = addStudent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkU3R1ZGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hZG1pbi9zdHVkZW50cy9hZGRTdHVkZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNDQUFtQztBQUNuQyw4REFBMkQ7QUFDM0QsaUVBQTBEO0FBRW5ELE1BQU0sVUFBVSxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDOUQsSUFBSTtRQUNGLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ25ELE1BQU0sVUFBVSxHQUFHLE1BQU0sU0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckQsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFHLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9ELElBQUksSUFBSSxFQUFFO1lBQ1IsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsd0JBQXdCO2dCQUNqQyxLQUFLLEVBQUUsbUJBQW1CO2FBQzNCLENBQUMsQ0FBQztTQUNKO1FBQ0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxTQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUM1QyxLQUFLO1lBQ0wsSUFBSTtZQUNKLE1BQU07WUFDTixVQUFVO1lBQ1YsUUFBUTtTQUNULENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxPQUFPO2dCQUNmLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBRSxtQkFBbUI7Z0JBQzVCLEtBQUssRUFBRSxtQkFBbUI7Z0JBQzFCLElBQUksRUFBRSxFQUFFO2FBQ1QsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLE1BQU0sU0FBUyxHQUFHO2dCQUNoQixFQUFFLEVBQUUsS0FBSztnQkFDVCxPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixJQUFJLEVBQUUsb0NBQW9DLElBQUksdURBQXVELFVBQVUsNEJBQTRCLFFBQVEsVUFBVTthQUM5SixDQUFDO1lBQ0YsSUFBQSx1QkFBUSxFQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyx1QkFBUSxFQUFFO2dCQUNiLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtvQkFDdkIsTUFBTSxFQUFFLE9BQU87b0JBQ2YsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsT0FBTyxFQUFFLDRCQUE0QjtvQkFDckMsS0FBSyxFQUFFLHlDQUF5QztpQkFDakQsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO29CQUN2QixNQUFNLEVBQUUsU0FBUztvQkFDakIsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsT0FBTyxFQUFFLHVEQUF1RDtvQkFDaEUsS0FBSyxFQUFFLHVEQUF1RDtpQkFDL0QsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtLQUNGO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsS0FBSyxFQUFFLHNCQUFzQjtTQUM5QixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQztBQTdEVyxRQUFBLFVBQVUsY0E2RHJCIn0=