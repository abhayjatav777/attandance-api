import { ObjectId } from "mongodb";
import { models } from "../../models";

export const markAttendanceInDao = async (data: {
  _id: string;
  notes?: string;
  status: string;
  name: string;
  studentID: string;
}) => {
  return models.AttendanceSheet.updateOne(
    {
      _id: new ObjectId(data._id) ?? new ObjectId(),
      studentID: new ObjectId(data.studentID),
    },
    {
      $set: {
        inTime: new Date(),
        notes: data.notes,
        status: data.status,
        outTime: null,
        name: data.name,
        studentID: data.studentID,
      },
    },
    { upsert: true }
  );
};
