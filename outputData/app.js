"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const node_cron_1 = __importDefault(require("node-cron"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const debug_1 = __importDefault(require("debug"));
const Config_1 = require("./config/Config");
const index_route_1 = require("./routes/index/index.route");
const logger_1 = require("./config/logger");
const admin_routes_1 = require("./routes/admin/admin.routes");
const express_rate_limit_1 = require("express-rate-limit");
const jsonResponse_1 = require("./utils/jsonResponse");
const user_routes_1 = require("./routes/user/user.routes");
const dotenv_1 = require("dotenv");
const controllers_1 = require("./controllers");
(0, dotenv_1.config)();
const normalizePort = (val) => {
    let port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
};
const app = (0, express_1.default)();
const server = http.createServer(app);
const port = normalizePort(process.env.PORT || "4000");
const routes = [];
const debugLog = (0, debug_1.default)("app");
// Adding request limiter
// Create the rate limit rule
const apiRequestLimiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 5 * 60 * 1000,
    max: 1000,
    handler: function (req, res /*next*/) {
        return (0, jsonResponse_1.JsonResponse)(res, {
            statusCode: 429,
            title: "api limit exceed",
            status: "error",
            message: "You sent too many requests. Please wait a while then try again",
        });
    },
});
// Use the limit rule as an application middleware
// app.use(apiRequestLimiter);
// here we are adding middleware to parse all incoming requests as JSON
app.use(express_1.default.json());
// here we are adding middleware to allow cross-origin requests
app.use((0, cors_1.default)());
// Set content type GLOBALLY for any response.
app.use(function (req, res, next) {
    res.contentType("application/json");
    next();
});
app.set("rootDirectory", __dirname);
// Set File Uploader
// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
app.use(expressWinston.logger({
    winstonInstance: logger_1.requestLogger,
    statusLevels: true,
}));
expressWinston.requestWhitelist.push("body");
expressWinston.responseWhitelist.push("body");
node_cron_1.default.schedule("0 1 * * *", async () => {
    console.log("called");
    controllers_1.controllers.IndexController.cronController.markInitiateAttendance();
});
node_cron_1.default.schedule("0 23 * * *", async () => {
    console.log("called");
    controllers_1.controllers.IndexController.cronController.markAbsent();
});
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${port}`;
routes.push(new index_route_1.IndexRoutes(app));
routes.push(new admin_routes_1.AdminRoutes(app));
routes.push(new user_routes_1.UserRoutes(app));
app.use(expressWinston.errorLogger({
    winstonInstance: logger_1.logger,
}));
// Configuare Server & Start
new Config_1.Config()
    .start()
    .then(() => {
    server.listen(port, () => {
        console.log(runningMessage);
        routes.forEach((route) => {
            debugLog(`Routes configured for ${route.getName()}`);
        });
        // our only exception to avoiding console.log(), because we
        // always want to know when the server is done starting up
        // console.log(runningMessage);
    });
})
    .catch((error) => {
    console.log("Config Error ", error);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLDJDQUE2QjtBQUM3QiwwREFBNkI7QUFFN0IsZ0VBQWtEO0FBQ2xELGdEQUF3QjtBQUN4QixrREFBMEI7QUFFMUIsNENBQXlDO0FBQ3pDLDREQUF5RDtBQUN6RCw0Q0FBd0Q7QUFDeEQsOERBQTBEO0FBQzFELDJEQUErQztBQUMvQyx1REFBb0Q7QUFDcEQsMkRBQXVEO0FBQ3ZELG1DQUFnQztBQUNoQywrQ0FBNEM7QUFDNUMsSUFBQSxlQUFNLEdBQUUsQ0FBQztBQUNULE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBUSxFQUFFLEVBQUU7SUFDakMsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUU3QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNmLGFBQWE7UUFDYixPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsSUFBSSxJQUFJLElBQUksQ0FBQyxFQUFFO1FBQ2IsY0FBYztRQUNkLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVGLE1BQU0sR0FBRyxHQUF3QixJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUMzQyxNQUFNLE1BQU0sR0FBZ0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxNQUFNLElBQUksR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLENBQUM7QUFDdkQsTUFBTSxNQUFNLEdBQThCLEVBQUUsQ0FBQztBQUM3QyxNQUFNLFFBQVEsR0FBb0IsSUFBQSxlQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7QUFFL0MseUJBQXlCO0FBRXpCLDZCQUE2QjtBQUM3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