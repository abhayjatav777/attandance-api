"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentByEmail = void 0;
const models_1 = require("../../models");
const getStudentByEmail = (email) => {
    const regx = new RegExp("^" + email + "$", "i");
    return models_1.models.student.findOne({ email: regx });
};
exports.getStudentByEmail = getStudentByEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R1ZGVudEJ5RW1haWwuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9zdHVkZW50LWRhby9nZXRTdHVkZW50QnlFbWFpbC5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXNDO0FBRS9CLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUNqRCxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUVoRCxPQUFPLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakQsQ0FBQyxDQUFDO0FBSlcsUUFBQSxpQkFBaUIscUJBSTVCIn0=