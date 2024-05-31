"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOtp = void 0;
const models_1 = require("../../models");
const updateOtp = async (data) => {
    return models_1.models.otp.updateOne({ _id: data._id }, { $set: data });
};
exports.updateOtp = updateOtp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlT3RwLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vb3RwLWRhby91cGRhdGVPdHAuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUcvQixNQUFNLFNBQVMsR0FBRyxLQUFLLEVBQUUsSUFBd0IsRUFBRSxFQUFFO0lBQzFELE9BQU8sZUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDO0FBRlcsUUFBQSxTQUFTLGFBRXBCIn0=