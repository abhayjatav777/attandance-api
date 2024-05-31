"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTokenForUsers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const moment_1 = __importDefault(require("moment"));
const logger_1 = require("../../config/logger");
const TokenModel_1 = __importDefault(require("../../models/TokenModel"));
const generateTokenForUsers = async (data, expiresInDays) => {
    try {
        const tokenValue = jsonwebtoken_1.default.sign({
            data: data,
        }, process.env.jwtSecret ?? "", { expiresIn: `${expiresInDays} days` });
        const expiresIn = (0, moment_1.default)().add(Number(expiresInDays), "days");
        const Token = new TokenModel_1.default({
            userId: data._id,
            role: data.role,
            token: tokenValue,
            expiryDate: expiresIn.diff((0, moment_1.default)(), "minutes"),
        });
        const inserted = await Token.save();
        return {
            token: inserted.token,
            expiryDate: expiresIn.diff((0, moment_1.default)(), "minutes"),
        };
    }
    catch (error) {
        logger_1.logger.error(error);
    }
};
exports.generateTokenForUsers = generateTokenForUsers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVUb2tlbkZvclVzZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby90b2tlbi1kYW8vZ2VuZXJhdGVUb2tlbkZvclVzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdFQUErQjtBQUMvQixvREFBNEI7QUFFNUIsZ0RBQTZDO0FBQzdDLHlFQUFpRDtBQUUxQyxNQUFNLHFCQUFxQixHQUFHLEtBQUssRUFDeEMsSUFBUyxFQUNULGFBQXFCLEVBQ3JCLEVBQUU7SUFDRixJQUFJO1FBQ0YsTUFBTSxVQUFVLEdBQUcsc0JBQUcsQ0FBQyxJQUFJLENBQ3pCO1lBQ0UsSUFBSSxFQUFFLElBQUk7U0FDWCxFQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFDM0IsRUFBRSxTQUFTLEVBQUUsR0FBRyxhQUFhLE9BQU8sRUFBRSxDQUN2QyxDQUFDO1FBRUYsTUFBTSxTQUFTLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUU5RCxNQUFNLEtBQUssR0FBRyxJQUFJLG9CQUFVLENBQUM7WUFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxVQUFVO1lBQ2pCLFVBQVUsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUEsZ0JBQU0sR0FBRSxFQUFFLFNBQVMsQ0FBQztTQUNoRCxDQUFDLENBQUM7UUFDSCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxPQUFPO1lBQ0wsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLFVBQVUsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUEsZ0JBQU0sR0FBRSxFQUFFLFNBQVMsQ0FBQztTQUNoRCxDQUFDO0tBQ0g7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLGVBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDLENBQUM7QUE3QlcsUUFBQSxxQkFBcUIseUJBNkJoQyJ9