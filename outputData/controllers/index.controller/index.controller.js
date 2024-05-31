"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../config/logger");
const jsonResponse_1 = require("../../utils/jsonResponse");
class IndexController {
    constructor() {
        this.index = (req, res) => {
            try {
                return (0, jsonResponse_1.JsonResponse)(res, {
                    statusCode: 200,
                    title: "index api called",
                    status: "success",
                    message: "api called successfully",
                });
            }
            catch (error) {
                logger_1.logger.error(error.message);
            }
        };
    }
}
exports.default = new IndexController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9pbmRleC5jb250cm9sbGVyL2luZGV4LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxnREFBNkM7QUFDN0MsMkRBQXdEO0FBRXhELE1BQU0sZUFBZTtJQUFyQjtRQUNFLFVBQUssR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtZQUN0QyxJQUFJO2dCQUNGLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtvQkFDdkIsVUFBVSxFQUFFLEdBQUc7b0JBQ2YsS0FBSyxFQUFFLGtCQUFrQjtvQkFDekIsTUFBTSxFQUFFLFNBQVM7b0JBQ2pCLE9BQU8sRUFBRSx5QkFBeUI7aUJBQ25DLENBQUMsQ0FBQzthQUNKO1lBQUMsT0FBTyxLQUFVLEVBQUU7Z0JBQ25CLGVBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdCO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUFBO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9