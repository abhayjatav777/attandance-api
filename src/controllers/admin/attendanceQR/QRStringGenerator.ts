import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { dao } from "../../../dao";
import { JsonResponse } from "../../../utils/jsonResponse";
import { logger } from "../../../config/logger";

export const QRString = async (req: Request, res: Response) => {
  try {
    const QrString = await dao.qr.generateAttendanceQr();
    if (!QrString) {
      return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "QR String not generated",
        title: "QR String not generated",
      });
    } else {
      return JsonResponse(res, {
        status: "success",
        statusCode: 200,
        message: "QR String generated successfully",
        title: "QR String generated successful",
        data: {
          QRString: QrString.QrString,
        },
      });
    }
  } catch (error: any) {
    logger.error(error);
    return JsonResponse(res, {
      status: "error",
      statusCode: 500,
      message: error.message,
      title: "Something went wrong",
    });
  }
};
