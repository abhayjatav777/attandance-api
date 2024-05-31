import { dao } from "..";
import { models } from "../../models";

export const updateBlockStateDao = async (userId: string, status: boolean) => {
  await dao.token.removeTokens(userId);

  return models.student.updateOne(
    { _id: userId },
    {
      $set: {
        blocked: !status,
      },
    }
  );
};
