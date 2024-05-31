"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminQuery = void 0;
const controllers_1 = require("../../../controllers");
const validation_1 = require("../../../middleware/validation/validation");
const studentUniqEmailAndMobileValidation_1 = require("../../../middleware/validation/studentUniqEmailAndMobileValidation");
const validators_1 = require("../../../validators");
const adminQuery = (router) => {
    router.get("/get-profile", controllers_1.controllers.IndexController.adminAuthController.adminProfile);
    router.post("/add-student", (0, validation_1.validate)(validators_1.validations.addStudent), studentUniqEmailAndMobileValidation_1.checkStudentAlreadyExists, controllers_1.controllers.adminControllers.student.addStudent);
    router.post("/update-student", (0, validation_1.validate)(validators_1.validations.updateStudent), controllers_1.controllers.adminControllers.student.updateStudent);
    router.post("/active-inactive-student", controllers_1.controllers.adminControllers.student.ActiveInactiveUser);
    router.get("/all-students", controllers_1.controllers.adminControllers.student.getAllStudent);
    router.get("/get-today-attendance", controllers_1.controllers.adminControllers.attendance.getTodayAttendance);
    router.post("/send-credentials", controllers_1.controllers.adminControllers.student.sendCredentials);
    router.get("/all-students-attendance", controllers_1.controllers.adminControllers.attendance.allStudentAttendance);
    router.get("/student-attendance", controllers_1.controllers.adminControllers.attendance.studentAttendance);
    router.post("/update-settings", controllers_1.controllers.adminControllers.settings.updateSettings);
    router.get("/get-settings", controllers_1.controllers.adminControllers.settings.getSettings);
};
exports.adminQuery = adminQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4ucXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVzL2FkbWluL3F1ZXJ5L2FkbWluLnF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNEQUFtRDtBQUNuRCwwRUFBcUU7QUFDckUsNEhBQStHO0FBQy9HLG9EQUFrRDtBQUUzQyxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQzNDLE1BQU0sQ0FBQyxHQUFHLENBQ1IsY0FBYyxFQUNkLHlCQUFXLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FDN0QsQ0FBQztJQUNGLE1BQU0sQ0FBQyxJQUFJLENBQ1QsY0FBYyxFQUNkLElBQUEscUJBQVEsRUFBQyx3QkFBVyxDQUFDLFVBQVUsQ0FBQyxFQUNoQywrREFBeUIsRUFDekIseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUNoRCxDQUFDO0lBRUYsTUFBTSxDQUFDLElBQUksQ0FDVCxpQkFBaUIsRUFDakIsSUFBQSxxQkFBUSxFQUFDLHdCQUFXLENBQUMsYUFBYSxDQUFDLEVBQ25DLHlCQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FDbkQsQ0FBQztJQUNGLE1BQU0sQ0FBQyxJQUFJLENBQ1QsMEJBQTBCLEVBQzFCLHlCQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUN4RCxDQUFDO0lBQ0YsTUFBTSxDQUFDLEdBQUcsQ0FDUixlQUFlLEVBQ2YseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUNuRCxDQUFDO0lBQ0YsTUFBTSxDQUFDLEdBQUcsQ0FDUix1QkFBdUIsRUFDdkIseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQzNELENBQUM7SUFDRixNQUFNLENBQUMsSUFBSSxDQUNULG1CQUFtQixFQUNuQix5QkFBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQ3JELENBQUM7SUFDRixNQUFNLENBQUMsR0FBRyxDQUNSLDBCQUEwQixFQUMxQix5QkFBVyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FDN0QsQ0FBQztJQUNGLE1BQU0sQ0FBQyxHQUFHLENBQ1IscUJBQXFCLEVBQ3JCLHlCQUFXLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUMxRCxDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FDVCxrQkFBa0IsRUFDbEIseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUNyRCxDQUFDO0lBQ0YsTUFBTSxDQUFDLEdBQUcsQ0FDUixlQUFlLEVBQ2YseUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUNsRCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBakRXLFFBQUEsVUFBVSxjQWlEckIifQ==