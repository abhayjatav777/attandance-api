"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOtp = void 0;
const models_1 = require("../../models");
const getOtp = (otp) => {
    return models_1.models.otp.findOne({ otp: otp });
};
exports.getOtp = getOtp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T3RwLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vb3RwLWRhby9nZXRPdHAuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUUvQixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO0lBQ3BDLE9BQU8sZUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUM7QUFGVyxRQUFBLE1BQU0sVUFFakIifQ==