import { models } from "../../models";

export const deleteUserTokensDao = (userId: string) => {
  return models.token.deleteMany({ userId });
};
