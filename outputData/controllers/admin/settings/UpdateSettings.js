"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSettingsController = void 0;
const dao_1 = require("../../../dao");
const jsonResponse_1 = require("../../../utils/jsonResponse");
const UpdateSettingsController = async (req, res) => {
    try {
        const { checkIn, checkOut } = req.body;
        const settings = await dao_1.dao.settings.getSettings();
        const update = await dao_1.dao.settings.updateSettings({
            _id: settings?._id ?? "",
            checkIn,
            checkOut,
        });
        if (update.modifiedCount === 0) {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "error",
                statusCode: 400,
                message: "data not update",
                title: "data not update",
            });
        }
        else {
            return (0, jsonResponse_1.JsonResponse)(res, {
                status: "success",
                statusCode: 201,
                message: "Settings updated successfully",
                title: "Data updated",
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
exports.UpdateSettingsController = UpdateSettingsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlU2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYWRtaW4vc2V0dGluZ3MvVXBkYXRlU2V0dGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esc0NBQW1DO0FBQ25DLDhEQUEyRDtBQUlwRCxNQUFNLHdCQUF3QixHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDNUUsSUFBSTtRQUNGLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQXNCLENBQUM7UUFDekQsTUFBTSxRQUFRLEdBQUcsTUFBTSxTQUFHLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWxELE1BQU0sTUFBTSxHQUFHLE1BQU0sU0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDL0MsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksRUFBRTtZQUN4QixPQUFPO1lBQ1AsUUFBUTtTQUNULENBQUMsQ0FBQztRQUNILElBQUksTUFBTSxDQUFDLGFBQWEsS0FBSyxDQUFDLEVBQUU7WUFDOUIsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO2dCQUN2QixNQUFNLEVBQUUsT0FBTztnQkFDZixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixLQUFLLEVBQUUsaUJBQWlCO2FBQ3pCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7Z0JBQ3ZCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxLQUFLLEVBQUUsY0FBYzthQUN0QixDQUFDLENBQUM7U0FDSjtLQUNGO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsS0FBSyxFQUFFLHNCQUFzQjtTQUM5QixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQztBQWpDVyxRQUFBLHdCQUF3Qiw0QkFpQ25DIn0=