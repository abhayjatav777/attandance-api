import { ObjectId } from "mongodb";
import { paginated } from "../../middleware/paginate/paginated.middleware";
import { models } from "../../models";
import { PipelineStage } from "mongoose";
import moment from "moment";

interface IGetRequestParams {
  paging: TPaging;
  studentId: string;
  date?: string;
}
const aggregationArray = (param: IGetRequestParams): PipelineStage[] => {
  const stages: PipelineStage[] = [];
  const { date, studentId } = param;

  stages.push({
    $match: {
      studentID: new ObjectId(studentId),
      status: {
        $ne: "initiate",
      },
    },
  });
  stages.push({
    $sort: {
      createdAt: -1,
    },
  });

  if (date) {
    let startDate = new Date(new Date(date).setHours(0, 0, 0));
    let endDate = new Date(new Date(date).setHours(23, 59, 59, 999));

    stages.push({
      $match: {
        createdAt: {
          $gte: startDate, // ex: 2020-11-25T00:00:00.00Z
          $lte: endDate, // ex: 2020-11-25T23:59:59.00Z
        },
      },
    });
  }

  return stages;
};

export const getStudentAttendance = async (params: IGetRequestParams) => {
  const { paging } = params;

  return await paginated({
    aggregationArray: aggregationArray(params),
    Model: models.AttendanceSheet,
    paging: paging,
  });
};
