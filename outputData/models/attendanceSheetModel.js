"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const AttendanceSheetSchema = new mongoose_1.Schema({
    studentID: {
        type: mongodb_1.ObjectId,
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
}, {
    timestamps: true,
});
const AttendanceSheetModel = (0, mongoose_1.model)("attendance-sheet", AttendanceSheetSchema);
exports.default = AttendanceSheetModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ZW5kYW5jZVNoZWV0TW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2F0dGVuZGFuY2VTaGVldE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW1DO0FBQ25DLHVDQUFnRDtBQUVoRCxNQUFNLHFCQUFxQixHQUFHLElBQUksaUJBQU0sQ0FDdEM7SUFDRSxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsa0JBQVE7S0FDZjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsSUFBSTtLQUNYO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLElBQUk7S0FDWDtJQUNELEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLElBQUk7S0FDZDtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO1FBQ1osT0FBTyxFQUFFLFVBQVU7S0FDcEI7Q0FDRixFQUNEO0lBQ0UsVUFBVSxFQUFFLElBQUk7Q0FDakIsQ0FDRixDQUFDO0FBRUYsTUFBTSxvQkFBb0IsR0FBNEIsSUFBQSxnQkFBSyxFQUN6RCxrQkFBa0IsRUFDbEIscUJBQXFCLENBQ3RCLENBQUM7QUFFRixrQkFBZSxvQkFBb0IsQ0FBQyJ9