"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassAdmin = void 0;
const logger_1 = require("../../../config/logger");
const jsonResponse_1 = require("../../../utils/jsonResponse");
const dao_1 = require("../../../dao");
const models_1 = require("../../../models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const resetPassAdmin = async (req, res) => {
    try {
        const token = req.query.token;
        const user = await dao_1.dao.token.getToken(token);
        const { password } = req.body;
        const newPassword = await bcryptjs_1.default.hash(password, 10);
        if (!password) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "does not get password",
                title: "Something went wrong",
            });
        }
        const userId = await models_1.models.admin.findByIdAndUpdate({ _id: user?.userId.valueOf() }, { $set: { password: newPassword } }, { new: true });
        if (!userId) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "password does not set correctly",
                title: "Something went wrong",
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 200,
                message: "password set",
                title: "success",
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
exports.resetPassAdmin = resetPassAdmin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXRQYXNzQWRtaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvaW5kZXguY29udHJvbGxlci9hZG1pbi1hdXRoL3Jlc2V0UGFzc0FkbWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLG1EQUFnRDtBQUNoRCw4REFBMkQ7QUFDM0Qsc0NBQW1DO0FBRW5DLDRDQUF5QztBQUN6Qyx3REFBOEI7QUFFdkIsTUFBTSxjQUFjLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNsRSxJQUFJO1FBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFlLENBQUM7UUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUU5QixNQUFNLFdBQVcsR0FBRyxNQUFNLGtCQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxLQUFLLEVBQUUsc0JBQXNCO2FBQzlCLENBQUMsQ0FBQztTQUNKO1FBQ0QsTUFBTSxNQUFNLEdBQUcsTUFBTSxlQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUNqRCxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQy9CLEVBQUUsSUFBSSxFQUFFLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQ25DLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUNkLENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsaUNBQWlDO2dCQUMxQyxLQUFLLEVBQUUsc0JBQXNCO2FBQzlCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsY0FBYztnQkFDdkIsS0FBSyxFQUFFLFNBQVM7YUFDakIsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLGVBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEIsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsS0FBSyxFQUFFLHNCQUFzQjtTQUM5QixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQztBQS9DVyxRQUFBLGNBQWMsa0JBK0N6QiJ9