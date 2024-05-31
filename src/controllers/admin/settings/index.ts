import { getSettingsController } from "./getSettings";
import { UpdateSettingsController } from "./UpdateSettings";

export const settingsControllers = {
  updateSettings: UpdateSettingsController,
  getSettings: getSettingsController,
};
