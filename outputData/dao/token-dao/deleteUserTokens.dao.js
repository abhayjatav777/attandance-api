"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserTokensDao = void 0;
const models_1 = require("../../models");
const deleteUserTokensDao = (userId) => {
    return models_1.models.token.deleteMany({ userId });
};
exports.deleteUserTokensDao = deleteUserTokensDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlVXNlclRva2Vucy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3Rva2VuLWRhby9kZWxldGVVc2VyVG9rZW5zLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFFL0IsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLE1BQWMsRUFBRSxFQUFFO0lBQ3BELE9BQU8sZUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQztBQUZXLFFBQUEsbUJBQW1CLHVCQUU5QiJ9