import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JobWhereUniqueInput } from "../job/JobWhereUniqueInput";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApplicationWhereInput = {
  applicationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  job?: JobWhereUniqueInput;
  resume?: ResumeWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
