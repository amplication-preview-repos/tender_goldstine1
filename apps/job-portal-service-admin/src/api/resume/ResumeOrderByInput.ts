import { SortOrder } from "../../util/SortOrder";

export type ResumeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  resumeFile?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
