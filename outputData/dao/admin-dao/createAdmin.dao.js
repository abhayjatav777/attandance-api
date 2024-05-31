"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdminDao = void 0;
const models_1 = require("../../models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createAdminDao = async (data) => {
    data.password = await bcryptjs_1.default.hash(data.password, 10);
    return models_1.models.admin.create(data);
};
exports.createAdminDao = createAdminDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQWRtaW4uZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9hZG1pbi1kYW8vY3JlYXRlQWRtaW4uZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlDQUFzQztBQUN0Qyx3REFBOEI7QUFHdkIsTUFBTSxjQUFjLEdBQUcsS0FBSyxFQUNqQyxJQUFpRSxFQUNqRSxFQUFFO0lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLGtCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckQsT0FBTyxlQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFMVyxRQUFBLGNBQWMsa0JBS3pCIn0=