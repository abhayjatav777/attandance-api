import { models } from "../../models";

export const checkQrDao = async (data: string) => {
  return models.attendanceQr.findOne({ QrString: data });
};
