"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
const ActiveInactiveUser_1 = require("./ActiveInactiveUser");
const addStudent_1 = require("./addStudent");
const getAllStudent_1 = require("./getAllStudent");
const sendCredentials_1 = require("./sendCredentials");
const updateStudent_1 = require("./updateStudent");
exports.studentController = {
    addStudent: addStudent_1.addStudent,
    updateStudent: updateStudent_1.updateStudent,
    ActiveInactiveUser: ActiveInactiveUser_1.ActiveInactiveUser,
    getAllStudent: getAllStudent_1.getAllStudent,
    sendCredentials: sendCredentials_1.sendCredentials,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvYWRtaW4vc3R1ZGVudHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkRBQTBEO0FBQzFELDZDQUEwQztBQUMxQyxtREFBZ0Q7QUFDaEQsdURBQW9EO0FBQ3BELG1EQUFnRDtBQUVuQyxRQUFBLGlCQUFpQixHQUFHO0lBQy9CLFVBQVUsRUFBRSx1QkFBVTtJQUN0QixhQUFhLEVBQUUsNkJBQWE7SUFDNUIsa0JBQWtCLEVBQUUsdUNBQWtCO0lBQ3RDLGFBQWEsRUFBRSw2QkFBYTtJQUM1QixlQUFlLEVBQUUsaUNBQWU7Q0FDakMsQ0FBQyJ9