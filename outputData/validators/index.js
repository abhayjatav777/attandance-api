"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validations = void 0;
const addStudent_validations_1 = require("./addStudent.validations");
const admin_validations_1 = require("./admin.validations");
const resetPass_validations_1 = require("./resetPass.validations");
const updateStudent_validations_1 = require("./updateStudent.validations");
exports.validations = {
    admin: admin_validations_1.adminValidationSchema,
    resetPass: resetPass_validations_1.resetPassValidation,
    addStudent: addStudent_validations_1.addStudentValidatons,
    updateStudent: updateStudent_validations_1.udateStudentValidatons,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdmFsaWRhdG9ycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBZ0U7QUFDaEUsMkRBQTREO0FBQzVELG1FQUE4RDtBQUM5RCwyRUFBcUU7QUFFeEQsUUFBQSxXQUFXLEdBQUc7SUFDekIsS0FBSyxFQUFFLHlDQUFxQjtJQUM1QixTQUFTLEVBQUUsMkNBQW1CO0lBQzlCLFVBQVUsRUFBRSw2Q0FBb0I7SUFDaEMsYUFBYSxFQUFFLGtEQUFzQjtDQUN0QyxDQUFDIn0=