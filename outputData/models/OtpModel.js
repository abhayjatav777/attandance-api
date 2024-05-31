"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const OtpSchema = new mongoose_1.Schema({
    otp: String,
    expiryDate: Date,
    userId: mongodb_1.ObjectId,
    otpUsed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const OtpModel = (0, mongoose_1.model)("otp", OtpSchema);
exports.default = OtpModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3RwTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL090cE1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQW1DO0FBQ25DLHVDQUFnRDtBQUdoRCxNQUFNLFNBQVMsR0FBRyxJQUFJLGlCQUFNLENBQzFCO0lBQ0UsR0FBRyxFQUFFLE1BQU07SUFDWCxVQUFVLEVBQUUsSUFBSTtJQUNoQixNQUFNLEVBQUUsa0JBQVE7SUFDaEIsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE9BQU87UUFDYixPQUFPLEVBQUUsS0FBSztLQUNmO0NBQ0YsRUFDRDtJQUNFLFVBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQ0YsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFxQixJQUFBLGdCQUFLLEVBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRTNELGtCQUFlLFFBQVEsQ0FBQyJ9