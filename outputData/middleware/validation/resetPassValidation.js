"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassValidation = void 0;
const jsonResponse_1 = require("../../utils/jsonResponse");
const resetPassValidation = (schema) => async (req, res, next) => {
    try {
        await schema.validate({ body: req.body }, { abortEarly: false, stripUnknown: true });
        next();
    }
    catch (err) {
        const error = err;
        return (0, jsonResponse_1.JsonResponse)(res, {
            statusCode: 400,
            status: "error",
            message: "Invalid form data",
            title: "Form Error",
            data: error.errors,
        });
    }
};
exports.resetPassValidation = resetPassValidation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXRQYXNzVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlL3ZhbGlkYXRpb24vcmVzZXRQYXNzVmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwyREFBd0Q7QUFHakQsTUFBTSxtQkFBbUIsR0FDOUIsQ0FBQyxNQUF5QixFQUFFLEVBQUUsQ0FDOUIsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQ3hELElBQUk7UUFDRixNQUFNLE1BQU0sQ0FBQyxRQUFRLENBQ25CLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFDbEIsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FDMUMsQ0FBQztRQUNGLElBQUksRUFBRSxDQUFDO0tBQ1I7SUFBQyxPQUFPLEdBQVEsRUFBRTtRQUNqQixNQUFNLEtBQUssR0FBRyxHQUFzQixDQUFDO1FBQ3JDLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixVQUFVLEVBQUUsR0FBRztZQUNmLE1BQU0sRUFBRSxPQUFPO1lBQ2YsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixLQUFLLEVBQUUsWUFBWTtZQUNuQixJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDbkIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUFuQlMsUUFBQSxtQkFBbUIsdUJBbUI1QiJ9