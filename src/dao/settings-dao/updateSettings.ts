import { models } from "../../models";
import { TSettingsModel } from "../../types/models/settings-model";

export const updateSettings = async (data: TSettingsModel) => {
  return models.settingsModel.updateOne({ _id: data._id }, { $set: data });
};
