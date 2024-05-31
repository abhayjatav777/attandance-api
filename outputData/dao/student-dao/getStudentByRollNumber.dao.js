"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentByRollNumber = void 0;
const models_1 = require("../../models");
const getStudentByRollNumber = (rollNumber) => {
    return models_1.models.student.findOne({ rollNumber: rollNumber });
};
exports.getStudentByRollNumber = getStudentByRollNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R1ZGVudEJ5Um9sbE51bWJlci5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3N0dWRlbnQtZGFvL2dldFN0dWRlbnRCeVJvbGxOdW1iZXIuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUUvQixNQUFNLHNCQUFzQixHQUFHLENBQUMsVUFBa0IsRUFBRSxFQUFFO0lBQzNELE9BQU8sZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUM1RCxDQUFDLENBQUM7QUFGVyxRQUFBLHNCQUFzQiwwQkFFakMifQ==