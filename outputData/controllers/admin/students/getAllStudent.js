"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStudent = void 0;
const jsonResponse_1 = require("../../../utils/jsonResponse");
const dao_1 = require("../../../dao");
const getAllStudent = async (req, res) => {
    try {
        const { data, pageData } = await dao_1.dao.student.getAllStudent({
            paging: {
                page: Number(req.query.page),
                itemPerPage: Number(req.query.itemPerPage),
            },
            searchParams: {
                search: req.query.search,
                searchFieldNumber: req.query.searchFieldNumber,
                searchFieldString: req.query.searchFieldString,
            },
            blocked: req.query.blocked === "true",
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
exports.getAllStudent = getAllStudent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsU3R1ZGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250cm9sbGVycy9hZG1pbi9zdHVkZW50cy9nZXRBbGxTdHVkZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhEQUEyRDtBQUMzRCxzQ0FBbUM7QUFFNUIsTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNqRSxJQUFJO1FBQ0YsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLFNBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1lBQ3pELE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUM1QixXQUFXLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQzNDO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQWdCO2dCQUNsQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLGlCQUE2QjtnQkFDMUQsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBNkI7YUFDM0Q7WUFDRCxPQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssTUFBTTtTQUN0QyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUEsMkJBQVksRUFBQyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFFLFNBQVM7WUFDakIsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUUsWUFBWTtZQUNyQixLQUFLLEVBQUUsWUFBWTtZQUNuQixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxLQUFVLEVBQUU7UUFDbkIsT0FBTyxJQUFBLDJCQUFZLEVBQUMsR0FBRyxFQUFFO1lBQ3ZCLE1BQU0sRUFBRSxPQUFPO1lBQ2YsVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsS0FBSyxFQUFFLHNCQUFzQjtTQUM5QixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQztBQS9CVyxRQUFBLGFBQWEsaUJBK0J4QiJ9