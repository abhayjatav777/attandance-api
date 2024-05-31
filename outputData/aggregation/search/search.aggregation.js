"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAggregation = void 0;
const searchAggregation = (data) => {
    const agger = [];
    const { search, searchFieldString, searchFieldBoolean, searchFieldNumber } = data;
    agger.push({
        $sort: {
            createdAt: -1,
        },
    });
    if (search && searchFieldNumber && searchFieldNumber.length > 0) {
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
exports.searchAggregation = searchAggregation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmFnZ3JlZ2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FnZ3JlZ2F0aW9uL3NlYXJjaC9zZWFyY2guYWdncmVnYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRU8sTUFBTSxpQkFBaUIsR0FBRyxDQUFDLElBQW1CLEVBQW1CLEVBQUU7SUFDeEUsTUFBTSxLQUFLLEdBQW9CLEVBQUUsQ0FBQztJQUNsQyxNQUFNLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLEdBQ3hFLElBQUksQ0FBQztJQUVQLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDVCxLQUFLLEVBQUU7WUFDTCxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ2Q7S0FDRixDQUFDLENBQUM7SUFFSCxJQUFJLE1BQU0sSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQy9ELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2pDLElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsU0FBUyxFQUFFO29CQUNULE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRTtpQkFDcEI7YUFDRixDQUFDO1lBRUYsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDVCxVQUFVLEVBQUUsTUFBTTthQUNuQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBRUQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsSUFBSSxNQUFNLEtBQUssU0FBUyxDQUFDLEVBQUU7UUFDNUMsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUksaUJBQWlCLEtBQUssU0FBUyxJQUFJLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkUsTUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQzVDLElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQztnQkFDM0IsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLGlCQUFpQixJQUFJLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3JELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO29CQUNqQyxJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUM7b0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNULE1BQU0sRUFBRTtvQkFDTixHQUFHLEVBQUUsTUFBTTtpQkFDWjthQUNGLENBQUMsQ0FBQztTQUNKO0tBQ0Y7SUFDRCxJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDdkQsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDVCxNQUFNLEVBQUUsSUFBSTthQUNiLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQztBQTFEVyxRQUFBLGlCQUFpQixxQkEwRDVCIn0=