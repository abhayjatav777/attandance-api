import jwt from "jsonwebtoken";
import moment from "moment";
import { logger } from "../../config/logger";
import { models } from "../../models";
import { TTokenModel } from "../../types/models/token-model";

export const generateAuthToken = async (
  data: Pick<TTokenModel, "userId">,
  expiresInDays: string
) => {
  try {
    const tokenValue = jwt.sign(
      {
        data: data,
      },
      process.env.jwtSecret ?? "",
      { expiresIn: `${expiresInDays} days` }
    );

    const expiresIn = moment().add(Number(expiresInDays), "days");

    const inserted = await models.token.create({
      userId: data.userId,
      token: tokenValue,
      expiryDate: expiresIn,
    });

    return {
      token: inserted.token,
      expiryDate: expiresIn.diff(moment(), "minutes"),
    };
  } catch (error) {
    logger.error(error);
  }
};
