"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const jsonResponse_1 = require("../../utils/jsonResponse");
const validate = (schema) => async (req, res, next) => {
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
exports.validate = validate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taWRkbGV3YXJlL3ZhbGlkYXRpb24vdmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwyREFBd0Q7QUFHakQsTUFBTSxRQUFRLEdBQ25CLENBQUMsTUFBeUIsRUFBRSxFQUFFLENBQzlCLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUN4RCxJQUFJO1FBQ0YsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUNuQixFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQ2xCLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQzFDLENBQUM7UUFDRixJQUFJLEVBQUUsQ0FBQztLQUNSO0lBQUMsT0FBTyxHQUFRLEVBQUU7UUFDakIsTUFBTSxLQUFLLEdBQUcsR0FBc0IsQ0FBQztRQUNyQyxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxFQUFFLEdBQUc7WUFDZixNQUFNLEVBQUUsT0FBTztZQUNmLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNO1NBQ25CLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBbkJTLFFBQUEsUUFBUSxZQW1CakIifQ==