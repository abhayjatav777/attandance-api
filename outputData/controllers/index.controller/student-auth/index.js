"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAuthController = void 0;
const getStudentProfile_1 = require("./getStudentProfile");
const loginStudent_1 = require("./loginStudent");
const studentForgotPassword_1 = require("./studentForgotPassword");
const studentOtpVerification_1 = require("./studentOtpVerification");
const studentResetPassword_1 = require("./studentResetPassword");
exports.StudentAuthController = {
    login: loginStudent_1.studentLogin,
    otpVerification: studentOtpVerification_1.studentOtpVerification,
    forgotPassword: studentForgotPassword_1.forgotPasswordStudent,
    resetPassword: studentResetPassword_1.studentResetPassword,
    getProfile: getStudentProfile_1.getStudentProfile,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udHJvbGxlcnMvaW5kZXguY29udHJvbGxlci9zdHVkZW50LWF1dGgvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkRBQXdEO0FBQ3hELGlEQUE4QztBQUM5QyxtRUFBZ0U7QUFDaEUscUVBQWtFO0FBQ2xFLGlFQUE4RDtBQUVqRCxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLEtBQUssRUFBRSwyQkFBWTtJQUNuQixlQUFlLEVBQUUsK0NBQXNCO0lBQ3ZDLGNBQWMsRUFBRSw2Q0FBcUI7SUFDckMsYUFBYSxFQUFFLDJDQUFvQjtJQUNuQyxVQUFVLEVBQUUscUNBQWlCO0NBQzlCLENBQUMifQ==