import { JobCreateNestedManyWithoutCompaniesInput } from "./JobCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  companyDescription?: string | null;
  companyName?: string | null;
  jobs?: JobCreateNestedManyWithoutCompaniesInput;
  website?: string | null;
};
