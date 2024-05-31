"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkQr = void 0;
const jsonResponse_1 = require("../../utils/jsonResponse");
const logger_1 = require("../../config/logger");
const dao_1 = require("../../dao");
const checkQr = async (req, res, next) => {
    try {
        const { qrString } = req.body;
        const checkQr = await dao_1.dao.qr.checkQrDao(qrString);
        if (!checkQr) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "Invalid QR Code",
                title: "Invalid QR Code",
            });
        }
        else {
            next();
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
exports.checkQr = checkQr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tWYWxpZFFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21pZGRsZXdhcmUvYXR0ZW5kYW5jZS9jaGVja1ZhbGlkUXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMkRBQXdEO0FBQ3hELGdEQUE2QztBQUM3QyxtQ0FBZ0M7QUFFekIsTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUMxQixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCLEVBQ2xCLEVBQUU7SUFDRixJQUFJO1FBQ0YsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFOUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxTQUFHLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLEVBQUUsQ0FBQztTQUNSO0tBQ0Y7SUFBQyxPQUFPLEtBQVUsRUFBRTtRQUNuQixlQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUE3QlcsUUFBQSxPQUFPLFdBNkJsQiJ9