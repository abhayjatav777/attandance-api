"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markAbsentDao = void 0;
const models_1 = require("../../models");
const markAbsentDao = async (_id) => {
    return models_1.models.AttendanceSheet.updateOne({
        _id: _id,
    }, { $set: { status: "absent" } });
};
exports.markAbsentDao = markAbsentDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya0Fic2VudC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL1FyLWRhby9tYXJrQWJzZW50LmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFFL0IsTUFBTSxhQUFhLEdBQUcsS0FBSyxFQUFFLEdBQVcsRUFBRSxFQUFFO0lBQ2pELE9BQU8sZUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQ3JDO1FBQ0UsR0FBRyxFQUFFLEdBQUc7S0FDVCxFQUNELEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQy9CLENBQUM7QUFDSixDQUFDLENBQUM7QUFQVyxRQUFBLGFBQWEsaUJBT3hCIn0=