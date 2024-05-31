"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenDao = void 0;
const logger_1 = require("../../config/logger");
const TokenModel_1 = __importDefault(require("../../models/TokenModel"));
const verifyTokenDao = async (tokenKey) => {
    try {
        const token = await TokenModel_1.default.findOne({ token: tokenKey }).exec();
        return token;
    }
    catch (error) {
        logger_1.logger.error(error);
    }
};
exports.verifyTokenDao = verifyTokenDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5VG9rZW4uZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby90b2tlbi1kYW8vdmVyaWZ5VG9rZW4uZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUE2QztBQUU3Qyx5RUFBaUQ7QUFFMUMsTUFBTSxjQUFjLEdBQUcsS0FBSyxFQUFFLFFBQWdCLEVBQUUsRUFBRTtJQUN2RCxJQUFJO1FBQ0YsTUFBTSxLQUFLLEdBQUcsTUFBTSxvQkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5FLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLGVBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDckI7QUFDSCxDQUFDLENBQUM7QUFSVyxRQUFBLGNBQWMsa0JBUXpCIn0=