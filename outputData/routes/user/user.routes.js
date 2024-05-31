"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_1 = require("../common/common.routes");
const auth_middleware_1 = require("../../middleware/auth/auth.middleware");
const controllers_1 = require("../../controllers");
const attendance_query_1 = require("./attendance.query");
class UserRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "user Routes");
        this.app.use("/user", auth_middleware_1.checkAccess, this.router);
    }
    configureRoutes(router) {
        router.get("/", controllers_1.controllers.IndexController.StudentAuthController.getProfile);
        (0, attendance_query_1.attendanceQuery)(router);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3VzZXIvdXNlci5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkRBQTZEO0FBSTdELDJFQUFvRTtBQUNwRSxtREFBZ0Q7QUFDaEQseURBQXFEO0FBRXJELE1BQWEsVUFBVyxTQUFRLGtDQUFrQjtJQUNoRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLDZCQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxlQUFlLENBQUMsTUFBc0I7UUFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FDUixHQUFHLEVBQ0gseUJBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUM3RCxDQUFDO1FBQ0YsSUFBQSxrQ0FBZSxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFmRCxnQ0FlQyJ9