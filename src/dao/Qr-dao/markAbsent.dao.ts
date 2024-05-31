import { models } from "../../models";

export const markAbsentDao = async (_id: string) => {
  return models.AttendanceSheet.updateOne(
    {
      _id: _id,
    },
    { $set: { status: "absent" } }
  );
};
