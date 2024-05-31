"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodayAttendance = void 0;
const jsonResponse_1 = require("../../../utils/jsonResponse");
const dao_1 = require("../../../dao");
const getTodayAttendance = async (req, res) => {
    try {
        const { data, pageData } = await dao_1.dao.attendance.getTodayAttendance({
            paging: {
                page: Number(req.query.page),
                itemPerPage: Number(req.query.itemPerPage),
            },
            date: req.query.date,
        });
        return (0, jsonResponse_1.JsonResponse)(res, {
            status: "success",
            statusCode: 200,
            message: "data found",
            title: "data found",
            data: data,
            pageData: pageData,
        });
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
exports.getTodayAttendance = getTodayAttendance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VG9kYXlBdHRlbmRhbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2FkbWluL2dldEF0dGVuZGFuY2UvZ2V0VG9kYXlBdHRlbmRhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhEQUEyRDtBQUMzRCxzQ0FBbUM7QUFFNUIsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQ3RFLElBQUk7UUFDRixNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLE1BQU0sU0FBRyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztZQUNqRSxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDNUIsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUMzQztZQUNELElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQWM7U0FDL0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLFlBQVk7WUFDckIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7S0FDSjtJQUFDLE9BQU8sS0FBVSxFQUFFO1FBQ25CLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUUsT0FBTztZQUNmLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLEtBQUssRUFBRSxzQkFBc0I7U0FDOUIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUF6QlcsUUFBQSxrQkFBa0Isc0JBeUI3QiJ9