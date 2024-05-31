import { ObjectId } from "mongodb";
import { models } from "../../models";

export const markAttendanceOutDao = async (data: {
  _id: string;
  notes?: string;
  studentID: string;
}) => {
  return models.AttendanceSheet.updateOne(
    {
      _id: new ObjectId(data._id),
      studentID: data.studentID,
    },
    {
      $set: {
        notes: data.notes,
        outTime: new Date(),
        studentID: data.studentID,
      },
    }
  );
};
