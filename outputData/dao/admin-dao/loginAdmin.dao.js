"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdminDao = void 0;
const models_1 = require("../../models");
const loginAdminDao = (data) => {
    return models_1.models.admin.findOne({ email: data });
};
exports.loginAdminDao = loginAdminDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5BZG1pbi5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL2FkbWluLWRhby9sb2dpbkFkbWluLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFLL0IsTUFBTSxhQUFhLEdBQUksQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUM3QyxPQUFRLGVBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7QUFFL0MsQ0FBQyxDQUFDO0FBSFcsUUFBQSxhQUFhLGlCQUd4QiJ9