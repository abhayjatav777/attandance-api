"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAttendanceByStudentId = void 0;
const models_1 = require("../../models");
const getAttendanceByStudentId = async (studentID) => {
    let startDate = new Date(new Date().setHours(0, 0, 0));
    let endDate = new Date(new Date().setHours(23, 59, 59, 999));
    return models_1.models.AttendanceSheet.findOne({
        studentID: studentID,
        createdAt: {
            $gte: startDate,
            $lte: endDate,
        },
    });
};
exports.getAttendanceByStudentId = getAttendanceByStudentId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXR0ZW5kYW5jZUJ5U3R1ZGVudElkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9Rci1kYW8vZ2V0QXR0ZW5kYW5jZUJ5U3R1ZGVudElkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUUvQixNQUFNLHdCQUF3QixHQUFHLEtBQUssRUFBRSxTQUFpQixFQUFFLEVBQUU7SUFDbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFN0QsT0FBTyxlQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztRQUNwQyxTQUFTLEVBQUUsU0FBUztRQUNwQixTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUztZQUNmLElBQUksRUFBRSxPQUFPO1NBQ2Q7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFYVyxRQUFBLHdCQUF3Qiw0QkFXbkMifQ==