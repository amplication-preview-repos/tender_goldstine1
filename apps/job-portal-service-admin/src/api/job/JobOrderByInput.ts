import { SortOrder } from "../../util/SortOrder";

export type JobOrderByInput = {
  applicationDeadline?: SortOrder;
  companyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobDescription?: SortOrder;
  jobTitle?: SortOrder;
  updatedAt?: SortOrder;
};
