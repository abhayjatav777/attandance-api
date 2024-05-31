import { AnyKeys } from "mongoose";
import { models } from "../../models";

export const updateDao = (
  studentID: string,
  data: AnyKeys<TAttendanceSheet>
) => {
  return models.AttendanceSheet.updateOne(
    { studentID },
    { $set: data },
    { upsert: true }
  );
};
