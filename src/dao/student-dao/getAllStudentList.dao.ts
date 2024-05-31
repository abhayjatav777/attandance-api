import { FilterQuery } from "mongoose";
import { models } from "../../models";
import { TStudentModel } from "../../types/models/student-model";

export const getAllStudentList = (filter: FilterQuery<TStudentModel>) => {
  return models.student.find(filter);
};
