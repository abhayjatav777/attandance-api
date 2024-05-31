"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSettingsController = void 0;
const dao_1 = require("../../../dao");
const jsonResponse_1 = require("../../../utils/jsonResponse");
const getSettingsController = async (req, res) => {
    try {
        const settings = await dao_1.dao.settings.getSettings();
        if (!settings) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "data not found",
                title: "data not found",
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 201,
                message: "Data found",
                title: "Data found",
                data: settings,
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
exports.getSettingsController = getSettingsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYWRtaW4vc2V0dGluZ3MvZ2V0U2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esc0NBQW1DO0FBQ25DLDhEQUEyRDtBQUlwRCxNQUFNLHFCQUFxQixHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDekUsSUFBSTtRQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sU0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVsRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsZ0JBQWdCO2dCQUN6QixLQUFLLEVBQUUsZ0JBQWdCO2FBQ3hCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsWUFBWTtnQkFDckIsS0FBSyxFQUFFLFlBQVk7Z0JBQ25CLElBQUksRUFBRSxRQUFRO2FBQ2YsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUE1QlcsUUFBQSxxQkFBcUIseUJBNEJoQyJ9