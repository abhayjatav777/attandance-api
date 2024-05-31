"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAttendanceStatus = void 0;
const moment_1 = __importDefault(require("moment"));
const constants_1 = require("../constants");
const dao_1 = require("../dao");
const CheckAttendanceStatus = async () => {
    const settings = await dao_1.dao.settings.getSettings();
    const inTime = new Date();
    let status = "absent";
    if (inTime >
        (0, moment_1.default)()
            .set("hour", settings?.checkIn ?? constants_1.CONSTANTS.checkInTime)
            .toDate()) {
        status = "late";
    }
    else if (inTime <=
        (0, moment_1.default)()
            .set("hour", settings?.checkIn ?? constants_1.CONSTANTS.checkInTime)
            .toDate()) {
        status = "on time";
    }
    return status;
};
exports.CheckAttendanceStatus = CheckAttendanceStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tBdHRlbmRhbmNlU3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL0NoZWNrQXR0ZW5kYW5jZVN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsNENBQXlDO0FBQ3pDLGdDQUE2QjtBQUV0QixNQUFNLHFCQUFxQixHQUFHLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sUUFBUSxHQUFHLE1BQU0sU0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUVsRCxNQUFNLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzFCLElBQUksTUFBTSxHQUFrQyxRQUFRLENBQUM7SUFFckQsSUFDRSxNQUFNO1FBQ04sSUFBQSxnQkFBTSxHQUFFO2FBQ0wsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxJQUFJLHFCQUFTLENBQUMsV0FBVyxDQUFDO2FBQ3ZELE1BQU0sRUFBRSxFQUNYO1FBQ0EsTUFBTSxHQUFHLE1BQU0sQ0FBQztLQUNqQjtTQUFNLElBQ0wsTUFBTTtRQUNOLElBQUEsZ0JBQU0sR0FBRTthQUNMLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sSUFBSSxxQkFBUyxDQUFDLFdBQVcsQ0FBQzthQUN2RCxNQUFNLEVBQUUsRUFDWDtRQUNBLE1BQU0sR0FBRyxTQUFTLENBQUM7S0FDcEI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUF0QlcsUUFBQSxxQkFBcUIseUJBc0JoQyJ9