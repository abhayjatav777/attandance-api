import { Request, Response } from "express";
import { dao } from "../../../dao";
import { JsonResponse } from "../../../utils/jsonResponse";

import { TSettingsModel } from "../../../types/models/settings-model";

export const UpdateSettingsController = async (req: Request, res: Response) => {
  try {
    const { checkIn, checkOut } = req.body as TSettingsModel;
    const settings = await dao.settings.getSettings();

    const update = await dao.settings.updateSettings({
      _id: settings?._id ?? "",
      checkIn,
      checkOut,
    });
    if (update.modifiedCount === 0) {
      return JsonResponse(res, {
        status: "error",
        statusCode: 400,
        message: "data not update",
        title: "data not update",
      });
    } else {
      return JsonResponse(res, {
        status: "success",
        statusCode: 201,
        message: "Settings updated successfully",
        title: "Data updated",
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
