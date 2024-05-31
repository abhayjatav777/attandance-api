"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestLogger = exports.logger = void 0;
const winston_1 = require("winston");
const loggerTransports = [
    new winston_1.transports.File({
        level: "info",
        filename: `logs.log`,
    }),
];
const loggerRequestTransports = [
    new winston_1.transports.File({
        level: "warn",
        filename: `requestWarnings.log`,
    }),
    new winston_1.transports.File({
        level: "error",
        filename: `requestErrors.log`,
    }),
];
if (process.env.ENV !== "prod") {
    loggerTransports.push(new winston_1.transports.Console());
    loggerRequestTransports.push(new winston_1.transports.File({
        level: "info",
        filename: `requestInfo.log`,
    }));
}
exports.logger = (0, winston_1.createLogger)({
    transports: loggerTransports,
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json(), winston_1.format.prettyPrint(), winston_1.format.colorize()),
});
exports.requestLogger = (0, winston_1.createLogger)({
    transports: loggerRequestTransports,
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json(), winston_1.format.prettyPrint(), winston_1.format.colorize()),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTJEO0FBRTNELE1BQU0sZ0JBQWdCLEdBQVU7SUFDOUIsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQztRQUNsQixLQUFLLEVBQUUsTUFBTTtRQUNiLFFBQVEsRUFBRSxVQUFVO0tBQ3JCLENBQUM7Q0FDSCxDQUFDO0FBRUYsTUFBTSx1QkFBdUIsR0FBRztJQUM5QixJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2xCLEtBQUssRUFBRSxNQUFNO1FBQ2IsUUFBUSxFQUFFLHFCQUFxQjtLQUNoQyxDQUFDO0lBQ0YsSUFBSSxvQkFBVSxDQUFDLElBQUksQ0FBQztRQUNsQixLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFBRSxtQkFBbUI7S0FDOUIsQ0FBQztDQUNILENBQUM7QUFFRixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLE1BQU0sRUFBRTtJQUM5QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFFaEQsdUJBQXVCLENBQUMsSUFBSSxDQUMxQixJQUFJLG9CQUFVLENBQUMsSUFBSSxDQUFDO1FBQ2xCLEtBQUssRUFBRSxNQUFNO1FBQ2IsUUFBUSxFQUFFLGlCQUFpQjtLQUM1QixDQUFDLENBQ0gsQ0FBQztDQUNIO0FBRVksUUFBQSxNQUFNLEdBQUcsSUFBQSxzQkFBWSxFQUFDO0lBQ2pDLFVBQVUsRUFBRSxnQkFBZ0I7SUFDNUIsTUFBTSxFQUFFLGdCQUFNLENBQUMsT0FBTyxDQUNwQixnQkFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixnQkFBTSxDQUFDLElBQUksRUFBRSxFQUNiLGdCQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCLGdCQUFNLENBQUMsUUFBUSxFQUFFLENBQ2xCO0NBQ0YsQ0FBQyxDQUFDO0FBRVUsUUFBQSxhQUFhLEdBQUcsSUFBQSxzQkFBWSxFQUFDO0lBQ3hDLFVBQVUsRUFBRSx1QkFBdUI7SUFDbkMsTUFBTSxFQUFFLGdCQUFNLENBQUMsT0FBTyxDQUNwQixnQkFBTSxDQUFDLFNBQVMsRUFBRSxFQUNsQixnQkFBTSxDQUFDLElBQUksRUFBRSxFQUNiLGdCQUFNLENBQUMsV0FBVyxFQUFFLEVBQ3BCLGdCQUFNLENBQUMsUUFBUSxFQUFFLENBQ2xCO0NBQ0YsQ0FBQyxDQUFDIn0=