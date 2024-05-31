import { adminAuthController } from "./admin-auth";
import { cronController } from "./cron";
import { StudentAuthController } from "./student-auth";

export const IndexController = {
  StudentAuthController: StudentAuthController,
  adminAuthController: adminAuthController,
  cronController: cronController,
};
