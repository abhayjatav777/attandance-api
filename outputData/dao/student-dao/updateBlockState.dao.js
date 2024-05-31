"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlockStateDao = void 0;
const __1 = require("..");
const models_1 = require("../../models");
const updateBlockStateDao = async (userId, status) => {
    await __1.dao.token.removeTokens(userId);
    return models_1.models.student.updateOne({ _id: userId }, {
        $set: {
            blocked: !status,
        },
    });
};
exports.updateBlockStateDao = updateBlockStateDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlQmxvY2tTdGF0ZS5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3N0dWRlbnQtZGFvL3VwZGF0ZUJsb2NrU3RhdGUuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBCQUF5QjtBQUN6Qix5Q0FBc0M7QUFFL0IsTUFBTSxtQkFBbUIsR0FBRyxLQUFLLEVBQUUsTUFBYyxFQUFFLE1BQWUsRUFBRSxFQUFFO0lBQzNFLE1BQU0sT0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFckMsT0FBTyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FDN0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQ2Y7UUFDRSxJQUFJLEVBQUU7WUFDSixPQUFPLEVBQUUsQ0FBQyxNQUFNO1NBQ2pCO0tBQ0YsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBWFcsUUFBQSxtQkFBbUIsdUJBVzlCIn0=