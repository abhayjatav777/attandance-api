"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cronQuery = void 0;
const controllers_1 = require("../../../controllers");
const cronQuery = (router) => {
    router.post("/mark-absent", controllers_1.controllers.IndexController.cronController.markAbsent);
    router.post("/mark-initiate-attendance", controllers_1.controllers.IndexController.cronController.markInitiateAttendance);
};
exports.cronQuery = cronQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi5xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXgvY3Jvbi9jcm9uLnF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNEQUFtRDtBQUU1QyxNQUFNLFNBQVMsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQ1QsY0FBYyxFQUNkLHlCQUFXLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQ3RELENBQUM7SUFDRixNQUFNLENBQUMsSUFBSSxDQUNULDJCQUEyQixFQUMzQix5QkFBVyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQ2xFLENBQUM7QUFDSixDQUFDLENBQUM7QUFUVyxRQUFBLFNBQVMsYUFTcEIifQ==