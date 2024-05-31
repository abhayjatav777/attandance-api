"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminByMobileOrEmail = void 0;
const models_1 = require("../../models");
const getAdminByMobileOrEmail = (email, mobile) => {
    return models_1.models.admin.findOne({
        $or: [{ email: email }, { mobile: mobile }],
    });
};
exports.getAdminByMobileOrEmail = getAdminByMobileOrEmail;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWRtaW5CeU1vYmlsZU9yRW1haWwuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9hZG1pbi1kYW8vZ2V0QWRtaW5CeU1vYmlsZU9yRW1haWwuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFzQztBQUUvQixNQUFNLHVCQUF1QixHQUFHLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxFQUFFO0lBQ3ZFLE9BQU8sZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDMUIsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7S0FDNUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBSlcsUUFBQSx1QkFBdUIsMkJBSWxDIn0=