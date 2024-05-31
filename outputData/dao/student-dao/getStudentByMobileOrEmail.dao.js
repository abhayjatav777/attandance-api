"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentByMobileOrEmail = void 0;
const models_1 = require("../../models");
const getStudentByMobileOrEmail = (email, mobile) => {
    return models_1.models.student.findOne({
        $or: [{ email: email }, { mobile: mobile }],
    });
};
exports.getStudentByMobileOrEmail = getStudentByMobileOrEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U3R1ZGVudEJ5TW9iaWxlT3JFbWFpbC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3N0dWRlbnQtZGFvL2dldFN0dWRlbnRCeU1vYmlsZU9yRW1haWwuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUUvQixNQUFNLHlCQUF5QixHQUFHLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxFQUFFO0lBQ3pFLE9BQU8sZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDNUIsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7S0FDNUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBSlcsUUFBQSx5QkFBeUIsNkJBSXBDIn0=