"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStudentDao = void 0;
const models_1 = require("../../models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const addStudentDao = async (data) => {
    data.password = await bcryptjs_1.default.hash(data.password, 10);
    return models_1.models.student.create(data);
};
exports.addStudentDao = addStudentDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkU3R1ZGVudC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3N0dWRlbnQtZGFvL2FkZFN0dWRlbnQuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlDQUFzQztBQUN0Qyx3REFBOEI7QUFHdkIsTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUNoQyxJQUdDLEVBQ0QsRUFBRTtJQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxrQkFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELE9BQU8sZUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBUlcsUUFBQSxhQUFhLGlCQVF4QiJ9