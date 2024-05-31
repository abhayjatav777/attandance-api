"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentById = void 0;
const models_1 = require("../../models");
const getStudentById = (id) => {
    return models_1.models.student.findOne({ _id: id });
};
exports.getStudentById = getStudentById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R1ZGVudEJ5SWQuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9zdHVkZW50LWRhby9nZXRTdHVkZW50QnlJZC5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EseUNBQXNDO0FBRS9CLE1BQU0sY0FBYyxHQUFHLENBQUMsRUFBcUIsRUFBRSxFQUFFO0lBQ3RELE9BQU8sZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUM7QUFGVyxRQUFBLGNBQWMsa0JBRXpCIn0=