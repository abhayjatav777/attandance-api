import jwt from "jsonwebtoken";
import { logger } from "../../config/logger";
import { models } from "../../models";

export const generateAttendanceQr = async () => {
  try {
    const QrString = jwt.sign(
      {
        data: {},
      },
      process.env.jwtSecret ?? "",
      { expiresIn: "1days" }
    );

    const inserted = await models.attendanceQr.create({
      QrString: QrString,
    });

    return inserted;
  } catch (error) {
    logger.error(error);
  }
};
