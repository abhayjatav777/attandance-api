"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthOtp = void 0;
const moment_1 = __importDefault(require("moment"));
const logger_1 = require("../../config/logger");
const models_1 = require("../../models");
const Otp_generate_1 = require("../../utils/Otp-generate");
const generateAuthOtp = async (data) => {
    try {
        const otpValue = (0, Otp_generate_1.generateOTP)();
        const expiresIn = (0, moment_1.default)().add(5, "minute");
        const inserted = await models_1.models.otp.create({
            userId: data.userId,
            otp: otpValue,
            expiryDate: expiresIn,
        });
        return inserted;
    }
    catch (error) {
        logger_1.logger.error(error);
    }
};
exports.generateAuthOtp = generateAuthOtp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVPdHAuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9vdHAtZGFvL2dlbmVyYXRlT3RwLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsZ0RBQTZDO0FBQzdDLHlDQUFzQztBQUV0QywyREFBdUQ7QUFFaEQsTUFBTSxlQUFlLEdBQUcsS0FBSyxFQUFFLElBQStCLEVBQUUsRUFBRTtJQUN2RSxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsSUFBQSwwQkFBVyxHQUFFLENBQUM7UUFFL0IsTUFBTSxTQUFTLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixHQUFHLEVBQUUsUUFBUTtZQUNiLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUMsQ0FBQztRQUVILE9BQU8sUUFBUSxDQUFDO0tBQ2pCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxlQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JCO0FBQ0gsQ0FBQyxDQUFDO0FBaEJXLFFBQUEsZUFBZSxtQkFnQjFCIn0=