"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminUser = void 0;
const jsonResponse_1 = require("../../../utils/jsonResponse");
const dao_1 = require("../../../dao");
const logger_1 = require("../../../config/logger");
const createAdminUser = async (req, res) => {
    try {
        const { email, name, mobile, password } = req.body;
        const inserted = await dao_1.dao.admin.create({ email, name, mobile, password });
        if (inserted) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 201,
                message: "Admin created successfully",
                title: "Data inserted",
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "Admin not created",
                title: "Data not inserted",
                data: {},
            });
        }
    }
    catch (error) {
        logger_1.logger.error(error);
        (error);
        return (0, jsonResponse_1.JsonResponse)(res, {
            status: "error",
            statusCode: 500,
            message: error.message,
            title: "Something went wrong",
        });
    }
};
exports.createAdminUser = createAdminUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQWRtaW5Vc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2luZGV4LmNvbnRyb2xsZXIvYWRtaW4tYXV0aC9jcmVhdGVBZG1pblVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOERBQTJEO0FBQzNELHNDQUFtQztBQUNuQyxtREFBZ0Q7QUFHekMsTUFBTSxlQUFlLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNuRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDbkQsTUFBTSxRQUFRLEdBQUcsTUFBTSxTQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFM0UsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsNEJBQTRCO2dCQUNyQyxLQUFLLEVBQUUsZUFBZTthQUN2QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixLQUFLLEVBQUUsbUJBQW1CO2dCQUMxQixJQUFJLEVBQUUsRUFBRTthQUNULENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixlQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDUixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLE9BQU87WUFDZixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixLQUFLLEVBQUUsc0JBQXNCO1NBQzlCLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBL0JXLFFBQUEsZUFBZSxtQkErQjFCIn0=