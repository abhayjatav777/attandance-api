import { searchAggregation } from "../../aggregation/search/search.aggregation";
import { paginated } from "../../middleware/paginate/paginated.middleware";
import { models } from "../../models";

interface IGetRequestParams {
  paging: TPaging;
  searchParams: TSearchParams;
  blocked: boolean;
}

export const getAllStudent = async (params: IGetRequestParams) => {
  const { paging, searchParams, blocked } = params;

  const aggregationArray = searchAggregation(searchParams);

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

  return await paginated({
    aggregationArray: aggregationArray,
    Model: models.student,
    paging: paging,
  });
};
