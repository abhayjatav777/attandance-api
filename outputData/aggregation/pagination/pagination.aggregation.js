"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaginationAggregation = void 0;
const getPaginationAggregation = (page, itemPerPage, afterPagination) => {
    let aggr = [];
    if (page && itemPerPage) {
        const offset = Number(itemPerPage) * (Number(page) - 1);
        const data = [
            {
                $skip: offset,
            },
            {
                $limit: Number(itemPerPage),
            },
        ];
        afterPagination && data.push(...afterPagination);
        // bunch data
        aggr.push({
            $facet: {
                data: data,
                pageData: [
                    {
                        $count: "total",
                    },
                ],
            },
        });
        // Unwind Page Data
        aggr.push({
            $unwind: {
                path: "$pageData",
                preserveNullAndEmptyArrays: true,
            },
        });
    }
    else {
        afterPagination && aggr.push(...afterPagination);
    }
    return aggr;
};
exports.getPaginationAggregation = getPaginationAggregation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5hZ2dyZWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZ2dyZWdhdGlvbi9wYWdpbmF0aW9uL3BhZ2luYXRpb24uYWdncmVnYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSx3QkFBd0IsR0FBRyxDQUN0QyxJQUFTLEVBQ1QsV0FBZ0IsRUFDaEIsZUFBb0QsRUFDbkMsRUFBRTtJQUNuQixJQUFJLElBQUksR0FBb0IsRUFBRSxDQUFDO0lBRS9CLElBQUksSUFBSSxJQUFJLFdBQVcsRUFBRTtRQUN2QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxJQUFJLEdBQXVDO1lBQy9DO2dCQUNFLEtBQUssRUFBRSxNQUFNO2FBQ2Q7WUFDRDtnQkFDRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUM1QjtTQUNGLENBQUM7UUFFRixlQUFlLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBRWpELGFBQWE7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRTtvQkFDUjt3QkFDRSxNQUFNLEVBQUUsT0FBTztxQkFDaEI7aUJBQ0Y7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILG1CQUFtQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLElBQUksRUFBRSxXQUFXO2dCQUNqQiwwQkFBMEIsRUFBRSxJQUFJO2FBQ2pDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7U0FBTTtRQUNMLGVBQWUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7S0FDbEQ7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQTdDVyxRQUFBLHdCQUF3Qiw0QkE2Q25DIn0=