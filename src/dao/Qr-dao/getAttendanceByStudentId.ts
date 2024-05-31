import { models } from "../../models";

export const getAttendanceByStudentId = async (studentID: string) => {
  let startDate = new Date(new Date().setHours(0, 0, 0));
  let endDate = new Date(new Date().setHours(23, 59, 59, 999));

  return models.AttendanceSheet.findOne({
    studentID: studentID,
    createdAt: {
      $gte: startDate,
      $lte: endDate,
    },
  });
};
