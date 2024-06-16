import { JobUpdateManyWithoutCompaniesInput } from "./JobUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  companyDescription?: string | null;
  companyName?: string | null;
  jobs?: JobUpdateManyWithoutCompaniesInput;
  website?: string | null;
};
