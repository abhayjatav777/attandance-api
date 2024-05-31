"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markAttendanceOutDao = void 0;
const mongodb_1 = require("mongodb");
const models_1 = require("../../models");
const markAttendanceOutDao = async (data) => {
    return models_1.models.AttendanceSheet.updateOne({
        _id: new mongodb_1.ObjectId(data._id),
        studentID: data.studentID,
    }, {
        $set: {
            notes: data.notes,
            outTime: new Date(),
            studentID: data.studentID,
        },
    });
};
exports.markAttendanceOutDao = markAttendanceOutDao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya0F0dGVuZGFuY2VPdXQuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Rhby9hdHRlbmRhbmNlL21hcmtBdHRlbmRhbmNlT3V0LmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBbUM7QUFDbkMseUNBQXNDO0FBRS9CLE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxFQUFFLElBSTFDLEVBQUUsRUFBRTtJQUNILE9BQU8sZUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQ3JDO1FBQ0UsR0FBRyxFQUFFLElBQUksa0JBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztLQUMxQixFQUNEO1FBQ0UsSUFBSSxFQUFFO1lBQ0osS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRTtZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUI7S0FDRixDQUNGLENBQUM7QUFDSixDQUFDLENBQUM7QUFsQlcsUUFBQSxvQkFBb0Isd0JBa0IvQiJ9