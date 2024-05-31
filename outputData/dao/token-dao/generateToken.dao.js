"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const moment_1 = __importDefault(require("moment"));
const logger_1 = require("../../config/logger");
const models_1 = require("../../models");
const generateAuthToken = async (data, expiresInDays) => {
    try {
        const tokenValue = jsonwebtoken_1.default.sign({
            data: data,
        }, process.env.jwtSecret ?? "", { expiresIn: `${expiresInDays} days` });
        const expiresIn = (0, moment_1.default)().add(Number(expiresInDays), "days");
        const inserted = await models_1.models.token.create({
            userId: data.userId,
            token: tokenValue,
            expiryDate: expiresIn,
        });
        return {
            token: inserted.token,
            expiryDate: expiresIn.diff((0, moment_1.default)(), "minutes"),
        };
    }
    catch (error) {
        logger_1.logger.error(error);
    }
};
exports.generateAuthToken = generateAuthToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVUb2tlbi5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3Rva2VuLWRhby9nZW5lcmF0ZVRva2VuLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnRUFBK0I7QUFDL0Isb0RBQTRCO0FBQzVCLGdEQUE2QztBQUM3Qyx5Q0FBc0M7QUFHL0IsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLEVBQ3BDLElBQWlDLEVBQ2pDLGFBQXFCLEVBQ3JCLEVBQUU7SUFDRixJQUFJO1FBQ0YsTUFBTSxVQUFVLEdBQUcsc0JBQUcsQ0FBQyxJQUFJLENBQ3pCO1lBQ0UsSUFBSSxFQUFFLElBQUk7U0FDWCxFQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFDM0IsRUFBRSxTQUFTLEVBQUUsR0FBRyxhQUFhLE9BQU8sRUFBRSxDQUN2QyxDQUFDO1FBRUYsTUFBTSxTQUFTLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU5RCxNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsVUFBVTtZQUNqQixVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLFVBQVUsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUEsZ0JBQU0sR0FBRSxFQUFFLFNBQVMsQ0FBQztTQUNoRCxDQUFDO0tBQ0g7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLGVBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDLENBQUM7QUE1QlcsUUFBQSxpQkFBaUIscUJBNEI1QiJ9