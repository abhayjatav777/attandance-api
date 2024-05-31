"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginated = void 0;
const pagination_aggregation_1 = require("../../aggregation/pagination/pagination.aggregation");
const paginated = async (props) => {
    const { Model, paging, aggregationArray, afterPaginated } = props;
    const paginationAggregation = (0, pagination_aggregation_1.getPaginationAggregation)(paging.page, paging.itemPerPage, afterPaginated);
    const aggregateQuery = [
        ...aggregationArray,
        ...paginationAggregation,
    ];
    let results = [];
    if (aggregateQuery.length > 0) {
        results = await Model.aggregate(aggregateQuery).exec();
    }
    else {
        results = await Model.find({}).exec();
    }
    if (results.length == 0) {
        return {
            data: [],
            pageData: undefined,
        };
    }
    return {
        data: results[0].data ? results[0].data : results,
        pageData: results[0].pageData ?? { total: 0 },
    };
};
exports.paginated = paginated;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGVkLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbWlkZGxld2FyZS9wYWdpbmF0ZS9wYWdpbmF0ZWQubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxnR0FBK0Y7QUFTeEYsTUFBTSxTQUFTLEdBQUcsS0FBSyxFQUM1QixLQUFpQixFQUN3QixFQUFFO0lBQzNDLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxHQUFHLEtBQUssQ0FBQztJQUNsRSxNQUFNLHFCQUFxQixHQUFHLElBQUEsaURBQXdCLEVBQ3BELE1BQU0sQ0FBQyxJQUFJLEVBQ1gsTUFBTSxDQUFDLFdBQVcsRUFDbEIsY0FBYyxDQUNmLENBQUM7SUFDRixNQUFNLGNBQWMsR0FBb0I7UUFDdEMsR0FBRyxnQkFBZ0I7UUFDbkIsR0FBRyxxQkFBcUI7S0FDekIsQ0FBQztJQUVGLElBQUksT0FBTyxHQUFVLEVBQUUsQ0FBQztJQUV4QixJQUFJLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzdCLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDeEQ7U0FBTTtRQUNMLE9BQU8sR0FBRyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdkM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ3ZCLE9BQU87WUFDTCxJQUFJLEVBQUUsRUFBRTtZQUNSLFFBQVEsRUFBRSxTQUFTO1NBQ3BCLENBQUM7S0FDSDtJQUVELE9BQU87UUFDTCxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTztRQUNqRCxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7S0FDOUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQWpDVyxRQUFBLFNBQVMsYUFpQ3BCIn0=