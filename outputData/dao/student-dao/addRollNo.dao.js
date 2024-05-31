"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRollNo = void 0;
const models_1 = require("../../models");
const addRollNo = async (data) => {
    const studentCount = await models_1.models.student.countDocuments().exec();
    const sum = studentCount + 1;
    const rollNo = "STU" + data.substring(0, 3).toUpperCase() + sum;
    return rollNo;
};
exports.addRollNo = addRollNo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkUm9sbE5vLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vc3R1ZGVudC1kYW8vYWRkUm9sbE5vLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFFL0IsTUFBTSxTQUFTLEdBQUcsS0FBSyxFQUFFLElBQVksRUFBRSxFQUFFO0lBQzlDLE1BQU0sWUFBWSxHQUFHLE1BQU0sZUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRSxNQUFNLEdBQUcsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLE1BQU0sTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFDaEUsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBTFcsUUFBQSxTQUFTLGFBS3BCIn0=