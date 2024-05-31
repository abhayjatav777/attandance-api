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
      _id: 1,
    },
  });

  if (date != null) {
    let inputDate = new Date(date);

    // Set the start date to the first day of the month
    let startDate = new Date(
      inputDate.getFullYear(),
      inputDate.getMonth(),
      1,
      0,
      0,
      0
    );

    // Set the end date to the last day of the month
    let lastDay = new Date(
      inputDate.getFullYear(),
      inputDate.getMonth() + 1,
      0
    );
    let endDate = new Date(
      lastDay.getFullYear(),
      lastDay.getMonth(),
      lastDay.getDate(),
      23,
      59,
      59,
      999
    );

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

export const getAllStudentAttendance = async (params: IGetRequestParams) => {
  const { paging } = params;

  return await paginated({
    aggregationArray: aggregationArray(params),
    Model: models.AttendanceSheet,
    paging: paging,
  });
};
