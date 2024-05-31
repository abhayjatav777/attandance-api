"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const attendanceQrSchema = new mongoose_1.Schema({
    QrString: String,
}, {
    timestamps: true,
});
const attendanceQrModel = (0, mongoose_1.model)("attendance-qr", attendanceQrSchema);
exports.default = attendanceQrModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0ZW5kYW5jZVFyTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2F0dGVuZGFuY2VRck1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQWdEO0FBRWhELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxpQkFBTSxDQUNuQztJQUNFLFFBQVEsRUFBRSxNQUFNO0NBQ2pCLEVBQ0Q7SUFDRSxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUNGLENBQUM7QUFFRixNQUFNLGlCQUFpQixHQUEwQixJQUFBLGdCQUFLLEVBQ3BELGVBQWUsRUFDZixrQkFBa0IsQ0FDbkIsQ0FBQztBQUVGLGtCQUFlLGlCQUFpQixDQUFDIn0=