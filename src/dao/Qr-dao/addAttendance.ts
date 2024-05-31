import { models } from "../../models";

export const addAttendanceDao = async (
  data: Pick<
    TAttendanceSheet,
    "studentID" | "name" | "inTime" | "outTime" | "status" | "notes"
  >
) => {
  return models.AttendanceSheet.create(data);
};
