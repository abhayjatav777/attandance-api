"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const models_1 = require("../../models");
const getToken = (token) => {
    return models_1.models.token.findOne({ token: token });
};
exports.getToken = getToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3Rva2VuLWRhby9nZXRUb2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFFL0IsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUN4QyxPQUFPLGVBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBRlcsUUFBQSxRQUFRLFlBRW5CIn0=