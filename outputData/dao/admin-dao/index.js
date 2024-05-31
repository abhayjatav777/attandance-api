"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDao = void 0;
const createAdmin_dao_1 = require("./createAdmin.dao");
const getAdminByMobileOrEmail_dao_1 = require("./getAdminByMobileOrEmail.dao");
const getUserByEmail_dao_1 = require("./getUserByEmail.dao");
const getUserById_dao_1 = require("./getUserById.dao");
exports.adminDao = {
    create: createAdmin_dao_1.createAdminDao,
    getProfileByEmail: getUserByEmail_dao_1.getUserByEmail,
    getProfileById: getUserById_dao_1.getUserById,
    adminByMobileOrEmail: getAdminByMobileOrEmail_dao_1.getAdminByMobileOrEmail
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL2FkbWluLWRhby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1REFBbUQ7QUFDbkQsK0VBQXdFO0FBQ3hFLDZEQUFzRDtBQUN0RCx1REFBZ0Q7QUFFbkMsUUFBQSxRQUFRLEdBQUc7SUFDdEIsTUFBTSxFQUFFLGdDQUFjO0lBQ3RCLGlCQUFpQixFQUFFLG1DQUFjO0lBQ2pDLGNBQWMsRUFBRSw2QkFBVztJQUMzQixvQkFBb0IsRUFBQyxxREFBdUI7Q0FDN0MsQ0FBQyJ9