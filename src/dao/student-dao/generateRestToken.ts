import jwt from "jsonwebtoken";
import { logger } from "../../config/logger";
import { models } from "../../models";
import { ObjectId } from "mongodb";

export const generateRestToken = async (_id: ObjectId) => {
  try {
    const restToken = jwt.sign(
      {
        data: {},
      },
      process.env.jwtSecret ?? "",
      { expiresIn: "1days" }
    );

    const inserted = await models.student.updateOne(
      { _id: _id },
      { $set: { restToken: restToken } }
    );

    return inserted;
  } catch (error) {
    logger.error(error);
  }
};
