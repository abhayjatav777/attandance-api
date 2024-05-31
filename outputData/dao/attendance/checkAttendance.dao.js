"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAttendance = void 0;
const models_1 = require("../../models");
const checkAttendance = async (studentId) => {
    let startDate = new Date(new Date().setHours(0, 0, 0));
    let endDate = new Date(new Date().setHours(23, 59, 59, 999));
    return models_1.models.AttendanceSheet.findOne({
        studentID: studentId,
        createdAt: {
            $gte: startDate,
            $lte: endDate,
        },
    });
};
exports.checkAttendance = checkAttendance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tBdHRlbmRhbmNlLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vYXR0ZW5kYW5jZS9jaGVja0F0dGVuZGFuY2UuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUFzQztBQUUvQixNQUFNLGVBQWUsR0FBRyxLQUFLLEVBQUUsU0FBbUIsRUFBRSxFQUFFO0lBQzNELElBQUksU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTdELE9BQU8sZUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7UUFDcEMsU0FBUyxFQUFFLFNBQVM7UUFDcEIsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVM7WUFDZixJQUFJLEVBQUUsT0FBTztTQUNkO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBWFcsUUFBQSxlQUFlLG1CQVcxQiJ9