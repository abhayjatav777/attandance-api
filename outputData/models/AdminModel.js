"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AdminUserSchema = new mongoose_1.Schema({
    name: String,
    email: {
        type: String,
        required: true,
    },
    mobile: Number,
    password: {
        type: String,
        required: true,
    },
    blocked: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
const AdminUserModel = (0, mongoose_1.model)("admin-users", AdminUserSchema);
exports.default = AdminUserModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRtaW5Nb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvQWRtaW5Nb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFnRDtBQUdoRCxNQUFNLGVBQWUsR0FBRyxJQUFJLGlCQUFNLENBQ2hDO0lBQ0UsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2Y7SUFDRCxNQUFNLEVBQUUsTUFBTTtJQUNkLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxPQUFPO1FBQ2IsT0FBTyxFQUFFLEtBQUs7S0FDZjtDQUNGLEVBQ0Q7SUFDRSxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUNGLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBdUIsSUFBQSxnQkFBSyxFQUM5QyxhQUFhLEVBQ2IsZUFBZSxDQUNoQixDQUFDO0FBRUYsa0JBQWUsY0FBYyxDQUFDIn0=