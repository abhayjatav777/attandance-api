import { Router } from "express";
import { controllers } from "../../../controllers";
import { validate } from "../../../middleware/validation/validation";
import { checkStudentAlreadyExists } from "../../../middleware/validation/studentUniqEmailAndMobileValidation";
import { validations } from "../../../validators";

export const adminQuery = (router: Router) => {
  router.get(
    "/get-profile",
    controllers.IndexController.adminAuthController.adminProfile
  );
  router.post(
    "/add-student",
    validate(validations.addStudent),
    checkStudentAlreadyExists,
    controllers.adminControllers.student.addStudent
  );

  router.post(
    "/update-student",
    validate(validations.updateStudent),
    controllers.adminControllers.student.updateStudent
  );
  router.post(
    "/active-inactive-student",
    controllers.adminControllers.student.ActiveInactiveUser
  );
  router.get(
    "/all-students",
    controllers.adminControllers.student.getAllStudent
  );
  router.get(
    "/get-today-attendance",
    controllers.adminControllers.attendance.getTodayAttendance
  );
  router.post(
    "/send-credentials",
    controllers.adminControllers.student.sendCredentials
  );
  router.get(
    "/all-students-attendance",
    controllers.adminControllers.attendance.allStudentAttendance
  );
  router.get(
    "/student-attendance",
    controllers.adminControllers.attendance.studentAttendance
  );
  router.post(
    "/update-settings",
    controllers.adminControllers.settings.updateSettings
  );
  router.get(
    "/get-settings",
    controllers.adminControllers.settings.getSettings
  );
};
