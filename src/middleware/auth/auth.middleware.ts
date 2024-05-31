import { NextFunction, Request, Response } from "express";

import { JsonResponse } from "../../utils/jsonResponse";
import jwt from "jsonwebtoken";
import { tokenDao } from "../../dao/token-dao";
export const checkAccess = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: any = req.headers[`${process.env.headerKey}`];
  const { verifyTokenDao } = tokenDao;

  if (!token) {
    return JsonResponse(res, {
      statusCode: 401,
      status: "error",
      title: "Authentication Failed",
      message: "No Auth Header Available",
    });
  }

  try {
    const verified: any = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.jwtSecret ?? ""
    );

    if (!verified) {
      return JsonResponse(res, {
        statusCode: 401,
        status: "error",
        title: "Authentication Error",
        message: "Token is not valid",
      });
    }

    let tokenVerified = await verifyTokenDao(token.replace("Bearer ", ""));

    if (!tokenVerified) {
      return JsonResponse(res, {
        statusCode: 401,
        status: "error",
        title: "Authentication Error",
        message: "Token is not valid",
      });
    } else {
      res.locals.userId = tokenVerified.userId;
      next();
    }
  } catch (err: any) {
    return JsonResponse(res, {
      statusCode: 401,
      status: "error",
      title: "Authentication Error",
      message: err.message,
    });
  }
};
