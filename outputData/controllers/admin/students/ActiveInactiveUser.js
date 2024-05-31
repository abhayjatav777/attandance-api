"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveInactiveUser = void 0;
const dao_1 = require("../../../dao");
const jsonResponse_1 = require("../../../utils/jsonResponse");
const ActiveInactiveUser = async (req, res) => {
    try {
        const { _id } = req.body;
        const user = await dao_1.dao.student.getStudentById(_id).exec();
        if (!user) {
            (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "Student not found",
                title: "student not found",
            });
        }
        const updated = await dao_1.dao.student.updateBlockState(_id, Boolean(user?.blocked));
        if (updated.modifiedCount > 0) {
            (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 200,
                message: "User updated successfully",
                title: "User updated",
            });
        }
        else {
            (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "Something went wrong on updating",
                title: "User not updated",
            });
        }
    }
    catch (error) {
        return (0, jsonResponse_1.JsonResponse)(res, {
            status: "error",
            statusCode: 500,
            message: error.message,
            title: "Something went wrong",
        });
    }
};
exports.ActiveInactiveUser = ActiveInactiveUser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aXZlSW5hY3RpdmVVc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FkbWluL3N0dWRlbnRzL0FjdGl2ZUluYWN0aXZlVXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzQ0FBbUM7QUFDbkMsOERBQTJEO0FBRXBELE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUN0RSxJQUFJO1FBQ0YsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDekIsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDaEIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLG1CQUFtQjtnQkFDNUIsS0FBSyxFQUFFLG1CQUFtQjthQUMzQixDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sU0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDaEQsR0FBRyxFQUNILE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQ3ZCLENBQUM7UUFFRixJQUFJLE9BQU8sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ2hCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsMkJBQTJCO2dCQUNwQyxLQUFLLEVBQUUsY0FBYzthQUN0QixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDaEIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLGtDQUFrQztnQkFDM0MsS0FBSyxFQUFFLGtCQUFrQjthQUMxQixDQUFDLENBQUM7U0FDSjtLQUNGO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsS0FBSyxFQUFFLHNCQUFzQjtTQUM5QixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQztBQXpDVyxRQUFBLGtCQUFrQixzQkF5QzdCIn0=