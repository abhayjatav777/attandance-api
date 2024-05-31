import { paginated } from "../../middleware/paginate/paginated.middleware";
import { models } from "../../models";
import { PipelineStage } from "mongoose";

interface IGetRequestParams {
  paging: TPaging;
  date?: string;
}

const aggregationArray = (param: IGetRequestParams): PipelineStage[] => {
  const stages: PipelineStage[] = [];
  const { date } = param;
  stages.push({
    $sort: {
      name: 1,
    },
  });

  if (date != null) {
    let startDate = new Date(new Date(date).setHours(0, 0, 0));
    let endDate = new Date(new Date(date).setHours(23, 59, 59, 999));

    stages.push({
      $match: {
        createdAt: {
          $gte: startDate,
          $lte: endDate,
        },
      },
    });
  }

  return stages;
};

export const getTodayAttendanceDao = async (params: IGetRequestParams) => {
  const { paging } = params;

  return await paginated({
    aggregationArray: aggregationArray(params),
    Model: models.AttendanceSheet,
    paging: paging,
  });
};
