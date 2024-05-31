import { Router } from "express";
import { controllers } from "../../../controllers";

export const cronQuery = (router: Router) => {
  router.post(
    "/mark-absent",
    controllers.IndexController.cronController.markAbsent
  );
  router.post(
    "/mark-initiate-attendance",
    controllers.IndexController.cronController.markInitiateAttendance
  );
};
