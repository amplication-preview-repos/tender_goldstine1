import { ApplicationCreateNestedManyWithoutJobsInput } from "./ApplicationCreateNestedManyWithoutJobsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type JobCreateInput = {
  applicationDeadline?: Date | null;
  applications?: ApplicationCreateNestedManyWithoutJobsInput;
  company?: CompanyWhereUniqueInput | null;
  jobDescription?: string | null;
  jobTitle?: string | null;
};
