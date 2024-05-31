"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersAggregation = void 0;
const getUsersAggregation = (req) => {
    const agger = [];
    const { search, searchFieldString, searchFieldBoolean, searchFieldNumber, } = req.body;
    agger.push({
        $sort: {
            createdAt: -1,
        },
    });
    if (searchFieldNumber && searchFieldNumber.length > 0) {
        searchFieldNumber.forEach((item) => {
            let object = {};
            object[item] = {
                $toString: {
                    $toLong: `$${item}`,
                },
            };
            agger.push({
                $addFields: object,
            });
        });
    }
    if (!(search === "" || search === undefined)) {
        const SearchRegex = new RegExp(search, "i");
        if (searchFieldString !== undefined && searchFieldString.length > 0) {
            const fields = searchFieldString.map((item) => {
                let object = {};
                object[item] = SearchRegex;
                return object;
            });
            if (searchFieldNumber && searchFieldNumber.length > 0) {
                searchFieldNumber.forEach((item) => {
                    let object = {};
                    object[item] = SearchRegex;
                    fields.push(object);
                });
            }
            agger.push({
                $match: {
                    $or: fields,
                },
            });
        }
    }
    if (searchFieldBoolean && searchFieldBoolean.length > 0) {
        searchFieldBoolean.forEach((item) => {
            agger.push({
                $match: item,
            });
        });
    }
    return agger;
};
exports.getUsersAggregation = getUsersAggregation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5hZ2dyZWdhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hZ2dyZWdhdGlvbi91c2VyL3VzZXIuYWdncmVnYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBVU8sTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEdBQVksRUFBbUIsRUFBRTtJQUNuRSxNQUFNLEtBQUssR0FBb0IsRUFBRSxDQUFDO0lBQ2xDLE1BQU0sRUFDSixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDbEIsR0FBYSxHQUFHLENBQUMsSUFBSSxDQUFDO0lBRXZCLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDVCxLQUFLLEVBQUU7WUFDTCxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ2Q7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFJLGlCQUFpQixJQUFJLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDckQsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDakMsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDYixTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFLElBQUksSUFBSSxFQUFFO2lCQUNwQjthQUNGLENBQUM7WUFFRixLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNULFVBQVUsRUFBRSxNQUFNO2FBQ25CLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxJQUFJLE1BQU0sS0FBSyxTQUFTLENBQUMsRUFBRTtRQUM1QyxNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxpQkFBaUIsS0FBSyxTQUFTLElBQUksaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuRSxNQUFNLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxNQUFNLEdBQVEsRUFBRSxDQUFDO2dCQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDO2dCQUMzQixPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksaUJBQWlCLElBQUksaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDckQsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ2pDLElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztvQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUVELEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsTUFBTSxFQUFFO29CQUNOLEdBQUcsRUFBRSxNQUFNO2lCQUNaO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7S0FDRjtJQUNELElBQUksa0JBQWtCLElBQUksa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN2RCxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNULE1BQU0sRUFBRSxJQUFJO2FBQ2IsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBOURXLFFBQUEsbUJBQW1CLHVCQThEOUIifQ==