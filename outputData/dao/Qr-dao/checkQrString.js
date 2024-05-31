"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkQrDao = void 0;
const models_1 = require("../../models");
const checkQrDao = async (data) => {
    return models_1.models.attendanceQr.findOne({ QrString: data });
};
exports.checkQrDao = checkQrDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tRclN0cmluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vUXItZGFvL2NoZWNrUXJTdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXNDO0FBRS9CLE1BQU0sVUFBVSxHQUFHLEtBQUssRUFBRSxJQUFZLEVBQUUsRUFBRTtJQUMvQyxPQUFPLGVBQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxVQUFVLGNBRXJCIn0=