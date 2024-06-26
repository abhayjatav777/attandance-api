import { ObjectId } from "mongodb";
import { Model, model, Schema } from "mongoose";

const AttendanceSheetSchema = new Schema<TAttendanceSheet>(
  {
    studentID: {
      type: ObjectId,
    },
    name: {
      type: String,
    },
    inTime: {
      type: Date,
    },
    outTime: {
      type: Date,
    },
    notes: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      default: "initiate",
    },
  },
  {
    timestamps: true,
  }
);

const AttendanceSheetModel: Model<TAttendanceSheet> = model(
  "attendance-sheet",
  AttendanceSheetSchema
);

export default AttendanceSheetModel;
