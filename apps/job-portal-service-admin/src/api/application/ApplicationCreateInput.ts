import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationCreateInput = {
  applicationDate?: Date | null;
  job?: JobWhereUniqueInput | null;
  resume?: ResumeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};