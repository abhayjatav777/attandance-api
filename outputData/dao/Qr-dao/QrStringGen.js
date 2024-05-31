"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAttendanceQr = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logger_1 = require("../../config/logger");
const models_1 = require("../../models");
const generateAttendanceQr = async () => {
    try {
        const QrString = jsonwebtoken_1.default.sign({
            data: {},
        }, process.env.jwtSecret ?? "", { expiresIn: "1days" });
        const inserted = await models_1.models.attendanceQr.create({
            QrString: QrString,
        });
        return inserted;
    }
    catch (error) {
        logger_1.logger.error(error);
    }
};
exports.generateAttendanceQr = generateAttendanceQr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXJTdHJpbmdHZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL1FyLWRhby9RclN0cmluZ0dlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnRUFBK0I7QUFDL0IsZ0RBQTZDO0FBQzdDLHlDQUFzQztBQUUvQixNQUFNLG9CQUFvQixHQUFHLEtBQUssSUFBSSxFQUFFO0lBQzdDLElBQUk7UUFDRixNQUFNLFFBQVEsR0FBRyxzQkFBRyxDQUFDLElBQUksQ0FDdkI7WUFDRSxJQUFJLEVBQUUsRUFBRTtTQUNULEVBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRSxFQUMzQixFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FDdkIsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDaEQsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7S0FDakI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLGVBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDLENBQUM7QUFsQlcsUUFBQSxvQkFBb0Isd0JBa0IvQiJ9