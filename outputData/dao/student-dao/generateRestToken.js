"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRestToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logger_1 = require("../../config/logger");
const models_1 = require("../../models");
const generateRestToken = async (_id) => {
    try {
        const restToken = jsonwebtoken_1.default.sign({
            data: {},
        }, process.env.jwtSecret ?? "", { expiresIn: "1days" });
        const inserted = await models_1.models.student.updateOne({ _id: _id }, { $set: { restToken: restToken } });
        return inserted;
    }
    catch (error) {
        logger_1.logger.error(error);
    }
};
exports.generateRestToken = generateRestToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVSZXN0VG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3N0dWRlbnQtZGFvL2dlbmVyYXRlUmVzdFRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdFQUErQjtBQUMvQixnREFBNkM7QUFDN0MseUNBQXNDO0FBRy9CLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3ZELElBQUk7UUFDRixNQUFNLFNBQVMsR0FBRyxzQkFBRyxDQUFDLElBQUksQ0FDeEI7WUFDRSxJQUFJLEVBQUUsRUFBRTtTQUNULEVBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRSxFQUMzQixFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsQ0FDdkIsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQzdDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUNaLEVBQUUsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQ25DLENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQztLQUNqQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsZUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNyQjtBQUNILENBQUMsQ0FBQztBQW5CVyxRQUFBLGlCQUFpQixxQkFtQjVCIn0=