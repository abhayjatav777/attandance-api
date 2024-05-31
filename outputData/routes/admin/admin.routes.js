"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const common_routes_1 = require("../common/common.routes");
const jsonResponse_1 = require("../../utils/jsonResponse");
const auth_middleware_1 = require("../../middleware/auth/auth.middleware");
const admin_query_1 = require("./query/admin.query");
const QRGenerator_1 = require("./query/QRGenerator");
class AdminRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "Admin Routes");
        this.app.use("/admin", auth_middleware_1.checkAccess, this.router);
    }
    configureRoutes(router) {
        router.get("/", (req, res) => {
            return (0, jsonResponse_1.JsonResponse)(res, {
                statusCode: 200,
                title: "admin api called",
                status: "success",
                message: "api called successfully",
            });
        });
        (0, admin_query_1.adminQuery)(router);
        (0, QRGenerator_1.qrCodeQuery)(router);
        return this.app;
    }
}
exports.AdminRoutes = AdminRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4ucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9hZG1pbi9hZG1pbi5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkRBQTZEO0FBRTdELDJEQUF3RDtBQUV4RCwyRUFBb0U7QUFDcEUscURBQWlEO0FBQ2pELHFEQUFrRDtBQUVsRCxNQUFhLFdBQVksU0FBUSxrQ0FBa0I7SUFDakQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSw2QkFBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQXNCO1FBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO1lBQzlDLE9BQU8sSUFBQSwyQkFBWSxFQUFDLEdBQUcsRUFBRTtnQkFDdkIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsS0FBSyxFQUFFLGtCQUFrQjtnQkFDekIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE9BQU8sRUFBRSx5QkFBeUI7YUFDbkMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFBLHdCQUFVLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkIsSUFBQSx5QkFBVyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFwQkQsa0NBb0JDIn0=