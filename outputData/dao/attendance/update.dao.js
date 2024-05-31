"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDao = void 0;
const models_1 = require("../../models");
const updateDao = (studentID, data) => {
    return models_1.models.AttendanceSheet.updateOne({ studentID }, { $set: data }, { upsert: true });
};
exports.updateDao = updateDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vYXR0ZW5kYW5jZS91cGRhdGUuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHlDQUFzQztBQUUvQixNQUFNLFNBQVMsR0FBRyxDQUN2QixTQUFpQixFQUNqQixJQUErQixFQUMvQixFQUFFO0lBQ0YsT0FBTyxlQUFNLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FDckMsRUFBRSxTQUFTLEVBQUUsRUFDYixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFDZCxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FDakIsQ0FBQztBQUNKLENBQUMsQ0FBQztBQVRXLFFBQUEsU0FBUyxhQVNwQiJ9