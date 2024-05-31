"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexRoutes = void 0;
const common_routes_1 = require("../common/common.routes");
const index_controller_1 = __importDefault(require("../../controllers/index.controller/index.controller"));
const auth_query_1 = require("./query/auth.query");
const student_auth_query_1 = require("./student-query/student.auth.query");
const cron_query_1 = require("./cron/cron.query");
class IndexRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "Index Routes");
        this.app.use("/", this.router);
    }
    configureRoutes(router) {
        router.get("/", index_controller_1.default.index);
        (0, auth_query_1.addAuthQuery)(router);
        (0, student_auth_query_1.studentAuthQuery)(router);
        (0, cron_query_1.cronQuery)(router);
        return this.app;
    }
}
exports.IndexRoutes = IndexRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4L2luZGV4LnJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJEQUE2RDtBQUU3RCwyR0FBa0Y7QUFDbEYsbURBQWtEO0FBQ2xELDJFQUFzRTtBQUN0RSxrREFBOEM7QUFFOUMsTUFBYSxXQUFZLFNBQVEsa0NBQWtCO0lBQ2pELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBc0I7UUFDcEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsMEJBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFBLHlCQUFZLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDckIsSUFBQSxxQ0FBZ0IsRUFBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixJQUFBLHNCQUFTLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFFbEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQWRELGtDQWNDIn0=