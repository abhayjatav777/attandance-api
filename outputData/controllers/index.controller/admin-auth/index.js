"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminAuthController = void 0;
const createAdminUser_1 = require("./createAdminUser");
const forgotPasswordAdmin_1 = require("./forgotPasswordAdmin");
const getAdminProfile_1 = require("./getAdminProfile");
const loginAdmin_1 = require("./loginAdmin");
const resetPassAdmin_1 = require("./resetPassAdmin");
const verifyResetLink_1 = require("./verifyResetLink");
exports.adminAuthController = {
    create: createAdminUser_1.createAdminUser,
    login: loginAdmin_1.loginAdminUser,
    forgotPassword: forgotPasswordAdmin_1.forgotPasswordAdmin,
    resetPassword: resetPassAdmin_1.resetPassAdmin,
    adminProfile: getAdminProfile_1.getAdminProfile,
    verifyResetLink: verifyResetLink_1.verifyResetLink,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvaW5kZXguY29udHJvbGxlci9hZG1pbi1hdXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVEQUFvRDtBQUNwRCwrREFBNEQ7QUFDNUQsdURBQW9EO0FBQ3BELDZDQUE4QztBQUM5QyxxREFBa0Q7QUFDbEQsdURBQW9EO0FBRXZDLFFBQUEsbUJBQW1CLEdBQUc7SUFDakMsTUFBTSxFQUFFLGlDQUFlO0lBQ3ZCLEtBQUssRUFBRSwyQkFBYztJQUNyQixjQUFjLEVBQUUseUNBQW1CO0lBQ25DLGFBQWEsRUFBRSwrQkFBYztJQUM3QixZQUFZLEVBQUUsaUNBQWU7SUFDN0IsZUFBZSxFQUFFLGlDQUFlO0NBQ2pDLENBQUMifQ==