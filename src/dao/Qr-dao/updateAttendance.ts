import { models } from "../../models";

export const updateAttendanceDao = async (
  studentID: string,
  outTime: object,
  notes?: string
) => {
  const today = new Date();
  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  return models.AttendanceSheet.findOneAndUpdate(
    {
      studentID: studentID,
      inTime: {
        $gte: startOfDay,
      },
    },
    { $set: { outTime: outTime, notes: notes } },
    { new: true }
  );
};
