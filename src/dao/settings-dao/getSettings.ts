import { models } from "../../models";

export const getSettings = () => {
  return models.settingsModel.findOne({});
};
