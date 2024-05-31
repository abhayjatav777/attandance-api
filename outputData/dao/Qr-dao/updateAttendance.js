"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAttendanceDao = void 0;
const models_1 = require("../../models");
const updateAttendanceDao = async (studentID, outTime, notes) => {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return models_1.models.AttendanceSheet.findOneAndUpdate({
        studentID: studentID,
        inTime: {
            $gte: startOfDay,
        },
    }, { $set: { outTime: outTime, notes: notes } }, { new: true });
};
exports.updateAttendanceDao = updateAttendanceDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlQXR0ZW5kYW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vUXItZGFvL3VwZGF0ZUF0dGVuZGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXNDO0FBRS9CLE1BQU0sbUJBQW1CLEdBQUcsS0FBSyxFQUN0QyxTQUFpQixFQUNqQixPQUFlLEVBQ2YsS0FBYyxFQUNkLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3pCLE1BQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUN6QixLQUFLLENBQUMsV0FBVyxFQUFFLEVBQ25CLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFDaEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUNoQixDQUFDO0lBRUYsT0FBTyxlQUFNLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUM1QztRQUNFLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLE1BQU0sRUFBRTtZQUNOLElBQUksRUFBRSxVQUFVO1NBQ2pCO0tBQ0YsRUFDRCxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQzVDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUNkLENBQUM7QUFDSixDQUFDLENBQUM7QUF0QlcsUUFBQSxtQkFBbUIsdUJBc0I5QiJ9