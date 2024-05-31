"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markAttendanceInDao = void 0;
const mongodb_1 = require("mongodb");
const models_1 = require("../../models");
const markAttendanceInDao = async (data) => {
    return models_1.models.AttendanceSheet.updateOne({
        _id: new mongodb_1.ObjectId(data._id) ?? new mongodb_1.ObjectId(),
        studentID: new mongodb_1.ObjectId(data.studentID),
    }, {
        $set: {
            inTime: new Date(),
            notes: data.notes,
            status: data.status,
            outTime: null,
            name: data.name,
            studentID: data.studentID,
        },
    }, { upsert: true });
};
exports.markAttendanceInDao = markAttendanceInDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya0F0dGVuZGFuY2VJbi5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL2F0dGVuZGFuY2UvbWFya0F0dGVuZGFuY2VJbi5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQW1DO0FBQ25DLHlDQUFzQztBQUUvQixNQUFNLG1CQUFtQixHQUFHLEtBQUssRUFBRSxJQU16QyxFQUFFLEVBQUU7SUFDSCxPQUFPLGVBQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUNyQztRQUNFLEdBQUcsRUFBRSxJQUFJLGtCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksa0JBQVEsRUFBRTtRQUM3QyxTQUFTLEVBQUUsSUFBSSxrQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDeEMsRUFDRDtRQUNFLElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxJQUFJLElBQUksRUFBRTtZQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCO0tBQ0YsRUFDRCxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FDakIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQXhCVyxRQUFBLG1CQUFtQix1QkF3QjlCIn0=