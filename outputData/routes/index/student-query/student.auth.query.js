"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentAuthQuery = void 0;
const controllers_1 = require("../../../controllers");
const index_1 = require("../../../validators/index");
const resetPassValidation_1 = require("../../../middleware/validation/resetPassValidation");
const studentAuthQuery = (router) => {
    router.post("/student-login", controllers_1.controllers.IndexController.StudentAuthController.login);
    router.post("/student-otp-verification", controllers_1.controllers.IndexController.StudentAuthController.otpVerification);
    router.post("/student-forgot-password", controllers_1.controllers.IndexController.StudentAuthController.forgotPassword);
    router.post("/student-reset-password", (0, resetPassValidation_1.resetPassValidation)(index_1.validations.resetPass), controllers_1.controllers.IndexController.StudentAuthController.resetPassword);
};
exports.studentAuthQuery = studentAuthQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R1ZGVudC5hdXRoLnF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC9zdHVkZW50LXF1ZXJ5L3N0dWRlbnQuYXV0aC5xdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzREFBbUQ7QUFDbkQscURBQXdEO0FBQ3hELDRGQUF5RjtBQUVsRixNQUFNLGdCQUFnQixHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7SUFDakQsTUFBTSxDQUFDLElBQUksQ0FDVCxnQkFBZ0IsRUFDaEIseUJBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUN4RCxDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FDVCwyQkFBMkIsRUFDM0IseUJBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsZUFBZSxDQUNsRSxDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FDVCwwQkFBMEIsRUFDMUIseUJBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUNqRSxDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FDVCx5QkFBeUIsRUFDekIsSUFBQSx5Q0FBbUIsRUFBQyxtQkFBVyxDQUFDLFNBQVMsQ0FBQyxFQUMxQyx5QkFBVyxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLENBQ2hFLENBQUM7QUFDSixDQUFDLENBQUM7QUFsQlcsUUFBQSxnQkFBZ0Isb0JBa0IzQiJ9