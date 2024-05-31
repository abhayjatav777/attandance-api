import { Request, Response } from "express";
import { dao } from "../../../dao";
import { JsonResponse } from "../../../utils/jsonResponse";
import { SendMail } from "../../../services/mail.service";
import { TSettingsModel } from "../../../types/models/settings-model";

export const getSettingsController = async (req: Request, res: Response) => {
  try {
    const settings = await dao.settings.getSettings();

    if (!settings) {
      return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "data not found",
        title: "data not found",
      });
    } else {
      return JsonResponse(res, {
        status: "success",
        statusCode: 201,
        message: "Data found",
        title: "Data found",
        data: settings,
      });
    }
  } catch (error: any) {
    return JsonResponse(res, {
      status: "error",
      statusCode: 500,
      message: error.message,
      title: "Something went wrong",
    });
  }
};
