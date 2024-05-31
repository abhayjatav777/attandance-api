"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentAttendanceDetails = void 0;
const models_1 = require("../../models");
const mongodb_1 = require("mongodb");
const moment_1 = __importDefault(require("moment"));
const aggregationArray = (params) => {
    const aggregate = [];
    const { studentId } = params;
    const currentDate = (0, moment_1.default)();
    // const startOfMonth = currentDate.startOf("month").toDate();
    // const endOfMonth = currentDate.endOf("month").toDate();
    aggregate.push({
        $match: {
            studentID: new mongodb_1.ObjectId(studentId),
            // createdAt: {
            //   $gte: startOfMonth,
            //   $lte: endOfMonth,
            // },
        },
    });
    aggregate.push({
        $group: {
            _id: "$studentID",
            totalAttendance: {
                $sum: 1,
            },
            onTimeCount: {
                $sum: {
                    $cond: [
                        {
                            $eq: ["$status", "on time"],
                        },
                        1,
                        0,
                    ],
                },
            },
            absentCount: {
                $sum: {
                    $cond: [
                        {
                            $eq: ["$status", "absent"],
                        },
                        1,
                        0,
                    ],
                },
            },
            lateCount: {
                $sum: {
                    $cond: [
                        {
                            $eq: ["$status", "late"],
                        },
                        1,
                        0,
                    ],
                },
            },
        },
    });
    aggregate.push({
        $lookup: {
            from: "student-users",
            localField: "_id",
            foreignField: "_id",
            as: "student",
        },
    }, {
        $unwind: {
            path: "$student",
            preserveNullAndEmptyArrays: true,
        },
    });
    aggregate.push({
        $unwind: {
            path: "$student",
            preserveNullAndEmptyArrays: true,
        },
    });
    aggregate.push({
        $project: {
            totalAttendance: 1,
            onTimeCount: 1,
            absentCount: 1,
            lateCount: 1,
            name: "$student.name",
            email: "$student.email",
        },
    });
    return aggregate;
};
const getStudentAttendanceDetails = async (params) => {
    const data = await models_1.models.AttendanceSheet.aggregate(aggregationArray(params));
    const attendanceData = data.length > 0 ? data[0] : {};
    let { totalAttendance, onTimeCount, absentCount, lateCount, name, email } = attendanceData;
    const percentageOnTime = (onTimeCount / totalAttendance) * 100;
    const percentageAbsent = (absentCount / totalAttendance) * 100;
    const percentageLate = (lateCount / totalAttendance) * 100;
    totalAttendance = onTimeCount + lateCount;
    return {
        totalAttendance,
        percentageOnTime,
        percentageAbsent,
        percentageLate,
        name,
        email,
    };
};
exports.getStudentAttendanceDetails = getStudentAttendanceDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R1ZGVudEF0dGVuZGFuY2VEZXRhaWxzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vYXR0ZW5kYW5jZS9nZXRTdHVkZW50QXR0ZW5kYW5jZURldGFpbHMuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLHlDQUFzQztBQUN0QyxxQ0FBbUM7QUFDbkMsb0RBQTRCO0FBTTVCLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxNQUF5QixFQUFtQixFQUFFO0lBQ3RFLE1BQU0sU0FBUyxHQUFvQixFQUFFLENBQUM7SUFDdEMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUU3QixNQUFNLFdBQVcsR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQztJQUM3Qiw4REFBOEQ7SUFDOUQsMERBQTBEO0lBRTFELFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDYixNQUFNLEVBQUU7WUFDTixTQUFTLEVBQUUsSUFBSSxrQkFBUSxDQUFDLFNBQVMsQ0FBQztZQUNsQyxlQUFlO1lBQ2Ysd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0QixLQUFLO1NBQ047S0FDRixDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2IsTUFBTSxFQUFFO1lBQ04sR0FBRyxFQUFFLFlBQVk7WUFDakIsZUFBZSxFQUFFO2dCQUNmLElBQUksRUFBRSxDQUFDO2FBQ1I7WUFDRCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRTt3QkFDTDs0QkFDRSxHQUFHLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO3lCQUM1Qjt3QkFDRCxDQUFDO3dCQUNELENBQUM7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFO3dCQUNMOzRCQUNFLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7eUJBQzNCO3dCQUNELENBQUM7d0JBQ0QsQ0FBQztxQkFDRjtpQkFDRjthQUNGO1lBQ0QsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUU7d0JBQ0w7NEJBQ0UsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQzt5QkFDekI7d0JBQ0QsQ0FBQzt3QkFDRCxDQUFDO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGLENBQUMsQ0FBQztJQUNILFNBQVMsQ0FBQyxJQUFJLENBQ1o7UUFDRSxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsZUFBZTtZQUNyQixVQUFVLEVBQUUsS0FBSztZQUNqQixZQUFZLEVBQUUsS0FBSztZQUNuQixFQUFFLEVBQUUsU0FBUztTQUNkO0tBQ0YsRUFDRDtRQUNFLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxVQUFVO1lBQ2hCLDBCQUEwQixFQUFFLElBQUk7U0FDakM7S0FDRixDQUNGLENBQUM7SUFDRixTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFVBQVU7WUFDaEIsMEJBQTBCLEVBQUUsSUFBSTtTQUNqQztLQUNGLENBQUMsQ0FBQztJQUNILFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDYixRQUFRLEVBQUU7WUFDUixlQUFlLEVBQUUsQ0FBQztZQUNsQixXQUFXLEVBQUUsQ0FBQztZQUNkLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLENBQUM7WUFDWixJQUFJLEVBQUUsZUFBZTtZQUNyQixLQUFLLEVBQUUsZ0JBQWdCO1NBQ3hCO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDO0FBRUssTUFBTSwyQkFBMkIsR0FBRyxLQUFLLEVBQzlDLE1BQXlCLEVBQ3pCLEVBQUU7SUFDRixNQUFNLElBQUksR0FBRyxNQUFNLGVBQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFOUUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RELElBQUksRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUN2RSxjQUFjLENBQUM7SUFFakIsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDL0QsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDL0QsTUFBTSxjQUFjLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzNELGVBQWUsR0FBRyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQzFDLE9BQU87UUFDTCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsSUFBSTtRQUNKLEtBQUs7S0FDTixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBckJXLFFBQUEsMkJBQTJCLCtCQXFCdEMifQ==