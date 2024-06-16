import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  companyDescription?: SortOrder;
  companyName?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
};
