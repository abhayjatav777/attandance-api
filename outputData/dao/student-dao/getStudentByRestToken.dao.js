"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentByRestToken = void 0;
const models_1 = require("../../models");
const getStudentByRestToken = (restToken) => {
    return models_1.models.student.findOne({ restToken: restToken });
};
exports.getStudentByRestToken = getStudentByRestToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R1ZGVudEJ5UmVzdFRva2VuLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYW8vc3R1ZGVudC1kYW8vZ2V0U3R1ZGVudEJ5UmVzdFRva2VuLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5Q0FBc0M7QUFFL0IsTUFBTSxxQkFBcUIsR0FBRyxDQUFDLFNBQWlCLEVBQUUsRUFBRTtJQUN6RCxPQUFPLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxxQkFBcUIseUJBRWhDIn0=