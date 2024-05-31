"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStudent = void 0;
const search_aggregation_1 = require("../../aggregation/search/search.aggregation");
const paginated_middleware_1 = require("../../middleware/paginate/paginated.middleware");
const models_1 = require("../../models");
const getAllStudent = async (params) => {
    const { paging, searchParams, blocked } = params;
    const aggregationArray = (0, search_aggregation_1.searchAggregation)(searchParams);
    aggregationArray.push({
        $sort: {
            name: 1,
        },
    });
    if (blocked) {
        aggregationArray.push({
            $match: {
                blocked: blocked,
            },
        });
    }
    return await (0, paginated_middleware_1.paginated)({
        aggregationArray: aggregationArray,
        Model: models_1.models.student,
        paging: paging,
    });
};
exports.getAllStudent = getAllStudent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsU3R1ZGVudC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3N0dWRlbnQtZGFvL2dldEFsbFN0dWRlbnQuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG9GQUFnRjtBQUNoRix5RkFBMkU7QUFDM0UseUNBQXNDO0FBUS9CLE1BQU0sYUFBYSxHQUFHLEtBQUssRUFBRSxNQUF5QixFQUFFLEVBQUU7SUFDL0QsTUFBTSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDO0lBRWpELE1BQU0sZ0JBQWdCLEdBQUcsSUFBQSxzQ0FBaUIsRUFBQyxZQUFZLENBQUMsQ0FBQztJQUV6RCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFDcEIsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLENBQUM7U0FDUjtLQUNGLENBQUMsQ0FBQztJQUNILElBQUksT0FBTyxFQUFFO1FBQ1gsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO1lBQ3BCLE1BQU0sRUFBRTtnQkFDTixPQUFPLEVBQUUsT0FBTzthQUNqQjtTQUNGLENBQUMsQ0FBQztLQUNKO0lBRUQsT0FBTyxNQUFNLElBQUEsZ0NBQVMsRUFBQztRQUNyQixnQkFBZ0IsRUFBRSxnQkFBZ0I7UUFDbEMsS0FBSyxFQUFFLGVBQU0sQ0FBQyxPQUFPO1FBQ3JCLE1BQU0sRUFBRSxNQUFNO0tBQ2YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBdkJXLFFBQUEsYUFBYSxpQkF1QnhCIn0=