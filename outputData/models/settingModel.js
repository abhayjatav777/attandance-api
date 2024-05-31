"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SettingSchema = new mongoose_1.Schema({
    checkIn: {
        type: Number,
        required: true,
    },
    checkOut: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
const settingsModel = (0, mongoose_1.model)("settings", SettingSchema);
exports.default = settingsModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ01vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9zZXR0aW5nTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBZ0Q7QUFHaEQsTUFBTSxhQUFhLEdBQUcsSUFBSSxpQkFBTSxDQUM5QjtJQUNFLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDZjtDQUNGLEVBQ0Q7SUFDRSxVQUFVLEVBQUUsSUFBSTtDQUNqQixDQUNGLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBMEIsSUFBQSxnQkFBSyxFQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUU5RSxrQkFBZSxhQUFhLENBQUMifQ==