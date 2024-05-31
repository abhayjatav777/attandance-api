"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStudentList = void 0;
const models_1 = require("../../models");
const getAllStudentList = (filter) => {
    return models_1.models.student.find(filter);
};
exports.getAllStudentList = getAllStudentList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsU3R1ZGVudExpc3QuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9zdHVkZW50LWRhby9nZXRBbGxTdHVkZW50TGlzdC5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUNBQXNDO0FBRy9CLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxNQUFrQyxFQUFFLEVBQUU7SUFDdEUsT0FBTyxlQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFGVyxRQUFBLGlCQUFpQixxQkFFNUIifQ==