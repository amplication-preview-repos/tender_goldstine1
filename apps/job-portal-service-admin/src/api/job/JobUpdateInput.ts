import { ApplicationUpdateManyWithoutJobsInput } from "./ApplicationUpdateManyWithoutJobsInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type JobUpdateInput = {
  applicationDeadline?: Date | null;
  applications?: ApplicationUpdateManyWithoutJobsInput;
  company?: CompanyWhereUniqueInput | null;
  jobDescription?: string | null;
  jobTitle?: string | null;
};
