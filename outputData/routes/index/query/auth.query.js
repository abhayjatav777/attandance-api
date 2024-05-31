"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAuthQuery = void 0;
const controllers_1 = require("../../../controllers");
const index_1 = require("../../../validators/index");
const validation_1 = require("../../../middleware/validation/validation");
const resetPassValidation_1 = require("../../../middleware/validation/resetPassValidation");
const adminUniqEmailAndMobileValidation_1 = require("../../../middleware/validation/adminUniqEmailAndMobileValidation");
const verifyTokenUrl_1 = require("../../../middleware/auth/verifyTokenUrl");
const addAuthQuery = (router) => {
    router.post("/create-admin", adminUniqEmailAndMobileValidation_1.checkAdminAlreadyExists, (0, validation_1.validate)(index_1.validations.admin), controllers_1.controllers.IndexController.adminAuthController.create);
    router.post("/login-admin", controllers_1.controllers.IndexController.adminAuthController.login);
    router.post("/forgot-password-admin", controllers_1.controllers.IndexController.adminAuthController.forgotPassword);
    router.post("/reset-password-admin", verifyTokenUrl_1.verifyTokenUrl, (0, resetPassValidation_1.resetPassValidation)(index_1.validations.resetPass), controllers_1.controllers.IndexController.adminAuthController.resetPassword);
    router.get("/verify-reset-link", controllers_1.controllers.IndexController.adminAuthController.verifyResetLink);
};
exports.addAuthQuery = addAuthQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXgvcXVlcnkvYXV0aC5xdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzREFBbUQ7QUFDbkQscURBQXdEO0FBQ3hELDBFQUFxRTtBQUNyRSw0RkFBeUY7QUFDekYsd0hBQTJHO0FBQzNHLDRFQUF5RTtBQUVsRSxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQ1QsZUFBZSxFQUNmLDJEQUF1QixFQUN2QixJQUFBLHFCQUFRLEVBQUMsbUJBQVcsQ0FBQyxLQUFLLENBQUMsRUFDM0IseUJBQVcsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUN2RCxDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FDVCxjQUFjLEVBQ2QseUJBQVcsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUN0RCxDQUFDO0lBRUYsTUFBTSxDQUFDLElBQUksQ0FDVCx3QkFBd0IsRUFDeEIseUJBQVcsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUMvRCxDQUFDO0lBQ0YsTUFBTSxDQUFDLElBQUksQ0FDVCx1QkFBdUIsRUFDdkIsK0JBQWMsRUFDZCxJQUFBLHlDQUFtQixFQUFDLG1CQUFXLENBQUMsU0FBUyxDQUFDLEVBQzFDLHlCQUFXLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FDOUQsQ0FBQztJQUNGLE1BQU0sQ0FBQyxHQUFHLENBQ1Isb0JBQW9CLEVBQ3BCLHlCQUFXLENBQUMsZUFBZSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FDaEUsQ0FBQztBQUNKLENBQUMsQ0FBQztBQTFCVyxRQUFBLFlBQVksZ0JBMEJ2QiJ9