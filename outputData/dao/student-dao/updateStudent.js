"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudent = void 0;
const models_1 = require("../../models");
const updateStudent = async (data) => {
    return models_1.models.student.updateOne({ _id: data._id }, { $set: data });
};
exports.updateStudent = updateStudent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlU3R1ZGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vc3R1ZGVudC1kYW8vdXBkYXRlU3R1ZGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5Q0FBc0M7QUFHL0IsTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUFFLElBQTRCLEVBQUUsRUFBRTtJQUNsRSxPQUFPLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQztBQUZXLFFBQUEsYUFBYSxpQkFFeEIifQ==