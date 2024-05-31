"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAccess = void 0;
const jsonResponse_1 = require("../../utils/jsonResponse");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_dao_1 = require("../../dao/token-dao");
const checkAccess = async (req, res, next) => {
    const token = req.headers[`${process.env.headerKey}`];
    const { verifyTokenDao } = token_dao_1.tokenDao;
    if (!token) {
        return (0, jsonResponse_1.JsonResponse)(res, {
            statusCode: 401,
            status: "error",
            title: "Authentication Failed",
            message: "No Auth Header Available",
        });
    }
    try {
        const verified = jsonwebtoken_1.default.verify(token.replace("Bearer ", ""), process.env.jwtSecret ?? "");
        if (!verified) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                statusCode: 401,
                status: "error",
                title: "Authentication Error",
                message: "Token is not valid",
            });
        }
        let tokenVerified = await verifyTokenDao(token.replace("Bearer ", ""));
        if (!tokenVerified) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                statusCode: 401,
                status: "error",
                title: "Authentication Error",
                message: "Token is not valid",
            });
        }
        else {
            res.locals.userId = tokenVerified.userId;
            next();
        }
    }
    catch (err) {
        return (0, jsonResponse_1.JsonResponse)(res, {
            statusCode: 401,
            status: "error",
            title: "Authentication Error",
            message: err.message,
        });
    }
};
exports.checkAccess = checkAccess;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21pZGRsZXdhcmUvYXV0aC9hdXRoLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsMkRBQXdEO0FBQ3hELGdFQUErQjtBQUMvQixtREFBK0M7QUFDeEMsTUFBTSxXQUFXLEdBQUcsS0FBSyxFQUM5QixHQUFZLEVBQ1osR0FBYSxFQUNiLElBQWtCLEVBQ2xCLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBUSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQzNELE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxvQkFBUSxDQUFDO0lBRXBDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxFQUFFLEdBQUc7WUFDZixNQUFNLEVBQUUsT0FBTztZQUNmLEtBQUssRUFBRSx1QkFBdUI7WUFDOUIsT0FBTyxFQUFFLDBCQUEwQjtTQUNwQyxDQUFDLENBQUM7S0FDSjtJQUVELElBQUk7UUFDRixNQUFNLFFBQVEsR0FBUSxzQkFBRyxDQUFDLE1BQU0sQ0FDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FDNUIsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDYixPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE1BQU0sRUFBRSxPQUFPO2dCQUNmLEtBQUssRUFBRSxzQkFBc0I7Z0JBQzdCLE9BQU8sRUFBRSxvQkFBb0I7YUFDOUIsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLGFBQWEsR0FBRyxNQUFNLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXZFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEIsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixVQUFVLEVBQUUsR0FBRztnQkFDZixNQUFNLEVBQUUsT0FBTztnQkFDZixLQUFLLEVBQUUsc0JBQXNCO2dCQUM3QixPQUFPLEVBQUUsb0JBQW9CO2FBQzlCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1lBQ3pDLElBQUksRUFBRSxDQUFDO1NBQ1I7S0FDRjtJQUFDLE9BQU8sR0FBUSxFQUFFO1FBQ2pCLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixVQUFVLEVBQUUsR0FBRztZQUNmLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLHNCQUFzQjtZQUM3QixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87U0FDckIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUFyRFcsUUFBQSxXQUFXLGVBcUR0QiJ9