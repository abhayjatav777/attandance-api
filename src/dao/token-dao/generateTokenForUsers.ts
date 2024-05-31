import jwt from "jsonwebtoken";
import moment from "moment";

import { logger } from "../../config/logger";
import TokenModel from "../../models/TokenModel";

export const generateTokenForUsers = async (
  data: any,
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

    const Token = new TokenModel({
      userId: data._id,
      role: data.role,
      token: tokenValue,
      expiryDate: expiresIn.diff(moment(), "minutes"),
    });
    const inserted = await Token.save();
    return {
      token: inserted.token,
      expiryDate: expiresIn.diff(moment(), "minutes"),
    };
  } catch (error) {
    logger.error(error);
  }
};
