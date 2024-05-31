import { models } from "../../models";

export const initiateEmptyAttendanceDao = (
  student: Pick<TAttendanceSheet, "studentID" | "name">
) => {
  return models.AttendanceSheet.create({
    inTime: null,
    name: student.name,
    studentID: student.studentID,
    notes: null,
    outTime: null,
    status: "initiate",
  });
};
