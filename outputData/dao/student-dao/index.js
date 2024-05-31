"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentDao = void 0;
const addRollNo_dao_1 = require("./addRollNo.dao");
const addStudent_dao_1 = require("./addStudent.dao");
const generateRestToken_1 = require("./generateRestToken");
const getAllStudent_dao_1 = require("./getAllStudent.dao");
const getAllStudentList_dao_1 = require("./getAllStudentList.dao");
const getStudentByEmail_dao_1 = require("./getStudentByEmail.dao");
const getStudentById_dao_1 = require("./getStudentById.dao");
const getStudentByMobileOrEmail_dao_1 = require("./getStudentByMobileOrEmail.dao");
const getStudentByRestToken_dao_1 = require("./getStudentByRestToken.dao");
const getStudentByRollNumber_dao_1 = require("./getStudentByRollNumber.dao");
const updateBlockState_dao_1 = require("./updateBlockState.dao");
const updateStudent_1 = require("./updateStudent");
exports.studentDao = {
    addStudent: addStudent_dao_1.addStudentDao,
    getProfileByEmail: getStudentByEmail_dao_1.getStudentByEmail,
    updateStudent: updateStudent_1.updateStudent,
    userByMobileAndEmail: getStudentByMobileOrEmail_dao_1.getStudentByMobileOrEmail,
    GetStudentByRollNumber: getStudentByRollNumber_dao_1.getStudentByRollNumber,
    getAllStudent: getAllStudent_dao_1.getAllStudent,
    getStudentById: getStudentById_dao_1.getStudentById,
    addRollNo: addRollNo_dao_1.addRollNo,
    getAllStudentList: getAllStudentList_dao_1.getAllStudentList,
    generateRestToken: generateRestToken_1.generateRestToken,
    getStudentByRestToken: getStudentByRestToken_dao_1.getStudentByRestToken,
    updateBlockState: updateBlockState_dao_1.updateBlockStateDao,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3N0dWRlbnQtZGFvL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1EQUE0QztBQUM1QyxxREFBaUQ7QUFDakQsMkRBQXdEO0FBQ3hELDJEQUFvRDtBQUNwRCxtRUFBNEQ7QUFDNUQsbUVBQTREO0FBQzVELDZEQUFzRDtBQUN0RCxtRkFBNEU7QUFDNUUsMkVBQW9FO0FBQ3BFLDZFQUFzRTtBQUN0RSxpRUFBNkQ7QUFDN0QsbURBQWdEO0FBRW5DLFFBQUEsVUFBVSxHQUFHO0lBQ3hCLFVBQVUsRUFBRSw4QkFBYTtJQUN6QixpQkFBaUIsRUFBRSx5Q0FBaUI7SUFDcEMsYUFBYSxFQUFFLDZCQUFhO0lBQzVCLG9CQUFvQixFQUFFLHlEQUF5QjtJQUMvQyxzQkFBc0IsRUFBRSxtREFBc0I7SUFDOUMsYUFBYSxFQUFFLGlDQUFhO0lBQzVCLGNBQWMsRUFBRSxtQ0FBYztJQUM5QixTQUFTLEVBQUUseUJBQVM7SUFDcEIsaUJBQWlCLEVBQUUseUNBQWlCO0lBQ3BDLGlCQUFpQixFQUFFLHFDQUFpQjtJQUNwQyxxQkFBcUIsRUFBRSxpREFBcUI7SUFDNUMsZ0JBQWdCLEVBQUUsMENBQW1CO0NBQ3RDLENBQUMifQ==