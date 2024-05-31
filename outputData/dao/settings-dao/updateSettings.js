"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSettings = void 0;
const models_1 = require("../../models");
const updateSettings = async (data) => {
    return models_1.models.settingsModel.updateOne({ _id: data._id }, { $set: data });
};
exports.updateSettings = updateSettings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlU2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGFvL3NldHRpbmdzLWRhby91cGRhdGVTZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBc0M7QUFHL0IsTUFBTSxjQUFjLEdBQUcsS0FBSyxFQUFFLElBQW9CLEVBQUUsRUFBRTtJQUMzRCxPQUFPLGVBQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzNFLENBQUMsQ0FBQztBQUZXLFFBQUEsY0FBYyxrQkFFekIifQ==